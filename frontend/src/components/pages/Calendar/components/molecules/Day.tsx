import type { ReactElement } from 'react';

import styled from 'styled-components';

import Box from '@mui/material/Box';

import { toSpacing } from '../../../../../config/theme/fields/spacing';
import type { CalendarDay } from '../../../../../hooks/useCalendar';
import Text from '../../../../atoms/Text';
import Loading from '../../../../molecules/Loading';
import type { ParsedEvent } from '../../dataTransformation';

import EventTile from './EventTile';

type DayContainerProps = Readonly<{
  highlighted: boolean;
}>;

const DayContainer = styled.div<DayContainerProps>`
  width: 100%;
  min-height: 120px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme._.borders.radii.sm};
  box-shadow: ${({ theme, highlighted }) => (highlighted ? theme._.shadows.accent.success : theme._.shadows.weak)};
  padding: ${toSpacing(4)};
`;

type CurrentDayWrapperProps = Readonly<{
  current: boolean;
}>;

const CurrentDayWrapper = styled.div<CurrentDayWrapperProps>`
  position: relative;
  z-index: 1;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    aspect-ratio: 1/1;
    z-index: -1;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: ${toSpacing(1.5)};
    background-color: ${({ theme }) => theme._.colors.accent.primary};
    display: ${({ current }) => (current ? 'block' : 'none')}
  }
`;

type Props = Readonly<{
  day: CalendarDay;
  current: boolean;
  highlighted: boolean;
  loading: boolean;
  events: ParsedEvent[];
  onClick: (day: CalendarDay) => void;
  onEventClick: (event: ParsedEvent) => void;
}>;

const Day = ({
  day, current, highlighted, onClick, onEventClick, loading, events,
}: Props): ReactElement => (
  <DayContainer highlighted={highlighted} onClick={() => onClick(day)}>
    <CurrentDayWrapper current={current}>
      <Text type="caption" variant={day.inCurrentMonth ? 'default' : 'secondary'} inverted={current}>
        {day.date.day}
      </Text>
    </CurrentDayWrapper>
    <Box>
      {loading ? (
        <Box ml="auto" mr="auto" mt={6}>
          <Loading variant="calendarDay" />
        </Box>
      ) : (
        <Box mt={3}>
          {events.map((event) => <EventTile onClick={onEventClick} key={event.id} event={event} />)}
        </Box>
      )}
    </Box>
  </DayContainer>
);

export default Day;
