import { DateTime } from 'luxon';
import { v4 } from 'uuid';

import type { Event, User } from '../../types/data';
import { RepeatsEvery, EventCategory } from '../../types/data';

import { repeatEvent } from '../apis/utils';
import type { LocalStorageShape } from '../types';

import gifts, { giftCategories } from './gifts';

export const admin: User = {
  email: 'admin@giftology.com',
  id: v4(),
  password: 'admin',
  friends: [],
  details: null,
  giftReceivers: [],
  temporarilySelectedGifts: [],
};

const builtInEventCategories = {
  christmas: { id: v4(), name: 'Święta bożego narodzenia', builtInEventCategory: true },
  newYear: { id: v4(), name: 'Sylwester', builtInEventCategory: true },
  valentines: { id: v4(), name: 'Walentynki', builtInEventCategory: true },
  foolsDay: { id: v4(), name: 'Prima aprilis', builtInEventCategory: true },
  santasDay: { id: v4(), name: 'Mikołajki', builtInEventCategory: true },
  epiphany: { id: v4(), name: 'Trzech króli', builtInEventCategory: true },
  grandfathersDay: { id: v4(), name: 'Dzień dziadka', builtInEventCategory: true },
  grandmothersDay: { id: v4(), name: 'Dzień babci', builtInEventCategory: true },
  womensDay: { id: v4(), name: 'Dzień kobiet', builtInEventCategory: true },
  mothersDay: { id: v4(), name: 'Dzień matki', builtInEventCategory: true },
  childrensDay: { id: v4(), name: 'Dzień dziecka', builtInEventCategory: true },
  fathersDay: { id: v4(), name: 'Dzień ojca', builtInEventCategory: true },
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
    {
      type: 'grandfathersDay',
      date: new Date('2022-01-22'),
      name: 'Dzień dziadka',
    },
    {
      type: 'grandmothersDay',
      date: new Date('2022-01-21'),
      name: 'Dzień babci',
    },
    {
      type: 'womensDay',
      date: new Date('2022-03-08'),
      name: 'Dzień kobiet',
    },
    {
      type: 'mothersDay',
      date: new Date('2022-05-26'),
      name: 'Dzień matki',
    },
    {
      type: 'childrensDay',
      date: new Date('2022-06-01'),
      name: 'Dzień dziecka',
    },
    {
      type: 'fathersDay',
      date: new Date('2022-06-23'),
      name: 'Dzień ojca',
    },
  ];

  return config.flatMap((event) => repeatEvent({
    builtIn: true,
    id: v4(),
    categories: [builtInEventCategories[event.type].id],
    date: baseDate.set({ day: event.date.getDate(), month: event.date.getMonth() + 1 }).toJSDate(),
    createdAt: relativeTo,
    description: event.name,
    members: [],
    name: event.name,
    owner: userId,
    originalEvent: null,
    repeatsEvery: RepeatsEvery.year,
    giftReceiver: null,
  }));
};

type Defaults = Readonly<{
  [key in keyof LocalStorageShape]: LocalStorageShape[key]
}>;

const defaults: Defaults = {
  events: [],
  users: [admin],
  notifications: [],
  carts: [],
  gifts,
  loggedInUser: null,
  giftCategories: Object.values(giftCategories),
  paymentMethods: [
    {
      id: v4(),
      name: 'Blik',
      imageURL: 'https://a.allegroimg.com/original/2f1e9f/6b99459e48ccb0a607d90a0fa8e9',
    },
    {
      id: v4(),
      name: 'Google pay',
      imageURL: 'https://a.allegroimg.com/original/2f2cbd/a491099346bea3bb781eecd1da65',
    },
    {
      id: v4(),
      name: 'Karta płatnicza',
      imageURL: 'https://a.allegroimg.com/original/2f80b1/3b48708d44248480af5d245b73ba',
    },
    {
      id: v4(),
      name: 'Przelew',
      imageURL: 'https://a.allegroimg.com/original/2f932b/eb7b0cc84eff9d75efb9968563ee',
    },
  ],
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
