import { createTheme } from '@mui/material/styles';

import colors from './fields/colors';
import { toMuiSpacing } from './fields/spacing';

const muiTheme = createTheme({
  spacing: toMuiSpacing,
  palette: {
    primary: {
      light: colors.accent.primary,
      main: colors.accent.primary,
      dark: colors.accent.primary,
    },
  },
  typography: {
    fontSize: 22.5,
  },
});

export default muiTheme;
