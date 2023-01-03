import { useState } from 'react';
import type { ReactElement } from 'react';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab, Box, Divider } from '@mui/material';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Tile from '../../atoms/Tile';
import PageHeader from '../../molecules/PageHeader';

enum Tabs {
  current = 'current',
  past = 'past',
}

const Cart = (): ReactElement => {
  const [activeTab, setActiveTab] = useState(Tabs.current);

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Koszyk" />
        <Tile>
          <TabContext value={activeTab}>
            <TabList onChange={(_, newTab: Tabs) => setActiveTab(newTab)}>
              <Tab label="Bieżące" value={Tabs.current} />
              <Tab label="Przeszłe" value={Tabs.past} />
            </TabList>
            <Box mt={-0.5} width="100%"><Divider /></Box>
            <Box p={4}>
              <TabPanel value={Tabs.current}>
                asdf
              </TabPanel>
            </Box>
          </TabContext>
        </Tile>
      </Rows>
    </PageContainer>
  );
};

export default Cart;
