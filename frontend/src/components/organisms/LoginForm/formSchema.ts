import * as yup from 'yup';

const formSchema = yup.object({
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
