import { DateTime } from 'luxon';

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
