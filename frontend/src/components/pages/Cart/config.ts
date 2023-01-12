import { lazy } from 'react';

import { CartRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const CartPage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof CartRoutes>> = {
  paths: {
    [CartRoutes.CART]: {
      render: CartPage,
    },
  },
};

export default config;
