import isNil from 'lodash/isNil';
import { v4 } from 'uuid';

import type { SyncApi } from '../types';
import type { Payment, User } from '../types/data';

import cartApi from './apis/cart';
import eventApi from './apis/event';
import userApi, { updateUser } from './apis/user';
import { makeBuiltInEvents } from './data';
import { getter, setter } from './utils';
import { validators } from './validators';

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
  cart: cartApi,
  user: userApi,
  payment: {
    availableMethods: () => getter('paymentMethods'),
    pay: (payload) => {
      const validation = validators.payment.pay(payload);
      const loggedInUser = getter('loggedInUser');

      if (validation.ok && !isNil(loggedInUser)) {
        const payment: Payment = {
          amount: payload.amount,
          id: v4(),
          userId: loggedInUser.id,
        };

        setter('carts', (carts = []) => carts.map((cart) => (cart.id === payload.cartId ? {
          ...cart,
          payments: [...cart.payments, payment],
        } : cart)));
      }

      return validation;
    },
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
});

export default {};
