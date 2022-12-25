import type { ReactElement } from 'react';

import { isNil } from 'lodash';

import type { AnyDrawerModel, AnyDrawerType } from '../../services/drawers/models';
import type { Nullable } from '../../utils/types';

import AddEventDrawer from './AddEventDrawer';

const drawerMap: Readonly<{
  [key in AnyDrawerType]: (arg: { drawer: Extract<AnyDrawerModel, { type: key }> }) => ReactElement;
}> = {
  AddEvent: AddEventDrawer,
};

type Props = Readonly<{
  drawer: Nullable<AnyDrawerModel>;
}>;

const RenderDrawers = ({ drawer }: Props): ReactElement | null => {
  if (isNil(drawer)) {
    return null;
  }

  const DrawerToRender = drawerMap[drawer.type];

  return <DrawerToRender drawer={drawer} />;
};

export default RenderDrawers;
