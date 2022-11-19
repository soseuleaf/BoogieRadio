import * as React from "react";

import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ScrollDialog from "./ScrollDialog";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";

function Post({ postData }) {
  return (
    <List
      sx={{
        width: 500,
      }}
    >
      <Box sx={{}}>
        <ListItem sx={{ height: 60 }}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={postData.post_title}
            secondary={postData.music_title}
          />
          <ScrollDialog
            title={postData.post_title}
            content={postData.post_content}
          />
        </ListItem>
        <Divider />
      </Box>
    </List>
  );
}

export default function Top10List({ postData }) {
  return (
    <Paper
      sx={{
        width: 500,
        objectFit: "cover",
      }}
    >
      {postData.map((post) => (
        <Post postData={post} key={post.id} />
      ))}
    </Paper>
  );
}
