import type { ReactElement } from 'react';

import { isNil } from 'lodash';

import type { AnyDrawerModel, AnyDrawerType } from '../../services/drawers/models';
import type { Nullable } from '../../utils/types';

import AddEventDrawer from './AddEventDrawer';
import AddPersonDrawer from './AddPersonDrawer';
import EditEventDrawer from './EditEventDrawer';
import FinishCartDrawer from './FinishCartDrawer';

type DrawerComponent<Drawer> = (arg: { drawer: Drawer }) => ReactElement;

const drawerMap: Readonly<{
  [key in AnyDrawerType]: DrawerComponent<Extract<AnyDrawerModel, { type: key }>>;
}> = {
  AddEvent: AddEventDrawer,
  EditEvent: EditEventDrawer,
  AddPerson: AddPersonDrawer,
  FinishCart: FinishCartDrawer,
};

type Props = Readonly<{
  drawer: Nullable<AnyDrawerModel>;
}>;

const RenderDrawers = ({ drawer }: Props): ReactElement | null => {
  if (isNil(drawer)) {
    return null;
  }

  const DrawerToRender = drawerMap[drawer.type] as DrawerComponent<AnyDrawerModel>;

  return <DrawerToRender drawer={drawer} />;
};

export default RenderDrawers;
