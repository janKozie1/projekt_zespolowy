import * as yup from 'yup';

import { undefinedIfEmpty } from '../../../utils/forms';

const formSchema = yup.object({
  preferredPaymentMethod: yup
    .string()
    .transform(undefinedIfEmpty)
    .required(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
