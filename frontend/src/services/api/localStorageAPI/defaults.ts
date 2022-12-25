import { v4 } from 'uuid';

import type { LocalStorageShape } from './types';

type Defaults = Readonly<{
  [key in keyof LocalStorageShape]: LocalStorageShape[key]
}>;

const defaults: Defaults = {
  events: [],
  users: [],
  giftCategories: [],
  loggedInUser: null,
  eventCategories: [
    {
      id: v4(),
      name: 'Urodziny',
    },
    {
      id: v4(),
      name: 'Rocznica',
    },
    {
      id: v4(),
      name: 'Święto',
    },
  ],
};

export default defaults;
