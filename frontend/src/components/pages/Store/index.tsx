import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import styled from 'styled-components';
import { toSpacing } from '../../../config/theme/fields/spacing';


import PageContainer from '../../atoms/PageContainer';
import PageHeader from '../../molecules/PageHeader';
import ShopCard from '../../organisms/ShopCard';

const ShopLayout = styled.div`
  display: grid;
  height: 50%;
  gap: ${toSpacing(4)};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "header header header header"
    "content content content content"
    "footer footer footer footer";
`;



const Store = (): ReactElement => (
    <PageContainer>
     <PageHeader title="Sklep" />
     <ShopLayout>
        </ShopLayout>
        <Box>
              <ShopCard />
            </Box>
    </PageContainer>
  );

export default Store;
