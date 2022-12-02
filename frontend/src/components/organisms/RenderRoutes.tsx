import type { ReactElement } from 'react';
import { Suspense } from 'react';

import useRoutes from '../../hooks/useRoutes';
import type { RoutesConfig, RoutesConfigObjectShape } from '../../utils/routes';

import Loading from '../molecules/Loading';

type Props<Routes extends RoutesConfig<RoutesConfigObjectShape>> = Readonly<{
  routes: Routes;
}>;

const RenderRoutes = <Routes extends RoutesConfig<RoutesConfigObjectShape>>({
  routes,
}: Props<Routes>): ReactElement | null => {
  const { renderableRoutes } = useRoutes({ routes });
  return <Suspense fallback={<Loading />}>{renderableRoutes}</Suspense>;
};

export default RenderRoutes;
