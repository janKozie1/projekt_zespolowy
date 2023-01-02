import type * as yup from 'yup';

import { addressFielGroupSchema } from '../../molecules/AddressFieldGroup.index';

const formSchema = addressFielGroupSchema;

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
