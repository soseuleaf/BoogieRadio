import * as React from "react";

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
    <Paper
      sx={{
        //maxwidth: 500,
        objectFit: "cover",
        overflow: "auto",
        maxHeight: 700,
      }}
    >
      {postData.map((post) => (
        <Post postData={post} key={post.id} />
      ))}
    </Paper>
  );
}
