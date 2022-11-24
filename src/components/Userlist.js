import * as React from "react";

import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Box, Paper } from "@mui/material";
import { FixedSizeList } from 'react-window';


function Post({ postData }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={postData.avatar} />
      </ListItemAvatar>
      <ListItemText primary={postData.name} />
    </ListItem>
  );
}

export default function Userlist({ postData }) {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        overflow: 'auto',
        height: "90%",
      }}
    >
      {postData.map((post) => (
        <Post postData={post} key={post.id} />
      ))}
    </List>
  );
}
