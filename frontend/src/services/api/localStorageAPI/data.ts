import { DateTime } from 'luxon';
import { v4 } from 'uuid';

import type { Event, User } from '../types/data';
import { RepeatsEvery, EventCategory } from '../types/data';

import type { LocalStorageShape } from './types';

export const admin: User = {
  email: 'admin@giftology.com',
  id: v4(),
  password: 'admin',
};

const builtInEventCategories = {
  christmas: { id: v4(), name: 'Święta bożego narodzenia', builtInEventCategory: true },
  newYear: { id: v4(), name: 'Sylwester', builtInEventCategory: true },
  valentines: { id: v4(), name: 'Walentynki', builtInEventCategory: true },
  foolsDay: { id: v4(), name: 'Prima aprilis', builtInEventCategory: true },
  santasDay: { id: v4(), name: 'Mikołajki', builtInEventCategory: true },
  epiphany: { id: v4(), name: 'Trzech króli', builtInEventCategory: true },
} satisfies Record<string, EventCategory>;

type BuiltInEventConfig = Readonly<{
  type: keyof typeof builtInEventCategories;
  date: Date;
  name: string;
}>;

export const makeBuiltInEvents = (userId: User['id'], relativeTo: Date): Event[] => {
  const baseDate = DateTime.fromJSDate(relativeTo);

  const config: BuiltInEventConfig[] = [
    {
      type: 'christmas',
      name: 'Wigilia',
      date: new Date('2022-12-24'),
    },
    {
      type: 'christmas',
      name: 'Boże narodzenie',
      date: new Date('2022-12-25'),
    },
    {
      type: 'christmas',
      name: 'Boże narodzenie',
      date: new Date('2022-12-26'),
    },
    {
      type: 'newYear',
      date: new Date('2022-12-31'),
      name: 'Sylwester',
    },
    {
      type: 'valentines',
      date: new Date('2022-02-14'),
      name: 'Walentynki',
    },
    {
      type: 'foolsDay',
      date: new Date('2022-04-01'),
      name: 'Prima aprilis',
    },
    {
      type: 'santasDay',
      date: new Date('2022-12-07'),
      name: 'Mikołajki',
    },
    {
      type: 'epiphany',
      date: new Date('2022-01-06'),
      name: 'Trzech króli',
    },
  ];

  return config.map((event) => ({
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories[event.type].id],
    date: baseDate.set({ day: event.date.getDate(), month: event.date.getMonth() + 1 }).toJSDate(),
    createdAt: relativeTo,
    description: event.name,
    members: [],
    name: event.name,
    owner: userId,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  }));
};
type Defaults = Readonly<{
  [key in keyof LocalStorageShape]: LocalStorageShape[key]
}>;

const defaults: Defaults = {
  events: [],
  users: [admin],
  giftCategories: [],
  loggedInUser: null,
  eventCategories: [
    ...Object.values(builtInEventCategories),
    {
      id: v4(),
      name: 'Urodziny',
      builtInEventCategory: false,
    },
    {
      id: v4(),
      name: 'Rocznica',
      builtInEventCategory: false,
    },
    {
      id: v4(),
      name: 'Święto',
      builtInEventCategory: false,
    },
  ],
};

export default defaults;
