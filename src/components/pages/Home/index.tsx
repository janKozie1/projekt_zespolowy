import type { ReactElement } from 'react';

import { PlayArrow } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

import { toSpacing } from '../../../config/theme/fields/spacing';

import Columns from '../../atoms/Columns';
import HomeContainer from '../../atoms/HomeContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';

// TODO remove these once we have fonts & colors

const Play = styled.div`
  margin-top: ${toSpacing(16)};;
  width: 84px;
  height: 84px;
  border: 2px solid #BCE0FD;
  border-radius: 100%;
`;

const LogoSize = styled.div`
  font-size: 15em;
  color: white;
`;

const DescSize = styled.div`
  font-size: 2em;
  color: white;
`;

const Home = (): ReactElement => (
  <HomeContainer>
    <Box width="max-content" pb={40}>
      <Rows gap={2}>
        <LogoSize>
          <Columns gap={68}>
            <Text>Giftology</Text>
            <Button>
              <Play>
                <PlayArrow style={{ minWidth: '29px', minHeight: '79px', color: '#BCAAA4' }} />
              </Play>
            </Button>
          </Columns>
        </LogoSize>
        <DescSize>
          <Text>zaplanuj swój prezent dla bliskiej osoby</Text>
        </DescSize>
      </Rows>
    </Box>
  </HomeContainer>
);

export default Home;
