import type { ReactNode, ReactElement } from 'react';

import Chips from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type Props = Readonly<{
  label: ReactNode;
  icons: ReactNode;
  color: 'default' | 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning' | undefined;
  fontColor: string;
}>;

const theme = createTheme({
  palette: {
    primary: {
      main: '#81F689',
    },
    secondary: {
      main: '#FF6868',
    },
    success: {
      main: '#FFFFFF',
    },
  },
});

const Chip = ({
  label, icons, color, fontColor,
}: Props): ReactElement => (
  <ThemeProvider theme={theme}>
    <Chips
      label={label}
      icon={<Icon>{icons}</Icon>}
      color={color}
      style={{ color: fontColor, border: '1px solid', borderColor: '#A8A8A8' }}
    />
  </ThemeProvider>
);

export default Chip;

