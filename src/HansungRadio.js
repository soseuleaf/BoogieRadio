import React, { useState, useEffect, useRef, useMemo } from "react";

// COMPONENT
import InformationSlide from "./components/informations/InformationSlide";
import Neon from "./components/neon/Neon";
import SlidePost from "./components/radio/SlidePost";
import Menu from "./components/menu/Menu";
import Write from "./components/post/Write";
import Read from "./components/post/Read";
import UserList from "./components/UserList";
// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Grid, Button, CssBaseline } from "@mui/material";
import { Edit, Favorite, Person, Search, Info } from "@mui/icons-material";

// Framer
import { motion, useCycle } from "framer-motion";

// Data
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
      default: "#282c34",
      paper: "#424242",
    },
  },
});

const loadUserPost = () => [...PostData];

function HansungRadio() {
  // 글 데이터를 저장하는 hook
  const [postData, setPostData] = useState(loadUserPost());
  // 메뉴가 열렸는지 안 열렸는지 확인하는 hook
  const [isOpen, setOpen] = useState(0);
  const [isRead, setRead] = useState(false);

  const openMenuArray = useMemo(() => {
    console.log("메뉴오픈계산됨");
    let temp = [false, false, false, false, false, false];
    temp[isOpen] = true;
    return temp;
  }, [isOpen]);

  const readPost = useMemo(() => {
    console.log("readpost계산됨");
    if (isRead == -1) return null;
    console.log(postData[isRead]);
    return postData[isRead];
  }, [isRead]);

  const addNewPost = (data) => {
    let adduuidData = { ...data, uuid: PostData.length + 1 };
    setPostData([...postData, adduuidData]);
  };

  const modifyEmoji = (uuid, emoji) => {
    const findIndex = postData.findIndex((post) => post.uuid === uuid);
    let copy = [...postData];
    if (findIndex != -1) {
      copy[findIndex] = { ...copy[findIndex], emoji };
      setPostData(copy);
    }
  };

  const openPost = (index) => {
    setRead(index);
    openMenu(3);
  };

  // 메뉴가 열리면 동작함
  const openMenu = (value) => {
    setOpen(value);
  };

  return (
    <>
      <Neon content="BoogieRadio" />
      <ThemeProvider theme={NightTheme}>
        <Menu
          index={1}
          icon={<Edit />}
          content={<Write addNewPost={addNewPost} />}
          top={0}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={2}
          icon={<Favorite />}
          content={<Paper sx={{ width: "100%", height: "100%" }}> 2번 </Paper>}
          top={100}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={3}
          icon={<Person />}
          content={<Read post={readPost} />}
          top={200}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={4}
          icon={<Search />}
          content={<UserList/>}
          top={300}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={5}
          icon={<Info />}
          content={<Paper>asd</Paper>}
          top={400}
          isOpen={openMenuArray}
          onClick={openMenu}
        />

        {/* 메인 컨텐츠가 들어갈 div, isOpen 값을 통해서 x값을 애니메이션으로 이동 시킴 */}
        <motion.div
          layout
          animate={{ x: isOpen != 0 ? window.innerWidth / 4 : 0 }}
          transition={{ type: "Tween", stiffness: 100 }}
          style={{ position: "relative", top: "120px", left: "50px" }}
        >
          <SlidePost
            postData={postData}
            modifyEmoji={modifyEmoji}
            openPost={openPost}
          />
        </motion.div>
        <InformationSlide />
      </ThemeProvider>
    </>
  );
}

export default HansungRadio;
