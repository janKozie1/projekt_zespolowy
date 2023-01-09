import * as yup from 'yup';

import { undefinedIfEmpty } from '../../../utils/forms';

import { addressFielGroupSchema } from '../../molecules/AddressFieldGroup.index';

const formSchema = yup.object({
  address: addressFielGroupSchema,
  preferredCategories: yup
    .array(yup
      .string()
      .transform(undefinedIfEmpty)
      .required())
    .required()
    .min(1),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
