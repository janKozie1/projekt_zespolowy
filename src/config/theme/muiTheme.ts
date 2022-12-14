import { createTheme } from '@mui/material/styles';

import { toMuiSpacing } from './fields/spacing';

const muiTheme = createTheme({
  spacing: toMuiSpacing,
});

export default muiTheme;
