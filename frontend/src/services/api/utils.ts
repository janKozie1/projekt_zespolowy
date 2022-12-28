import type { FNShape } from '../../utils/fn';
import { makeDelayed } from '../../utils/fn';
import { isLiteral } from '../../utils/guards';
import type { Literal } from '../../utils/types';

import type { API, SyncApi } from './types';
import type { ToSyncAPI } from './types/utils';

export const syncToDelayedAPI = (
  syncApi: SyncApi, maxDelay: number,
): API => {
  const recurse = <T extends Literal>(
    arg: T,
  ): ToSyncAPI<T> => Object.fromEntries(Object.entries(arg).map(([key, value]) => {
      if (isLiteral(value)) {
        return [key, recurse(value)];
      }

      return [key, makeDelayed(value as FNShape<unknown[], unknown>, maxDelay)];
    })) as ToSyncAPI<T>;

  return recurse(syncApi);
};

export default {};
