import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomizedDividers from "./toggleButton";
export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "80ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <CustomizedDividers />
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={10}
        defaultValue="Default Value12"
      />
    </Box>
  );
}
