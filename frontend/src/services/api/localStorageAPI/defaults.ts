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

const builtInEvents: Event[] = [
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.christmas.id],
    date: new Date('2022-12-24'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Wigilia',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.christmas.id],
    date: new Date('2022-12-25'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Boże narodzenie',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.christmas.id],
    date: new Date('2022-12-26'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Boże narodzenie',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.newYear.id],
    date: new Date('2022-12-31'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Sylwester',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.valentines.id],
    date: new Date('2022-02-14'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Walentynki',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.foolsDay.id],
    date: new Date('2022-04-01'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Prima aprilis',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.santasDay.id],
    date: new Date('2022-12-07'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Mikołajki',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
  {
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories.epiphany.id],
    date: new Date('2022-01-06'),
    createdAt: new Date(),
    description: '',
    members: [],
    name: 'Trzech króli',
    owner: admin.id,
    repeated: false,
    repeatsEvery: RepeatsEvery.year,
  },
];

type Defaults = Readonly<{
  [key in keyof LocalStorageShape]: LocalStorageShape[key]
}>;

const defaults: Defaults = {
  events: builtInEvents,
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
