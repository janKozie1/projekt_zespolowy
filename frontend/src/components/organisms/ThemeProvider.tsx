import type { ReactElement, ReactNode } from 'react';

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components/macro';

import theme from '../../config/theme';
import globalStyle from '../../config/theme/globalStyles';

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

const muiTheme = createTheme();

type Props = Readonly<{
  children: ReactNode;
}>;

const ThemeProvider = ({ children }: Props): ReactElement => (
  <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={{ _: theme }}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  </StyledEngineProvider>
);

export default ThemeProvider;
