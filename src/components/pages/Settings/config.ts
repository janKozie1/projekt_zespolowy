import { lazy } from 'react';

import { SettingsRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const SettingsPage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof SettingsRoutes>> = {
  paths: {
    [SettingsRoutes.SETTINGS]: {
      render: SettingsPage,
    },
  },
};

export default config;
