import type { ReactElement } from 'react';
import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router';

import { HomeRoutes } from '../../config/paths';

const SecureRoutesWrapper = (): ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(HomeRoutes.HOME);
  }, [navigate]);

  return <Outlet />;
};

export default SecureRoutesWrapper;
