import React, { useState, useRef } from "react";

// Component
import IconProvider from "./IconProvider";

// MUI
import { Divider, Typography, Paper, Box, IconButton } from "@mui/material";
import { Send, Visibility, VisibilityOff } from "@mui/icons-material";

const DrawPost = ({ post }) => {
  if (post == null) {
    return (
      <div
        className="ReadPost"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">선택된 사연이 없습니다.</Typography>
      </div>
    );
  } else {
    return (
      <div
        className="ReadPost"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          //justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="PostTitle" style={{ margin: "2em" }}>
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            {post.post_title}
          </Typography>
        </div>
        <Divider />
        <div className="PostContent" style={{ margin: "2em" }}>
          <Typography variant="body1">{post.post_content}</Typography>
        </div>
      </div>
    );
  }
};

export default function Read({ post }) {
  // 이모지가 한계 범위를 벗어나면 안되기 때문에 범위를 지정 해 주어야 함. useref를 사용
  const constraintsRef = useRef(null);
  const [visible, setVisible] = useState(true);

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
          visibility: visible ? "visible" : "hidden",
        }}
      >
        <IconProvider
          emojis={post == null ? [] : post.emoji}
          emojiBoxRef={constraintsRef}
        />
      </div>

      <div
        className="EmojiVisible"
        style={{
          top: "25px",
          position: "absolute",
          display: "inline-block",
          right: "25px",
          zIndex: "3",
        }}
      >
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? (
            <Visibility sx={{ fontSize: "2em" }} />
          ) : (
            <VisibilityOff sx={{ fontSize: "2em" }} />
          )}
        </IconButton>
      </div>
    </>
  );
}
