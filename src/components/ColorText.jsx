import { Box } from "@mui/material";
import React from "react";

const ColorText = ({ color, children }) => {
  return (
    <Box sx={{ color }} component={"span"}>
      {children}
    </Box>
  );
};

export default ColorText;
