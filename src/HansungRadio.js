import React from 'react';

// COMPONENT
import Main from './components/Main';
import SlidePost from './components/SlidePost'

// MUI
import {createTheme, ThemeProvider } from '@mui/material/styles'
import { Paper, Grid, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const NightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fbc02d',
    },
    secondary: {
      main: '#ef6c00',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#e91e63',
    },
    background: {
      default: '#000210',
      paper: '#424242',
    },
  },
})

function HansungRadio() {
  return(
    //<ThemeProvider theme={NightTheme}>
      //<CssBaseline />
      <SlidePost />
    //</ThemeProvider>
  );
}

export default HansungRadio;