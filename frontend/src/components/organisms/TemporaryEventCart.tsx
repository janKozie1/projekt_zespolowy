import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';

import { v4 } from 'uuid';

import {
  Box, Button, Autocomplete, createFilterOptions, TextField, debounce,
} from '@mui/material';

import type { Event, Gift } from '../../services/api/types/data';
import { formatDate, DateFormat } from '../../utils/date';
import { isEmpty } from '../../utils/guards';
import type { Nullable } from '../../utils/types';

import Columns from '../atoms/Columns';

import { useAPI } from './ApiProvider';
import { useConstantData } from './ConstantDataProvider';
import EventCart from './EventCart';

type Props = Readonly<{
  giftMap: Map<string, Gift>;
  events: Event[];
}>;

const TemporaryEventCart = ({ giftMap, events }: Props): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const { loggedInUser } = useConstantData();

  const [assignToEventId, setAssignToEventId] = useState<Nullable<string>>();

  const removeTemporaryGift = async (gift: Gift) => {
    await api.cart.temporaryCart.removeGift(gift);
    refreshQueries([api.auth.loggedInUser]);
  };

  const onAssignToEvent = async () => {
    if (!isEmpty(assignToEventId)) {
      await api.cart.assignTemporaryCartToEvent({ event: assignToEventId });
      refreshQueries([api.auth.loggedInUser, api.cart.allCarts]);
    }
  };

  const onAmountChange = useMemo(() => debounce(async (gift: Gift, amount: number) => {
    await api.cart.temporaryCart.updateAmont({
      giftId: gift.id, amount: Number.isFinite(amount) ? Math.max(1, amount) : 1,
    });

    refreshQueries([api.cart.allCarts]);
  }, 100), [api, refreshQueries]);

  const eventOptions = events.map((event) => ({
    id: event.id,
    label: `${event.name} - ${formatDate(event.date, DateFormat.dayMonthYear)}`,
  }));

  return (
    <EventCart
      name="Nieprzypisane prezenty"
      emptyCartMessage="Brak nieprzypisanych prezentów"
      giftMap={giftMap}
      onRemove={removeTemporaryGift}
      onUpdateAmount={onAmountChange}
      cart={{
        completed: false,
        event: v4(),
        id: v4(),
        gifts: loggedInUser.temporarilySelectedGifts,
      }}
    >
      {!isEmpty(loggedInUser.temporarilySelectedGifts) && (
        <Box mt={6}>
          <Columns gap={4}>
            <Button variant="contained" onClick={onAssignToEvent} disabled={isEmpty(assignToEventId)}>
              Przypisz do
            </Button>
            <Autocomplete
              value={eventOptions.find((event) => event.id === assignToEventId)}
              onChange={(_, newValue) => setAssignToEventId(newValue?.id)}
              options={eventOptions}
              filterOptions={createFilterOptions({ limit: 8 })}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Wydarzenie" />}
            />
          </Columns>
        </Box>
      )}
    </EventCart>
  );
};

export default TemporaryEventCart;
