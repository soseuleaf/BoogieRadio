import React, { useRef } from "react";

// COMPONENT
import Main from "./components/Main";
import Menu from "./components/FramerMenu/Menu";
import IconProvider from "./components/IconProvider";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { motion, useCycle } from "framer-motion";

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
  const [isOpen, toggleOpen] = useCycle(false, true);

  const log = () => {
    toggleOpen();
    console.log(isOpen);
  };

  return (
    <>
      <Menu top={0} log={log} />
      <Menu top={100} log={log} />
      <Menu top={200} log={log} />
      <Menu top={300} log={log} />
      <Menu top={400} log={log} />
      <motion.div
        layout
        animate={{ x: isOpen ? 0 : window.innerWidth / 3 - 80 }}
      >
        <IconProvider />
      </motion.div>
    </>
  );
}

export default HansungRadio;
