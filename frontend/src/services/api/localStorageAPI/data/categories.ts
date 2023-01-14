import getUuidByString from 'uuid-by-string';

import type { GiftCategory } from '../../types/data';

const baseCategories = [
  {
    name: 'Elektronika',
    subCategories: [
      {
        name: 'Telefony i Akcesoria',
      },
      {
        name: 'Komputery',
      },
      {
        name: 'Telewizory i akcesoria',
      },
      {
        name: 'Konsole i automaty',
      },
      {
        name: 'AGD małe',
      },
      {
        name: 'AGD',
      },
      {
        name: 'AGD do zabudowy',
      },
      {
        name: 'Fotografia',
      },
    ],
  },
  {
    name: 'Dom i Ogród',
    subCategories: [
      {
        name: 'Wyposażenie',
      },
      {
        name: 'Narzędzia',
      },
    ],
  },
  {
    name: 'Dziecko',
    subCategories: [
      {
        name: 'Zabawki',
      },
      {
        name: 'Zdrowie i higiena',
      },
      {
        name: 'Artykuły szkolne',
      },
    ],
  },
  {
    name: 'Uroda',
    subCategories: [
      {
        name: 'Pielęgnacja',
      },
      {
        name: 'Manicure i pedicure',
      },
      {
        name: 'Makijaż',
      },
      {
        name: 'Perfumy',
      },
    ],
  },
  {
    name: 'Kultura i rozrywka',
    subCategories: [
      {
        name: 'Książki i Komiksy',
      },
      {
        name: 'Gry',
      },
      {
        name: 'Instrumenty',
      },
      {
        name: 'Muzyka',
      },
      {
        name: 'Filmy',
      },
    ],
  },
  {
    name: 'Sport i turystyka',
    subCategories: [
      {
        name: 'Rowery i akcesoria',
      },
      {
        name: 'Turystyka',
      },
      {
        name: 'Siłownia i fitness',
      },
      {
        name: 'Wędkarstwo',
      },
    ],
  },
] as const;

export type Categories = typeof baseCategories[number]['subCategories'][number]['name'];

export const categoryIdByName: Record<Categories, string> = baseCategories
  .reduce<Record<Categories, string>>((acc, current) => {
  current.subCategories.forEach((sub) => {
    acc[sub.name] = getUuidByString(`${current.name}-${sub.name}`);
  });

  return acc;
}, {} as Record<Categories, string>);

const giftCategories: GiftCategory[] = baseCategories.flatMap((parent) => {
  const parentId = getUuidByString(parent.name);

  return [
    {
      id: parentId,
      name: parent.name,
      parent: null,
    },
    ...parent.subCategories.map((sub) => ({
      id: getUuidByString(`${parent.name}-${sub.name}`),
      name: sub.name,
      parent: parentId,
    })),
  ];
});

export default giftCategories;
