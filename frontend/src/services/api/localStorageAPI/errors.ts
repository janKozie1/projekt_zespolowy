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
  events: {
    create: {
      unknownCategories: 'Some of the selected categories don\'t exist',
      unknownMembers: 'Some of the selected members don\'t exist',
      emptyDescription: 'Description cannot be empty',
      emptyName: 'Name cannot be empty',
    },
    remove: {
      doesNotExist: 'Selected event does not exist',
      notAnOwner: 'You are not the owner of the selected event',
    },
    update: {
      doesNotExist: 'Selected event does not exist',
      notAnOwner: 'You are not the owner of the selected event',
    },
  },
};

export default {};
