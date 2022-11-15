import React, { useState, useEffect } from "react";

// COMPONENT
import Main from "./components/Main";
import SlidePost from "./components/SlidePost";
import PostAdd from "./components/PostAdd";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// data
import { PostData } from "/src/data/PostData";

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

const loadUserPost = () => [...PostData];

//<SlidePost PostData={PostData} />;
function HansungRadio() {
  var [postData, setPostData] = useState(loadUserPost());

  const addPost = (data) => {
    console.log(postData);
    console.log(data);
    setPostData([...postData, data]);
  };

  useEffect(() => {
    console.log(postData);
  });

  return (
    <>
      <PostAdd onClick={addPost} />
      <SlidePost PostData={postData} />
    </>
  );
}

export default HansungRadio;
