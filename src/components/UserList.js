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
                <ImageIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={user.username}
            secondary={user.profile}
            />
        </ListItem>
        <Divider />
        </Box>
    </List>
    );
}

export default function UserList() {
    const users = [
        {
            id: 1,
            username: '준수',
            profile: 'test.png'
        },
        {
            id: 2,
            username: '찬희',
            profile: 'test.png'
        },
        {
            id: 3,
            username: '동우',
            profile: 'test.png',
        },
        {
            id: 4,
            username: '예진',
            profile: 'test.png'
        },
        {
            id: 5,
            username: '수민',
            profile: 'test.png'
        },
        {
            id: 6,
            username: '승현',
            profile: 'test.png',
        },
        {
            id: 7,
            username: '화성',
            profile: 'test.png'
        },
        {
            id: 8,
            username: '두부',
            profile: 'test.png'
        },
        {
            id: 9,
            username: 'Myuu',
            profile: 'test.png',
        },
        {
            id: 10,
            username: '햄찌',
            profile: 'test.png',
        },
        {
            id: 11,
            username: '오렌ㅈi맛⑨름໒꒱',
            profile: 'test.png',
        },

    ]
    return (
    <Paper
        sx={{
        width: 500,
        objectFit: "cover",
        }}
    >
        {users.map(user => (<User user={user} key={user.id} />))}
    </Paper>
    );
}