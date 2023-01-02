import { createTheme } from '@mui/material/styles';

import borders from './fields/borders';
import colors from './fields/colors';
import { toMuiSpacing, toSpacing } from './fields/spacing';

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
  components: {
    MuiInputBase: {
      defaultProps: {
        autoComplete: 'off',
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: `${toSpacing(1)} ${toSpacing(3)}`,
        },
        outlined: {
          border: borders.styles.thin.greyscale[50],
          color: colors.greyscale[100],
        },
        contained: {
          border: borders.styles.thin.greyscale[50],
          boxShadow: 'none',
        },
        text: {
          color: colors.greyscale[100],
        },
      },
    },
  },
});

export default muiTheme;
