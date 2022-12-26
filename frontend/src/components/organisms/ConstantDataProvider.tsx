import type { ReactElement, ReactNode } from 'react';
import { useContext, createContext, useMemo } from 'react';

import isNil from 'lodash/isNil';

import useApiRequest, { emptyArgs } from '../../hooks/useApiRequest';
import type { EventCategory, User } from '../../services/api/types/data';
import type { Nullable } from '../../utils/types';

import Loading from '../molecules/Loading';

import { useAPI } from './ApiProvider';

type ContextValue = Readonly<{
  loggedInUser: User;
  eventCategories: EventCategory[];
  users: User[];
}>;

const context = createContext<Nullable<ContextValue>>(null);

type Props = Readonly<{
  loggedInUser: User;
  children: ReactNode;
}>;

const ConstantDataProvider = ({ loggedInUser, children }: Props): ReactElement => {
  const { api } = useAPI();

  const [categories, { loading: categoriesLoading }] = useApiRequest(api.event.allCategories, {
    immediateArgs: emptyArgs,
  });
  const [users, { loading: usersLoading }] = useApiRequest(api.user.allUsers, {
    immediateArgs: emptyArgs,
  });

  const loading = usersLoading || categoriesLoading;

  const contextValue = useMemo<ContextValue>(() => ({
    users: users?.data ?? [],
    eventCategories: categories?.data ?? [],
    loggedInUser,
  }), [loggedInUser, users, categories]);

  if (loading) {
    return <Loading />;
  }

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
};

export const useConstantData = (): ContextValue => {
  const value = useContext(context);

  if (isNil(value)) {
    throw Error('used context outside of the provider');
  }
  return value;
};

export default ConstantDataProvider;