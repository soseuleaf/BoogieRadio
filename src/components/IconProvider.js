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

const DragableEmoji = ({ type, value, constraintsRef }) => {
  let motionDivArray = [];
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

  for (var i = 0; i < value; i++) {
    motionDivArray.push(baseMotionDiv);
  }

  return motionDivArray;
};

function IconProvider() {
  const asd = [5, 4, 3, 2, 1];
  const constraintsRef = useRef(null);

  return (
    <motion.div className="drag-area" ref={constraintsRef}>
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
