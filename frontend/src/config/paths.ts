import { separateOptionalPaths } from '../utils/routes';
import type { RoutesToRoutesParams } from '../utils/routes';

export const BaseRoutes = separateOptionalPaths({
  BASE: '/',
} as const);

export const HomeRoutes = separateOptionalPaths({
  HOME: '/home',
} as const);

export type BaseRoutesProps = RoutesToRoutesParams<typeof BaseRoutes>;
