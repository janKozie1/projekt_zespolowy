import { createContext, useContext } from 'react';

import noop from 'lodash/noop';

import type { AnyDrawerModel } from '../services/drawers/models';
import type { Nullable } from '../utils/types';

export type ContextValue = Readonly<{
  drawer: Nullable<AnyDrawerModel>;
  open: (drawer: AnyDrawerModel) => void;
  close: () => void;
}>;

export const context = createContext<ContextValue>({
  drawer: null,
  open: noop,
  close: noop,
});

export const useDrawers = (): ContextValue => useContext(context);
