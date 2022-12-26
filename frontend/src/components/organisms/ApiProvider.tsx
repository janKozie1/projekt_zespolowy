import type { ReactElement, ReactNode } from 'react';
import {
  useMemo, useState,
  createContext, useContext,
} from 'react';

import { noop } from 'lodash';

import api from '../../services/api';
import type { API } from '../../services/api/types';
import type { DeepObjectValues } from '../../utils/types';

type RefreshableQueries = DeepObjectValues<API>[];

type ContextValue = Readonly<{
  api: API;
  refreshQueries: (queries: RefreshableQueries) => void;
}>;

const apiContext = createContext<ContextValue>({ api, refreshQueries: noop });
export const refreshableContext = createContext<RefreshableQueries>([]);

type Props = Readonly<{
  children: ReactNode;
}>;

const ApiProvider = ({ children }: Props): ReactElement => {
  const [toRefresh, setToRefresh] = useState<RefreshableQueries>([]);

  const contextValue = useMemo<ContextValue>(() => ({
    api,
    refreshQueries: (queries) => {
      setToRefresh(() => {
        setTimeout(() => setToRefresh([]), 100);
        return queries;
      });
    },
  }), [setToRefresh]);

  return (
    <refreshableContext.Provider value={toRefresh}>
      <apiContext.Provider value={contextValue}>
        {children}
      </apiContext.Provider>
    </refreshableContext.Provider>
  );
};

export const useAPI = (): ContextValue => useContext(apiContext);

export default ApiProvider;
