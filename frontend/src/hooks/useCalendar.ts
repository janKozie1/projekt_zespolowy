import { useState } from 'react';

import { DateTime } from 'luxon';

import type { Nullable } from '../utils/types';

export type CalendarDay = Readonly<{
  date: DateTime;
  isoDate: string;
  inCurrentMonth: boolean;
}>;

const getCalendarDays = (month: Date): CalendarDay[] => {
  const baseDate = DateTime.fromJSDate(month).startOf('month');
  const daysInMonth = baseDate.endOf('month').diff(baseDate, 'days').as('days');

  const offset = baseDate.weekday - 1;

  return Array.from({ length: 7 * 6 }, (_, i) => {
    const date = baseDate.plus({ days: i - offset });

    return {
      date,
      isoDate: date.toISODate(),
      inCurrentMonth: i - offset >= 0 && i - offset < daysInMonth,
    };
  });
};

const determineMonthFromDays = (days: CalendarDay[]): DateTime => days[Math.floor(days.length / 2)].date;

type UseCalendarArg = Readonly<{
  month?: Nullable<Date>;
}>;

type UserCalendarReturnValue = Readonly<{
  days: CalendarDay[];
  month: DateTime;
  goToNext: () => void;
  goToPrev: () => void;
}>;

const useCalendar = (config?: UseCalendarArg): UserCalendarReturnValue => {
  const [days, setDays] = useState(getCalendarDays(config?.month ?? new Date()));

  return {
    days,
    month: determineMonthFromDays(days),
    goToNext: () => setDays((prev) => getCalendarDays(determineMonthFromDays(prev).plus({ month: 1 }).toJSDate())),
    goToPrev: () => setDays((prev) => getCalendarDays(determineMonthFromDays(prev).minus({ month: 1 }).toJSDate())),
  };
};

export default useCalendar;
