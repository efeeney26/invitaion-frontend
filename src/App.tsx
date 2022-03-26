import React, { FC, StrictMode } from 'react';
import {
  ThemeProvider, createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Main } from './pages';
import { getGlobalStyles, responsiveFontsSizes } from './utils';

const theme = createTheme({
  palette: {
    common: {
      invitationPink: '#EFBFBF',
      invitationPinkLight: '#faf6f2',
      invitationRed: '#c86a53',
      invitationGrey: '#d4ddde',
      invitationGreyLight: '#d3d9db',
      invitationGold: '#ab7836',
      invitationBlue: '#6195a3',
      invitationGreen: '#2f5a5b',
    },
  },
  typography: {
    fontFamily: 'TenorSansRegular, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: getGlobalStyles(),
    },
  },
});

responsiveFontsSizes(theme);

const App: FC = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  </StrictMode>
);

export default App;
