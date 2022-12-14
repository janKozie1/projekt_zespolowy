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
  gap: ${toSpacing(4)};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "calendar calendar upcoming addNew"
    "explore explore news news";
`;

const Dashboard = (): ReactElement => (
  <PageContainer>
    <Rows gap={4}>
      <PageHeader title="Dashboard" />
      <DashboardLayout>
        <Tile gridArea="calendar">
          <Rows gap={4}>
            <Text type="heading" variant="h4">Kalendarz</Text>
            <Box pb={4} width="100%" display="flex" justifyContent="center" alignItems="center">
              <Calendar month={new Date()} />
            </Box>
          </Rows>
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
        <Tile gridArea="addNew">
          <Rows gap={3}>
            <Text type="heading" variant="h4">Zaplanuj coś nowego</Text>
            <Box display="flex" flexDirection="column" width="max-content" alignItems="flex-start" gap={4}>
              <Button variant="text" startIcon={<Add />}>Dodaj wydarzenie</Button>
              <Button variant="text" startIcon={<Add />}>Dodaj pomysł</Button>
              <Button variant="text" startIcon={<Add />}>Dodaj osobę</Button>
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
          <Rows gap={4}>
            <Text type="heading" variant="h4">Aktualizacje</Text>
            <Text type="body" variant="default">Paczka została nadana dla: Zosia</Text>
          </Rows>
        </Tile>
      </DashboardLayout>
    </Rows>
  </PageContainer>
);

export default Dashboard;
