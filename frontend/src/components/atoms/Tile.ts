import Box from '@mui/material/Box';
import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

const Tile = styled(Box)`
  background-color: ${({ theme }) => theme._.colors.white[100]};
  padding: ${toSpacing(4)} ${toSpacing(5)};
  border-radius: ${({ theme }) => theme._.borders.radii.md};
  box-shadow: ${({ theme }) => theme._.shadows.default};
`;

export default Tile;
