import * as React from "react";

import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {FixedSizeList} from "react-window";
//import {Autosizer} from "react-virtualized-auto-sizer";

import Box from "@mui/material/Box";
import userdata from "./userdata";

function User({index, style}) {
    return (
        <Box>
        <ListItem style={{...style,...{width:"500px"}}} key={index}>
            <ListItemAvatar>
                <Avatar src={userdata[index].profile}/>
            </ListItemAvatar>
            <ListItemText
            primary={userdata[index].username}
            />
        </ListItem>
        <Divider />
        </Box>
    );
}


export default function UserList() {
    
    return (
        <Paper
        sx={{
            objectFit: "cover",
        }}
        >
            
            <FixedSizeList
                itemSize={5}
                itemCount={userdata.length}
            >
                {User}
            </FixedSizeList>
                

        </Paper>
        
    );
}