import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';


import Rows from '../atoms/Rows';
import Text from '../atoms/Text';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme._.borders.radii.sm};
  box-shadow: ${({ theme }) => theme._.shadows.default};

`;


const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme._.borders.radii.sm};
  border-bottom-left-radius: ${({ theme }) => theme._.borders.radii.sm};
  margin: 16px; // ustawienie marginesu na 16 pikseli z każdej strony
`;


const ShopCard = (): ReactElement => (
  <CardContainer>
    <ImageContainer>
      <Image src="https://placekitten.com/200/400" alt="kitten" />
    </ImageContainer>
    <Box p={4} display="flex" justifyContent="space-between" flexDirection="column" flexGrow="1">
      <Rows gap={8}>
        <Text type="heading" variant="h5">Tytuł</Text>
        <Text type="subtitle" variant="default">Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lore... ipsum bla</Text>
      </Rows>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center" width={100}>
      <Rows gap={1}>
        <Text type="heading" variant="h5">84,99</Text>
        <Box display="flex" flexDirection="column" width="max-content" alignItems="flex-start" gap={4}>
          <Box display="flex" justifyContent="center">
          </Box>
          <Button variant="contained" color="primary">Button 1</Button>
          <Button variant="contained" color="secondary">Button 2</Button>
        </Box>
      </Rows>
    </Box>
  </CardContainer>
);

export default ShopCard;