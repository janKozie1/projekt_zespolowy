import { lazy } from 'react';

import { PeopleRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const PeoplePage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof PeopleRoutes>> = {
  paths: {
    [PeopleRoutes.people]: {
      render: PeoplePage,
    },
  },
};

export default config;
