import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import styled from 'styled-components';

import Columns from '../../atoms/Columns';
import HomeContainer from '../../atoms/HomeContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';

import PlayButton from './components/molecules/PlayButton';

const MainText = styled.span`
  font-size: ${({ theme }) => theme._.typography.sizes[1000]};
`;

const Home = (): ReactElement => (
  <HomeContainer>
    <Box width="max-content" pb={40} pr={30}>
      <Columns gap={40}>
        <Rows gap={8}>
          <Text type="body" variant="default" inverted>
            <MainText>Giftology</MainText>
          </Text>
          <Box pl={4}>
            <Text type="body" variant="default" inverted>
              Zaplanuj swój prezent dla bliskiej osoby
            </Text>
          </Box>
        </Rows>
        <Box height="max-content" mt="auto">
          <PlayButton />
        </Box>
      </Columns>
    </Box>
  </HomeContainer>
);

export default Home;
