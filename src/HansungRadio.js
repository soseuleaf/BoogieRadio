import React, { useState, useEffect, useRef } from "react";

// COMPONENT
import InformationSlide from "./components/informations/InformationSlide";
import Neon from "./components/neon/Neon";
import SlidePost from "./components/radio/SlidePost";
import Menu from "./components/menu/Menu";
import IconProvider from "./components/IconProvider";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { PostData } from "/src/data/PostData";

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
      default: "#282c34",
      paper: "#424242",
    },
  },
});
const loadUserPost = () => [...PostData];
function HansungRadio() {
  var [postData, setPostData] = useState(loadUserPost());

  const modifyEmoji = (uuid, emoji) => {
    const findIndex = postData.findIndex((post) => post.uuid === uuid);
    let copy = [...postData];
    if (findIndex != -1) {
      copy[findIndex] = { ...copy[findIndex], emoji };
      setPostData(copy);
    }
  };
  const [isOpen, toggleOpen] = useCycle(false, true);

  const log = () => {
    toggleOpen();
    console.log(isOpen);
  };

  return (
    <>
      <Neon content="BoogieRadio" />
      <ThemeProvider theme={NightTheme}>
        <div style={{ position: "relative", top: "120px", left: "50px" }}>
          <SlidePost postData={postData} modifyEmoji={modifyEmoji} />
        </div>
        <InformationSlide />
      </ThemeProvider>
    </>
  );
}

export default HansungRadio;
