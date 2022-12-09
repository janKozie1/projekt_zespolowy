import { lazy } from 'react';

import { DashboardRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const DashboardPage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof DashboardRoutes>> = {
  paths: {
    [DashboardRoutes.DASHBOARD]: {
      render: DashboardPage,
    },
  },
};

export default config;
