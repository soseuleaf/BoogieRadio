import bigList from "./bigList";
import { FixedSizeList } from "react-window";
//import {Paper} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const Row = ({ index, style }) => (
    <Box sx={{}}>
        <ListItem style={{ ...style, ...{display: "flex"} }}>
        <Avatar 
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
        />
        
        <ListItemText primary={bigList[index].name}/>
        
    </ListItem>
    <Divider/>
    </Box>
    
);

export default function UserList(){
    return (
        <div height={400} width={700}>
            <FixedSizeList
            height={300}
            width={500}
            itemCount={bigList.length}
            itemSize={50}
        >
            {Row}
        </FixedSizeList>
        </div>
        
        );
}