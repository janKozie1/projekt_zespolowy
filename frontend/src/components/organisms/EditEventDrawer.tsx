import type { ReactElement } from 'react';

import Button from '@mui/material/Button';

import useApiRequest, { emptyArgs } from '../../hooks/useApiRequest';
import { useDrawers } from '../../hooks/useDrawers';
import type { EditEventDrawer as EditEventDrawerModel } from '../../services/drawers/models';
import { DateFormat, formatDate } from '../../utils/date';

import Rows from '../atoms/Rows';
import Drawer from '../molecules/Drawer';

import { useAPI } from './ApiProvider';
import type { Props as EventFormProps } from './EventForm';
import EventForm from './EventForm';

type Props = Readonly<{
  drawer: EditEventDrawerModel;
}>;

const EditEventDrawer = ({ drawer }: Props): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const drawers = useDrawers();

  const [allEvents, { loading }] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });

  const onMutationSuccess = () => {
    refreshQueries([api.event.allUserEvents]);
    drawers.close();
  };

  const onSubmit: EventFormProps['submitHandler'] = {
    onSubmit: async (data) => api.event.update({
      ...data,
      giftReceiver: data.giftReceiver ?? null,
      eventId: drawer.event.id,
      date: (allEvents?.data ?? []).find((event) => event.id === drawer.event.id)?.date ?? drawer.event.date,
    }),
    onSuccess: onMutationSuccess,
  };

  const onRemove = async () => {
    await api.event.remove({ eventId: drawer.event.id });
    onMutationSuccess();
  };

  return (
    <Drawer
      open={drawer.visible}
      header="Edytuj wydarzenie"
      subHeader={formatDate(drawer.event.date, DateFormat.yearMonthDay)}
      loading={loading}
    >
      <Rows gap={4}>
        <EventForm
          submitHandler={onSubmit}
          initialData={{
            ...drawer.event,
            giftReceiver: drawer.event.giftReceiver ?? undefined,
          }}
        />
        <Button variant="outlined" onClick={onRemove}>
          Usuń
        </Button>
      </Rows>
    </Drawer>
  );
};

export default EditEventDrawer;
