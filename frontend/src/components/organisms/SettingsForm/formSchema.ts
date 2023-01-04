import * as yup from 'yup';

import { NotificationOptions, ViewOptions, NotificationOptionsDay, Logout } from '../../../services/api/types/data';

const formSchema = yup.object({
  notificationOption: yup
    .mixed<NotificationOptions>()
    .oneOf(Object.values(NotificationOptions))
    .required(),
    viewOptions: yup
    .mixed<ViewOptions>()
    .oneOf(Object.values(ViewOptions))
    .required(),
    notificationOptionsDay : yup
    .mixed<NotificationOptionsDay>()
    .oneOf(Object.values(NotificationOptionsDay))
    .required(),
    logout: yup
    .mixed<Logout>()
    .oneOf(Object.values(Logout))
    .required(),
});


  

export type UserInput = yup.InferType<typeof formSchema>;

export default formSchema;
