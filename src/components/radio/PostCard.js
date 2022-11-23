// React Base
import React, { useState } from "react";

// MUI Material
import { styled } from "@mui/material/styles";
import { red, yellow, blue, green, purple } from "@mui/material/colors";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import {
  Chip,
  Avatar,
  IconButton,
  Collapse,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";

// MUI Icons
import {
  Favorite,
  ThumbUp,
  SentimentSatisfiedAlt,
  Star,
  TipsAndUpdates,
  ImportContacts,
} from "@mui/icons-material";

// Media Player
import MediaPlayer from "./MediaPlayer";

// User Data
//import { UserData } from "/src/data/UserData";
//import ScrollDialog from "/src/components/menu/ScrollDialog";
//import Write from "/src/components/write/Write";

// 이미지 아이콘 반환용 함수
const getEmoji = (index, color) => {
  switch (index) {
    case 0:
      return <Favorite sx={color} />;
    case 1:
      return <ThumbUp sx={color} />;
    case 2:
      return <SentimentSatisfiedAlt sx={color} />;
    case 3:
      return <Star sx={color} />;
    case 4:
      return <TipsAndUpdates sx={color} />;
  }
};

// 플레이어, 유저 사연등을 표시하는 가드 입니다.
const PostCard = ({
  post,
  clickEmoji = (f) => f,
  clickDetail = (f) => f,
  user,
}) => {
  // 더보기를 클릭하여 사연이 열렸는지 닫혔는지 판단합니다.
  const [expanded, setExpanded] = useState(false);
  // 사연의 user_id를 가져와서 userdata에서 해당 유저의 정보를 찾아서 저장합니다

  // 더보기 버튼 클릭 시 동작하는 함수 입니다.
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // 이모지 버튼 생성용 함수
  const EmojiButton = ({ index, color }) => {
    return (
      <IconButton onClick={() => clickEmoji(index)}>
        {getEmoji(index, color)} {post.emoji[index]}
      </IconButton>
    );
  };

  return (
    // 모든 내용을 보유하고 있는 큰 틀 입니다.
    <Card
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <CardHeader
        avatar={
          /* 유저의 프로필 이미지가 들어갈 둥근 이미지 입니다. */
          <Avatar src={user.avatar} />
        }
        title={
          /* 유저의 이름이 들어갈 공간 입니다. */
          user.name
        }
      />
      <MediaPlayer
        img={post.music_img}
        title={post.music_title}
        url={post.music_url}
      />

      <Divider
        sx={{
          margin: "10px",
        }}
      >
        <Chip label="Express your feelings!" />
      </Divider>

      {/* 이모지 공간 입니다. */}
      <Stack
        direction="row" // 가로로 정렬
        divider={<Divider orientation="vertical" flexItem />} // 공간 나누기
        justifyContent="space-evenly" // 정렬 방법
        alignItems="center" // 가운데로
        sx={{
          margin: "10px",
        }}
      >
        {/*
        이모지 값 수정이 최초로 일어나는 곳.
        아이콘버튼을 클릭하면 지정해둔 값이 SlidePost의 clickEmoji를 실행한다.
        post의 emoji배열의 값을 보이도록 수정한 것 말고는 별 다른것 없음.
        */}
        <EmojiButton index={0} color={{ color: red[500] }} />
        <EmojiButton index={1} color={{ color: yellow[700] }} />
        <EmojiButton index={2} color={{ color: green[700] }} />
        <EmojiButton index={3} color={{ color: blue[700] }} />
        <EmojiButton index={4} color={{ color: purple[700] }} />
      </Stack>

      {/* 사연의 내용이 들어가는 공간 입니다. */}
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button startIcon={<ImportContacts />} onClick={clickDetail}>
          사연보기
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
