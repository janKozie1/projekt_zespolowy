import type { ReactElement } from 'react';

import styled from 'styled-components';

import { toSpacing } from '../../../../../config/theme/fields/spacing';
import type { Event } from '../../../../../services/api/types/data';
import Text from '../../../../atoms/Text';

const EventTileContainer = styled.div`
  background-color: ${({ theme }) => theme._.colors.greyscale[30]};
  width: 100%;
  padding: ${toSpacing(1.5)} ${toSpacing(2)};
  border-radius: ${({ theme }) => theme._.borders.radii.sm};

  &:hover {
    box-shadow: ${({ theme }) => theme._.shadows.weak};
  }
`;

type Props = Readonly<{
  event: Event;
}>;

const EventTile = ({ event }: Props): ReactElement => (
  <EventTileContainer>
    <Text type="caption" variant="default">
      {event.name}
    </Text>
  </EventTileContainer>
);

export default EventTile;
