import * as React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Paper,
  Typography,
  Divider,
} from "@mui/material";

function Post({ postData }) {
  return (
    <ListItem sx={{ height: 60 }}>
      <ListItemAvatar>
        <Avatar src={postData.avatar}></Avatar>
      </ListItemAvatar>
      <ListItemText primary={postData.name} />
    </ListItem>
  );
}

export default function Userlist({ postData }) {
  return (
    <>
      <List
        disablePadding
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          overflow: "auto",
          height: "100%",
        }}
      >
        {postData.map((post, index) => (
          <>
            <Post key={index} postData={post} />
            <Divider />
          </>
        ))}
      </List>
    </>
  );
}
