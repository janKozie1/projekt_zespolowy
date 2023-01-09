import isDate from 'lodash/isDate';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import { DateTime } from 'luxon';

import type { Nullable } from './types';

export enum DateFormat {
  yearMonth = 'yyyy.LL',
  yearMonthDay = 'yyyy.LL.dd',
  monthShortYear = 'LL/yy',
  monthNameYear = 'LLLL yyyy',
  monthNameDayYear = 'LLLL dd yyyy',
  dayMonth = 'dd.LL',
  dayMonthYear = 'dd.LL.yyyy',
  monthYear = 'LL.yyyy',
  weekdayYearMonthDay = 'ccc, yyyy.LL.dd',
  month = 'LLLL',
}

export const formatDate = (
  date: Date | DateTime, format: DateFormat,
): string => (DateTime.isDateTime(date) ? date : DateTime.fromJSDate(date)).toFormat(format);

export function getDateTime(date: Date | DateTime, format?: DateFormat): DateTime;
export function getDateTime(date: Nullable<Date | DateTime | string>, format?: DateFormat): Nullable<DateTime>;
export function getDateTime(date: Nullable<Date | DateTime | string>, format?: DateFormat): Nullable<DateTime> {
  if (isNil(date)) {
    return null;
  }

  let dateTime: DateTime | null = null;

  if (isString(date)) {
    dateTime = isNil(format) ? DateTime.fromISO(date) : DateTime.fromFormat(date, format);
  } else if (isDate(date)) {
    dateTime = DateTime.fromJSDate(date);
  } else {
    dateTime = date;
  }

  return dateTime.isValid ? dateTime : null;
}

export function compareDays(
  firstDay: Date | DateTime, secondDay: Date | DateTime
): number;
export function compareDays(
  firstDay: Nullable<Date | DateTime>, secondDay: Nullable<Date | DateTime>
): Nullable<number>;
export function compareDays(
  firstDay: Nullable<Date | DateTime>, secondDay: Nullable<Date | DateTime>,
): Nullable<number> {
  const effectiveDateTime = getDateTime(firstDay);
  const otherDateTime = getDateTime(secondDay);

  if (isNil(effectiveDateTime) || isNil(otherDateTime)) {
    return isNil(firstDay) && isNil(secondDay) ? 0 : null;
  }

  if (effectiveDateTime.hasSame(otherDateTime, 'day')) {
    return 0;
  }

  if (effectiveDateTime.endOf('day') > otherDateTime.endOf('day')) {
    return 1;
  }

  return -1;
}
