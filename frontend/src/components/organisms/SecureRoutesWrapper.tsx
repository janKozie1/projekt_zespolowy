import type { ReactElement } from 'react';
import { useEffect } from 'react';

import { isNil } from 'lodash';
import { Outlet, useMatch, useNavigate } from 'react-router';

import navigation, { authNavigation } from '../../config/navigation';
import {
  AuthRoutes, BaseRoutes, DashboardRoutes, HomeRoutes,
} from '../../config/paths';
import usePromise, { emptyArgs } from '../../hooks/usePromise';

import Loading from '../molecules/Loading';

import { useAPI } from './ApiProvider';
import DrawersProvider from './DrawersProvider';
import Nav from './Nav';

const SecureRoutesWrapper = (): ReactElement => {
  const navigate = useNavigate();
  const isInRoot = !isNil(useMatch(BaseRoutes.BASE));

  const api = useAPI();

  const [loggedInUser, { loading }] = usePromise(api.auth.loggedInUser, {
    immediateArgs: emptyArgs,
  });

  useEffect(() => {
    if (isInRoot && !isNil(loggedInUser) && !isNil(loggedInUser.data)) {
      navigate(DashboardRoutes.DASHBOARD);
    }
  }, [navigate, isInRoot, loggedInUser]);

  useEffect(() => {
    if (!loading && isNil(loggedInUser)) {
      if (isInRoot) {
        navigate(HomeRoutes.HOME);
      } else {
        navigate(AuthRoutes.LOGIN);
      }
    }
  }, [navigate, isInRoot, loggedInUser, loading]);

  if (loading || isNil(loggedInUser)) {
    return <Loading />;
  }

  return (
    <DrawersProvider>
      <Nav navigation={navigation} authNav={authNavigation}>
        <Outlet />
      </Nav>
    </DrawersProvider>
  );
};

export default SecureRoutesWrapper;
