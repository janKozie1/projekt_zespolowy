import type { Nullable } from '../../../utils/types';

import type {
  Event, EventCategory, GiftCategory, User,
} from '../types/data';

export type LocalStorageShape = Readonly<{
  loggedInUser: Nullable<User>;
  users: User[];
  giftCategories: GiftCategory[];
  eventCategories: EventCategory[];
  events: Event[];
}>;
