import styled from 'styled-components';

import Box from '@mui/material/Box';

import { toSpacing } from '../../config/theme/fields/spacing';

const Tile = styled(Box)`
  background-color: ${({ theme }) => theme._.colors.greyscale[0]};
  padding: ${toSpacing(4)} ${toSpacing(4)};
  border-radius: ${({ theme }) => theme._.borders.radii.md};
  box-shadow: ${({ theme }) => theme._.shadows.default};
`;

export default Tile;
