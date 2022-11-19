// React Base
import React, { useState, useEffect } from "react";

// MUI Material
import { Slide, IconButton, Box } from "@mui/material";

// MUI Icons
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

// Import
import PostCard from "./PostCard";

/* 화살표 클릭 시 카드가 슬라이드 되는 컴포넌트 */

const SlidePost = ({ postData, modifyEmoji = (f) => f }) => {
  // 배열의 몇번째 데이터를 불러올지 정하는 useState 입니다.
  const [index, setIndex] = useState(0);
  // 슬라이드가 종료되었는지 판단합니다.
  const [slideIn, setSlideIn] = useState(true);
  // 슬라이드가 될 방향을 정합니다.
  const [slideDirection, setSlideDirection] = useState("left");

  // PostData json 배열의 해당 값을 가져오고, postdata의 길이를 저장합니다.
  const post = postData[index];
  const postLength = postData.length;

  /* 
  이모지가 클릭 되었을 때 실행되는 함수, PostCard가 실행 시키는 함수.
  HansungRadio에서 내려온 modifyEmoji를 실행한다.
  해당 함수는 PostCard에서 실행되며 어떤 위치의 이모티콘이 눌렸는지 확인하고
  해당 위치의 값을 1 증가시키고, modiftEmoji에 값을 전달한다.
  */
  const clickEmoji = (emojiIndex) => {
    const emojis = [...post.emoji];
    emojis[emojiIndex]++;
    modifyEmoji(post.uuid, emojis);
  };

  // 화살표 클릭 시 실행할 함수 입니다.
  const onArrowClick = (direction) => {
    // 화살표 클릭 시 다음 Post를 받아올지, 이전 Post를 받아올지 판단합니다.
    const increment = direction === "left" ? -1 : 1;
    // 받아올 값이 Post 배열의 길이를 넘어간다면 조정합니다.
    const newIndex = (index + increment + postLength) % postLength;
    // 슬라이드가 나간 방향과 들어오는 방향은 반대여야 하기 때문에 반대 값을 가져옵니다.
    const oppDirection = direction === "left" ? "right" : "left";

    // 슬라이드 방향을 설정합니다.
    setSlideDirection(direction);
    setSlideIn(false);

    // 일정 시간이 보여줄 배열의 값, 방향, 진행중 값을 고칩니다.
    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  // 방향값과 클릭시 그에 맞는 화살표 버튼을 반환 시켜줍니다.
  const Arrow = ({ direction }) => {
    if (direction === "left") {
      return (
        <IconButton
          onClick={() => onArrowClick("left")}
          sx={{
            width: 100,
            height: 100,
          }}
        >
          <ArrowLeft sx={{ fontSize: "80px" }} />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={() => onArrowClick("right")}
          sx={{
            width: 100,
            height: 100,
          }}
        >
          <ArrowRight sx={{ fontSize: "80px" }} />
        </IconButton>
      );
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "320px",
        transform: "translate(-50%, 0%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Arrow direction="left" />
      <Slide in={slideIn} direction={slideDirection}>
        <Box sx={{ width: 420, height: 348.5, backgroundColor: "transparent" }}>
          <PostCard post={post} clickEmoji={clickEmoji} />
        </Box>
      </Slide>
      <Arrow direction="right" />
    </Box>
  );
};

export default SlidePost;
