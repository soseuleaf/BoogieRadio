import * as React from "react";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";

import { Clear } from "@mui/icons-material";

/*
icon, 화면에 들어갈 메뉴 버튼의 아이콘
toggle, 버튼 클릭시 실행 될 함수 (Menu에 정의되어 있음)
top, 상단에서 얼마나 떨어져 있는지의 값
isopen, 열렸는지 안 열렸는지 확인하는 값
*/

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
