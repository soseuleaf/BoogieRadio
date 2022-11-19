import * as React from "react";
import { useRef, useMemo, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import arrayData from "./data";
import ScrollDialog from "./ScrollDialog";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const sidebar = (top) => ({
  open: {
    clipPath: `circle(800px at 40px ${top}px)`,
    zIndex: 2,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  closed: {
    clipPath: `circle(30px at 40px ${top + 50}px)`,
    zIndex: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
});

const getText = (text) => {
  console.log("글자가 변동되었습니다.");
};
const newArrayData = arrayData.map((item, index) => {
  return (
    <List
      sx={{
        backgroundColor: "transparent",
        width: 290,
      }}
    >
      <Box
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <ListItem sx={{ height: 60 }} key={index}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.song} />
          <ScrollDialog title={item.title} content={item.content} />
        </ListItem>
        <Divider />
      </Box>
    </List>
  );
});

const Menu = ({ top, log = (f) => f }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const top1 = 0;

  useMemo(() => log("asdas"), [isOpen]);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebar(top)}>
        <Paper
          sx={{
            backgroundColor: "transparent",
            visibility: isOpen ? "visible" : "hidden",
            width: 290,
            objectFit: "cover",
          }}
        >
          {newArrayData}
        </Paper>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} top={top} isOpen={isOpen} />
    </motion.nav>
  );
};

export default Menu;
