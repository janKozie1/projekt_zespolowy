import type { Nullable } from '../../../utils/types';

import type {
  Event, EventCategory, GiftCategory, PaymentMethod, User, Notification, Gift, ShoppingCart, CategoryMapping,
} from '../types/data';

export type LocalStorageShape = Readonly<{
  loggedInUser: Nullable<User>;
  users: User[];
  carts: ShoppingCart[];
  categoryMappings: CategoryMapping[];
  gifts: Gift[];
  giftCategories: GiftCategory[];
  eventCategories: EventCategory[];
  events: Event[];
  paymentMethods: PaymentMethod[];
  notifications: Notification[];
}>;
