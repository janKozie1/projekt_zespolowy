import { DateTime } from 'luxon';

import type { UpcomingEvent } from '../../../hooks/useUpcomingEvents';
import { makeToUpcomingEvent } from '../../../hooks/useUpcomingEvents';
import type {
  Event, EventCategory, ShoppingCart, User,
} from '../../../services/api/types/data';
import { isEmpty, isNotNil } from '../../../utils/guards';
import type { Nullable } from '../../../utils/types';

type BaseParsedEvent = Readonly<{
  categories: EventCategory[];
  members: User[];
  originalEvent: Nullable<Event>;
  unparsedEvent: Event;
  owner: User;
}>;

export type ParsedEvent = BaseParsedEvent
& Omit<Event, keyof BaseParsedEvent | 'giftReceiver'>
& Omit<UpcomingEvent, keyof BaseParsedEvent>;

export const parseEvents = (
  events: Nullable<Event[]>,
  categories: Nullable<EventCategory[]>,
  shoppingCarts: Nullable<ShoppingCart[]>,
  users: Nullable<User[]>,
): Map<string, ParsedEvent[]> => {
  if (isEmpty(events) || isEmpty(categories) || isEmpty(users)) {
    return new Map<string, ParsedEvent[]>();
  }

  const toUpcomingEvent = makeToUpcomingEvent(users, shoppingCarts ?? []);

  const updateMap = (map: Map<string, Event[]>, event: Event, date = event.date) => {
    const dateKey = DateTime.fromJSDate(date).toISODate();
    const alreadyExisting = map.get(dateKey) ?? [];
    alreadyExisting.push(event);

    map.set(dateKey, alreadyExisting);

    return map;
  };

  const base = events.reduce<Map<string, Event[]>>((acc, event) => updateMap(acc, event), new Map());
  const categoryMap = Object.fromEntries(categories.map((category) => [category.id, category] as const));
  const userMap = Object.fromEntries(users.map((user) => [user.id, user] as const));

  return new Map(Array.from(base.entries()).map(([date, eventsOnDay]) => [
    date,
    eventsOnDay
      .map((event) => {
        const upcomingEvent = toUpcomingEvent(event);

        const parsedEvent: ParsedEvent = {
          ...event,
          ...upcomingEvent,
          unparsedEvent: event,
          originalEvent: events.find((ev) => ev.id === event.originalEvent),
          categories: event.categories.map((categoryId) => categoryMap[categoryId]).filter(isNotNil),
          members: event.members.map((userId) => userMap[userId]).filter(isNotNil),
          owner: userMap[event.owner],
        };

        return parsedEvent;
      }),
  ]));
};

export default {};
