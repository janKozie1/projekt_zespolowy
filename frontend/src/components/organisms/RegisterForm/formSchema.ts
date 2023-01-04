import * as yup from 'yup';

import { undefinedIfEmpty } from '../../../utils/forms';

const formSchema = yup.object({
  email: yup
    .string()
    .transform(undefinedIfEmpty)
    .required()
    .email(),
  password: yup
    .string()
    .transform(undefinedIfEmpty)
    .required()
    .min(3),
  repeatedPassword: yup
    .string()
    .transform(undefinedIfEmpty)
    .required()
    .min(3),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
