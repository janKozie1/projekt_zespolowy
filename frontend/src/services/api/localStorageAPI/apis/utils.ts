import isNil from 'lodash/isNil';
import type { DurationLike } from 'luxon';
import { DateTime } from 'luxon';
import { v4 } from 'uuid';

import { compareDays } from '../../../../utils/date';
import type { Nullable } from '../../../../utils/types';
import type { Event } from '../../types/data';
import { RepeatsEvery } from '../../types/data';

const defaultRepeatLimit = () => DateTime.local().plus({ years: 20 }).endOf('year').toJSDate();

const eventOffsetIncrement = (repeatsEvery: RepeatsEvery): Nullable<DurationLike> => {
  if (repeatsEvery === RepeatsEvery.week) {
    return { weeks: 1 };
  }
  if (repeatsEvery === RepeatsEvery.month) {
    return { months: 1 };
  }
  if (repeatsEvery === RepeatsEvery.year) {
    return { years: 1 };
  }
  if (repeatsEvery === RepeatsEvery.decade) {
    return { years: 10 };
  }

  return null;
};

export const repeatEvent = (event: Event, until: Date = defaultRepeatLimit()): Event[] => {
  const increment = eventOffsetIncrement(event.repeatsEvery);

  if (isNil(increment)) {
    return [event];
  }

  const recurse = (baseDate: Date): Event[] => {
    const eventDate = DateTime.fromJSDate(baseDate).plus(increment).toJSDate();

    if (compareDays(eventDate, until) <= 0) {
      const repeatedEvent: Event = {
        ...event,
        id: v4(),
        date: eventDate,
        originalEvent: event.id,
      };

      return [repeatedEvent, ...recurse(eventDate)];
    }

    return [];
  };

  return [event, ...recurse(event.date)];
};

export default {};
