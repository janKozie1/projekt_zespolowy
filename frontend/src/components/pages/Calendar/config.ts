import { lazy } from 'react';

import { CalendarRoutes } from '../../../config/paths';
import type { RoutesConfig, WrapRoutes } from '../../../utils/routes';

const CalendarPage = lazy(async () => import('.'));

const config: RoutesConfig<WrapRoutes<typeof CalendarRoutes>> = {
  paths: {
    [CalendarRoutes.CALENDAR]: {
      render: CalendarPage,
    },
  },
};

export default config;
