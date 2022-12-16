import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext } from 'react';

import api from '../../services/api';
import type { API } from '../../services/api/types';

const context = createContext<API>(api);

type Props = Readonly<{
  children: ReactNode;
}>;

const ApiProvider = ({ children }: Props): ReactElement => (
  <context.Provider value={api}>
    {children}
  </context.Provider>
);

export const useAPI = (): API => useContext(context);

export default ApiProvider;
