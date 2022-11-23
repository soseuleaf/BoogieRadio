import * as React from "react";

import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {FixedSizeList} from "react-window";

import Box from "@mui/material/Box";

function User({ user }) {
    return (
    <List
        sx={{
        width: 500,
        }}
    >
        <Box sx={{}}>
        <ListItem sx={{ height: 60 }}>
            <ListItemAvatar>
                <Avatar src={user.profile}/>
            </ListItemAvatar>
            <ListItemText
            primary={user.username}
            />
        </ListItem>
        <Divider />
        </Box>
    </List>
    );
}

export default function UserList({userdata}) {
    
    return (
        <Paper
        sx={{
        width: 500,
        objectFit: "cover",
        }}
        >
            {userdata.map((user) => (<User user={user} key={user.id}/>))}
        </Paper>
        
    );
}