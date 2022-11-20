import React, { useState, useReducer } from "react";

// Componenets
import Traffic from "./Traffic";
import Weather from "./Weather";

// MUI
import { Box, Paper, Slide, IconButton } from "@mui/material";
import { Theme } from "@mui/material/styles";

// MUI Icons
import { red, green, grey } from "@mui/material/colors";
import { WbSunny, DirectionsCar } from "@mui/icons-material";

function chagneContent(state, action) {
  switch (action.type) {
    case "Weather":
      return <Paper elevation={4}>{/* <Weather /> 시연 때만 키자*/}</Paper>;
    case "Traffic":
      return (
        <Paper elevation={4}>
          <Traffic />
        </Paper>
      );
    default:
      throw new Error("Unsupported action type:", action.type);
  }
}

const SimpleSlide = () => {
  const [checked, setChecked] = useState(false);
  const [state, dispatch] = useReducer(chagneContent, "Weather");

  const changeContent = (type) => {
    dispatch({ type: type });
    setChecked(true);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
      }}
    >
      <IconButton onClick={() => changeContent("Weather")}>
        <WbSunny sx={{ fontSize: "80px", margin: "25px", color: red[500] }} />
      </IconButton>

      <IconButton onClick={() => changeContent("Traffic")}>
        <DirectionsCar
          sx={{ fontSize: "80px", margin: "25px", color: green[500] }}
        />
      </IconButton>

      <Slide
        direction="up"
        mountOnEnter
        unmountOnExit
        in={checked}
        onClick={() => setChecked(false)}
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        {state}
      </Slide>
    </Box>
  );
};

export default SimpleSlide;
