import React, { useState } from "react";

// MUI
import { Divider, Typography, Paper, Box } from "@mui/material";
import { Send } from "@mui/icons-material";

const DrawPost = ({ post }) => {
  if (post == null) {
    return <div>사연 선택 안했음</div>;
  } else {
    return (
      <div>
        {post.post_title} {post.music_title}
      </div>
    );
  }
};

export default function Read({ post }) {
  return (
    <DrawPost post={post} />
  );
}
