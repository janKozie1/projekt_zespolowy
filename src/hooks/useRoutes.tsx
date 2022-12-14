import type { ReactElement } from 'react';
import { useMemo, useRef } from 'react';

import first from 'lodash/first';
import isNil from 'lodash/isNil';
import type { RouteObject } from 'react-router';
import { useParams, useLocation } from 'react-router';
import { useRoutes as useRRRoutes } from 'react-router-dom';

import { drop } from '../utils/array';
import { isEmpty } from '../utils/guards';
import type {
  RoutesConfigObjectShape, RoutesConfig, RouteConfig,
} from '../utils/routes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyRoutesConfig = RoutesConfig<{ paths: Record<any, any> }>;
export type EmptyRoutesConfig = RoutesConfig<RoutesConfigObjectShape>;

export const emptyRoutesConfig: EmptyRoutesConfig = { paths: {} };

type TransformedRoutesConfig = Readonly<{
  path: string;
  config: RouteConfig<string>;
}>;

type FinalRoutesConfig = Readonly<{
  path: string;
  config: RouteConfig<string>;
  element: ReactElement;
}>;

const createRouteComponent = (
  config: TransformedRoutesConfig,
) => () => {
  const location = useLocation();
  const params = useParams();

  return <config.config.render {...params} params={params} location={location} />;
};

const groupRoutes = (routes: FinalRoutesConfig[]): RouteObject[] => {
  const groupRoot = first(routes);

  if (isEmpty(groupRoot)) {
    return [];
  }

  const routeGroup: FinalRoutesConfig[] = [];

  const { inTheSameGroup, inOtherGroups } = drop(groupRoot)(routes).reduce((acc, current) => {
    if (acc.shouldPutInOtherGroups) {
      acc.inOtherGroups.push(current);
    } else if (current.path.startsWith(groupRoot.path)) {
      acc.inTheSameGroup.push(current);
    } else {
      acc.shouldPutInOtherGroups = true;
      acc.inOtherGroups.push(current);
    }

    return acc;
  }, { inTheSameGroup: [...routeGroup], inOtherGroups: [...routeGroup], shouldPutInOtherGroups: false });

  return [
    {
      path: groupRoot.path,
      element: groupRoot.element,
      children: groupRoutes(inTheSameGroup.map((route) => ({
        ...route,
      }))),
    },
    ...groupRoutes(inOtherGroups),
  ];
};

const reusePaths = (configs: FinalRoutesConfig[]): FinalRoutesConfig[] => configs.map((config) => ({
  ...config,
  element: !isNil(config.config.reusePath)
    ? configs.find((el) => el.path === config.config.reusePath)?.element ?? config.element
    : config.element,
}));

const transformConfig = <Routes extends RoutesConfigObjectShape>(
  config: RoutesConfig<Routes>,
): FinalRoutesConfig[] => {
  const transformedConfigs: TransformedRoutesConfig[] = Object.entries(config.paths).map(([path, pathConfig]) => ({
    path,
    config: pathConfig as RouteConfig<string>,
  }));

  return transformedConfigs.map((transformedConfig) => {
    const Element = createRouteComponent(transformedConfig);

    return {
      ...transformedConfig,
      element: <Element />,
    };
  });
};

export const configToRenderableRoutes = <Routes extends RoutesConfigObjectShape>(
  config: RoutesConfig<Routes>,
): RouteObject[] => groupRoutes(reusePaths(transformConfig(config)));

type UseRoutesArg = Readonly<{
  routes: AnyRoutesConfig;
}>;

type UseRoutesReturnValue = Readonly<{
  renderableRoutes: ReturnType<typeof useRRRoutes>;
}>;

const useRoutes = ({
  routes,
}: UseRoutesArg): UseRoutesReturnValue => {
  const routesRef = useRef(routes);

  const parsedRoutes = useMemo(() => configToRenderableRoutes(routesRef.current), []);
  const renderableRoutes = useRRRoutes(parsedRoutes);

  return {
    renderableRoutes,
  };
};

export default useRoutes;
