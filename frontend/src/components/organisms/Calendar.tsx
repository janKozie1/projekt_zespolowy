import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import { DateTime } from 'luxon';

import CalendarCell from '../atoms/CalendarCell';
import CalendarGrid from '../atoms/CalendarGrid';
import Text from '../atoms/Text';

type CalendarDay = Readonly<{
  date: DateTime;
  isoDate: string;
  inCurrentMonth: boolean;
}>;

const getCalendarDays = (month: Date): CalendarDay[] => {
  const baseDate = DateTime.fromJSDate(month).startOf('month');
  const daysInMonth = baseDate.endOf('month').diff(baseDate, 'days').as('days');

  const offset = baseDate.weekday - 1;

  return Array.from({ length: daysInMonth + offset }, (_, i) => {
    const date = baseDate.plus({ days: i - offset });

    return {
      date,
      isoDate: date.toISODate(),
      inCurrentMonth: i - offset >= 0,
    };
  });
};

type Props = Readonly<{
  month: Date;
}>;

const Calendar = ({ month }: Props): ReactElement => {
  const days = getCalendarDays(month);

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
