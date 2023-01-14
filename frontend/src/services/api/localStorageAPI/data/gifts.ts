import { v4 } from 'uuid';

import type { Gift } from '../../types/data';

import type { Categories } from './categories';
import { categoryIdByName } from './categories';
import agd from './products/agd';
import agdDoZabudowy from './products/agdDoZabudowy';
import agdMale from './products/agdMale';
import filmy from './products/filmy';
import fotografia from './products/fotografia';
import gry from './products/gry';
import instrumenty from './products/instrumenty';
import komputery from './products/komputery';
import konsole from './products/konsole';
import ksiazka from './products/ksiazka';
import kwiaty from './products/kwiaty';
import makijaz from './products/makijaz';
import manicure from './products/manicure';
import muzyka from './products/muzyka';
import narzedzia from './products/narzedzia';
import opakowania from './products/opakowania';
import perfumy from './products/perfumy';
import pielegnacja from './products/pielegnacja';
import rowery from './products/rowery';
import silownia from './products/silownia';
import szkolne from './products/szkolne';
import telefony from './products/telefony';
import telewizja from './products/telewizja';
import turystyka from './products/turystyka';
import wedkarstwo from './products/wedkarstwo';
import wyposazenie from './products/wyposazenie';
import zabawki from './products/zabawki';
import zdrowieHigiena from './products/zdrowieHigiena';

export type BaseGift = Readonly<{
  name: string;
  price: number;
  imageURL: string;
  desc: string;
}>;

const baseGiftsToGifts = <T extends Categories>(
  baseGifts: BaseGift[], category: T,
): Record<T, Gift[]> => ({
    [category]: baseGifts.map((gift): Gift => ({
      id: v4(),
      imageURL: gift.imageURL,
      description: gift.desc,
      name: gift.name,
      price: gift.price,
      category: [categoryIdByName[category]],
    })),
  }) as Record<T, Gift[]>;

const products: Partial<Record<Categories, Gift[]>> = {
  ...baseGiftsToGifts(agd, 'AGD'),
  ...baseGiftsToGifts(agdDoZabudowy, 'AGD do zabudowy'),
  ...baseGiftsToGifts(agdMale, 'AGD małe'),
  ...baseGiftsToGifts(filmy, 'Filmy'),
  ...baseGiftsToGifts(fotografia, 'Fotografia'),
  ...baseGiftsToGifts(gry, 'Gry'),
  ...baseGiftsToGifts(instrumenty, 'Instrumenty'),
  ...baseGiftsToGifts(komputery, 'Komputery'),
  ...baseGiftsToGifts(konsole, 'Konsole i automaty'),
  ...baseGiftsToGifts(ksiazka, 'Książki i Komiksy'),
  ...baseGiftsToGifts(makijaz, 'Makijaż'),
  ...baseGiftsToGifts(manicure, 'Manicure i pedicure'),
  ...baseGiftsToGifts(muzyka, 'Muzyka'),
  ...baseGiftsToGifts(narzedzia, 'Narzędzia'),
  ...baseGiftsToGifts(perfumy, 'Perfumy'),
  ...baseGiftsToGifts(pielegnacja, 'Pielęgnacja'),
  ...baseGiftsToGifts(rowery, 'Rowery i akcesoria'),
  ...baseGiftsToGifts(silownia, 'Siłownia i fitness'),
  ...baseGiftsToGifts(szkolne, 'Artykuły szkolne'),
  ...baseGiftsToGifts(telefony, 'Telefony i Akcesoria'),
  ...baseGiftsToGifts(telewizja, 'Telewizory i akcesoria'),
  ...baseGiftsToGifts(turystyka, 'Turystyka'),
  ...baseGiftsToGifts(wedkarstwo, 'Wędkarstwo'),
  ...baseGiftsToGifts(wyposazenie, 'Wyposażenie'),
  ...baseGiftsToGifts(zabawki, 'Zabawki'),
  ...baseGiftsToGifts(zdrowieHigiena, 'Zdrowie i higiena'),
  ...baseGiftsToGifts(opakowania, 'Opakowania'),
  ...baseGiftsToGifts(kwiaty, 'Kwiaty'),
};

const gifts = Object.values(products).flat();

export default gifts;
