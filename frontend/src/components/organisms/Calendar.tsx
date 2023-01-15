import type { ReactElement } from 'react';

import { isNil } from 'lodash';
import { DateTime } from 'luxon';
import { useNavigate } from 'react-router';

import { Box } from '@mui/material';

import { CalendarRoutes } from '../../config/paths';
import colors from '../../config/theme/fields/colors';
import useCalendar from '../../hooks/useCalendar';
import useUpcomingEvents from '../../hooks/useUpcomingEvents';
import { CartStatus } from '../../services/api/types/data';

import CalendarCell from '../atoms/CalendarCell';
import CalendarGrid from '../atoms/CalendarGrid';
import Columns from '../atoms/Columns';
import Dot from '../atoms/Dot';
import Text from '../atoms/Text';

type Props = Readonly<{
  month: Date;
}>;

const Calendar = ({ month }: Props): ReactElement => {
  const { days } = useCalendar({ month });
  const navigate = useNavigate();

  const { upcomingEvents } = useUpcomingEvents({ includePast: true });

  const upcomingEventsMap = new Map(
    upcomingEvents.map((event) => [DateTime.fromJSDate(event.date).toISODate(), event]),
  );

  return (
    <Box display="flex" flexDirection="column" width="100%" gap={3}>
      <Columns gap={3} regular>
        {days.slice(0, 7).map((day) => (
          <Text key={day.isoDate} type="caption" variant="default">
            {day.date.weekdayLong}
          </Text>
        ))}
      </Columns>
      <CalendarGrid onClick={() => navigate(CalendarRoutes.CALENDAR)}>
        {days.map((day) => {
          const upcomingEvent = upcomingEventsMap.get(day.isoDate);

          return (
            <CalendarCell key={day.isoDate}>
              <Text type="body" variant={day.inCurrentMonth ? 'default' : 'secondary'}>{day.date.day}</Text>
              {!isNil(upcomingEvent) ? (
                <Box>
                  {isNil(upcomingEvent.associatedShoppingCart) ? <Dot color={colors.accent.error} /> : (
                    <>
                      {upcomingEvent.associatedShoppingCart.status === CartStatus.done && (
                        <Dot color={colors.accent.success} />
                      )}
                      {upcomingEvent.associatedShoppingCart.status === CartStatus.draft && (
                        <Dot color={colors.greyscale[50]} />
                      )}
                      {upcomingEvent.associatedShoppingCart.status === CartStatus.ready && (
                        <Dot color={colors.greyscale[50]} />
                      )}
                    </>
                  )}
                </Box>
              ) : null}
            </CalendarCell>
          );
        })}
      </CalendarGrid>
    </Box>

  );
};

export default Calendar;
