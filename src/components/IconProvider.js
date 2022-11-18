import React, { useRef } from "react";

// MUI
import { Button, Box } from "@mui/material";
import {
  Favorite,
  ThumbUpAlt,
  SentimentSatisfiedAlt,
  Celebration,
  EmojiEmotions,
} from "@mui/icons-material";
import { red, yellow, blue, green, purple } from "@mui/material/colors";

// Framer
import { motion } from "framer-motion";

// 위치를 알려주면 해당 하는 값의 이모지를 가져옴. 가독성을 위해 분리.
const EmojiIcon = ({ index }) => {
  switch (index) {
    case 0:
      return <Favorite sx={{ fontSize: 40, color: red[700] }} />;
    case 1:
      return <ThumbUpAlt sx={{ fontSize: 40, color: yellow[700] }} />;
    case 2:
      return <SentimentSatisfiedAlt sx={{ fontSize: 40, color: green[700] }} />;
    case 3:
      return <Celebration sx={{ fontSize: 40, color: blue[700] }} />;
    case 4:
      return <EmojiEmotions sx={{ fontSize: 40, color: purple[700] }} />;
  }
};

// 반복문을 통해 해당하는 이모지를 만들어주는 컴포넌트.
// type은 단순히 배열의 index
// value는 index가 가지고 있는 값
// contraintsRef는 <motion.div className="drag-area" ref={constraintsRef}>의 참조값
const DragableEmoji = ({ type, value, constraintsRef }) => {
  // 컴포넌트를 여러개 반환해야하기 때문에 배열을 선언
  let motionDivArray = [];
  // 그려야할 이모지를 받아와서 드래그가 가능한 div안에 넣어줌. 드래그 제한 공간도 지정.
  const baseMotionDiv = (
    <motion.div
      className="icons"
      drag
      whileTap={{ scale: 0.8 }}
      dragConstraints={constraintsRef}
    >
      <EmojiIcon index={type} />
    </motion.div>
  );

  // 이모지가 들어간 motion.div를 여러번 반복해서 배열에 넣어 줌.
  for (var i = 0; i < value; i++) {
    motionDivArray.push(baseMotionDiv);
  }

  // 배열을 리턴.
  return motionDivArray;
};

function IconProvider() {
  // 해당 값은 PostData의 emoji?에 있음 임시로 지정해둠
  const asd = [5, 4, 3, 2, 1];
  // 이모지가 한계 범위를 벗어나면 안되기 때문에 범위를 지정 해 주어야 함. useref를 사용
  const constraintsRef = useRef(null);

  return (
    // 드래그 가능한 공간을 만들어 줌. 해당 크기는 css에 지정되어 있음, ref값도 지정
    <motion.div className="drag-area" ref={constraintsRef}>
      {/* 배열의 위치에 해당 하는 이모티콘을, 배열의 값에 해당하는 만큼 가져오는 컴포넌트?*/}
      {asd.map((value, index) => (
        <DragableEmoji
          type={index}
          value={value}
          constraintsRef={constraintsRef}
        />
      ))}
    </motion.div>
  );
}

export default IconProvider;
