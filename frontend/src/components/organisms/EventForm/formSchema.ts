import * as yup from 'yup';

import { RepeatsEvery } from '../../../services/api/types/data';

const formSchema = yup.object({
  name: yup
    .string()
    .required(),
  description: yup
    .string()
    .required(),
  members: yup
    .array(yup
      .string()
      .required())
    .required(),
  needGifts: yup
    .array(yup
      .string()
      .required())
    .required(),
  repeatsEvery: yup
    .mixed<RepeatsEvery>()
    .oneOf(Object.values(RepeatsEvery))
    .required(),
  categories: yup
    .array(yup
      .string()
      .required())
    .min(1)
    .required(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
