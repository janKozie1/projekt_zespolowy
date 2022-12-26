import isNil from 'lodash/isNil';
import type { DurationLike } from 'luxon';
import { DateTime } from 'luxon';

import type { Event, EventCategory, User } from '../../../services/api/types/data';
import { RepeatsEvery } from '../../../services/api/types/data';
import { isEmpty } from '../../../utils/guards';
import type { Nullable } from '../../../utils/types';

export type ParsedEvent = Omit<Event, 'categories' | 'members' | 'owner'> & Readonly<{
  categories: EventCategory[];
  members: User[];
  originalEvent: Event;
  owner: User;
}>;

export const parseEvents = (
  events: Nullable<Event[]>,
  categories: Nullable<EventCategory[]>,
  users: Nullable<User[]>,
  year: number,
): Map<string, ParsedEvent[]> => {
  if (isEmpty(events) || isEmpty(categories) || isEmpty(users)) {
    return new Map<string, ParsedEvent[]>();
  }

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

  events
    .filter((event) => event.repeatsEvery !== RepeatsEvery.never)
    .forEach((event) => {
      let baseDate = DateTime.fromJSDate(event.date);
      let increment: Nullable<DurationLike> = null;

      if (event.repeatsEvery === RepeatsEvery.week) {
        increment = { weeks: 1 };
      } else if (event.repeatsEvery === RepeatsEvery.month) {
        increment = { months: 1 };
      } else if (event.repeatsEvery === RepeatsEvery.year) {
        increment = { years: 1 };
      } else if (event.repeatsEvery === RepeatsEvery.decade) {
        increment = { years: 10 };
      }

      if (!isNil(increment)) {
        baseDate = baseDate.plus(increment);

        while (baseDate.year - 1 <= year) {
          updateMap(base, {
            ...event,
            repeated: true,
            date: baseDate.toJSDate(),
          });

          baseDate = baseDate.plus(increment);
        }
      }
    });

  return new Map(Array.from(base.entries()).map(([date, eventsOnDay]) => [
    date,
    eventsOnDay.map((event) => {
      const parsedEvent: ParsedEvent = {
        ...event,
        originalEvent: event,
        categories: event.categories.map((categoryId) => categoryMap[categoryId]),
        members: event.members.map((userId) => userMap[userId]),
        owner: userMap[event.owner],
      };

      return parsedEvent;
    }),
  ]));
};

export default {};
