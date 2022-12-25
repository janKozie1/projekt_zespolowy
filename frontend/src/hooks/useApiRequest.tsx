import {
  useContext,
  useEffect, useMemo, useRef, useState,
} from 'react';

import { isNil } from 'lodash';

import { refreshableContext } from '../components/organisms/ApiProvider';
import type { Nullable } from '../utils/types';

import useSelfUpdatingRef from './useSelfUpdatingRef';

type EmptyTuple = [];
export const emptyArgs: EmptyTuple = [];

type UseApiRequestConfigArg<Args extends unknown[]> = Readonly<{
  immediateArgs?: Nullable<Args>;
}>;

const defaultConfig = {
  immediateArgs: null,
};

type UseApiRequestReturnValue<Args extends unknown[], ReturnValue> = [
  Nullable<{ data: Nullable<Awaited<ReturnValue>> } >,
  Readonly<{
    loading: boolean;
    run: (...args: Args) => Promise<void>;
  }>,
];

const useApiRequest = <Args extends unknown[], ReturnValue extends Promise<unknown>>(
  getter: (...args: Args) => ReturnValue, customConfig?: UseApiRequestConfigArg<Args>,
): UseApiRequestReturnValue<Args, ReturnValue> => {
  const toRefresh = useContext(refreshableContext);

  const config = { ...defaultConfig, ...customConfig };

  const immediateArgsRef = useRef<Args>(config.immediateArgs);
  const lastUsedArgsRef = useRef<Args>();

  const [loading, setLoading] = useState(!isNil(config.immediateArgs));
  const [value, setValue] = useState<Nullable<Awaited<ReturnValue>>>(null);

  const runPromiseRef = useSelfUpdatingRef<UseApiRequestReturnValue<Args, ReturnValue>[1]['run']>(async (...args) => {
    lastUsedArgsRef.current = args;
    setLoading(true);
    setValue(await getter(...args));
    setLoading(false);
  });

  const memoizedRunPromise = useMemo<UseApiRequestReturnValue<Args, ReturnValue>[1]['run']>(() => async (
    ...args
  ) => runPromiseRef.current(...args), [runPromiseRef]);

  useEffect(() => {
    if (!isNil(immediateArgsRef.current)) {
      lastUsedArgsRef.current = immediateArgsRef.current;
      void memoizedRunPromise(...immediateArgsRef.current);
    }
  }, [memoizedRunPromise]);

  useEffect(() => {
    if (toRefresh.some((fn) => fn === getter) && !isNil(lastUsedArgsRef.current)) {
      void memoizedRunPromise(...lastUsedArgsRef.current);
    }
  }, [getter, toRefresh, memoizedRunPromise]);

  return [loading ? null : { data: value }, {
    run: memoizedRunPromise,
    loading,
  }];
};

export default useApiRequest;
