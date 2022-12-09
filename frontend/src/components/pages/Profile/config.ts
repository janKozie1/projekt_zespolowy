import { lazy } from 'react';

import { ProfileRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const ProfilePage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof ProfileRoutes>> = {
  paths: {
    [ProfileRoutes.profile]: {
      render: ProfilePage,
    },
  },
};

export default config;
