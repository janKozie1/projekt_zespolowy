import { isNil } from 'lodash';
import { v4 } from 'uuid';

import type { SyncApi } from '../types';
import type { Event } from '../types/data';

import { admin, makeBuiltInEvents } from './data';
import { getter, setter } from './utils';
import { validators } from './validators';

export const makeLocalStorageAPI = (): SyncApi => ({
  auth: {
    logout: () => {
      setter('loggedInUser', null);
      return true;
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
  },
});

export default {};
