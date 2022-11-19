import React, { useState } from "react";

// Component
import CustomizedDividers from "./ToggleButton";

// MUI
import {
  Divider,
  Typography,
  Paper,
  Button,
  Box,
  TextField,
  Sapce,
} from "@mui/material";
import { Send } from "@mui/icons-material";

export default function Write({ addNewPost = (f) => f }) {
  const [musicTitle, setMusicTitle] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const sendPostToMain = () => {
    addNewPost({
      uuid: null,
      user_id: 5,
      music_img: "음악사진",
      music_title: musicTitle,
      music_url: musicUrl,
      post_title: title,
      post_content: content,
      backgroundColor: "#191970",
      emoji: [0, 0, 0, 0, 0],
    });
    setMusicTitle("");
    setMusicUrl("");
    setTitle("");
    setContent("");
  };

  return (
    <Paper
      sx={{
        padding: "25px",
        height: "95%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h3">사연 쓰기</Typography>
        <Divider />
        <TextField
          id="music_title"
          label="음악 제목"
          variant="standard"
          onChange={(e) => setMusicTitle(e.target.value)}
          value={musicTitle}
        />
        <TextField
          id="music_url"
          label="음악 주소"
          helperText="유튜브, 사운드 클라우드 지원"
          variant="standard"
          onChange={(e) => setMusicUrl(e.target.value)}
          value={musicUrl}
        />
        <Divider />
        <TextField
          id="title"
          label="사연 제목"
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <CustomizedDividers />
        <TextField
          multiline
          fullWidth
          minRows="15"
          label="사연 쓰기"
          helperText="자신의 사연을 남들에게 공유하세요!"
          variant="standard"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          sx={{
            marginTop: "20px",
          }}
        />
      </Box>
      <Button
        variant="contained"
        endIcon={<Send />}
        onClick={sendPostToMain}
        sx={{
          flex: 1,
        }}
      >
        사연 보내기
      </Button>
    </Paper>
  );
}
