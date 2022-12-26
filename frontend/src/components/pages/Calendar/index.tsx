import type { ReactElement } from 'react';
import { useMemo } from 'react';

import { DateTime } from 'luxon';
import styled from 'styled-components';

import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';
import type { CalendarDay } from '../../../hooks/useCalendar';
import useCalendar from '../../../hooks/useCalendar';
import { useDrawers } from '../../../hooks/useDrawers';
import { AddEventDrawerModel, EditEventDrawerModel } from '../../../services/drawers/models';

import CalendarGrid from '../../atoms/CalendarGrid';
import Columns from '../../atoms/Columns';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Icon from '../../molecules/Icon';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import { useConstantData } from '../../organisms/ConstantDataProvider';
import { isDrawer } from '../../organisms/DrawersProvider';

import type { ParsedEvent } from './dataTransformation';
import { parseEvents } from './dataTransformation';

import Day from './components/molecules/Day';

const CalendarLayout = styled(CalendarGrid)`
  width: 100%;
`;

const Calendar = (): ReactElement => {
  const calendar = useCalendar();
  const drawers = useDrawers();
  const { eventCategories, users } = useConstantData();

  const { api } = useAPI();

  const { year } = calendar.month;

  const [events, { loading: eventsLoading }] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });

  const parsedEvents = useMemo(() => parseEvents(
    events?.data, eventCategories, users, year,
  ), [events, eventCategories, users, year]);

  const onDayClick = (day: CalendarDay) => {
    drawers.open(AddEventDrawerModel({ date: day.date.toJSDate() }));
  };

  const onEventClick = (event: ParsedEvent) => {
    drawers.open(EditEventDrawerModel({ event: event.originalEvent }));
  };

  const currentDay = DateTime.local().toISODate();

  const highlightedDate = isDrawer('AddEvent', drawers.drawer)
    ? DateTime.fromJSDate(drawers.drawer.date).toISODate()
    : null;

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Kalendarz" />
        <Tile>
          <Box px={3} pb={3} width="100%">
            <Columns gap={4} alignCenter>
              <Box>
                <Columns gap={2}>
                  <IconButton onClick={calendar.goToPrev}>
                    <Icon size="md">
                      <ArrowBackIosOutlined />
                    </Icon>
                  </IconButton>
                  <IconButton onClick={calendar.goToNext}>
                    <Icon size="md">
                      <ArrowForwardIosOutlined />
                    </Icon>
                  </IconButton>
                </Columns>
              </Box>
              <Box>
                <Text type="body" variant="default">
                  {`${calendar.month.monthLong} ${calendar.month.year}`}
                </Text>
              </Box>
            </Columns>
            <Box mt={4} px={2}>
              <Rows gap={4}>
                <Columns gap={5} regular>
                  {calendar.days.slice(0, 7).map((day) => (
                    <Text key={day.isoDate} type="caption" variant="default">
                      {day.date.weekdayLong}
                    </Text>
                  ))}
                </Columns>
                <CalendarLayout>
                  {calendar.days.map((day) => (
                    <Day
                      key={day.isoDate}
                      events={parsedEvents.get(day.isoDate) ?? []}
                      loading={eventsLoading}
                      onClick={onDayClick}
                      onEventClick={onEventClick}
                      day={day}
                      current={day.isoDate === currentDay}
                      highlighted={day.isoDate === highlightedDate}
                    />
                  ))}
                </CalendarLayout>
              </Rows>
            </Box>
          </Box>
        </Tile>
      </Rows>
    </PageContainer>
  );
};

export default Calendar;
