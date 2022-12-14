import type { ReactElement } from 'react';

import {
  HomeOutlined, LocalGroceryStoreOutlined, CalendarMonthOutlined, PersonOutlined, SettingsOutlined,
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
        icon: <HomeOutlined />,
        url: DashboardRoutes.DASHBOARD,
      },
      {
        id: 'store',
        title: 'Sklep',
        icon: <LocalGroceryStoreOutlined />,
        url: StoreRoutes.STORE,
      },
      {
        id: 'calendar',
        title: 'Kalendarz',
        icon: <CalendarMonthOutlined />,
        url: CalendarRoutes.CALENDAR,
      },
      {
        id: 'profile',
        title: 'Profil',
        icon: <PersonOutlined />,
        url: ProfileRoutes.profile,
      },
      {
        id: 'settings',
        title: 'Ustawienia',
        icon: <SettingsOutlined />,
        url: SettingsRoutes.SETTINGS,
      },
    ],
  },
];

export default navigation;
