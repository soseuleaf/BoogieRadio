import * as React from "react";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";

import { Edit, Clear } from "@mui/icons-material";

const MenuButton = ({ icon, toggle, top, isOpen }) => (
  <IconButton
    onClick={toggle}
    color="primary"
    sx={{
      width: "50px",
      height: "50px",
      position: "absolute",
      left: 25,
      top: top + 35,
      zIndex: isOpen == true ? 2 : 0,
    }}
  >
    {isOpen == 1 ? <Clear /> : icon}
  </IconButton>
);

export default MenuButton;
