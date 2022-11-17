import React, { useState, useReducer } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Theme } from "@mui/material/styles";

// MUI Icons
import { red, green, grey } from "@mui/material/colors";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

function chagneContent(state, action) {
  switch (action.type) {
    case "Weather":
      return (
        <Paper elevation={4}>
          <Box sx={{ width: 500, height: 500 }}>In Content</Box>
        </Paper>
      );
    case "Traffic":
      return (
        <Paper elevation={4}>
          <Box sx={{ width: 500, height: 500 }}>
            <iframe
              src="https://sxxminkim.github.io/map/"
              style={{
                width: "85%",
                height: "85%",
              }}
            />
          </Box>
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
        <WbSunnyIcon
          sx={{ fontSize: "80px", margin: "25px", color: red[500] }}
        />
      </IconButton>

      <IconButton onClick={() => changeContent("Traffic")}>
        <DirectionsCarIcon
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
