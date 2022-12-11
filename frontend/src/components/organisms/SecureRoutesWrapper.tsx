import type { ReactElement } from 'react';
import { useEffect } from 'react';

import { isNil } from 'lodash';
import { Outlet, useMatch, useNavigate } from 'react-router';

import navigation from '../../config/navigation';
import { BaseRoutes, DashboardRoutes } from '../../config/paths';

import Nav from './Nav';

const SecureRoutesWrapper = (): ReactElement => {
  const navigate = useNavigate();
  const isInRoot = !isNil(useMatch(BaseRoutes.BASE));

  useEffect(() => {
    if (isInRoot) {
      navigate(DashboardRoutes.DASHBOARD);
    }
  }, [navigate, isInRoot]);

  return (
    <Nav navigation={navigation}>
      <Outlet />
    </Nav>
  );
};

export default SecureRoutesWrapper;
