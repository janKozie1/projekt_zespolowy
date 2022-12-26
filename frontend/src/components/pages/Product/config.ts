import { lazy } from 'react';

import { ProductRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const ProductPage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof ProductRoutes>> = {
  paths: {
    [ProductRoutes.PRODUCT]: {
      render: ProductPage,
    },
  },
};

export default config;
