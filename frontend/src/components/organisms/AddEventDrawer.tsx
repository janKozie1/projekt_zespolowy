import type { ReactElement } from 'react';

import type { AddEventDrawer as AddEventDrawerModel } from '../../services/drawers/models';

import Drawer from '../molecules/Drawer';

type Props = Readonly<{
  drawer: AddEventDrawerModel;
}>;

const AddEventDrawer = ({ drawer }: Props): ReactElement => <Drawer open={drawer.visible} header="Dodaj wydarzenie">{drawer.id}</Drawer>;

export default AddEventDrawer;
