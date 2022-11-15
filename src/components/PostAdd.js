import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function PostingPage({ onClick = (f) => f }) {
  const [music, setMusic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNewPost = () => {
    console.log(music, title, content);

    onClick({
      user_id: 5,
      music_img: "음악사진",
      music_title: "음악제목",
      music_url: music,
      post_title: title,
      post_content: content,
      backgroundColor: "#191970",
    });
  };

  return (
    <Box>
      <TextField
        id="title"
        label="글제목"
        variant="standard"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="content"
        label="글내용"
        variant="standard"
        onChange={(e) => setContent(e.target.value)}
      />
      <TextField
        id="music"
        label="음악주소"
        variant="standard"
        onChange={(e) => setMusic(e.target.value)}
      />
      <Button variant="contained" onClick={addNewPost}>
        POSTING
      </Button>
    </Box>
  );
}

export default PostingPage;
