import { Fragment } from 'react';
import type { ReactElement } from 'react';

import { isNil } from 'lodash';
import styled from 'styled-components';

import { Cached, Check, Group } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import { toSpacing } from '../../../../../config/theme/fields/spacing';
import useDimensions from '../../../../../hooks/useDimensions';
import type { Event } from '../../../../../services/api/types/data';
import { CartStatus } from '../../../../../services/api/types/data';
import { withStopPropagation } from '../../../../../utils/fn';
import { isEmpty } from '../../../../../utils/guards';
import type { Nullable } from '../../../../../utils/types';
import Text from '../../../../atoms/Text';
import Icon from '../../../../molecules/Icon';
import { useConstantData } from '../../../../organisms/ConstantDataProvider';
import type { ParsedEvent } from '../../dataTransformation';

type TooltipContainerProps = Readonly<{
  width: Nullable<number>;
}>;

const TooltipContainer = styled.div<TooltipContainerProps>`
  min-width: ${({ width }) => (width ?? 133) - 15}px;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: ${toSpacing(1)} ${toSpacing(2)};
`;

type EventTileContainerProps = Pick<Event, 'builtIn'> & Readonly<{
  own: boolean;
  done: boolean;
  repeated: boolean;
}>;

const EventTileContainer = styled.div<EventTileContainerProps>`
  background-color: ${({ theme, own, done }) => (done
    ? own ? theme._.colors.accent.success : '#d3feda'
    : theme._.colors.greyscale[own ? 30 : 10])};
  border: ${({ theme, own }) => (own ? null : theme._.borders.styles.thin.greyscale[30])};
  border-style: ${({ own }) => (own ? null : 'dashed')};
  width: 100%;
  padding: ${toSpacing(1.5)} ${toSpacing(2)};
  border-radius: ${({ theme }) => theme._.borders.radii.sm};
  cursor: ${({ own }) => (own ? 'pointer' : 'default')};

  &:hover {
    box-shadow: ${({ theme, own }) => (!own ? null : theme._.shadows.weak)};
  }
`;

type Props = Readonly<{
  event: ParsedEvent;
  onClick: (event: ParsedEvent) => void;
}>;

const EventTile = ({ event, onClick }: Props): ReactElement => {
  const { loggedInUser } = useConstantData();
  const [ref, { width }] = useDimensions();

  const userOwnsEvent = event.owner.id === loggedInUser.id;
  const repeated = !isNil(event.originalEvent);
  const done = event.associatedShoppingCart?.status === CartStatus.done;

  const onEventClick = () => {
    if (userOwnsEvent) {
      onClick(event);
    }
  };

  return (
    <Tooltip
      placement="top"
      title={(
        <TooltipContainer width={width}>
          <span>Opis:</span>
          <span>{event.description}</span>
          <span>Kategorie:</span>
          <span>{event.categories[0].name}</span>
          {event.categories.slice(1).map((category) => (
            <Fragment key={category.id}>
              <span />
              <span>
                {' '}
                {category.name}
              </span>
            </Fragment>
          ))}
          <span>Założyciel:</span>
          <span>{userOwnsEvent ? 'Ty' : event.owner.email}</span>
        </TooltipContainer>
      )}
    >
      <EventTileContainer
        {...event}
        ref={ref}
        done={done}
        repeated={repeated}
        own={userOwnsEvent}
        onClick={withStopPropagation(onEventClick)}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text type="caption" variant="default">
            {event.name}
          </Text>
          <Box gap={2} display="flex" alignItems="center">
            {done && (
              <Icon size="md">
                <Check />
              </Icon>
            )}
            {repeated && !event.builtIn ? (
              <Icon size="md">
                <Cached />
              </Icon>
            ) : null}
            {!isEmpty(event.members) ? (
              <Icon size="md">
                <Group />
              </Icon>
            ) : null}
          </Box>

        </Box>
      </EventTileContainer>
    </Tooltip>
  );
};

export default EventTile;
