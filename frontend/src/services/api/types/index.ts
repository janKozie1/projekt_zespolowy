import type { Nullable } from '../../../utils/types';

import type {
  Event, EventCategory, PaymentMethod, RepeatsEvery, User, Notification,
} from './data';
import type { APICallFN, RequestWithValidationFN, ToSyncAPI } from './utils';

type AuthAPI = Readonly<{
  login: RequestWithValidationFN<{
    email: string;
    password: string;
  }>;
  register: RequestWithValidationFN<{
    email: string;
    password: string;
    repeatedPassword: string;
  }>;
  changePassword: RequestWithValidationFN<{
    currentPassword: string;
    password: string;
    repeatedPassword: string;
  }>;
  loggedInUser: APICallFN<null, Nullable<User>>;
  deleteAccount: APICallFN<null, boolean>;
  logout: APICallFN<null, boolean>;
}>;

type EventAPI = Readonly<{
  create: RequestWithValidationFN<{
    name: string;
    description: string;
    date: Date;
    repeatsEvery: RepeatsEvery;
    members: User['id'][];
    categories: EventCategory['id'][];
  }>;
  update: RequestWithValidationFN<{
    eventId: Event['id'];
    name: string;
    description: string;
    date: Date;
    members: User['id'][];
    categories: EventCategory['id'][];
  }>;
  remove: RequestWithValidationFN<{
    eventId: string;
  }>;
  allUserEvents: APICallFN<null, Event[]>;
  allCategories: APICallFN<null, EventCategory[]>;
}>;

type UserAPI = Readonly<{
  allUsers: APICallFN<null, User[]>;
  updateBillingAddress: RequestWithValidationFN<NonNullable<NonNullable<User['details']>['billingAddress']>>;
  updatePaymentInfo: RequestWithValidationFN<NonNullable<NonNullable<User['details']>['payments']>>;
  addToFriends: RequestWithValidationFN<{
    friendEmail: string;
  }>;
  cancelFriendRequest: RequestWithValidationFN<{
    requestId: string;
  }>;
  removeFromFriends: RequestWithValidationFN<{
    friendId: string;
  }>;
  notifications: APICallFN<null, Notification[]>;
}>;

type PaymentAPI = Readonly<{
  availableMethods: APICallFN<null, PaymentMethod[]>;
}>;

type NotificationsAPI = Readonly<{
  confirmNotification: RequestWithValidationFN<{
    id: Notification['id'];
    confirmation: boolean;
  }>;
}>;

export type API = Readonly<{
  auth: AuthAPI;
  event: EventAPI;
  user: UserAPI;
  payment: PaymentAPI;
  notifications: NotificationsAPI;
}>;

export type SyncApi = ToSyncAPI<API>;
