'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#221a03',
      light: 'rgb(78, 71, 53)',
      dark: 'rgb(23, 18, 2)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7c8b6c',
      light: 'rgb(150, 162, 137)',
      dark: 'rgb(86, 97, 75)',
      contrastText: '#fff',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    }
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  cssVariables: true,
});

export default theme;