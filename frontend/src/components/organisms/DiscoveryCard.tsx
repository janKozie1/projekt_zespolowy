import type { ReactElement } from 'react';

import styled from 'styled-components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
  height: 42%;
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
    <Box p={4} display="flex" justifyContent="space-between" flexDirection="column" flexGrow="1">
      <Rows gap={2}>
        <Text type="heading" variant="h5">Tytuł</Text>
        <Text type="caption" variant="default">Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lorem ipsum bla Lore... ipsum bla</Text>
      </Rows>
      <Box ml="auto" mt="auto">
        <Button variant="contained">
          Button
        </Button>
      </Box>
    </Box>
  </CardContainer>
);

export default DiscoveryCard;
