import type { User } from '../types/data';

export type LocalStorageShape = Readonly<{
  isLoggedIn: boolean;
  users: User[];
}>;
