import { Box } from "@mui/system";
import React from "react";
import rightSection from "../assets/rightSection.jpeg";
import Home from "./Home";

const MobileHome = () => {
  return (
    <Box>
      <img
        src={rightSection}
        alt="Header"
        style={{
          width: "1000vw",
          height: "60vh",
        }}
      />
      <Home />
    </Box>
  );
};

export default MobileHome;
