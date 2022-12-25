import type { ReactElement } from 'react';
import { useEffect } from 'react';

import { isNil } from 'lodash';
import { Outlet, useMatch, useNavigate } from 'react-router';

import navigation, { authNavigation } from '../../config/navigation';
import {
  AuthRoutes, BaseRoutes, DashboardRoutes, HomeRoutes,
} from '../../config/paths';
import useApiRequest, { emptyArgs } from '../../hooks/useApiRequest';

import Loading from '../molecules/Loading';

import { useAPI } from './ApiProvider';
import ConstantDataProvider from './ConstantDataProvider';
import DrawersProvider from './DrawersProvider';
import Nav from './Nav';

const SecureRoutesWrapper = (): ReactElement => {
  const navigate = useNavigate();
  const isInRoot = !isNil(useMatch(BaseRoutes.BASE));

  const { api } = useAPI();

  const [loggedInUser, { loading }] = useApiRequest(api.auth.loggedInUser, {
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

  if (loading || isNil(loggedInUser) || isNil(loggedInUser.data)) {
    return <Loading />;
  }

  return (
    <ConstantDataProvider loggedInUser={loggedInUser.data}>
      <DrawersProvider>
        <Nav navigation={navigation} authNav={authNavigation}>
          <Outlet />
        </Nav>
      </DrawersProvider>
    </ConstantDataProvider>

  );
};

export default SecureRoutesWrapper;
