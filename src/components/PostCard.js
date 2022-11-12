// React Base
import React, { useState } from "react";

// MUI Material
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import { Avatar, IconButton, Collapse, Typography } from "@mui/material";

// MUI Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Media Player
import MediaPlayer from "./MediaPlayer";

// User Data
import { UserData } from "/src/data/UserData";

// 열리기 버튼 관련 함수입니다.
const ExpandMore = styled((props) => {
  const { expand, ...more } = props;
  return <IconButton {...more} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// 플레이어, 유저 사연등을 표시하는 가드 입니다.
const PostCard = ({ post }) => {
  // 더보기를 클릭하여 사연이 열렸는지 닫혔는지 판단합니다.
  const [expanded, setExpanded] = useState(false);
  // 사연의 user_id를 가져와서 userdata에서 해당 유저의 정보를 찾아서 저장합니다
  const userData = UserData[post.user_id];

  // 더보기 버튼 클릭 시 동작하는 함수 입니다.
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // 모든 내용을 보유하고 있는 큰 틀 입니다.
    <Card>
      {/* 카드의 상단 부분을 관리합니다. */}
      <CardHeader
        avatar={
          /* 유저의 프로필 이미지가 들어갈 둥근 이미지 입니다. */
          <Avatar src={`/images/${userData.user_profile}`} />
        }
        action={
          /* 오른쪽의 더보기 버튼 입니다. 필요 없을 시 삭제 */
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          /* 유저의 이름이 들어갈 공간 입니다. */
          userData.user_name
        }
      />

      {/* 뮤직 플레이어가 들어갈 공간 입니다. post data의 이미지값, 제목, 음악 url을 넘깁니다. */}
      <MediaPlayer
        img={post.music_img}
        title={post.music_title}
        url={post.music_url}
      />

      {/* 좋아요 버튼 입니다. */}
      <IconButton>
        <FavoriteIcon />
      </IconButton>

      {/* 사연의 내용이 들어가는 공간 입니다. */}
      <CardContent>
        {/* 사연의 제목이 들어갑니다. Typography는 <h1> 태그의 느낌 입니다.*/}
        <Typography gutterBottom variant="h5" component="div">
          {post.post_title}
        </Typography>

        {/* 사연의 내용이 들어갑니다. 접기 위하여 collapse component를 추가했습니다. checked에 따라 접을지 펼지를 정합니다.*/}
        <Collapse in={expanded} collapsedSize={60}>
          <Typography variant="body2" color="text.secondary">
            {post.post_content}
          </Typography>
        </Collapse>
      </CardContent>

      {/* 사연의 더보기 버튼이 들어가는 공간 입니다. */}
      <CardActions disableSpacing>
        <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default PostCard;
