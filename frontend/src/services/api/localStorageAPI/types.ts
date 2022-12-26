import type { Nullable } from '../../../utils/types';

import type {
  Event, EventCategory, GiftCategory, PaymentMethod, User,
} from '../types/data';

export type LocalStorageShape = Readonly<{
  loggedInUser: Nullable<User>;
  users: User[];
  giftCategories: GiftCategory[];
  eventCategories: EventCategory[];
  events: Event[];
  paymentMethods: PaymentMethod[];
}>;
