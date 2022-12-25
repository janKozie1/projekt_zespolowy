import type { Nullable } from '../../../utils/types';

import type { Event, EventCategory, User } from './data';
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
  loggedInUser: APICallFN<null, Nullable<User>>;
  logout: APICallFN<null, boolean>;
}>;

type EventAPI = Readonly<{
  create: RequestWithValidationFN<{
    name: string;
    description: string;
    date: Date;
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

type UserApi = Readonly<{
  allUsers: APICallFN<null, User[]>;
}>;

export type API = Readonly<{
  auth: AuthAPI;
  event: EventAPI;
  user: UserApi;
}>;

export type SyncApi = ToSyncAPI<API>;
