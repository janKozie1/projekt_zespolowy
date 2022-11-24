import SecureRoutesWrapper from '../components/organisms/SecureRoutesWrapper';
import homeRoutes from '../components/pages/Home/config';
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
  homeRoutes,
].reduce(mergeConfigs, emptyRoutesConfig);

const insecureRoutes: AnyRoutesConfig = [
].reduce(mergeConfigs, emptyRoutesConfig);

const config = mergeConfigs(insecureRoutes, secureRoutes);
export default config;
