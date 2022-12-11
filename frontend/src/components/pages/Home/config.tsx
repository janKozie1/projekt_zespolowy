import { lazy } from 'react';

import { HomeRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const HomePage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof HomeRoutes>> = {
  paths: {
    [HomeRoutes.HOME]: {
      render: HomePage,
    },
  },
};

export default config;
