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
//문제: <Avatar>에 img src를 일반적인 링크로도 넣어봤는데 그냥 안보임... 
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
//HansungRadio.js에 <UserList userdata={userdata}/> 넣기
export default function UserList({userdata}) {
    
    return (
        <>
        {userdata.map((user) => (<User user={user} key={user.id}/>))}
        </>
    );
}
/*
UserList.js 들어갈 공간에다가
import Userlist from "./components./UserList";
<UserList userdata={userdata}/>추가
*/