import * as yup from 'yup';

import { isEmpty } from '../../../utils/guards';

const formSchema = yup.object({
  nameAndSurname: yup
    .string()
    .required(),
  streetAddress: yup
    .string()
    .required(),
  town: yup
    .string()
    .required(),
  postalCode: yup
    .string()
    .required()
    .test('validPostalCode', 'Musi być w formacie 11-111', (value) => {
      if (isEmpty(value)) {
        return true;
      }

      return /^\d{2}-\d{3}$/.test(value);
    }),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
