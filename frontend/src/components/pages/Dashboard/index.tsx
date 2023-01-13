import type { ReactElement } from 'react';

import { isNil } from 'lodash';
import styled from 'styled-components';

import {
  FavoriteBorder, Close, ShoppingBag, PeopleOutline,
} from '@mui/icons-material';
import Box from '@mui/material/Box';

import { toSpacing } from '../../../config/theme/fields/spacing';
import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';
import { CartStatus } from '../../../services/api/types/data';
import { compareDays, DateFormat, formatDate } from '../../../utils/date';

import Columns from '../../atoms/Columns';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Chip from '../../molecules/Chip';
import Loading from '../../molecules/Loading';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import Calendar from '../../organisms/Calendar';
import { useConstantData } from '../../organisms/ConstantDataProvider';
import DiscoveryCard from '../../organisms/DiscoveryCard';
import Notifications from '../../organisms/Notifications';

const DashboardLayout = styled.div`
  display: grid;
  height: 100%;
  gap: ${toSpacing(4)};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 470px auto;
  grid-template-areas:
    "calendar calendar upcoming"
    "explore explore news";
`;

const Dashboard = (): ReactElement => {
  const { api } = useAPI();
  const { loggedInUser } = useConstantData();

  const [events, { loading: eventsLoading }] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });

  const [shoppingCarts, { loading: cartsLoading }] = useApiRequest(api.cart.allCarts, {
    immediateArgs: emptyArgs,
  });

  const [users, { loading: usersLoading }] = useApiRequest(api.user.allUsers, {
    immediateArgs: emptyArgs,
  });

  const today = new Date();

  const upcomingEvents = (events?.data ?? [])
    .filter((event) => compareDays(today, event.date) <= 0)
    .slice(0, 30)
    .map((event) => {
      const associatedShoppingCart = (shoppingCarts?.data ?? [])
        .find((cart) => cart.event === event.id);

      const owner = (users?.data ?? [])
        .find((user) => user.id === event.owner);

      const giftReceiver = owner?.giftReceivers
        .find((receiver) => receiver.id === event.giftReceiver);

      return {
        ...event,
        ownerId: event.owner,
        associatedShoppingCart,
        owner,
        giftReceiver,
      };
    });

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Dashboard" />
        <DashboardLayout>
          <Tile gridArea="calendar">
            <Rows gap={4}>
              <Text type="heading" variant="h4">Kalendarz</Text>
              <Box pb={4} width="100%" display="flex" justifyContent="center" alignItems="center">
                <Calendar month={new Date()} />
              </Box>
            </Rows>
          </Tile>
          <Tile gridArea="upcoming">
            <Box height="100%" overflow="hidden" display="flex" flexDirection="column" gap={4}>
              <Text type="heading" variant="h4">Nadchodzące</Text>
              <Box height="max-content" overflow="auto">
                <Rows gap={4}>
                  {eventsLoading || cartsLoading || usersLoading ? <Loading /> : (
                    <>
                      {upcomingEvents
                        .map(({
                          associatedShoppingCart, owner, giftReceiver, ...event
                        }) => (
                          <Rows gap={2} key={event.id}>
                            <Text type="body" variant="default">
                              {`${formatDate(event.date, DateFormat.monthNameDayYear)} - ${event.name} ${!isNil(giftReceiver) ? ` - ${giftReceiver.address.nameAndSurname}` : ''}`}
                            </Text>
                            <Columns gap={4}>
                              {isNil(associatedShoppingCart) ? (
                                <Chip variant="error" label="Nie posiada prezentu" icon={<Close />} />
                              ) : (
                                <>
                                  {associatedShoppingCart.status === CartStatus.done ? (
                                    <Chip variant="success" label="Posiada prezent" icon={<FavoriteBorder />} />
                                  ) : <Chip variant="default" label="Koszyk otwarty" icon={<ShoppingBag />} />}
                                </>
                              )}
                              {event.ownerId !== loggedInUser.id && !isNil(owner) ? (
                                <Chip variant="default" label={`Założone przez: ${owner.email}`} icon={<PeopleOutline />} />
                              ) : null}

                            </Columns>
                          </Rows>
                        ))}
                    </>
                  )}
                </Rows>
              </Box>

            </Box>
          </Tile>
          <Tile gridArea="explore">
            <Rows gap={4}>
              <Text type="heading" variant="h4">Odkrywaj</Text>
              <Box>
                <DiscoveryCard />
              </Box>
            </Rows>
          </Tile>
          <Tile gridArea="news">
            <Box display="flex" flexDirection="column" height="100%">
              <Text type="heading" variant="h4">Powiadomienia</Text>
              <Box flex="1">
                <Notifications />
              </Box>
            </Box>
          </Tile>
        </DashboardLayout>
      </Rows>
    </PageContainer>
  );
};

export default Dashboard;
