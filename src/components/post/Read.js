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
    <>
      <DrawPost post={post} />
      <div
        className="emojiBox"
        ref={constraintsRef}
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: "6em",
          bottom: 0,
          padding: "1em",
          flexWrap: "wrap",
          alignContent: "flex-end",
        }}
      >
        <IconProvider
          emojis={post == null ? [] : post.emoji}
          emojiBoxRef={constraintsRef}
        />
      </div>
    </>
  );
}
