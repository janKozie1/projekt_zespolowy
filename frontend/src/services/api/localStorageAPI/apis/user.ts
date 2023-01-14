import { isNil } from 'lodash';
import { v4 } from 'uuid';

import { deepMerge } from '../../../../utils/object';
import type { SyncApi } from '../../types';
import type { User } from '../../types/data';

import { admin } from '../data';
import { getter, setter } from '../utils';
import { validators } from '../validators';

export const updateUser = (fields: Partial<User>, forUser = getter('loggedInUser')): void => {
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

const userApi: SyncApi['user'] = {
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
    edit: (payload) => {
      const validation = validators.user.giftReceivers.edit(payload);
      const loggedInUser = getter('loggedInUser');

      if (validation.ok && !isNil(loggedInUser)) {
        updateUser({
          giftReceivers: loggedInUser.giftReceivers.map((receiver) => (receiver.id === payload.id ? {
            ...receiver,
            ...payload,
          } : receiver)),
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
        setter('events', (events = []) => events.map((event) => ({
          ...event,
          giftReceiver: event.giftReceiver === payload.receiverId ? null : event.giftReceiver,
        })));
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
};
export default userApi;
