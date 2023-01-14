
import isNil from 'lodash/isNil';
import { DateTime } from 'luxon';
import { v4 } from 'uuid';

import { compareDays } from '../../../../utils/date';
import { isEmpty } from '../../../../utils/guards';
import { getDiff } from '../../../../utils/object';
import type { Nullable } from '../../../../utils/types';
import type { SyncApi } from '../../types';
import type { Event } from '../../types/data';

import { getter, setter } from '../utils';
import { validators } from '../validators';

import { repeatEvent } from './utils';

const isPlainEventCopy = (event: Event, otherEvent: Nullable<Event>) => !isNil(otherEvent) && isEmpty(getDiff({
  initialData: event,
  userInput: otherEvent,
  omitFields: (field) => field === 'date' || field === 'id' || field === 'originalEvent',
}));

const getOriginalEvenet = (
  events: Event[], event: Event,
): Nullable<Event> => events.find((e) => e.id === event.originalEvent);

const shouldModifyEvent = (targetEventId: string, events: Event[], event: Event) => event.id === targetEventId
  || (!event.builtIn
    && event.originalEvent === targetEventId
    && isPlainEventCopy(event, getOriginalEvenet(events, event)));

const eventApi: SyncApi['event'] = {
  create: (createPayload) => {
    const validation = validators.event.create(createPayload);
    const loggedInUser = getter('loggedInUser');

    if (validation.ok && !isNil(loggedInUser)) {
      setter('events', (events = []) => events.concat(repeatEvent({
        id: v4(),
        categories: createPayload.categories,
        date: createPayload.date,
        description: createPayload.description,
        repeatsEvery: createPayload.repeatsEvery,
        members: createPayload.members,
        giftReceiver: createPayload.giftReceiver,
        name: createPayload.name,
        builtIn: false,
        owner: loggedInUser.id,
        originalEvent: null,
        createdAt: new Date(),
      })));
    }

    return validation;
  },
  remove: (removePayload) => {
    const validation = validators.event.remove(removePayload);

    if (validation.ok) {
      const { eventId } = removePayload;

      setter('events', (events = []) => events
        .filter((event) => !shouldModifyEvent(eventId, events, event)));
      setter('carts', (carts = []) => carts.filter((cart) => cart.event !== removePayload.eventId));
    }

    return validation;
  },
  update: (updatePayload) => {
    const validation = validators.event.update(updatePayload);

    if (validation.ok) {
      const { eventId } = updatePayload;

      setter('events', (events = []) => events.map((event) => {
        const should = shouldModifyEvent(eventId, events, event);
        const a = should ? {
          ...event,
          ...updatePayload,
        } : event;

        return a;
      }));
    }

    return validation;
  },
  allCategories: () => getter('eventCategories'),
  allUserEvents: () => {
    const user = getter('loggedInUser');
    const events = getter('events');

    if (isNil(user)) {
      return [];
    }

    return events
      .filter((event) => event.owner === user.id || event.members.includes(user.id))
      .sort((eventA, eventB) => compareDays(eventA.date, eventB.date));
  },
  upcomfigUserEvents: () => {
    const user = getter('loggedInUser');
    const events = getter('events');

    const now = DateTime.local();

    if (isNil(user)) {
      return [];
    }

    return events.filter((event) => {
      const diff = DateTime.fromJSDate(event.date).diff(now).as('days');

      return diff >= 0 && diff <= 60 && (event.owner === user.id
        || event.members.includes(user.id));
    }).sort((eventA, eventB) => compareDays(eventA.date, eventB.date));
  },
};

export default eventApi;
