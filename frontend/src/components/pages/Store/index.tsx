import type { ReactElement } from 'react';

import Box from '@mui/material/Box';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import PageHeader from '../../molecules/PageHeader';
import ShopCard from '../../organisms/ShopCard';

const Store = (): ReactElement => (
  <PageContainer>
    <PageHeader title="Sklep" />
    <Box mt={8}>
      <Rows gap={8}>
        {Array.from({ length: 15 }, (_, i) => (
          <ShopCard key={i} />
        ))}
      </Rows>
    </Box>
  </PageContainer>
);

export default Store;
