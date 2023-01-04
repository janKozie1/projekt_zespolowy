import * as yup from 'yup';

import { RepeatsEvery } from '../../../services/api/types/data';
import { undefinedIfEmpty } from '../../../utils/forms';

const formSchema = yup.object({
  name: yup
    .string()
    .transform(undefinedIfEmpty)
    .required(),
  description: yup
    .string()
    .transform(undefinedIfEmpty)
    .required(),
  members: yup
    .array(yup
      .string()
      .transform(undefinedIfEmpty)
      .required())
    .required(),
  giftReceiver: yup
    .string()
    .transform(undefinedIfEmpty),
  repeatsEvery: yup
    .mixed<RepeatsEvery>()
    .oneOf(Object.values(RepeatsEvery))
    .required(),
  categories: yup
    .array(yup
      .string()
      .transform(undefinedIfEmpty)
      .required())
    .min(1)
    .required(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
