import styled from 'styled-components';

import MuiIcon from '@mui/material/Icon';

import type { IconSizes } from '../../config/theme/fields/icons';

type Props = Readonly<{
  size: keyof IconSizes;
}>;

const Icon = styled(MuiIcon)<Props>`
  &,  & > * {
    width: ${({ theme, size }) => theme._.icons[size]};
    height: ${({ theme, size }) => theme._.icons[size]};
    font-size: ${({ theme, size }) => theme._.icons[size]};
  }
`;

export default Icon;
