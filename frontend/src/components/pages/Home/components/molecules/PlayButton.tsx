import type { ReactElement } from 'react';

import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { PlayArrow } from '@mui/icons-material';
import Button from '@mui/material/Button';

import { AuthRoutes } from '../../../../../config/paths';
import colors from '../../../../../config/theme/fields/colors';

const Play = styled.div`
  width: ${({ theme }) => theme._.sizes.width.playButton};
  height: ${({ theme }) => theme._.sizes.height.playButton};
  border: ${({ theme }) => theme._.borders.styles.default.accent.secondary};
  border-radius: 100%;
`;

const PlayButton = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(AuthRoutes.LOGIN)}>
      <Play>
        <PlayArrow style={{ width: '29px', height: '79px', color: colors.greyscale[0] }} />
      </Play>
    </Button>
  );
};

export default PlayButton;
