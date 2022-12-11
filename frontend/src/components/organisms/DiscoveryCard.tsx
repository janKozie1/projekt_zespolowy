import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import styled from 'styled-components';

import Columns from '../atoms/Columns';
import Rows from '../atoms/Rows';
import Text from '../atoms/Text';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme._.sizes.width.discoveryCard};
  height: ${({ theme }) => theme._.sizes.height.discoveryCard};
  overflow: hidden;
  border-radius: ${({ theme }) => theme._.borders.radii.sm};
  box-shadow: ${({ theme }) => theme._.shadows.default};
`;

const CardMedia = styled.div`
  height: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: cover;
    max-height: 100%;
    width: 100%;
  }
`;

const DiscoveryCard = (): ReactElement => (
  <CardContainer>
    <CardMedia>
      <img src="https://placekitten.com/200/400" alt="kitten" />
    </CardMedia>
    <Box p={2} display="flex" justifyContent="space-between" flexDirection="column" flexGrow="1">
      <Rows gap={2}>
        <Text>Loorem ipsum</Text>
        <Text>Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lore... ipsum bla</Text>
      </Rows>
      <Columns gap={2}>
        <Text>#Święta</Text>
        <Text>#Ozdobne</Text>
        <Text>#Kasia</Text>
      </Columns>
    </Box>
  </CardContainer>
);

export default DiscoveryCard;
