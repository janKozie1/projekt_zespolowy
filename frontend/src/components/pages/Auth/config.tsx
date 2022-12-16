import { lazy } from 'react';

import { Outlet } from 'react-router';

import { AuthRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

import WelcomePageBg from '../../atoms/WelcomePageBg';

const AuthPage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof AuthRoutes>> = {
  paths: {
    [AuthRoutes.BASE]: {
      render: () => <WelcomePageBg><Outlet /></WelcomePageBg>,
    },
    [AuthRoutes.LOGIN]: {
      render: () => <AuthPage type="login" />,
    },
    [AuthRoutes.REGISTER]: {
      render: () => <AuthPage type="register" />,
    },
    [AuthRoutes.LOGOUT]: {
      render: () => <AuthPage type="logout" />,
    },
  },
};

export default config;
