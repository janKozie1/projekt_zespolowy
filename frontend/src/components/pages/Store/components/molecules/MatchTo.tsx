import type { ReactElement } from 'react';
import { useState } from 'react';

import { isNil } from 'lodash';
import styled from 'styled-components';

import { Box, Button } from '@mui/material';

import useApiRequest, { emptyArgs } from '../../../../../hooks/useApiRequest';
import useOnClickOutside from '../../../../../hooks/useOnClickOtuside';
import type { Event, GiftReceiver } from '../../../../../services/api/types/data';
import { DateFormat, formatDate } from '../../../../../utils/date';
import FloatingContainer from '../../../../atoms/FloatingContainer';
import { useAPI } from '../../../../organisms/ApiProvider';
import { useConstantData } from '../../../../organisms/ConstantDataProvider';
import List from '../../../../organisms/List';

const FloatingBackground = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme._.shadows.weak};
  max-height: 300px;
  overflow: auto;
  overflow-x: hidden;
`;

type Props = Readonly<{
  onGiftReceiverSelected: (giftReceiver: GiftReceiver) => void;
  onEventSelected: (event: Event) => void;
}>;

const MatchTo = ({ onEventSelected, onGiftReceiverSelected }: Props): ReactElement => {
  const { api } = useAPI();
  const { loggedInUser } = useConstantData();

  const [open, setOpen] = useState(false);

  const [events] = useApiRequest(api.event.upcomfigUserEvents, {
    immediateArgs: emptyArgs,
  });

  const { ref } = useOnClickOutside({
    handler: () => setOpen(false),
  });

  const onItemSelected = (id: string) => {
    const selectedGiftReceiver = loggedInUser.giftReceivers.find((g) => g.id === id);
    const selectedEvent = events?.data?.find((e) => e.id === id);

    if (!isNil(selectedGiftReceiver)) {
      setOpen(false);
      onGiftReceiverSelected(selectedGiftReceiver);
    } else if (!isNil(selectedEvent)) {
      setOpen(false);
      onEventSelected(selectedEvent);
    }
  };

  return (
    <Box position="relative" width="max-content">
      <Button onClick={() => setOpen((prev) => !prev)}>
        Dopasuj do
      </Button>
      {open && (
        <FloatingContainer x="right" y="top" xAlignment="outside" yAlignment="inside" stopPropagation>
          <Box ml={2} ref={ref}>
            <FloatingBackground>
              <Box width="max-content" p={4}>
                <List
                  selectedItems={null}
                  items={[
                    {
                      id: 'events',
                      label: 'Nachodzące wydarzenia',
                      children: (events?.data ?? []).map((event) => ({
                        id: event.id,
                        label: `${event.name} - ${formatDate(event.date, DateFormat.dayMonthYear)}`,
                      })),
                    },
                    {
                      id: 'people',
                      label: 'Osoby',
                      children: loggedInUser.giftReceivers.map((receiver) => ({
                        id: receiver.id,
                        label: receiver.address.nameAndSurname,
                      })),
                    },
                  ]}
                  onChange={onItemSelected}
                />
              </Box>
            </FloatingBackground>
          </Box>
        </FloatingContainer>
      )}

    </Box>

  );
};

export default MatchTo;
