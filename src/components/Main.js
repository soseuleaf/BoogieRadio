import React from "react";

// Component
import Weather from "./Weather";
import Traffic from "./Traffic";
import Neon from "./Neon/Neon";

// MUI
import { Paper, Grid, Button } from "@mui/material";

const Main = () => {
  return (
    <Grid container>
      <Neon content="BoogieRadio" />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        asdasd
      </Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Paper
          sx={{
            padding: "24px",
            margin: "24px",
          }}
        >
          {/* <Traffic />
          <Weather /> */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
