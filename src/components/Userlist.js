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
} from "@mui/material";

function Post({ postData }) {
  return (
    <List
      sx={{
        width: 450,
      }}
    >
      <Box>
        <ListItem sx={{ height: 60 }}>
          <ListItemAvatar>
            <Avatar src={postData.avatar}></Avatar>
          </ListItemAvatar>
          <ListItemText primary={postData.name} />
        </ListItem>
        <Divider />
      </Box>
    </List>
  );
}

export default function Userlist({ postData }) {
  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          overflow: "auto",
          height: "100%",
        }}
      >
        {postData.map((post) => (
          <Post postData={post} key={post.id} />
        ))}
      </List>
    </>
  );
}
