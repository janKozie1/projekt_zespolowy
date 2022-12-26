import type { ReactElement, ReactNode } from 'react';

import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components/macro';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';

import theme from '../../config/theme';
import globalStyle from '../../config/theme/globalStyles';
import muiTheme from '../../config/theme/muiTheme';

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

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
