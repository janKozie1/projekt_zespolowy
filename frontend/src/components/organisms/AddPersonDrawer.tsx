import type { ReactElement } from 'react';

import type { AddPersonDrawer as AddPersonDrawerModel } from '../../services/drawers/models';

import Drawer from '../molecules/Drawer';

type Props = Readonly<{
  drawer: AddPersonDrawerModel;
}>;

const AddPersonDrawer = ({ drawer }: Props): ReactElement => (
  <Drawer open={drawer.visible} header="Dodaj osobę">{drawer.id}</Drawer>
);

export default AddPersonDrawer;
