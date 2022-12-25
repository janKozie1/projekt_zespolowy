import * as yup from 'yup';

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
  categories: yup
    .array(yup
      .string()
      .required())
    .min(1)
    .required(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
