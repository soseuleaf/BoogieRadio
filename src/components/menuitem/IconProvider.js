import React, { useRef } from "react";

// MUI
import { Button, Box } from "@mui/material";
import {
  Favorite,
  ThumbUp,
  SentimentSatisfiedAlt,
  Celebration,
  Star,
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
      return <ThumbUp sx={{ fontSize: 40, color: yellow[700] }} />;
    case 2:
      return <SentimentSatisfiedAlt sx={{ fontSize: 40, color: green[700] }} />;
    case 3:
      return <Celebration sx={{ fontSize: 40, color: blue[700] }} />;
    case 4:
      return <Star sx={{ fontSize: 40, color: purple[700] }} />;
  }
};

// 반복문을 통해 해당하는 이모지를 만들어주는 컴포넌트.
// type은 단순히 배열의 index
// value는 index가 가지고 있는 값
// contraintsRef는 <motion.div className="drag-area" ref={constraintsRef}>의 참조값
const DragableEmoji = ({ type, value, dragRef }) => {
  // 컴포넌트를 여러개 반환해야하기 때문에 배열을 선언
  let motionDivArray = [];
  // 그려야할 이모지를 받아와서 드래그가 가능한 div안에 넣어줌. 드래그 제한 공간도 지정.
  const baseMotionDiv = (index) => (
    <motion.div
      className="icons"
      key={index}
      drag
      whileTap={{ scale: 0.8 }}
      dragConstraints={dragRef}
      style={{
        width: "min-content",
        height: "min-content",
      }}
    >
      <EmojiIcon index={type} />
    </motion.div>
  );

  // 이모지가 들어간 motion.div를 여러번 반복해서 배열에 넣어 줌.
  for (var i = 0; i < value; i++) {
    motionDivArray.push(baseMotionDiv(i));
  }

  // 배열을 리턴.
  return motionDivArray;
};

function IconProvider({ emojis, emojiBoxRef }) {
  /* 배열의 위치에 해당 하는 이모티콘을, 배열의 값에 해당하는 만큼 가져옴*/
  return emojis.map((value, index) => (
    <DragableEmoji
      key={index + "-" + value}
      type={index}
      value={value}
      dragRef={emojiBoxRef}
    />
  ));
}

export default IconProvider;
