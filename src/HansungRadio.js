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
  // 메뉴가 열렸는지 안 열렸는지 확인하는 hook
  const [isOpen, toggleOpen] = useCycle(false, true);

  // 메뉴가 열리면 동작함
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

      {/* 메인 컨텐츠가 들어갈 div, isOpen 값을 통해서 x값을 애니메이션으로 이동 시킴 */}
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
          메인 컨텐츠가 들어갈것 같은 자리 대충 지정
        </Paper>
      </motion.div>
    </>
  );
}

export default HansungRadio;
