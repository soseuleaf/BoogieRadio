import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import { Paper } from "@mui/material";

const sidebar = (top) => ({
  open: {
    clipPath: `circle(2000px at 40px ${top + 50}px)`,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  closed: {
    clipPath: `circle(30px at 40px ${top + 50}px)`,
    zIndex: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
});

const Menu = ({ top }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const top1 = 0;

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebar(top)}>
        <Paper sx={{ visibility: isOpen ? "visible" : "hidden" }}>sadasd</Paper>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} top={top} />
    </motion.nav>
  );
};

export default Menu;
