import type { ReactElement } from 'react';

import styled from 'styled-components';

import { FavoriteBorder, Close, Add } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 6fr 3fr;
  gap: ${toSpacing(4)};
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme._.sizes.width.productListImage};
  height: ${({ theme }) => theme._.sizes.height.productListImage};

  & > img {
    height: 80%;
    width: 80%;
    object-fit: contain;
  }
`;

const InputLabel = styled.label`
  display: block;
`;

const Dashboard = (): ReactElement => (
  <PageContainer>
   
      <Tile width="40%">
      <Rows gap={4}>
          <DashboardLayout>
          <Box p={1}>  /* box na opis i zdjęcie  */
          <Box>
          <ImageContainer>
        <img src="https://placekitten.com/512/512" alt="kitten" />
      </ImageContainer>
          <Rows gap={2}>
          <Text type="heading" variant="h4">Imię i nazwisko</Text>
          <Text type="subtitle" variant="default">
            Opis
          </Text>
          <Button variant="contained" component="label">
        Prześlij zdjęcie
        <input type="file" name="photo" accept="image/*" hidden />
      </Button>

      <Text type="heading" variant="h4">Tagi</Text>
        </Rows>
        </Box>
  </Box>


  <Box p={1}>  /* box na wprowadzanie danych */
    <Rows gap={1}>
      <InputLabel style={{ visibility: 'hidden' }}>Imię:</InputLabel>
      <input type="text" name="firstName" value="Imię" />
      <InputLabel style={{ visibility: 'hidden' }}> Nazwisko:</InputLabel>
      <input type="text" name="lastName" value="Nazwisko" />
      <InputLabel style={{ visibility: 'hidden' }}>Opis osoby:</InputLabel>
      <input type="text" name="opisOsoby" value="Opis osoby" />
      
      <InputLabel style={{ visibility: 'hidden' }}>Data:</InputLabel>
      <input type="text" name="data" value="DD-MM-RRRR" />
      <InputLabel style={{ visibility: 'hidden' }}>Opis prodktu:</InputLabel>
      <input type="text" name="opisProduktu" value="Co takiego?" />
    </Rows>

    <Rows gap={1}>
      <InputLabel style={{ visibility: 'hidden' }}>Zdjęcie:</InputLabel>
      <input type="file" name="photo" accept="image/*" hidden />
      <Button variant="contained" component="label">
        Dodaj kolejną datę
        <input type="file" name="photo" accept="image/*" hidden />
      </Button>
    </Rows>

    

  </Box>

    

          </DashboardLayout>
          
          <Box display="flex" flexDirection="column" alignItems="center">
  <Button variant="contained" component="label">
        Zapisz
      </Button>
      </Box>
          </Rows>
      </Tile>
      
  </PageContainer>
);




export default Dashboard;
