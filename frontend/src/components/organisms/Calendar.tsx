import type { ReactElement } from 'react';

import Box from '@mui/material/Box';

import useCalendar from '../../hooks/useCalendar';

import CalendarCell from '../atoms/CalendarCell';
import CalendarGrid from '../atoms/CalendarGrid';
import Text from '../atoms/Text';

type Props = Readonly<{
  month: Date;
}>;

const Calendar = ({ month }: Props): ReactElement => {
  const { days } = useCalendar({ month });

  return (
    <CalendarGrid>
      {days.map((day) => (day.inCurrentMonth ? (
        <CalendarCell key={day.isoDate}>
          <Text type="body" variant="default">{day.date.day}</Text>
        </CalendarCell>
      ) : <Box key={day.isoDate} />))}
    </CalendarGrid>
  );
};

export default Calendar;
