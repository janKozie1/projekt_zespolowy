import { v4 } from 'uuid';

import type { SyncApi } from '../types';

import { getter, setter } from './utils';
import { validators } from './validators';

export const makeLocalStorageAPI = (): SyncApi => ({
  auth: {
    logout: () => {
      setter('isLoggedIn', false);
      return true;
    },
    isLoggedIn: () => getter('isLoggedIn', false),
    login: (loginPayload) => {
      const validation = validators.auth.login(loginPayload);

      if (validation.ok) {
        setter('isLoggedIn', true);
      }

      return validation;
    },
    register: (registerPayload) => {
      const validation = validators.auth.register(registerPayload);

      if (validation.ok) {
        setter('isLoggedIn', true);
        setter('users', (users = []) => users.concat([{
          id: v4(),
          email: registerPayload.email,
          password: registerPayload.password,
        }]));
      }

      return validation;
    },
  },
});

export default {};
