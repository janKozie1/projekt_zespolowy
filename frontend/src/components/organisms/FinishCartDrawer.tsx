import type { ReactElement } from 'react';

import { isNil } from 'lodash';

import { Box } from '@mui/material';

import useApiRequest, { emptyArgs } from '../../hooks/useApiRequest';
import { useDrawers } from '../../hooks/useDrawers';
import type { FinishCartDrawer as FinishCartDrawerModel } from '../../services/drawers/models';
import { roundMoney } from '../../utils/number';

import Rows from '../atoms/Rows';
import Text from '../atoms/Text';
import Drawer from '../molecules/Drawer';

import { useAPI } from './ApiProvider';
import { useConstantData } from './ConstantDataProvider';
import FinalizeEventForm from './FinalizeEventForm';

type Props = Readonly<{
  drawer: FinishCartDrawerModel;
}>;

const FinishCartDrawer = ({ drawer }: Props): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const drawers = useDrawers();

  const { loggedInUser } = useConstantData();

  const [users, { loading: usersLoading }] = useApiRequest(api.user.allUsers, {
    immediateArgs: emptyArgs,
  });
  const [events, { loading: eventsLoading }] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });

  const onEventCompleted = async () => {
    await api.cart.finalizeCart({ cartId: drawer.cart.id });
    refreshQueries([api.cart.allCarts]);
    drawers.close();
  };

  const userMap = new Map((users?.data ?? []).map((user) => [user.id, user]));
  const event = (events?.data ?? []).find((e) => e.id === drawer.cart.event);

  const giftReceiver = isNil(event) || isNil(event.giftReceiver)
    ? null
    : users?.data?.flatMap((user) => user.giftReceivers).find((gReceiver) => gReceiver.id === event.giftReceiver);

  return (
    <Drawer
      open={drawer.visible}
      loading={usersLoading || eventsLoading}
      header="Zakończ zakupy"
    >
      <Rows gap={8}>
        <Rows gap={2}>
          <Text type="body" variant="default">
            Wpłaty:
          </Text>
          <Box ml={3}>
            <Rows gap={1}>
              {drawer.cart.payments.map((payment) => {
                const user = userMap.get(payment.userId);

                if (isNil(user)) {
                  return null;
                }

                return (
                  <li key={payment.id}>
                    <Text type="caption" variant="default">
                      {`- ${user.email} - ${roundMoney(payment.amount)}zł`}
                    </Text>
                  </li>
                );
              })}

            </Rows>
          </Box>
        </Rows>
        <FinalizeEventForm
          initialData={{
            billingAddress: loggedInUser.details?.billingAddress,
            deliveryAddress: giftReceiver?.address,
          }}
          submitHandler={{
            onSubmit: async () => Promise.resolve({
              ok: true,
              errors: {},
            }),
            onSuccess: onEventCompleted,
          }}
        />
      </Rows>

    </Drawer>
  );
};

export default FinishCartDrawer;
