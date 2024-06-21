import { Button, TextField } from "@mui/material";
import React from "react";

const Mui = () => {
  return (
    <>
      <h2>Mui With div tag</h2>
      <TextField placeholder="John Doe" label="Your Name" type="text" />
      <Button variant="contained">Submit</Button>
    </>
  );
};

export default Mui;
