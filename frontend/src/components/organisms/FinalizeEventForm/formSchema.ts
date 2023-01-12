import * as yup from 'yup';

import { addressFielGroupSchema } from '../../molecules/AddressFieldGroup.index';

const formSchema = yup.object({
  deliveryAddress: addressFielGroupSchema,
  billingAddress: addressFielGroupSchema,
});

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
