import React, { useRef } from "react";

// COMPONENT
import Menu from "./components/FramerMenu/Menu";
import IconProvider from "./components/IconProvider";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Grid, Button, CssBaseline } from "@mui/material";
import { Edit, Favorite, Person, Search, Info } from "@mui/icons-material";

// Framer
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

  const MenuOpen = () => {
    toggleOpen();
  };

  return (
    <>
      <Menu
        icon={<Edit />}
        content={<IconProvider />}
        top={0}
        onClick={MenuOpen}
      />
      <Menu
        icon={<Favorite />}
        content={<Paper sx={{ width: "100%", height: "100%" }}> 2번 </Paper>}
        top={100}
        onClick={MenuOpen}
      />
      <Menu
        icon={<Person />}
        content={<Paper sx={{ width: "100%", height: "100%" }}> 3번 </Paper>}
        top={200}
        onClick={MenuOpen}
      />
      <Menu
        icon={<Search />}
        content={<Paper sx={{ width: "100%", height: "100%" }}> 4번 </Paper>}
        top={300}
        onClick={MenuOpen}
      />
      <Menu
        icon={<Info />}
        content={<Paper sx={{ width: "100%", height: "100%" }}> 5번 </Paper>}
        top={400}
        onClick={MenuOpen}
      />
      <motion.div
        layout
        animate={{ x: isOpen ? window.innerWidth / 3 - 80 : 0 }}
        transition={{ type: "Tween", stiffness: 100 }}
      >
        <Paper
          sx={{
            position: "relative",
            top: "200px",
            width: "300px",
            height: "300px",
          }}
        >
          {" "}
          자리{" "}
        </Paper>
      </motion.div>
    </>
  );
}

export default HansungRadio;
