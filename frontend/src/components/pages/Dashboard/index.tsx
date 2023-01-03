import type { ReactElement } from 'react';

import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

import { FavoriteBorder, Close, Add } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { toSpacing } from '../../../config/theme/fields/spacing';
import { useDrawers } from '../../../hooks/useDrawers';
import { AddPersonDrawerModel, AddEventDrawerModel } from '../../../services/drawers/models';

import Columns from '../../atoms/Columns';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Chip from '../../molecules/Chip';
import PageHeader from '../../molecules/PageHeader';
import DiscoveryCard from '../../organisms/DiscoveryCard';
import Notifications from '../../organisms/Notifications';

const DashboardLayout = styled.div`
  display: grid;
  height: 100%;
  gap: ${toSpacing(4)};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "calendar upcoming important addNew"
    "explore explore news news";
`;

const Today = styled.div`
  background: #D7CCC8 0% 0% no-repeat padding-box;
  padding: ${toSpacing(4)} ${toSpacing(4)};
`;

const Dashboard = (): ReactElement => {
  const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  const monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
  const currentYear = new Date().getFullYear();
  const now = new Date();
  const day = new Date().getDate();
  const currentMonth = monthNames[now.getMonth()];
  const dayOfWeek = daysOfWeek[now.getDay()];

  const { open } = useDrawers();

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Dashboard" />
        <DashboardLayout>
          <Tile gridArea="calendar">
            <Box display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="center" gap={2}>
              <Rows gap={8}>
                <Text type="heading" variant="h4">Kalendarz</Text>
                <Rows gap={16}>
                  <Box display="flex" flexDirection="column" width="max-content" alignItems="flex-start" gap={8}>
                    <Columns gap={4}>
                      <Today>
                        <Rows gap={24}>
                          <Text type="roboto" variant="regular">Dzisiejsza data</Text>
                          <Box display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="center" gap={2}>
                            <Text type="heading" variant="h5">
                              {day}
                              {currentMonth}
                            </Text>
                            <Text type="heading" variant="h5">
                              {dayOfWeek}
                            </Text>
                            <Text type="heading" variant="h5">
                              {currentYear}
                            </Text>
                          </Box>
                        </Rows>
                      </Today>
                      <Calendar className="react-calendar" />
                    </Columns>
                  </Box>
                </Rows>
              </Rows>
            </Box>
          </Tile>
          <Tile gridArea="upcoming">
            <Rows gap={4}>
              <Text type="heading" variant="h4">Nadchodzące</Text>
              <Rows gap={4}>
                <Rows gap={2}>
                  <Text type="body" variant="default">
                    2 września - Adam Nowak
                  </Text>
                  <Columns gap={4}>
                    <Chip variant="success" label="Posiada prezent" icon={<FavoriteBorder />} />
                    <Chip variant="default" label="Impreza zaplanowana" icon={<FavoriteBorder />} />
                  </Columns>
                </Rows>
                <Rows gap={2}>
                  <Text type="body" variant="default">
                    23 września - Kasia Nowak
                  </Text>
                  <Columns gap={4}>
                    <Chip variant="error" label="Nie posiada prezentu" icon={<Close />} />
                  </Columns>
                </Rows>
              </Rows>
            </Rows>
          </Tile>
          <Tile gridArea="important">
            <Rows gap={4}>
              <Text type="heading" variant="h4">Ważne daty</Text>
              <Rows gap={4}>
                <Text type="body" variant="default">
                  <Box display="flex" flexDirection="column" width="100%" alignItems="left" justifyContent="left" gap={4}>
                    <Rows gap={2}>
                      <Text type="roboto" variant="secondary"> Styczeń </Text>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">21 </Text>
                        <Text type="body" variant="default">Dzień Babci</Text>
                      </Columns>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">22 </Text>
                        <Text type="body" variant="default">Dzień Dziadka</Text>
                      </Columns>
                      <Text type="roboto" variant="secondary"> Luty</Text>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">14 </Text>
                        <Text type="body" variant="default">Walentynki</Text>
                      </Columns>
                      <Text type="roboto" variant="secondary"> Marzec</Text>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">8 </Text>
                        <Text type="body" variant="default">Dzień Kobiet</Text>
                      </Columns>
                      <Text type="roboto" variant="secondary"> Maj</Text>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">26 </Text>
                        <Text type="body" variant="default">Dzień Matki</Text>
                      </Columns>
                      <Text type="roboto" variant="secondary"> Czerwiec </Text>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">1 </Text>
                        <Text type="body" variant="default">Dzień Dziecka</Text>
                      </Columns>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">23 </Text>
                        <Text type="body" variant="default">Dzień Ojca</Text>
                      </Columns>
                      <Text type="roboto" variant="secondary"> Grudzień </Text>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">6 </Text>
                        <Text type="body" variant="default">Mikołaj</Text>
                      </Columns>
                      <Columns gap={4}>
                        <Text type="roboto" variant="secondary">24 </Text>
                        <Text type="body" variant="default">Wigilia</Text>
                      </Columns>
                    </Rows>
                  </Box>
                </Text>
              </Rows>
            </Rows>
          </Tile>
          <Tile gridArea="addNew">
            <Rows gap={3}>
              <Text type="heading" variant="h4">Zaplanuj coś nowego</Text>
              <Box display="flex" flexDirection="column" width="max-content" alignItems="flex-start" gap={4}>
                <Button variant="text" onClick={() => open(AddEventDrawerModel({ date: now }))} startIcon={<Add style={{ color: 'purple' }} />}><Text type="button" variant="medium">Dodaj wydarzenie</Text></Button>
                <Button variant="text" startIcon={<Add style={{ color: 'purple' }} />}><Text type="button" variant="medium">Dodaj pomysł</Text></Button>
                <Button variant="text" onClick={() => open(AddPersonDrawerModel())} startIcon={<Add style={{ color: 'purple' }} />}><Text type="button" variant="medium">Dodaj osobę</Text></Button>
              </Box>
            </Rows>
          </Tile>
          <Tile gridArea="explore">
            <Rows gap={4}>
              <Text type="heading" variant="h4">Odkrywaj</Text>
              <Box>
                <DiscoveryCard />
              </Box>
            </Rows>
          </Tile>
          <Tile gridArea="news">
            <Box display="flex" flexDirection="column" height="100%">
              <Text type="heading" variant="h4">Powiadomienia</Text>
              <Box flex="1">
                <Notifications />
              </Box>
            </Box>
          </Tile>
        </DashboardLayout>
      </Rows>
    </PageContainer>
  );
};

export default Dashboard;
