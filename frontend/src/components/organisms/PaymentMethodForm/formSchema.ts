import * as yup from 'yup';

const formSchema = yup.object({
  preferredPaymentMethod: yup
    .string()
    .required(),
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
