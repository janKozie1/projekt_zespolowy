import * as yup from 'yup';

const formSchema = yup.object({
  currentPassword: yup
    .string()
    .required(),
  password: yup
    .string()
    .required()
    .min(3),
  repeatedPassword: yup
    .string()
    .required()
    .min(3),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
