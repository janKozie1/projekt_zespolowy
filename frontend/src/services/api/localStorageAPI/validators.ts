import isNil from 'lodash/isNil';

import { isEmpty } from '../../../utils/guards';
import type { Literal } from '../../../utils/types';

import type { API } from '../types';
import type { RequestWithValidationFN, SyncRequestWithValidationFN } from '../types/utils';

import { ERRORS } from './errors';
import { getter } from './utils';

type ToValidators<T> = T extends Literal
  ? {
    [key in keyof T]: T[key] extends RequestWithValidationFN<infer Arg>
      ? SyncRequestWithValidationFN<Arg>
      : T[key] extends Literal
        ? ToValidators<T[key]>
        : null;
  } : null;

type Validators = ToValidators<API>;

export const validators: Validators = {
  auth: {
    loggedInUser: null,
    logout: null,
    deleteAccount: null,
    login: (loginPayload) => {
      const { email, password } = loginPayload;

      const matchingUser = getter('users')
        .find((user) => user.email === email);

      if (isNil(matchingUser)) {
        return {
          ok: false,
          errors: {
            email: ERRORS.auth.login.doesNotExist,
          },
        };
      }

      if (matchingUser.password === password) {
        return {
          ok: true,
          errors: {},
        };
      }

      return {
        ok: false,
        errors: {
          password: ERRORS.auth.login.invalidPassword,
        },
      };
    },
    register: (registerPayload) => {
      const { email, password, repeatedPassword } = registerPayload;

      const matchingUser = getter('users')
        .find((user) => user.email === email);

      if (!isNil(matchingUser)) {
        return {
          ok: false,
          errors: {
            email: ERRORS.auth.register.alreadyExists,
          },
        };
      }

      if (isEmpty(password) || password.length < 3) {
        return {
          ok: false,
          errors: {
            password: ERRORS.auth.register.invalidPassword,
          },
        };
      }

      if (password !== repeatedPassword) {
        return {
          ok: false,
          errors: {
            password: ERRORS.auth.register.passwordsDontMatch,
          },
        };
      }

      return {
        ok: true,
        errors: {},
      };
    },
    changePassword: (changePasswordPayload) => {
      const { password, repeatedPassword, currentPassword } = changePasswordPayload;
      const loggedInUser = getter('loggedInUser');

      if (isNil(loggedInUser) || loggedInUser.password !== currentPassword) {
        return {
          ok: false,
          errors: {
            currentPassword: ERRORS.auth.register.invalidPassword,
          },
        };
      }

      if (isEmpty(password) || password.length < 3) {
        return {
          ok: false,
          errors: {
            password: ERRORS.auth.register.invalidPassword,
          },
        };
      }

      if (password !== repeatedPassword) {
        return {
          ok: false,
          errors: {
            password: ERRORS.auth.register.passwordsDontMatch,
          },
        };
      }

      return {
        ok: true,
        errors: {},
      };
    },
  },
  event: {
    allCategories: null,
    allUserEvents: null,
    create: (createPayload) => {
      const {
        categories, description, members, name,
      } = createPayload;

      const eventCategories = getter('eventCategories')
        .map((category) => category.id);

      const users = getter('users')
        .map((user) => user.id);

      if (!categories.every((id) => eventCategories.includes(id))) {
        return {
          ok: false,
          errors: {
            categories: ERRORS.events.create.unknownCategories,
          },
        };
      }

      if (isEmpty(description)) {
        return {
          ok: false,
          errors: {
            description: ERRORS.events.create.emptyDescription,
          },
        };
      }

      if (isEmpty(name)) {
        return {
          ok: false,
          errors: {
            name: ERRORS.events.create.emptyName,
          },
        };
      }

      if (!members.every((id) => users.includes(id))) {
        return {
          ok: false,
          errors: {
            members: ERRORS.events.create.unknownMembers,
          },
        };
      }

      return { ok: true, errors: {} };
    },
    remove: (removePayload) => {
      const { eventId } = removePayload;

      const loggedInUser = getter('loggedInUser');
      const selectedEvent = getter('events').find((event) => event.id === eventId);

      if (isNil(loggedInUser) || loggedInUser.id !== selectedEvent?.owner) {
        return {
          ok: false,
          errors: {
            eventId: ERRORS.events.remove.notAnOwner,
          },
        };
      }

      if (isNil(selectedEvent)) {
        return {
          ok: false,
          errors: {
            eventId: ERRORS.events.remove.doesNotExist,
          },
        };
      }

      return {
        ok: true,
        errors: {},
      };
    },
    update: (updatePayload) => {
      const { eventId } = updatePayload;

      const events = getter('events')
        .map((event) => event.id);

      const loggedInUser = getter('loggedInUser');
      const selectedEvent = getter('events').find((event) => event.id === eventId);

      if (isNil(loggedInUser) || loggedInUser.id !== selectedEvent?.owner) {
        return {
          ok: false,
          errors: {
            eventId: ERRORS.events.update.notAnOwner,
          },
        };
      }

      if (!events.includes(eventId)) {
        return {
          ok: false,
          errors: {
            eventId: ERRORS.events.update.doesNotExist,
          },
        };
      }

      return {
        ok: true,
        errors: {},
      };
    },
  },
  user: {
    allUsers: null,
  },
};

export default {};
