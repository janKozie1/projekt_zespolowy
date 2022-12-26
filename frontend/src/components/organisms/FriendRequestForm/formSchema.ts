import * as yup from 'yup';

const formSchema = yup.object({
  friendEmail: yup
    .string()
    .required()
    .email(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
