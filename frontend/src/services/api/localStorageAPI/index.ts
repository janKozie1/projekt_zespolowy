
import { uniqBy } from 'lodash';
import isNil from 'lodash/isNil';
import { v4 } from 'uuid';

import { isEmpty } from '../../../utils/guards';
import { deepMerge } from '../../../utils/object';

import type { SyncApi } from '../types';
import type { User } from '../types/data';

import eventApi from './apis/event';
import { admin, makeBuiltInEvents } from './data';
import { getter, setter } from './utils';
import { validators } from './validators';

const updateUser = (fields: Partial<User>, forUser = getter('loggedInUser')) => {
  setter('users', (users = []) => users.map((user) => (user.id === forUser?.id ? deepMerge(user, fields) : user)));
  setter('loggedInUser', (user = null) => {
    if (isNil(user)) {
      return null;
    }

    if (user.id === forUser?.id) {
      return deepMerge(user, fields);
    }

    return user;
  });
};

export const makeLocalStorageAPI = (): SyncApi => ({
  auth: {
    logout: () => {
      setter('loggedInUser', null);
      return true;
    },
    deleteAccount: () => {
      const loggedInUser = getter('loggedInUser');

      setter('loggedInUser', null);
      setter('users', (users = []) => users.filter((user) => user.id !== loggedInUser?.id));
      return true;
    },
    changePassword: (changePasswordPayload) => {
      const validation = validators.auth.changePassword(changePasswordPayload);

      if (validation.ok) {
        updateUser({ password: changePasswordPayload.password });
      }

      return validation;
    },
    loggedInUser: () => getter('loggedInUser'),
    login: (loginPayload) => {
      const validation = validators.auth.login(loginPayload);

      if (validation.ok) {
        const matchingUser = getter('users')
          .find((user) => user.email === loginPayload.email);

        setter('loggedInUser', matchingUser);
      }

      return validation;
    },
    register: (registerPayload) => {
      const validation = validators.auth.register(registerPayload);

      if (validation.ok) {
        const newUser: User = {
          id: v4(),
          email: registerPayload.email,
          password: registerPayload.password,
          friends: [],
          giftReceivers: [],
          temporarilySelectedGifts: [],
          details: null,
        };

        setter('users', (users = []) => users.concat([newUser]));
        setter('loggedInUser', newUser);
        setter('events', (events = []) => events.concat(makeBuiltInEvents(newUser.id, new Date())));
      }

      return validation;
    },
  },
  event: eventApi,
  user: {
    notifications: () => {
      const loggedInUser = getter('loggedInUser');

      return getter('notifications').filter((notification) => {
        switch (notification.kind) {
          case 'friendRequest': {
            return notification.from === loggedInUser?.id || notification.to === loggedInUser?.id;
          }
          case 'sale': {
            return notification.to === loggedInUser?.id;
          }

          default: {
            return false;
          }
        }
      });
    },
    friends: {
      remove: (payload) => {
        const validation = validators.user.friends.remove(payload);

        const friend = getter('users').find((user) => user.id === payload.friendId);
        const loggedInUser = getter('loggedInUser');

        if (validation.ok && !isNil(friend) && !isNil(loggedInUser)) {
          updateUser({ friends: loggedInUser.friends.filter((f) => f !== friend.id) }, loggedInUser);
          updateUser({ friends: friend.friends.filter((f) => f !== loggedInUser.id) }, friend);
        }

        return validation;
      },
      add: (payload) => {
        const validation = validators.user.friends.add(payload);

        const targetUser = getter('users').find((user) => user.email === payload.friendEmail);
        const loggedInUser = getter('loggedInUser');

        if (validation.ok && !isNil(loggedInUser) && !isNil(targetUser)) {
          setter('notifications', (notifications = []) => notifications.concat([
            {
              id: v4(),
              kind: 'friendRequest',
              from: loggedInUser.id,
              to: targetUser.id,
            },
          ]));
        }

        return validation;
      },
      cancelRequest: (payload) => {
        const validation = validators.user.friends.cancelRequest(payload);

        if (validation.ok) {
          setter('notifications', (notifications = []) => notifications.filter((notification) => notification.id !== payload.requestId));
        }

        return validation;
      },
    },
    giftReceivers: {
      add: (payload) => {
        const validation = validators.user.giftReceivers.add(payload);
        const loggedInUser = getter('loggedInUser');

        if (validation.ok && !isNil(loggedInUser)) {
          updateUser({
            giftReceivers: [{
              id: v4(),
              ...payload,
            }, ...loggedInUser.giftReceivers],
          });
        }

        return validation;
      },
      remove: (payload) => {
        const validation = validators.user.giftReceivers.remove(payload);
        const loggedInUser = getter('loggedInUser');

        if (validation.ok && !isNil(loggedInUser)) {
          updateUser({
            giftReceivers: loggedInUser.giftReceivers.filter((receiver) => receiver.id !== payload.receiverId),
          });
        }

        return validation;
      },
    },
    allUsers: () => getter('users').filter((user) => user.email !== admin.email),
    updateBillingAddress: (updatePayload) => {
      const validation = validators.user.updateBillingAddress(updatePayload);

      if (validation.ok) {
        updateUser({
          details: {
            billingAddress: updatePayload,
          },
        });
      }

      return validation;
    },
    updatePaymentInfo: (updatePayload) => {
      const validation = validators.user.updatePaymentInfo(updatePayload);

      if (validation.ok) {
        updateUser({
          details: {
            payments: updatePayload,
          },
        });
      }

      return validation;
    },
  },
  payment: {
    availableMethods: () => getter('paymentMethods'),
  },
  notifications: {
    confirmNotification: (payload) => {
      const validation = validators.notifications.confirmNotification(payload);

      if (validation.ok) {
        const selectedNotification = getter('notifications')
          .find((notification) => notification.id === payload.id);

        if (payload.confirmation && !isNil(selectedNotification) && selectedNotification.kind === 'friendRequest') {
          const from = getter('users').find((user) => user.id === selectedNotification.from);
          const to = getter('users').find((user) => user.id === selectedNotification.to);

          if (!isNil(from) && !isNil(to)) {
            updateUser({ friends: [...to.friends, from.id] }, to);
            updateUser({ friends: [...from.friends, to.id] }, from);
          }
        }

        setter('notifications', (notifications = []) => notifications
          .filter((notification) => notification.id !== selectedNotification?.id));
      }

      return validation;
    },
  },
  gifts: {
    allCategories: () => getter('giftCategories'),
    allGifts: () => getter('gifts'),
    gift: ({ id }) => getter('gifts').find((gift) => gift.id === id),
  },
  cart: {
    updateAmount: (payload) => {
      const validation = validators.cart.updateAmount(payload);

      if (validation.ok) {
        setter('carts', (carts = []) => carts.map((cart) => (cart.id === payload.cartId ? {
          ...cart,
          gifts: cart.gifts.map((gift) => (gift.id === payload.giftId ? {
            ...gift,
            amount: payload.amount,
          } : gift)),
        } : cart)));
      }

      return validation;
    },
    allCarts: () => {
      const loggedInUser = getter('loggedInUser');
      const events = getter('events');

      if (isNil(loggedInUser)) {
        return [];
      }

      return getter('carts')
        .filter((cart) => {
          const matchingEvent = events
            .find((event) => event.id === cart.event);

          return !isNil(matchingEvent) && (matchingEvent.owner === loggedInUser.id
            || matchingEvent.members.includes(loggedInUser.id));
        });
    },
    assignTemporaryCartToEvent: (payload) => {
      const validation = validators.cart.assignTemporaryCartToEvent(payload);
      const loggedInUser = getter('loggedInUser');

      if (validation.ok && !isNil(loggedInUser)) {
        setter('carts', (carts = []) => {
          const existingCart = carts.find((cart) => cart.event === payload.event);

          if (!isNil(existingCart)) {
            return carts.map((cart) => (cart === existingCart ? {
              ...cart,
              gifts: uniqBy([...loggedInUser.temporarilySelectedGifts, ...cart.gifts], (gift) => gift.id),
            } : cart));
          }

          return carts.concat([{
            id: v4(),
            completed: false,
            gifts: [...loggedInUser.temporarilySelectedGifts],
            event: payload.event,
          }]);
        });

        updateUser({
          temporarilySelectedGifts: [],
        });
      }

      return validation;
    },
    removeGift: (payload) => {
      const validation = validators.cart.removeGift(payload);
      const selectedCart = getter('carts').find((cart) => cart.id === payload.cartId);

      if (validation.ok && !isNil(selectedCart)) {
        setter('carts', (carts = []) => carts.map((cart) => (cart.id === payload.cartId ? {
          ...cart,
          gifts: cart.gifts.filter((gift) => gift.id !== payload.giftId),
        } : cart))
          .filter((cart) => !isEmpty(cart.gifts)));
      }

      return validation;
    },
    temporaryCart: {
      addGift: (payload) => {
        const validation = validators.cart.temporaryCart.addGift(payload);
        const loggedInUser = getter('loggedInUser');

        if (validation.ok && !isNil(loggedInUser)) {
          updateUser({
            temporarilySelectedGifts: uniqBy(loggedInUser.temporarilySelectedGifts.concat([{
              id: payload.id,
              amount: 1,
            }]), (gift) => gift.id),
          });
        }

        return validation;
      },
      updateAmont: (payload) => {
        const validation = validators.cart.temporaryCart.updateAmont(payload);
        const loggedInUser = getter('loggedInUser');

        if (validation.ok && !isNil(loggedInUser)) {
          updateUser({
            temporarilySelectedGifts: loggedInUser
              .temporarilySelectedGifts.map((gift) => (gift.id === payload.giftId ? {
                ...gift,
                amount: payload.amount,
              } : gift)),
          });
        }

        return validation;
      },
      removeGift: (payload) => {
        const validation = validators.cart.temporaryCart.removeGift(payload);
        const loggedInUser = getter('loggedInUser');

        if (validation.ok && !isNil(loggedInUser)) {
          updateUser({
            temporarilySelectedGifts: loggedInUser.temporarilySelectedGifts.filter((gift) => gift.id !== payload.id),
          });
        }

        return validation;
      },
      empty: () => {
        updateUser({ temporarilySelectedGifts: [] });
        return true;
      },
    },
  },
});

export default {};
