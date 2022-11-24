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

function Post({ postData, userData }) {
  const user = userData[postData.user_id];
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={user.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={postData.post_title}
        secondary={postData.music_title}
      />
      <FavoriteIcon />
      {postData.emoji[0]}
      <ScrollDialog
        title={postData.post_title}
        content={postData.post_content}
      />
      <Divider variant="inset" component="li" />
    </ListItem>
  );
}

export default function Top10List({ postData, userData }) {
  var arraydata = [...postData];
  arraydata.sort((a, b) => (a.emoji[0] < b.emoji[0] ? 1 : -1));
  return (
    <List>
      {arraydata.map((post) => (
        <Post postData={post} key={post.id} userData={userData} />
      ))}
    </List>
  );
}
