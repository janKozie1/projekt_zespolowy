import isNil from 'lodash/isNil';

import { isEmpty } from '../../../utils/guards';
import type { Literal } from '../../../utils/types';

import type { RequestWithValidationFN, API, SyncRequestWithValidationFN } from '../types';

import { ERRORS } from './errors';
import { getter, setter } from './utils';

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
    isLoggedIn: null,
    logout: null,
    login: (loginPayload) => {
      const { email, password } = loginPayload;

      const matchingUser = getter('users', [])
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
        setter('isLoggedIn', true);
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

      const matchingUser = getter('users', [])
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
  },
};

export default {};
