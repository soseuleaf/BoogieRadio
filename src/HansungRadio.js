import React from "react";

// COMPONENT
import InformationSlide from "./components/InformationSlide";

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
      <FullDialog title="좋아요" contents="좋아요 리스트." />
      <FullDialog title="글쓰기" contents="글쓰기 입니다." />
      <FullDialog title="랭킹" contents="좋아요 입니다." />
      <InformationSlide />
    </ThemeProvider>
  );
}

export default HansungRadio;
