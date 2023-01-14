import type { Nullable } from '../../../utils/types';

import type {
  Event,
  EventCategory,
  PaymentMethod,
  RepeatsEvery,
  User,
  Notification,
  GiftCategory,
  GiftReceiver,
  Gift,
  ShoppingCart,
  CartStatus,
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
    giftReceiver: Nullable<GiftReceiver['id']>;
    categories: EventCategory['id'][];
  }>;
  update: RequestWithValidationFN<{
    eventId: Event['id'];
    name: string;
    description: string;
    date: Date;
    members: User['id'][];
    giftReceiver: Nullable<GiftReceiver['id']>;
    categories: EventCategory['id'][];
  }>;
  remove: RequestWithValidationFN<{
    eventId: string;
  }>;
  allUserEvents: APICallFN<null, Event[]>;
  upcomfigUserEvents: APICallFN<null, Event[]>;
  allCategories: APICallFN<null, EventCategory[]>;
}>;

type UserAPI = Readonly<{
  allUsers: APICallFN<null, User[]>;
  updateBillingAddress: RequestWithValidationFN<NonNullable<NonNullable<User['details']>['billingAddress']>>;
  updatePaymentInfo: RequestWithValidationFN<NonNullable<NonNullable<User['details']>['payments']>>;
  friends: Readonly<{
    add: RequestWithValidationFN<{
      friendEmail: string;
    }>;
    remove: RequestWithValidationFN<{
      friendId: string;
    }>;
    cancelRequest: RequestWithValidationFN<{
      requestId: string;
    }>;
  }>;
  giftReceivers: Readonly<{
    add: RequestWithValidationFN<Pick<GiftReceiver, 'address' | 'preferredCategories'>>;
    edit: RequestWithValidationFN<Pick<GiftReceiver, 'address' | 'id' | 'preferredCategories'>>;
    remove: RequestWithValidationFN<{
      receiverId: string;
    }>;
  }>;
  notifications: APICallFN<null, Notification[]>;
}>;

type PaymentAPI = Readonly<{
  availableMethods: APICallFN<null, PaymentMethod[]>;
  pay: RequestWithValidationFN<{
    cartId: string;
    amount: number;
  }>;
}>;

type NotificationsAPI = Readonly<{
  confirmNotification: RequestWithValidationFN<{
    id: Notification['id'];
    confirmation: boolean;
  }>;
}>;

type GiftsAPI = Readonly<{
  allCategories: APICallFN<null, GiftCategory[]>;
  allGifts: APICallFN<null, Gift[]>;
  gift: APICallFN<{ id: string }, Nullable<Gift>>;
}>;

type CartAPI = Readonly<{
  allCarts: APICallFN<null, ShoppingCart[]>;
  assignTemporaryCartToEvent: RequestWithValidationFN<{
    event: Event['id'];
  }>;
  removeGift: RequestWithValidationFN<{
    cartId: string;
    giftId: string;
  }>;
  updateAmount: RequestWithValidationFN<{
    cartId: string;
    giftId: string;
    amount: number;
  }>;
  updateStatus: RequestWithValidationFN<{
    cartId: string;
    status: CartStatus;
  }>;
  finalizeCart: RequestWithValidationFN<{
    cartId: string;
  }>;
  temporaryCart: Readonly<{
    addGift: RequestWithValidationFN<{
      id: string;
    }>;
    updateAmont: RequestWithValidationFN<{
      giftId: string;
      amount: number;
    }>;
    removeGift: RequestWithValidationFN<{
      id: string;
    }>;
    empty: APICallFN<null, boolean>;
  }>;
}>;

export type API = Readonly<{
  auth: AuthAPI;
  event: EventAPI;
  user: UserAPI;
  payment: PaymentAPI;
  notifications: NotificationsAPI;
  gifts: GiftsAPI;
  cart: CartAPI;
}>;

export type SyncApi = ToSyncAPI<API>;
