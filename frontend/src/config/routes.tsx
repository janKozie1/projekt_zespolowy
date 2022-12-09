import SecureRoutesWrapper from '../components/organisms/SecureRoutesWrapper';
import calendarRoutes from '../components/pages/Calendar/config';
import dashboardRoutes from '../components/pages/Dashboard/config';
import homeRoutes from '../components/pages/Home/config';
import productRoutes from '../components/pages/Product/config';
import profileRoutes from '../components/pages/Profile/config';
import settingsRoutes from '../components/pages/Settings/config';
import storeRoutes from '../components/pages/Store/config';
import type { AnyRoutesConfig } from '../hooks/useRoutes';
import { emptyRoutesConfig } from '../hooks/useRoutes';
import type { RoutesConfig, WrapRoutes } from '../utils/routes';
import { mergeConfigs } from '../utils/routes';

import { BaseRoutes } from './paths';

const defaultSecureConfig: RoutesConfig<WrapRoutes<typeof BaseRoutes>> = {
  paths: {
    [BaseRoutes.BASE]: {
      render: SecureRoutesWrapper,
    },
  },
};

const secureRoutes: AnyRoutesConfig = [
  defaultSecureConfig,
  dashboardRoutes,
  homeRoutes,
  calendarRoutes,
  productRoutes,
  profileRoutes,
  settingsRoutes,
  storeRoutes,
].reduce(mergeConfigs, emptyRoutesConfig);

const insecureRoutes: AnyRoutesConfig = [
].reduce(mergeConfigs, emptyRoutesConfig);

const config = mergeConfigs(insecureRoutes, secureRoutes);
export default config;
