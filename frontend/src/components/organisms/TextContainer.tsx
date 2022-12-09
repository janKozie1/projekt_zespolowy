import type { ReactElement } from 'react';

import { PlayArrow } from '@mui/icons-material';
import { Button } from '@mui/material';
import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

import Columns from '../atoms/Columns';
import Rows from '../atoms/Rows';
import Text from '../atoms/Text';

const LogoText = styled.div`
  position:absolute;
  top:${toSpacing(80)};
  left:${toSpacing(70)};
  color:white;
`;

const Play = styled.div`
  margin-top:${toSpacing(16)};;
  width:84px;
  height:84px;
  border:2px solid #BCE0FD;
  border-radius:100%; 
`;

const LogoSize = styled.div`
  font-size:15em;
`;

const DescSize = styled.div`
  font-size:2em;
`;

const TextContainer = (): ReactElement => (
  <LogoText>
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
  </LogoText>
);

export default TextContainer;
