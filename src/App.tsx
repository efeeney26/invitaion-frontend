import React, { FC, StrictMode } from 'react';
import {
  ThemeProvider, createTheme, responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Main } from './pages';

let theme = createTheme({
  palette: {
    common: {
      invitationPink: '#EFBFBF',
      invitationRed: '#c86a53',
      invitationGrey: '#d4ddde',
      invitationBlue: '#6195a3',
      invitationGreen: '#2f5a5b',
    },
  },
});
theme = responsiveFontSizes(theme);

const App: FC = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  </StrictMode>
);

export default App;
