import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import { PostData } from "/src/data/PostData";
import PostAdd from "./PostAdd";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function WriteDialog(props) {
  var postData = { props };
  const loadUserPost = () => [...PostData];
  var [postData, setPostData] = useState(loadUserPost());

  const addPost = (data) => {
    console.log(postData);
    console.log(data);
    setPostData([...postData, data]);
  };

  useEffect(() => {
    console.log(postData);
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPostData([...postData, data]);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        글쓰기
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
          </Toolbar>
        </AppBar>
        <PostAdd onClick={addPost} />
      </Dialog>
    </div>
  );
}
export default WriteDialog;
