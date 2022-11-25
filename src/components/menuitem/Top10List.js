import React, { useState } from "react";

import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

import { IconButton, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { red, yellow, blue, green, purple } from "@mui/material/colors";

// MUI Icons
import {
  Search,
  EmojiEvents,
  Favorite,
  ThumbUp,
  SentimentSatisfiedAlt,
  Star,
  Celebration,
} from "@mui/icons-material";

const RankIcon = ({ rank }) => {
  if (rank == 0) {
    return <EmojiEvents sx={{ color: "#ffeb3b" }} />;
  } else if (rank == 1) {
    return <EmojiEvents sx={{ color: "#9e9e9e" }} />;
  } else if (rank == 2) {
    return <EmojiEvents sx={{ color: "#795548" }} />;
  }
};

const EmojiIcon = ({ index }) => {
  switch (index) {
    case 0:
      return <Favorite sx={{ color: red[700] }} />;
    case 1:
      return <ThumbUp sx={{ color: yellow[700] }} />;
    case 2:
      return <SentimentSatisfiedAlt sx={{ color: green[700] }} />;
    case 3:
      return <Celebration sx={{ color: blue[700] }} />;
    case 4:
      return <Star sx={{ color: purple[700] }} />;
  }
};

function RankItem({ rank, postData, userData, num, onClick = (f) => f }) {
  const user = userData[postData.user_id];

  return (
    <div
      className="Top10Item"
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div className="RankIcon" style={{ minWidth: "2em" }}>
        <RankIcon rank={rank} />
      </div>
      <Avatar src={user.user_profile} sx={{ marginRight: "1em" }} />
      <ListItemText
        primary={postData.post_title}
        secondary={postData.music_title}
      />
      <div
        className="Top10Last"
        style={{
          flexShrink: 0,
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <EmojiIcon index={num} />
        <Typography variant="subtitle1">{postData.emoji[num]}</Typography>
        <IconButton onClick={() => onClick(postData.uuid)}>
          <Search sx={{ color: "primary.main" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default function Top10List({ postData, userData, openPost = (f) => f }) {
  const [value, setValue] = useState("0");
  let arraydata = [...postData];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab icon={<Favorite />} label="좋아요" value="0" />
          <Tab icon={<ThumbUp />} label="감사해요" value="1" />
          <Tab icon={<SentimentSatisfiedAlt />} label="재밌어요" value="2" />
          <Tab icon={<Celebration />} label="축하해요" value="3" />
          <Tab icon={<Star />} label="멋져요" value="4" />
        </TabList>
      </Box>
      <TabPanel value="0">
        {arraydata
          .sort((a, b) => (a.emoji[0] < b.emoji[0] ? 1 : -1))
          .map((post, index) => (
            <RankItem
              key={index}
              rank={index}
              postData={post}
              userData={userData}
              num={0}
              onClick={openPost}
            />
          ))}
      </TabPanel>
      <TabPanel value="1">
        {arraydata
          .sort((a, b) => (a.emoji[1] < b.emoji[1] ? 1 : -1))
          .map((post, index) => (
            <RankItem
              key={index}
              rank={index}
              postData={post}
              userData={userData}
              num={1}
              onClick={openPost}
            />
          ))}
      </TabPanel>
      <TabPanel value="2">
        {arraydata
          .sort((a, b) => (a.emoji[2] < b.emoji[2] ? 1 : -1))
          .map((post, index) => (
            <RankItem
              key={index}
              rank={index}
              postData={post}
              userData={userData}
              num={2}
              onClick={openPost}
            />
          ))}
      </TabPanel>
      <TabPanel value="3">
        {arraydata
          .sort((a, b) => (a.emoji[3] < b.emoji[3] ? 1 : -1))
          .map((post, index) => (
            <RankItem
              key={index}
              rank={index}
              postData={post}
              userData={userData}
              num={3}
              onClick={openPost}
            />
          ))}
      </TabPanel>
      <TabPanel value="4">
        {arraydata
          .sort((a, b) => (a.emoji[4] < b.emoji[4] ? 1 : -1))
          .map((post, index) => (
            <RankItem
              key={index}
              rank={index}
              postData={post}
              userData={userData}
              num={4}
              onClick={openPost}
            />
          ))}
      </TabPanel>
    </TabContext>
  );
}
