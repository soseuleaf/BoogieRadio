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
    setPostData([...postData, data]);
  };

  /* 
  최종적으로 postdata의 해당 post의 emoji를 수정하는 함수.
  postdata의 고유값 uuid와 emoji 배열을 받아서 값을 수정한다.
  해당 함수는 SlidePost에서 불려진다.
  */
  const modifyEmoji = (uuid, emoji) => {
    const findIndex = postData.findIndex((post) => post.uuid === uuid);
    let copy = [...postData];
    if (findIndex != -1) {
      copy[findIndex] = { ...copy[findIndex], emoji };
      setPostData(copy);
    }
  };
  return (
    <>
      <PostAdd onClick={addPost} />
      <SlidePost postData={postData} modifyEmoji={modifyEmoji} />
    </>
  );
}

export default HansungRadio;
