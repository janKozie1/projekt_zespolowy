import { v4 } from 'uuid';

import type { Gift } from '../../types/data';

import type { Categories } from './categories';
import { categoryIdByName } from './categories';
import agd from './products/agd';
import agdDoZabudowy from './products/agdDoZabudowy';
import agdMale from './products/agdMale';
import fotografia from './products/fotografia';
import komputery from './products/komputery';
import konsole from './products/konsole';
import telefony from './products/telefony';
import telewizja from './products/telewizja';

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
  ...baseGiftsToGifts(telefony, 'Telefony i Akcesoria'),
  ...baseGiftsToGifts(agdMale, 'AGD małe'),
  ...baseGiftsToGifts(agd, 'AGD'),
  ...baseGiftsToGifts(agdDoZabudowy, 'AGD do zabudowy'),
  ...baseGiftsToGifts(telewizja, 'Telewizory i akcesoria'),
  ...baseGiftsToGifts(konsole, 'Konsole i automaty'),
  ...baseGiftsToGifts(fotografia, 'Fotografia'),
  ...baseGiftsToGifts(komputery, 'Komputery'),
};

const gifts = Object.values(products).flat();

export default gifts;
