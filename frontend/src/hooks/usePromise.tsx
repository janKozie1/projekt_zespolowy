import {
  useEffect, useMemo, useRef, useState,
} from 'react';

import { isNil } from 'lodash';

import type { Nullable } from '../utils/types';

import useSelfUpdatingRef from './useSelfUpdatingRef';

type EmptyTuple = [];
export const emptyArgs: EmptyTuple = [];

type UsePromiseConfigArg<Args extends unknown[]> = Readonly<{
  immediateArgs?: Nullable<Args>;
}>;

const defaultConfig = {
  immediateArgs: null,
};

type UsePromiseReturnValue<Args extends unknown[], ReturnValue> = [
  Nullable<Awaited<ReturnValue>>,
  Readonly<{
    loading: boolean;
    run: (...args: Args) => Promise<void>;
  }>,
];

const usePromise = <Args extends unknown[], ReturnValue extends Promise<unknown>>(
  getter: (...args: Args) => ReturnValue, customConfig?: UsePromiseConfigArg<Args>,
): UsePromiseReturnValue<Args, ReturnValue> => {
  const config = { ...defaultConfig, ...customConfig };

  const immediateArgsRef = useRef<Args>(config.immediateArgs);

  const [loading, setLoading] = useState(!isNil(config.immediateArgs));
  const [value, setValue] = useState<Nullable<Awaited<ReturnValue>>>(null);

  const runPromiseRef = useSelfUpdatingRef<UsePromiseReturnValue<Args, ReturnValue>[1]['run']>(async (...args) => {
    setLoading(true);
    setValue(await getter(...args));
    setLoading(false);
  });

  const memoizedRunPromise = useMemo<UsePromiseReturnValue<Args, ReturnValue>[1]['run']>(() => async (
    ...args
  ) => runPromiseRef.current(...args), [runPromiseRef]);

  useEffect(() => {
    if (!isNil(immediateArgsRef.current)) {
      void memoizedRunPromise(...immediateArgsRef.current);
    }
  }, [memoizedRunPromise]);

  return [value, {
    run: memoizedRunPromise,
    loading,
  }];
};

export default usePromise;
