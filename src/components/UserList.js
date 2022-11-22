import * as React from "react";

import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";

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
            <Avatar>
                <img src={user.profile} style={{width:"20px", height:"20px"}}/>
            </Avatar>
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
//HansungRadio.js에 <UserList userdata={userdata}/> 넣기
export default function UserList({userdata}) {
    
    return (
    <Paper
        sx={{
        width: 500,
        objectFit: "cover",
        }}
    >
        {userdata.map((user) => (<User user={user} key={user.id} />))}
    </Paper>
    );
}
/*
UserList.js 들어갈 공간에다가
import Userlist from "./components./UserList";
import userdata from "./components./userdata";
<UserList userdata={userdata}/>추가

*/