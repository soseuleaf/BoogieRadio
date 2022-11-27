import React, { useState, useEffect, useRef, useMemo } from "react";

// MUI
import { Typography } from "@mui/material";
import { Clear } from "@mui/icons-material";

// Data
import QuizData from "/src/db/QuizData";

const InfoPage = () => {
  return (
    <div
      className="ReadPost"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Clear sx={{ fontSize: "20em", color: "primary.main" }} />
      <Typography variant="h6" sx={{ color: "primary.main" }}>
        Team X
      </Typography>
      <Typography variant="h4" sx={{ color: "primary.main" }}>
        BoogieRadio
      </Typography>
      <br />
      <Typography variant="subtitle1">
        강예진, 김동우, 김수민, 김준수, 한찬희
      </Typography>
      <Typography variant="body2">2022.11.27.</Typography>
    </div>
  );
};

export default InfoPage;
