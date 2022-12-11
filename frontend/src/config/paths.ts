import { separateOptionalPaths } from '../utils/routes';
import type { RoutesToRoutesParams } from '../utils/routes';

export const BaseRoutes = separateOptionalPaths({
  BASE: '/',
} as const);

export const DashboardRoutes = separateOptionalPaths({
  DASHBOARD: '/dashboard',
} as const);

export const StoreRoutes = separateOptionalPaths({
  STORE: '/store',
} as const);

export const ProductRoutes = separateOptionalPaths({
  PRODUCT: '/product/:id',
} as const);

export const CalendarRoutes = separateOptionalPaths({
  CALENDAR: '/calendar',
} as const);

export const ProfileRoutes = separateOptionalPaths({
  profile: '/profile',
} as const);

export const SettingsRoutes = separateOptionalPaths({
  SETTINGS: '/settings',
} as const);

export type BaseRoutesProps = RoutesToRoutesParams<typeof BaseRoutes>;
