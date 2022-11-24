import React, { useState, useEffect, useRef, useMemo } from "react";

// COMPONENT
import InformationSlide from "./components/informations/InformationSlide";
import SlidePost from "./components/radio/SlidePost";
import Menu from "./components/menu/Menu";
import Write from "./components/menuitem/Write";
import Read from "./components/menuitem/Read";
import Top10list from "./components/menuitem/top10list";
import QuizPage from "./components/menuitem/QuizPage";
import Userlist from "./components/menuitem/Userlist";
import Neon from "./components/neon/Neon";
import Neonoff from "./components/neon/NeonOff";

// MUI
import { IconButton, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  Edit,
  Favorite,
  Person,
  Search,
  Info,
  Quiz,
  Lightbulb,
} from "@mui/icons-material";

// Framer
import { motion, useCycle } from "framer-motion";

// Data
import { PostData } from "/src/data/PostData";

//faker
import { faker } from "@faker-js/faker";

const userData = [...Array(50)].map(() => ({
  name: faker.name.fullName(),
  avatar: faker.internet.avatar(),
}));

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
  const [isSendQuiz, setSendQuiz] = useState(false);
  const [neon, setNeon] = useState(true);

  const openMenuArray = useMemo(() => {
    console.log("메뉴오픈계산됨");
    let temp = [false, false, false, false, false, false];
    temp[isOpen] = true;
    return temp;
  }, [isOpen]);

  const readPost = useMemo(() => {
    if (isRead == -1) return null;
    const findIndex = postData.findIndex((post) => post.uuid === isRead);
    return postData[findIndex];
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
    console.log(index);
    setRead(index);
    openMenu(3);
  };

  // 메뉴가 열리면 동작함
  const openMenu = (value) => {
    setOpen(value);
  };

  const sendQuizAnswer = () => {
    setSendQuiz(true);
  };

  return (
    <>
      <ThemeProvider theme={NightTheme}>
        <motion.div
          layout
          animate={{ x: isOpen != 0 ? window.innerWidth / 6 : 0 }}
          transition={{ type: "Tween", stiffness: 100 }}
          style={{ position: "fixed", width: "100vw", height: "100vh" }}
        >
          <div className="NeonBackground">
            {neon ? (
              <Neon content="BoogieRadio" />
            ) : (
              <Neonoff content="BoogieRadio" />
            )}
            <IconButton
              onClick={() => {
                setNeon(!neon);
              }}
              sx={{
                position: "relative",
                top: 170,
                left: 1500,
                overflow: "auto",
                color: neon ? "#cc00ff" : "grey",
              }}
            >
              <Lightbulb sx={{ fontSize: "5em" }} />
            </IconButton>
          </div>
          <SlidePost
            postData={postData}
            modifyEmoji={modifyEmoji}
            openPost={openPost}
            userData={userData}
          />
        </motion.div>

        <Menu
          index={1}
          icon={<Edit />}
          content={<Write addNewPost={addNewPost} />}
          tooltip={"자신의 사연을 남들과 공유해 보세요."}
          top={0}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={2}
          icon={<Favorite />}
          content={
            <Top10list
              postData={postData}
              userData={userData}
              openPost={openPost}
            />
          }
          tooltip={"가장 좋아요를 많이 받은 10개의 글을 확인 해 보세요."}
          top={100}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={3}
          icon={<Search />}
          content={<Read post={readPost} />}
          tooltip={"사연을 자세히 살펴볼 수 있습니다."}
          top={200}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={4}
          icon={<Person />}
          content={<Userlist userData={userData} />}
          tooltip={"다양한 사용자를 만나보세요."}
          top={300}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={5}
          icon={<Quiz />}
          content={
            <QuizPage isSended={isSendQuiz} sendQuizAnswer={sendQuizAnswer} />
          }
          tooltip={"매주 다양한 퀴즈를 풀고 상품을 받아보세요."}
          top={400}
          isOpen={openMenuArray}
          onClick={openMenu}
        />
        <Menu
          index={6}
          icon={<Info />}
          content={<div></div>}
          tooltip={"제작자 정보"}
          top={500}
          isOpen={openMenuArray}
          onClick={openMenu}
        />

        {/* 메인 컨텐츠가 들어갈 div, isOpen 값을 통해서 x값을 애니메이션으로 이동 시킴 */}

        <InformationSlide />
      </ThemeProvider>
    </>
  );
}

export default HansungRadio;
