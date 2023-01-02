import type { Nullable } from '../../../utils/types';

import type {
  Event, EventCategory, GiftCategory, PaymentMethod, User, Notification,
} from '../types/data';

export type LocalStorageShape = Readonly<{
  loggedInUser: Nullable<User>;
  users: User[];
  giftCategories: GiftCategory[];
  eventCategories: EventCategory[];
  events: Event[];
  paymentMethods: PaymentMethod[];
  notifications: Notification[];
}>;
