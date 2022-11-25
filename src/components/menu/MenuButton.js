import * as React from "react";
import { motion } from "framer-motion";
import {
  IconButton,
  Tooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";

import { Clear } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

/*
icon, 화면에 들어갈 메뉴 버튼의 아이콘
toggle, 버튼 클릭시 실행 될 함수 (Menu에 정의되어 있음)
top, 상단에서 얼마나 떨어져 있는지의 값
isopen, 열렸는지 안 열렸는지 확인하는 값
*/

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#fbc02d",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fbc02d",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1em",
    maxWidth: 220,
  },
}));

const MenuButton = ({ tooltip, icon, toggle, top, isOpen }) => (
  <CustomTooltip title={tooltip} placement="right" arrow>
    <IconButton
      onClick={toggle}
      color="primary"
      sx={{
        position: "fixed",
        width: "60px",
        height: "60px",
        left: "26px",
        top: top + 36,
        zIndex: isOpen == true ? 2 : 0,
        backgroundColor: isOpen && "primary.main",
      }}
    >
      {isOpen == 1 ? <Clear sx={{ color: "#000000" }} /> : icon}
    </IconButton>
  </CustomTooltip>
);

export default MenuButton;
