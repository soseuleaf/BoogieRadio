import React, { useRef, useMemo, useEffect } from "react";

// Component
import MenuButton from "./MenuButton";

// Framer
import { motion, useCycle } from "framer-motion";

// MUI
import { Paper } from "@mui/material";

// 메뉴 화면 애니메션 적용 값
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

/* 
메뉴 
icon: 화면 버튼에 들어갈 아이콘
content: 내부에 들어갈 컨텐츠
top: 위에서 띄워져 있는 정도
onclick: 메뉴의 버튼이 작동 되었을 때 실행되는 함수 (메인 컴포넌트의 위치를 변경 시킴)
*/
const Menu = ({ index, icon, content, top, isOpen, onClick = (f) => f }) => {
  const openMenu = () => {
    if (isOpen[index]) onClick(0);
    else onClick(index);
  };

  return (
    // 애니메이션 동작을 결정시키는 큰 틀, animate의 같 결정에 따라 하위 컴포넌트의 애니메이션이 동작함.
    <motion.nav initial={false} animate={isOpen[index] ? "open" : "closed"}>
      {/* 컨텐츠가 들어갈 공간, variants는 적용시킬 애니메이션을 지정*/}
      <motion.div
        className="background"
        variants={sidebar(top)}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",

          width: "30vw",
          height: "90vh",
          margin: "10px",
          padding: "25px",
          paddingLeft: "80px",
          borderRadius: "20px",
          background: "rgba(0, 0, 0, 0.2)",

          color: "var(--clr-neon)",
          border: "var(--clr-neon) 0.2em solid",
          boxShadow:
            "inset 0 0 1em 0 var(--clr-neon), 0 0 1em 0 var(--clr-neon)",
        }}
      >
        {content}
      </motion.div>
      {/* 
      메뉴를 열리게 하는 버튼, 내부에 있는 버튼과 이벤트 연결을 위해 toggle 함수를 전달함. 
      해당 함수(toggle)가 실행되면 toggleOpen()으로 useCycle로 지정해둔 값이 변경하고
      메인 컨테츠의 x 값을 변경 시키기 위해 onClick으로 넘어온 함수를 실행 시킴.
      */}
      <MenuButton
        icon={icon}
        toggle={openMenu}
        top={top}
        isOpen={isOpen[index]}
      />
    </motion.nav>
  );
};

export default Menu;
