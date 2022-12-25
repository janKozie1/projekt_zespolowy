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

  const [isLoggedIn, { loading }] = usePromise(api.auth.isLoggedIn, {
    immediateArgs: emptyArgs,
  });

  useEffect(() => {
    if (isInRoot && isLoggedIn === true) {
      navigate(DashboardRoutes.DASHBOARD);
    }
  }, [navigate, isInRoot, isLoggedIn]);

  useEffect(() => {
    if (!loading && isLoggedIn === false) {
      if (isInRoot) {
        navigate(HomeRoutes.HOME);
      } else {
        navigate(AuthRoutes.LOGIN);
      }
    }
  }, [navigate, isInRoot, isLoggedIn, loading]);

  if (loading || isLoggedIn !== true) {
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
