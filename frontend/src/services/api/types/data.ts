import type { Nullable } from '../../../utils/types';

export enum RepeatsEvery {
  never = 'never',
  week = 'week',
  month = 'month',
  year = 'year',
  decade = 'decade',
}

export type Notification = Readonly<{
  id: string;
  kind: 'friendRequest';
  from: User['id'];
  to: User['id'];
}> | Readonly<{
  id: string;
  kind: 'sale';
  to: User['id'];
}>;

export type Address = Readonly<{
  nameAndSurname: string;
  streetAddress: string;
  town: string;
  postalCode: string;
}>;

export type GiftReceiver = Readonly<{
  id: string;
  address: Address;
  preferredCategories: GiftCategory['id'][];
}>;

export type User = Readonly<{
  id: string;
  email: string;
  password: string;
  giftReceivers: GiftReceiver[];
  friends: User['id'][];
  details: Nullable<Partial<{
    billingAddress: Address;
    payments: Readonly<{
      preferredPaymentMethod: string;
    }>;
  }>>;
}>;

export type EventCategory = Readonly<{
  id: string;
  name: string;
  builtInEventCategory: boolean;
}>;

export type Event = Readonly<{
  id: string;
  name: string;
  description: string;
  originalEvent: Nullable<Event['id']>;
  builtIn: boolean;
  date: Date;
  createdAt: Date;
  owner: User['id'];
  members: User['id'][];
  needGifts: GiftReceiver['id'][];
  categories: EventCategory['id'][];
  repeatsEvery: RepeatsEvery;
}>;

export type PaymentMethod = Readonly<{
  id: string;
  name: string;
  imageURL: string;
}>;

export type Store = Readonly<{
  id: string;
  name: string;
}>;

export type GiftCategory = Readonly<{
  id: string;
  name: string;
}>;

export type Gift = Readonly<{
  id: string;
  name: string;
  description: string;
  imageURL: string;
  store: Store['id'];
  category: GiftCategory['id'][];
}>;

export type CategoryMapping = Readonly<{
  gift: GiftCategory['id'];
  event: EventCategory['id'];
}>;

export type ShoppingCart = Readonly<{
  id: string;
  event: Event['id'];
  date: Date;
  completed: boolean;
  gifts: Gift['id'][];
}>;
