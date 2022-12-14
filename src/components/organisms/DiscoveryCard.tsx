import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

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

const ButtonC = styled.div`
  background-color:#D7CCC8;
  margin-bottom:${toSpacing(3)};
  margin-left:${toSpacing(26)};
  border-radius: ${toSpacing(0.5)};
`;

const StyledButton = styled(Button)`
  color: #303030;
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
    </Box>
    <Columns gap={2}>
      <ButtonC>
        <StyledButton variant="text">BUTTON</StyledButton>
      </ButtonC>
    </Columns>
  </CardContainer>
);

export default DiscoveryCard;
