import { DateTime } from 'luxon';
import { v4 } from 'uuid';

import type { Event, User } from '../../types/data';
import { RepeatsEvery, EventCategory } from '../../types/data';

import { repeatEvent } from '../apis/utils';
import type { LocalStorageShape } from '../types';

import giftCategories, { categoryIdByName } from './categories';
import gifts from './gifts';

export const admin: User = {
  email: 'admin@giftology.com',
  id: 'ed656b93-305f-47b2-a6bf-fa805283bc60',
  password: 'admin',
  friends: [],
  details: null,
  giftReceivers: [],
  temporarilySelectedGifts: [],
};

const builtInEventCategories = {
  christmas: { id: 'd05a3104-a1de-43f9-9e9b-32e0406c4cee', name: 'Święta bożego narodzenia', builtInEventCategory: true },
  newYear: { id: '5bc67c69-a690-4b04-a4de-c33b687307e6', name: 'Sylwester', builtInEventCategory: true },
  valentines: { id: '0bbb0106-d5df-45a4-b7a3-5c3f8eeb836c', name: 'Walentynki', builtInEventCategory: true },
  foolsDay: { id: 'b47ec7d4-2e3f-4b37-b3b6-d52f1c123ee8', name: 'Prima aprilis', builtInEventCategory: true },
  santasDay: { id: 'ae52f741-237a-4f3e-9e1e-1a46c766c408', name: 'Mikołajki', builtInEventCategory: true },
  epiphany: { id: '448dd4d1-b8ef-4c5b-9261-ba7ba36a3348', name: 'Trzech króli', builtInEventCategory: true },
  grandfathersDay: { id: '241d50fe-9bcb-4670-9b52-81a758a5dbd4', name: 'Dzień dziadka', builtInEventCategory: true },
  grandmothersDay: { id: '3aeaeb9c-6f1e-4f4f-a0e8-794d67661768', name: 'Dzień babci', builtInEventCategory: true },
  womensDay: { id: 'bc32c0c7-d8b9-4b7e-82c5-07a060f6145a', name: 'Dzień kobiet', builtInEventCategory: true },
  mothersDay: { id: '456214ac-8484-45a2-97dd-fb9e68c17a4b', name: 'Dzień matki', builtInEventCategory: true },
  childrensDay: { id: '96a532dc-2437-4e97-8ba9-9d498cedd219', name: 'Dzień dziecka', builtInEventCategory: true },
  fathersDay: { id: '96a532dc-2437-4e97-8ba9-9d498cedd219', name: 'Dzień ojca', builtInEventCategory: true },
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
  categoryMappings: [
    {
      event: builtInEventCategories.childrensDay.id,
      gift: categoryIdByName.Zabawki,
    },
    {
      event: builtInEventCategories.valentines.id,
      gift: categoryIdByName.Kwiaty,
    },
    {
      event: builtInEventCategories.valentines.id,
      gift: categoryIdByName.Makijaż,
    },
    {
      event: builtInEventCategories.valentines.id,
      gift: categoryIdByName['Manicure i pedicure'],
    },
    {
      event: builtInEventCategories.grandfathersDay.id,
      gift: categoryIdByName.Wędkarstwo,
    },
    {
      event: builtInEventCategories.grandfathersDay.id,
      gift: categoryIdByName.Narzędzia,
    },
    {
      event: builtInEventCategories.grandmothersDay.id,
      gift: categoryIdByName['Zdrowie i higiena'],
    },
    {
      event: builtInEventCategories.womensDay.id,
      gift: categoryIdByName.Zabawki,
    },
    {
      event: builtInEventCategories.womensDay.id,
      gift: categoryIdByName.Kwiaty,
    },
    {
      event: builtInEventCategories.womensDay.id,
      gift: categoryIdByName.Makijaż,
    },
  ],
  giftCategories,
  paymentMethods: [
    {
      id: 'ad9d1c78-9f59-4190-89a2-3dfb2e37d3d8',
      name: 'Blik',
      imageURL: 'https://a.allegroimg.com/original/2f1e9f/6b99459e48ccb0a607d90a0fa8e9',
    },
    {
      id: 'e2b5ee61-01f0-4c27-ac8f-42555d8ceeb4',
      name: 'Google pay',
      imageURL: 'https://a.allegroimg.com/original/2f2cbd/a491099346bea3bb781eecd1da65',
    },
    {
      id: '2a9f9169-503a-4f26-a23a-b8288bf09e4e',
      name: 'Karta płatnicza',
      imageURL: 'https://a.allegroimg.com/original/2f80b1/3b48708d44248480af5d245b73ba',
    },
    {
      id: '4e33a088-f2d1-4735-86d5-0ed70aac8321',
      name: 'Przelew',
      imageURL: 'https://a.allegroimg.com/original/2f932b/eb7b0cc84eff9d75efb9968563ee',
    },
  ],
  eventCategories: [
    ...Object.values(builtInEventCategories),
    {
      id: 'e33bd2e0-07c7-43e2-8361-5ef43d13e5d6',
      name: 'Urodziny',
      builtInEventCategory: false,
    },
    {
      id: 'd2662740-f265-4bb0-a9a8-622561cd6cae',
      name: 'Jubileusz',
      builtInEventCategory: false,
    },
    {
      id: 'af8eeafc-2560-495d-844d-9dc44022c0e4',
      name: 'Święto',
      builtInEventCategory: false,
    },
    {
      id: 'c6670325-b289-4e38-9b52-1039c03dacdc',
      name: 'Ślub',
      builtInEventCategory: false,
    },
    {
      id: '0d8071e6-e773-4637-8b93-a12438be5ef1',
      name: 'Impreza',
      builtInEventCategory: false,
    },
  ],
};

export default defaults;
