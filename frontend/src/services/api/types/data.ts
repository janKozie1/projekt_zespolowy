export type User = Readonly<{
  id: string;
  email: string;
  password: string;
}>;

export type EventCategory = Readonly<{
  id: string;
  name: string;
}>;

export type Event = Readonly<{
  id: string;
  name: string;
  description: string;
  date: Date;
  createdAt: Date;
  owner: User['id'];
  members: User['id'][];
  categories: EventCategory['id'][];
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
