'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7C8B6C',
    },
    secondary: {
      main: '#D49538',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  cssVariables: true,
});

export default theme;