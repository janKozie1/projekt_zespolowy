import { useRef, useState } from 'react';
import type { ReactElement } from 'react';

import {
  isNil, groupBy, add, isEmpty,
} from 'lodash';
import type { Writable } from 'type-fest';

import { InfoOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Tab, Box, Divider, Button, TextField, Tooltip,
} from '@mui/material';

import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';
import { useDrawers } from '../../../hooks/useDrawers';
import type { Gift, ShoppingCart } from '../../../services/api/types/data';
import { CartStatus } from '../../../services/api/types/data';
import { FinishCartDrawerModel } from '../../../services/drawers/models';
import { DateFormat, formatDate } from '../../../utils/date';
import { isNotNil } from '../../../utils/guards';
import { roundMoney } from '../../../utils/number';
import type { Nullable } from '../../../utils/types';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Icon from '../../molecules/Icon';
import Loading from '../../molecules/Loading';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import { useConstantData } from '../../organisms/ConstantDataProvider';
import EventCart from '../../organisms/EventCart';
import TemporaryEventCart from '../../organisms/TemporaryEventCart';

enum Tabs {
  current = 'current',
  confirmed = 'confirmed',
  past = 'past',
}

const Cart = (): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const { loggedInUser } = useConstantData();

  const drawers = useDrawers();

  const [activeTab, setActiveTab] = useState(Tabs.current);
  const inputRef = useRef<HTMLInputElement>(null);

  const [shoppingCarts, { loading: cartsLoading }] = useApiRequest(api.cart.allCarts, {
    immediateArgs: emptyArgs,
  });
  const [events, { loading: eventsLoading }] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });
  const [gifts, { loading: giftsLoading }] = useApiRequest(api.gifts.allGifts, {
    immediateArgs: emptyArgs,
  });
  const [users, { loading: usersLoading }] = useApiRequest(api.user.allUsers, {
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

  const onCartConfirm = async (cart: ShoppingCart) => {
    await api.cart.updateStatus({ cartId: cart.id, status: CartStatus.ready });
    refreshQueries([api.cart.allCarts]);
  };

  const onAmountPaid = async (cart: ShoppingCart, remainingToPay: number) => {
    const parsedAmount = Number(inputRef.current?.value ?? '0');

    if (Number.isFinite(parsedAmount)) {
      await api.payment.pay({ amount: Math.min(parsedAmount, remainingToPay), cartId: cart.id });
      refreshQueries([api.cart.allCarts]);
    }

    if (!isNil(inputRef.current)) {
      inputRef.current.value = '';
    }
  };

  const giftMap = new Map((gifts?.data ?? []).map((gift) => [gift.id, gift]));
  const eventsMap = new Map((events?.data ?? []).map((event) => [event.id, event]));

  const ownedByUser = (cart: ShoppingCart) => eventsMap.get(cart.event)?.owner === loggedInUser.id;

  const loading = cartsLoading
    || giftsLoading || eventsLoading || usersLoading
    || isNil(gifts) || isNil(shoppingCarts) || isNil(events) || isNil(users);

  const groupedByStatus = groupBy(
    shoppingCarts?.data, (cart) => cart.status,
  ) as Record<CartStatus, Nullable<ShoppingCart[]>>;

  const userMap = new Map((users?.data ?? []).map((user) => [user.id, user]));

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Koszyk" />
        <Tile>
          <Box width="100%">
            <TabContext value={activeTab}>
              <TabList onChange={(_, newTab: Tabs) => setActiveTab(newTab)}>
                <Tab label="Bieżące" value={Tabs.current} />
                <Tab label="Zatwierdzone" value={Tabs.confirmed} />
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
                      {(groupedByStatus[CartStatus.draft] ?? [])
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
                              receiver={loggedInUser.giftReceivers
                                .find((receiver) => receiver.id === event.giftReceiver)}
                              emptyCartMessage="Brak prezentów"
                              cart={cart}
                            >
                              {ownedByUser(cart) && (
                                <Box width="100%" display="flex" justifyContent="flex-end" mt={4}>
                                  <Button variant="outlined" onClick={async () => onCartConfirm(cart)}>
                                    Zatwierdź koszyk
                                  </Button>
                                </Box>
                              )}
                            </EventCart>
                          );
                        })}
                    </>
                  )}
                </TabPanel>
                <TabPanel value={Tabs.confirmed}>
                  {isEmpty(groupedByStatus[CartStatus.ready]) ? (
                    <Box width="100%" height="100%" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                      <Text type="body" variant="default">Brak zatwierdzonych koszyków</Text>
                      <Box mt={2}>
                        <Icon size="lg">
                          <ShoppingBagOutlined />
                        </Icon>
                      </Box>
                    </Box>
                  ) : (groupedByStatus[CartStatus.ready] ?? [])
                    .map((cart) => {
                      const event = eventsMap.get(cart.event);

                      if (isNil(event)) {
                        return null;
                      }

                      const alreadyPaidAmount = cart.payments.reduce((acc, curr) => acc + curr.amount, 0);
                      const remainingToPay = cart.gifts.map((gift) => gift.amount * (giftMap.get(gift.id)?.price ?? 0))
                        .reduce(add) - alreadyPaidAmount;

                      const paidByUsers = cart.payments
                        .reduce<Writable<typeof cart['payments'][number]>[]>((acc, payment) => {
                        const existing = acc.find((p) => p.userId === payment.userId);

                        if (!isNil(existing)) {
                          existing.amount += payment.amount;
                        } else {
                          acc.push({ ...payment });
                        }

                        return acc;
                      }, [])
                        .map((payment) => {
                          const user = userMap.get(payment.userId);

                          if (isNil(user)) {
                            return null;
                          }

                          return {
                            ...payment,
                            user,
                          };
                        }).filter(isNotNil);

                      return (
                        <EventCart
                          key={cart.id}
                          name={`${event.name} - ${formatDate(event.date, DateFormat.dayMonthYear)}`}
                          giftMap={giftMap}
                          receiver={loggedInUser.giftReceivers.find((receiver) => receiver.id === event.giftReceiver)}
                          emptyCartMessage="Brak prezentów"
                          cart={cart}
                          renderTotal={(total) => (
                            <Box display="flex" alignItems="center" gap={2}>
                              <Text type="body" variant="default">
                                {`Zapłacono ${roundMoney(alreadyPaidAmount)}zł / ${roundMoney(total)}zł`}
                              </Text>
                              <Box display="inline-flex">
                                <Tooltip
                                  placement="top"
                                  title={isEmpty(paidByUsers)
                                    ? 'Jeszcze nikt nie wpłacił pieniędzy'
                                    : paidByUsers.map((payment) => (
                                      <p key={payment.userId}>
                                        {`${payment.user.id === loggedInUser.id ? 'Ty' : payment.user.email} - ${roundMoney(payment.amount)}zł`}
                                      </p>
                                    ))}
                                >
                                  <Icon size="md">
                                    <InfoOutlined />
                                  </Icon>
                                </Tooltip>
                              </Box>
                            </Box>
                          )}
                        >
                          <Box width="100%" display="flex" justifyContent="flex-end" mt={3}>
                            {remainingToPay <= 0 ? (
                              <Button disabled={!ownedByUser(cart)} variant="contained" onClick={() => drawers.open(FinishCartDrawerModel({ cart }))}>
                                Zakończ
                              </Button>
                            ) : (
                              <Box display="flex" gap={4} justifyContent="flex-end">
                                <Button variant="contained" onClick={async () => onAmountPaid(cart, remainingToPay)}>
                                  Zapłać
                                </Button>
                                <Box width="50%">
                                  <TextField
                                    label="Kwota"
                                    type="number"
                                    size="small"
                                    inputRef={inputRef}
                                    InputProps={{ inputProps: { min: 0, max: remainingToPay } }}
                                  />
                                </Box>
                              </Box>
                            )}
                          </Box>
                        </EventCart>
                      );
                    })}
                </TabPanel>
                <TabPanel value={Tabs.past}>
                  {(groupedByStatus[CartStatus.done] ?? [])
                    .map((cart) => {
                      const event = eventsMap.get(cart.event);

                      if (isNil(event)) {
                        return null;
                      }

                      return (
                        <EventCart
                          key={cart.id}
                          name={`${event.name} - ${formatDate(event.date, DateFormat.dayMonthYear)}`}
                          giftMap={giftMap}
                          receiver={loggedInUser.giftReceivers.find((receiver) => receiver.id === event.giftReceiver)}
                          emptyCartMessage="Brak prezentów"
                          cart={cart}
                          renderTotal={(total) => (
                            <Box width="max-content" ml="auto" display="flex" flexDirection="column" gap={2} alignItems="flex-end">
                              <Text type="body" variant="default">
                                {`Zapłacono ${total}zł`}
                              </Text>
                              <Text type="caption" variant="default">
                                {`Data zakończenia: ${formatDate(cart.completionDate ?? new Date(), DateFormat.dayMonthYear)}`}
                              </Text>
                            </Box>
                          )}
                        />
                      );
                    })}
                </TabPanel>
              </Box>
            </TabContext>
          </Box>

        </Tile>
      </Rows>
    </PageContainer>
  );
};

export default Cart;
