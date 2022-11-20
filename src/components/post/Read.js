import React, { useState, useRef } from "react";

// Component
import IconProvider from "./IconProvider";

// MUI
import { Divider, Typography, Paper, Box } from "@mui/material";
import { Send } from "@mui/icons-material";

const DrawPost = ({ post }) => {
  if (post == null) {
    return <div>사연 선택 안했음</div>;
  } else {
    return (
      <>
        {post.post_title} {post.music_title}
      </>
    );
  }
};

export default function Read({ post }) {
  // 이모지가 한계 범위를 벗어나면 안되기 때문에 범위를 지정 해 주어야 함. useref를 사용
  const constraintsRef = useRef(null);

  return (
    <Paper
      sx={{
        padding: "25px",
        height: "95%",
        position: "relative",
      }}
    >
      <DrawPost post={post} />
      <Box
        ref={constraintsRef}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-end",
          top: 0,
          left: 0,
        }}
      >
        <IconProvider
          emojis={post == null ? [] : post.emoji}
          paperRef={constraintsRef}
        />
      </Box>
    </Paper>
  );
}
