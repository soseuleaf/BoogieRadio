import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button, Box } from "@mui/material";
import {
  Favorite,
  ThumbUpAlt,
  SentimentSatisfiedAlt,
  Celebration,
  EmojiEmotions,
} from "@mui/icons-material";

const IconMaker = ({ type, value, constraintsRef }) => {
  var motionDivArray = [];
  let baseMotionDiv;

  switch (type) {
    case 0:
      baseMotionDiv = (
        <motion.div
          className="icons"
          drag
          whileTap={{ scale: 0.8 }}
          dragConstraints={constraintsRef}
        >
          <Favorite sx={{ fontSize: 40 }} />
        </motion.div>
      );
      break;
    case 1:
      baseMotionDiv = (
        <motion.div
          className="icons"
          drag
          whileTap={{ scale: 0.8 }}
          dragConstraints={constraintsRef}
        >
          <ThumbUpAlt sx={{ fontSize: 40 }} />
        </motion.div>
      );
      break;
    case 2:
      baseMotionDiv = (
        <motion.div
          className="icons"
          drag
          whileTap={{ scale: 0.8 }}
          dragConstraints={constraintsRef}
        >
          <SentimentSatisfiedAlt sx={{ fontSize: 40 }} />
        </motion.div>
      );
      break;
    case 3:
      baseMotionDiv = (
        <motion.div
          className="icons"
          drag
          whileTap={{ scale: 0.8 }}
          dragConstraints={constraintsRef}
        >
          <Celebration sx={{ fontSize: 40 }} />
        </motion.div>
      );
      break;
    case 4:
      baseMotionDiv = (
        <motion.div
          className="icons"
          drag
          whileTap={{ scale: 0.8 }}
          dragConstraints={constraintsRef}
        >
          <EmojiEmotions sx={{ fontSize: 40 }} />
        </motion.div>
      );
      break;
  }

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
        <IconMaker type={index} value={value} constraintsRef={constraintsRef} />
      ))}
    </motion.div>
  );
}

export default IconProvider;
