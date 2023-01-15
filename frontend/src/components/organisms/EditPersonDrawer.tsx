import type { ReactElement } from 'react';

import { useDrawers } from '../../hooks/useDrawers';
import type { EditPersonDrawer as EditPersonDrawerModel } from '../../services/drawers/models';

import Drawer from '../molecules/Drawer';

import { useAPI } from './ApiProvider';
import type { Props as PersonFormProps } from './PersonForm';
import PersonForm from './PersonForm';

type Props = Readonly<{
  drawer: EditPersonDrawerModel;
}>;

const EditPersonDrawer = ({ drawer }: Props): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const drawers = useDrawers();

  const onSubmit: PersonFormProps['submitHandler'] = {
    onSubmit: async (data) => api.user.giftReceivers.edit({ ...data, id: drawer.person.id }),
    onSuccess: () => {
      refreshQueries([api.auth.loggedInUser]);
      drawers.close();
    },
  };

  return (
    <Drawer open={drawer.visible} header="Edytuj osobę">
      <PersonForm
        submitHandler={onSubmit}
        initialData={drawer.person}
      />
    </Drawer>
  );
};

export default EditPersonDrawer;
