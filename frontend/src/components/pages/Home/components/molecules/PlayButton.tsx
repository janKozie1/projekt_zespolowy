import type { ReactElement } from 'react';

import { PlayArrow } from '@mui/icons-material';
import Button from '@mui/material/Button';
import styled from 'styled-components';

import colors from '../../../../../config/theme/fields/colors';

const Play = styled.div`
  width: ${({ theme }) => theme._.sizes.width.playButton};
  height: ${({ theme }) => theme._.sizes.height.playButton};
  border: ${({ theme }) => theme._.borders.styles.default.accent.secondary};
  border-radius: 100%;
`;

const PlayButton = (): ReactElement => (
  <Button>
    <Play>
      <PlayArrow style={{ width: '29px', height: '79px', color: colors.accent.primary }} />
    </Play>
  </Button>
);

export default PlayButton;
