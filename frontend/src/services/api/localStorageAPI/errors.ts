export const ERRORS = {
  auth: {
    login: {
      doesNotExist: 'User with provided email does not exist',
      invalidPassword: 'Provided password is invalid',
    },
    register: {
      alreadyExists: 'User with provided email already exists',
      invalidPassword: 'Provided password is invalid',
      passwordsDontMatch: 'Provided passwords don\'t match',
    },
  },
};

export default {};
