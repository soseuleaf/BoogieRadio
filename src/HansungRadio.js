import React, { useRef } from "react";

// COMPONENT
import Main from "./components/Main";
import Menu from "./components/FramerMenu/Menu";
import IconProvider from "./components/IconProvider";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { motion } from "framer-motion";

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
      default: "#000210",
      paper: "#424242",
    },
  },
});

function HansungRadio() {
  return (
    <>
      {/* <Menu top={0} />
      <Menu top={100} />
      <Menu top={200} />
      <Menu top={300} />
      <Menu top={400} /> */}
      <IconProvider />
    </>
  );
}

export default HansungRadio;
