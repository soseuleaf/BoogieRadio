// React Base
import React, { useState, useEffect } from "react";

// MUI Material
import { Slide, IconButton, Box } from "@mui/material";

// MUI Icons
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

// Import
import PostCard from "./PostCard";

/* 화살표 클릭 시 카드가 슬라이드 되는 컴포넌트 */

const SlidePost = ({ PostData }) => {
  // 배열의 몇번째 데이터를 불러올지 정하는 useState 입니다.
  const [index, setIndex] = useState(0);
  // 슬라이드가 종료되었는지 판단합니다.
  const [slideIn, setSlideIn] = useState(true);
  // 슬라이드가 될 방향을 정합니다.
  const [slideDirection, setSlideDirection] = useState("up");

  // PostData json 배열의 해당 값을 가져오고, postdata의 길이를 저장합니다.
  const post = PostData[index];
  const postLength = PostData.length;

  /* 화살표 방향을 받아서 클릭이 이뤄졌는지 판단하는 useEffect 입니다.
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    */

  // 화살표 클릭 시 실행할 함수 입니다.
  const onArrowClick = (direction) => {
    // 화살표 클릭 시 다음 Post를 받아올지, 이전 Post를 받아올지 판단합니다.
    const increment = direction === "up" ? -1 : 1;
    // 받아올 값이 Post 배열의 길이를 넘어간다면 조정합니다.
    const newIndex = (index + increment + postLength) % postLength;
    // 슬라이드가 나간 방향과 들어오는 방향은 반대여야 하기 때문에 반대 값을 가져옵니다.
    const oppDirection = direction === "up" ? "down" : "up";

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
    if (direction == "up") {
      return (
        <IconButton
          onClick={() => onArrowClick("up")}
          sx={{ width: 100, height: 100 }}
        >
          <ArrowLeft sx={{ fontSize: "80px" }} />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={() => onArrowClick("down")}
          sx={{ width: 100, height: 100 }}
        >
          <ArrowRight sx={{ fontSize: "80px" }} />
        </IconButton>
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-round",
          alignItems: "center",
        }}
      >
        <Arrow direction="up" />
        <Slide in={slideIn} direction={slideDirection}>
          <Box sx={{ width: 400, height: 500 }}>
            <PostCard post={post} />
          </Box>
        </Slide>
        <Arrow direction="down" />
      </Box>
    </>
  );
};

export default SlidePost;
