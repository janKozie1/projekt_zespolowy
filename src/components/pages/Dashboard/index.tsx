import type { ReactElement } from 'react';

import { FavoriteBorder, Close, Add } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

import { toSpacing } from '../../../config/theme/fields/spacing';

import Columns from '../../atoms/Columns';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Chip from '../../molecules/Chip';
import PageHeader from '../../molecules/PageHeader';
import Calendar from '../../organisms/Calendar';
import DiscoveryCard from '../../organisms/DiscoveryCard';

const DashboardLayout = styled.div`
  display: grid;
  height: 100%;
  gap: ${toSpacing(8)};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "calendar calendar upcoming addNew"
    "explore explore news news";
`;

const Dashboard = (): ReactElement => (
  <PageContainer>
    <Rows gap={8}>
      <PageHeader title="Dashboard" />
      <DashboardLayout>
        <Tile gridArea="calendar">
          <Text>Kalendarz</Text>
          <Box pb={8} width="100%" display="flex" justifyContent="center" alignItems="center">
            <Calendar month={new Date()} />
          </Box>
        </Tile>
        <Tile gridArea="upcoming">
          <Rows gap={8}>
            <Text>Nadchodzące</Text>
            <Rows gap={4}>
              <Rows gap={2}>
                2 września - Adam Nowak
                <Columns gap={4}>
                  <Chip label="Posiada prezent" color="primary" icons={<FavoriteBorder />} fontColor="#303030" />
                  <Chip label="Impreza zaplanowana" color="success" icons={<FavoriteBorder />} fontColor="#303030" />
                </Columns>
              </Rows>
              <Rows gap={2}>
                23 września - Kasia Nowak
                <Columns gap={4}>
                  <Chip label="Brak prezentu" color="secondary" icons={<Close />} fontColor="#FFFFFF" />
                </Columns>
              </Rows>
            </Rows>
          </Rows>
        </Tile>
        <Tile gridArea="addNew">
          <Rows gap={8}>
            <Text>Zaplanuj coś nowego</Text>
            <Box display="flex" flexDirection="column" width="max-content" alignItems="flex-start">
              <Button variant="text" startIcon={<Add />}><div style={{ color: '#303030' }}>Dodaj wydarzenie</div></Button>
              <Button variant="text" startIcon={<Add />}><div style={{ color: '#303030' }}>Dodaj pomysł</div></Button>
              <Button variant="text" startIcon={<Add />}><div style={{ color: '#303030' }}>Dodaj osobę</div></Button>
            </Box>
          </Rows>
        </Tile>
        <Tile gridArea="explore">
          <Rows gap={8}>
            <Text>Odkrywaj</Text>
            <Box>
              <DiscoveryCard />
            </Box>
          </Rows>
        </Tile>
        <Tile gridArea="news">
          <Rows gap={8}>
            <Text>Aktualizacje</Text>
            <Text>Paczka została nadana dla: Zosia</Text>
          </Rows>
        </Tile>
      </DashboardLayout>
    </Rows>
  </PageContainer>
);

export default Dashboard;
