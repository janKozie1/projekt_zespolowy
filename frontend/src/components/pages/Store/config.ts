import { lazy } from 'react';

import { StoreRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const StorePage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof StoreRoutes>> = {
  paths: {
    [StoreRoutes.STORE]: {
      render: StorePage,
    },
  },
};

export default config;
