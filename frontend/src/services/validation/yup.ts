/* eslint-disable no-template-curly-in-string */
import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'To pole jest wymagane',
  },
  string: {
    email: 'To pole musi być poprawnym emailem',
    min: 'To pole musi mieć co najmniej ${min} znaki',
  },
  array: {
    min: 'To pole musi mieć co najmniej ${min} wybranych opcji',
  },
});
