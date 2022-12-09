import type { ReactElement } from 'react';

import {
  Home, LocalGroceryStore, CalendarMonth, Person, Settings,
} from '@mui/icons-material';

import {
  DashboardRoutes,
  StoreRoutes,
  CalendarRoutes,
  ProfileRoutes,
  SettingsRoutes,
} from './paths';

export type NavItem = Readonly<{
  id: string;
  title: string;
  icon?: ReactElement;
  url: string;
  disabled?: boolean;
  associatedRoutes?: string[];
}>;

export type NavGroup = Readonly<{
  id: string;
  title?: string;
  items: readonly NavItem[];
}>;

const navigation: readonly NavGroup[] = [

  {
    id: 'main',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <Home />,
        url: DashboardRoutes.DASHBOARD,
      },
      {
        id: 'store',
        title: 'Sklep',
        icon: <LocalGroceryStore />,
        url: StoreRoutes.STORE,
      },
      {
        id: 'calendar',
        title: 'Kalendarz',
        icon: <CalendarMonth />,
        url: CalendarRoutes.CALENDAR,
      },
      {
        id: 'profile',
        title: 'Profil',
        icon: <Person />,
        url: ProfileRoutes.profile,
      },
      {
        id: 'settings',
        title: 'Ustawienia',
        icon: <Settings />,
        url: SettingsRoutes.SETTINGS,
      },
    ],
  },
];

export default navigation;
