import * as yup from 'yup';

import { undefinedIfEmpty } from '../../../utils/forms';

const formSchema = yup.object({
  friendEmail: yup
    .string()
    .transform(undefinedIfEmpty)
    .required()
    .email(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
