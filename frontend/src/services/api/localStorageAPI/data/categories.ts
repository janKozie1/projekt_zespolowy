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
    name: 'Moda',
    subCategories: [
      {
        name: 'Sneakersy',
      },
      {
        name: 'Trendy',
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
      {
        name: 'Oświetlenie',
      },
      {
        name: 'Meble',
      },
      {
        name: 'Budownictwo',
      },
      {
        name: 'Ogród',
      },
    ],
  },
  {
    name: 'Supermarket',
    subCategories: [
      {
        name: 'Produkty spożywcze',
      },
      {
        name: 'Artykuły dla zwierząt',
      },
      {
        name: 'Utrzymanie czystości',
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
        name: 'Okazje, przyjęcia',
      },
      {
        name: 'Zdrowie i higiena',
      },
      {
        name: 'Wózki dziecięce',
      },
      {
        name: 'Artykuły szkolne',
      },
      {
        name: 'Karmienie dziecka',
      },
      {
        name: 'Rowery i pojazdy',
      },
      {
        name: 'Odzież dziecięca',
      },
      {
        name: 'Obuwie dla dzieci',
      },
      {
        name: 'Foteliki samochodowe',
      },
      {
        name: 'Pokój dziecięcy',
      },
      {
        name: 'Pościel i kocyki',
      },
      {
        name: 'Meble dziecięce',
      },
      {
        name: 'Zabawki ogrodowe',
      },
      {
        name: 'Akcesoria dla mamy',
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
      {
        name: 'Wyposażenie salonów',
      },
    ],
  },
  {
    name: 'Zdrowie',
    subCategories: [
      {
        name: 'Domowa apteczka',
      },
      {
        name: 'Higiena jamy ustnej',
      },
      {
        name: 'Urządzenia medyczne',
      },
      {
        name: 'Medycyna naturalna',
      },
      {
        name: 'Higiena osobista',
      },
      {
        name: 'Erotyka',
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
        name: 'Kody i doładowania',
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
      {
        name: 'Bieganie',
      },
      {
        name: 'Militaria',
      },
      {
        name: 'Skating, slackline',
      },
      {
        name: 'Elektronika sportowa',
      },
      {
        name: 'Sporty walki',
      },
      {
        name: 'Sporty ekstremalne',
      },
      {
        name: 'Sporty wodne',
      },
      {
        name: 'Sporty drużynowe',
      },
      {
        name: 'Sporty towarzyskie',
      },
      {
        name: 'Tenis i pokrewne',
      },
      {
        name: 'Karty sportowe',
      },
      {
        name: 'Sporty zimowe',
      },
    ],
  },
  {
    name: 'Motoryzacja',
    subCategories: [
      {
        name: 'Części samochodowe',
      },
      {
        name: 'Akcesoria samochodowe',
      },
      {
        name: 'Opony i felgi',
      },
      {
        name: 'Warsztat',
      },
      {
        name: 'Motocykle i quady',
      },
      {
        name: 'Chemia',
      },
      {
        name: 'Części do maszyn',
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
