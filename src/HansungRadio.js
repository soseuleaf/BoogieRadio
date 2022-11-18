import React from "react";

// COMPONENT
import Main from "./components/Main";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const NightTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fbc02d",
    },
    secondary: {
      main: "#ef6c00",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#e91e63",
    },
    background: {
      default: "#282c34",
      paper: "#424242",
    },
  },
});

function HansungRadio() {
  return (
    <ThemeProvider theme={NightTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default HansungRadio;
