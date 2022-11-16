import React from "react";
import { Paper, Grid, Button } from "@mui/material";

const Main = () => {
  return (
    <Grid container>
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
        <Example />
      </Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Paper
          sx={{
            height: "50vh",
            padding: "24px",
            margin: "24px",
          }}
        >
          Hello
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
