import React, { useRef, useMemo, useEffect } from "react";

// Component
import MenuButton from "./MenuButton";

// Framer
import { motion, useCycle } from "framer-motion";

// MUI
import { Paper } from "@mui/material";
import { Edit } from "@mui/icons-material";

const sidebar = (top) => ({
  open: {
    clipPath: `circle(2000px at 40px ${top + 50}px)`,
    zIndex: 1,
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

const Menu = ({ icon, content, top, onClick = (f) => f }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebar(top)}>
        {content}
      </motion.div>
      <MenuButton
        icon={icon}
        toggle={() => {
          toggleOpen();
          onClick();
        }}
        top={top}
        isOpen={isOpen}
      />
    </motion.nav>
  );
};

export default Menu;
