import { useState } from 'react';
import type { ReactElement } from 'react';

import { isNil } from 'lodash';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Tab, Box, Divider,
} from '@mui/material';

import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';
import type { Gift, ShoppingCart } from '../../../services/api/types/data';
import { DateFormat, formatDate } from '../../../utils/date';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Tile from '../../atoms/Tile';
import Loading from '../../molecules/Loading';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import { useConstantData } from '../../organisms/ConstantDataProvider';
import EventCart from '../../organisms/EventCart';
import TemporaryEventCart from '../../organisms/TemporaryEventCart';

enum Tabs {
  current = 'current',
  past = 'past',
}

const Cart = (): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const { loggedInUser } = useConstantData();

  const [activeTab, setActiveTab] = useState(Tabs.current);

  const [shoppingCarts, { loading: cartsLoading }] = useApiRequest(api.cart.allCarts, {
    immediateArgs: emptyArgs,
  });
  const [events, { loading: eventsLoading }] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });
  const [upcomingEvents, { loading: upcomingEventsLoading }] = useApiRequest(api.event.upcomfigUserEvents, {
    immediateArgs: emptyArgs,
  });
  const [gifts, { loading: giftsLoading }] = useApiRequest(api.gifts.allGifts, {
    immediateArgs: emptyArgs,
  });

  const onRemoveGiftFromCart = async (cart: ShoppingCart, gift: Gift) => {
    await api.cart.removeGift({ cartId: cart.id, giftId: gift.id });
    refreshQueries([api.cart.allCarts]);
  };

  const onUpdateGiftAmount = async (cart: ShoppingCart, gift: Gift, amount: number) => {
    await api.cart.updateAmount({ cartId: cart.id, giftId: gift.id, amount });
    refreshQueries([api.cart.allCarts]);
  };

  const giftMap = new Map((gifts?.data ?? []).map((gift) => [gift.id, gift]));
  const eventsMap = new Map((events?.data ?? []).map((event) => [event.id, event]));

  const loading = cartsLoading
    || giftsLoading || eventsLoading || upcomingEventsLoading
    || isNil(gifts) || isNil(shoppingCarts) || isNil(upcomingEvents) || isNil(events);

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Koszyk" />
        <Tile>
          <TabContext value={activeTab}>
            <TabList onChange={(_, newTab: Tabs) => setActiveTab(newTab)}>
              <Tab label="Bieżące" value={Tabs.current} />
              <Tab label="Przeszłe" value={Tabs.past} />
            </TabList>
            <Box mt={-0.5} width="100%"><Divider /></Box>
            <Box p={4} px={2}>
              <TabPanel value={Tabs.current}>
                {loading ? <Loading /> : (
                  <>
                    <TemporaryEventCart
                      giftMap={giftMap}
                      events={events.data ?? []}
                    />
                    {(shoppingCarts.data ?? [])
                      .filter((cart) => !cart.completed)
                      .map((cart) => {
                        const event = eventsMap.get(cart.event);

                        if (isNil(event)) {
                          return null;
                        }

                        return (
                          <EventCart
                            key={cart.id}
                            onRemove={async (gift) => onRemoveGiftFromCart(cart, gift)}
                            onUpdateAmount={async (gift, amount) => onUpdateGiftAmount(cart, gift, amount)}
                            name={`${event.name} - ${formatDate(event.date, DateFormat.dayMonthYear)}`}
                            giftMap={giftMap}
                            receiver={loggedInUser.giftReceivers.find((receiver) => receiver.id === event.giftReceiver)}
                            emptyCartMessage="Brak prezentów"
                            cart={cart}
                          />
                        );
                      })}
                  </>
                )}
              </TabPanel>
            </Box>
          </TabContext>
        </Tile>
      </Rows>
    </PageContainer>
  );
};

export default Cart;
