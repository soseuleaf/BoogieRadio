import * as React from "react";

import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ScrollDialog from "./ScrollDialog";
import ListItemText from "@mui/material/ListItemText";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

import { IconButton, Typography } from "@mui/material";

// MUI Icons
import { Search, Favorite, EmojiEvents } from "@mui/icons-material";

const RankIcon = ({ rank }) => {
  if (rank == 0) {
    return <EmojiEvents sx={{ color: "#ffeb3b" }} />;
  } else if (rank == 1) {
    return <EmojiEvents sx={{ color: "#9e9e9e" }} />;
  } else if (rank == 2) {
    return <EmojiEvents sx={{ color: "#795548" }} />;
  }
};

function Post({ rank, postData, userData }) {
  const user = userData[postData.user_id];

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div class="RankIcon" style={{ minWidth: "2em" }}>
        <RankIcon rank={rank} />
      </div>
      <Avatar src={user.avatar} sx={{ marginRight: "1em" }} />
      <ListItemText
        primary={postData.post_title}
        secondary={postData.music_title}
        style={{
          flexGrow: 1,
        }}
      />
      <div
        class="Top10Last"
        style={{
          flexShrink: 0,
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <FavoriteIcon sx={{ color: "#f44336" }} />
        <Typography variant="subtitle1">{postData.emoji[0]}</Typography>
        <IconButton>
          <Search sx={{ color: "#fbc02d" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default function Top10List({ postData, userData }) {
  var arraydata = [...postData];
  arraydata.sort((a, b) => (a.emoji[0] < b.emoji[0] ? 1 : -1));
  return (
    <div
      style={{
        height: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {arraydata.map((post, index) => (
        <Post key={post.id} rank={index} postData={post} userData={userData} />
      ))}
    </div>
  );
}
