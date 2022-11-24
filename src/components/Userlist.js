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

function UserItem({ userData }) {
  return (
    <ListItem sx={{ height: 60 }}>
      <ListItemAvatar>
        <Avatar src={userData.avatar}></Avatar>
      </ListItemAvatar>
      <ListItemText primary={userData.name} />
    </ListItem>
  );
}

export default function Userlist({ userData }) {
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
        {userData.map((user, index) => (
          <div key={index}>
            <UserItem userData={user} />
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
}
