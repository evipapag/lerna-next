import React from 'react';
import {
  MuiThemeProvider,
  StylesProvider,
  createTheme
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = ({ theme = createTheme(), children }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export { ThemeProvider };
