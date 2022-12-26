import merge from 'lodash/fp/merge';
import isNil from 'lodash/isNil';
import { v4 } from 'uuid';

import type { SyncApi } from '../types';
import type { Event, User } from '../types/data';

import { admin, makeBuiltInEvents } from './data';
import { getter, setter } from './utils';
import { validators } from './validators';

const updateUser = (fields: Partial<User>) => {
  const loggedInUser = getter('loggedInUser');

  setter('users', (users = []) => users.map((user) => (user.id === loggedInUser?.id ? merge(user, fields) : user)));
  setter('loggedInUser', (user = null) => (isNil(user) ? null : merge(user, fields)));
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
        const newUser = {
          id: v4(),
          email: registerPayload.email,
          password: registerPayload.password,
          details: null,
        };

        setter('users', (users = []) => users.concat([newUser]));
        setter('loggedInUser', newUser);
        setter('events', (events = []) => events.concat(makeBuiltInEvents(newUser.id, new Date())));
      }

      return validation;
    },
  },
  event: {
    create: (createPayload) => {
      const validation = validators.event.create(createPayload);
      const loggedInUser = getter('loggedInUser');

      if (validation.ok && !isNil(loggedInUser)) {
        const newEvent: Event = {
          id: v4(),
          categories: createPayload.categories,
          date: createPayload.date,
          description: createPayload.description,
          repeatsEvery: createPayload.repeatsEvery,
          members: createPayload.members,
          name: createPayload.name,
          builtIn: false,
          owner: loggedInUser.id,
          repeated: false,
          createdAt: new Date(),
        };

        setter('events', (events = []) => events.concat([newEvent]));
      }

      return validation;
    },
    remove: (removePayload) => {
      const validation = validators.event.remove(removePayload);

      if (validation.ok) {
        setter('events', (events = []) => events.filter((event) => event.id !== removePayload.eventId));
      }

      return validation;
    },
    update: (updatePayload) => {
      const validation = validators.event.update(updatePayload);

      if (validation.ok) {
        setter('events', (events = []) => events.map((event) => (event.id === updatePayload.eventId ? {
          ...event,
          ...updatePayload,
        } : event)));
      }

      return validation;
    },
    allCategories: () => getter('eventCategories'),
    allUserEvents: () => {
      const user = getter('loggedInUser');
      const events = getter('events');

      if (isNil(user)) {
        return [];
      }

      return events.filter((event) => event.owner === user.id || event.members.includes(user.id) || event.builtIn);
    },
  },
  user: {
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
});

export default {};
