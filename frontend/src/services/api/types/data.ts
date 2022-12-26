import type { Nullable } from '../../../utils/types';

export enum RepeatsEvery {
  never = 'never',
  week = 'week',
  month = 'month',
  year = 'year',
  decade = 'decade',
}

export type User = Readonly<{
  id: string;
  email: string;
  password: string;
  details: Nullable<Partial<{
    billingAddress: Readonly<{
      houseNumber: string;
      streetName: string;
      town: string;
      postalCode: string;
      country: string;
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
  repeated: boolean;
  builtIn: boolean;
  date: Date;
  createdAt: Date;
  owner: User['id'];
  members: User['id'][];
  categories: EventCategory['id'][];
  repeatsEvery: RepeatsEvery;
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
  completed: boolean;
  gifts: Gift[];
}>;
