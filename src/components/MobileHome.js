import { Box } from "@mui/system";
import React from "react";
import rightSection from "../assets/rightSection.jpeg";

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
    </Box>
  );
};

export default MobileHome;