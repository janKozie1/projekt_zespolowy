import type { ReactElement } from 'react';

import { useDrawers } from '../../hooks/useDrawers';
import type { AddPersonDrawer as AddPersonDrawerModel } from '../../services/drawers/models';

import Drawer from '../molecules/Drawer';

import { useAPI } from './ApiProvider';
import type { Props as PersonFormProps } from './PersonForm';
import PersonForm from './PersonForm';

type Props = Readonly<{
  drawer: AddPersonDrawerModel;
}>;

const AddPersonDrawer = ({ drawer }: Props): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const drawers = useDrawers();

  const onSubmit: PersonFormProps['submitHandler'] = {
    onSubmit: api.user.giftReceivers.add,
    onSuccess: () => {
      refreshQueries([api.auth.loggedInUser]);
      drawers.close();
    },
  };

  return (
    <Drawer open={drawer.visible} header="Dodaj osobę">
      <PersonForm
        submitHandler={onSubmit}
      />
    </Drawer>
  );
};

export default AddPersonDrawer;
