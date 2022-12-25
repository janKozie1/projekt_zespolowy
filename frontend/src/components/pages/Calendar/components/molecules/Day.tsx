import type { ReactElement } from 'react';

import styled from 'styled-components';

import { toSpacing } from '../../../../../config/theme/fields/spacing';
import type { CalendarDay } from '../../../../../hooks/useCalendar';
import Text from '../../../../atoms/Text';

const DayContainer = styled.div`
  width: 100%;
  min-height: 120px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme._.borders.radii.sm};
  box-shadow: ${({ theme }) => theme._.shadows.weak};
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
    left: 0;
    top: 0;
    transform: translate(-25%, -25%);
    padding: ${toSpacing(2)};
    background-color: ${({ theme }) => theme._.colors.accent.primary};
    display: ${({ current }) => (current ? 'block' : 'none')}
  }
`;

type Props = Readonly<{
  day: CalendarDay;
  current: boolean;
  onClick: (day: CalendarDay) => void;
}>;

const Day = ({ day, current, onClick }: Props): ReactElement => (
  <DayContainer onClick={() => onClick(day)}>
    <CurrentDayWrapper current={current}>
      <Text type="caption" variant={day.inCurrentMonth ? 'default' : 'secondary'} inverted={current}>
        {day.date.day}
      </Text>
    </CurrentDayWrapper>
  </DayContainer>
);

export default Day;
