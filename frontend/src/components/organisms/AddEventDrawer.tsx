import type { ReactElement } from 'react';

import { useDrawers } from '../../hooks/useDrawers';
import type { AddEventDrawer as AddEventDrawerModel } from '../../services/drawers/models';

import Drawer from '../molecules/Drawer';

import type { Props as AddEventFormProps } from './AddEventForm';
import AddEventForm from './AddEventForm';
import { useAPI } from './ApiProvider';

type Props = Readonly<{
  drawer: AddEventDrawerModel;
}>;

const AddEventDrawer = ({ drawer }: Props): ReactElement => {
  const api = useAPI();
  const drawers = useDrawers();

  const onSubmit: AddEventFormProps['submitHandler'] = {
    onSubmit: async (data) => api.event.create({
      ...data,
      date: drawer.date,
    }),
    onSuccess: () => drawers.close(),
  };

  return (
    <Drawer open={drawer.visible} header="Dodaj wydarzenie">
      <AddEventForm
        submitHandler={onSubmit}
      />
    </Drawer>
  );
};

export default AddEventDrawer;
