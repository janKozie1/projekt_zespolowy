import type { ReactElement } from 'react';

import { useDrawers } from '../../hooks/useDrawers';
import type { AddEventDrawer as AddEventDrawerModel } from '../../services/drawers/models';
import { DateFormat, formatDate } from '../../utils/date';

import Drawer from '../molecules/Drawer';

import { useAPI } from './ApiProvider';
import type { Props as EventFormProps } from './EventForm';
import EventForm from './EventForm';

type Props = Readonly<{
  drawer: AddEventDrawerModel;
}>;

const AddEventDrawer = ({ drawer }: Props): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const drawers = useDrawers();

  const onSubmit: EventFormProps['submitHandler'] = {
    onSubmit: async (data) => api.event.create({
      ...data,
      date: drawer.date,
    }),
    onSuccess: () => {
      refreshQueries([api.event.allUserEvents]);
      drawers.close();
    },
  };

  return (
    <Drawer
      open={drawer.visible}
      header="Dodaj wydarzenie"
      subHeader={formatDate(drawer.date, DateFormat.yearMonthDay)}
    >
      <EventForm
        submitHandler={onSubmit}
      />
    </Drawer>
  );
};

export default AddEventDrawer;
