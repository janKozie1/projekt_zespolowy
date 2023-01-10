import { v4 } from 'uuid';

import { GiftCategory } from '../../types/data';
import type { Gift } from '../../types/data';

export const giftCategories = {
  toys: { id: v4(), name: 'Zabawki' },
  cosmetics: { id: v4(), name: 'Kosmetyki' },
  vouchers: { id: v4(), name: 'Kupony' },
  tools: { id: v4(), name: 'Narzędzia' },
} satisfies Record<string, GiftCategory>;

const placeholderDesc = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna`;

const gifts: Gift[] = [
  {
    id: v4(),
    category: [giftCategories.cosmetics.id],
    imageURL: 'https://placekitten.com/300/301',
    description: placeholderDesc,
    name: 'Kosmetyk',
    price: 12.00,
  },
  {
    id: v4(),
    category: [giftCategories.tools.id],
    imageURL: 'https://placekitten.com/305/301',
    description: placeholderDesc,
    name: 'Narzędzie',
    price: 14.00,
  },
  {
    id: v4(),
    category: [giftCategories.toys.id],
    imageURL: 'https://placekitten.com/300/301',
    description: placeholderDesc,
    name: 'Zabawka',
    price: 34.33,
  },
  {
    id: v4(),
    category: [giftCategories.vouchers.id],
    imageURL: 'https://placekitten.com/300/301',
    description: placeholderDesc,
    name: 'Kupon',
    price: 7.49,
  },
];

export default gifts;
