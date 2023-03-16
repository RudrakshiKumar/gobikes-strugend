import { Box, IconButton, Typography } from "@mui/material";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import React from "react";

export default function NoBikeAvailable() {
  return (
    <>
      <Box
        sx={{
          borderRadius: "5px",
          boxShadow: "2",
          paddingTop: "20%",
          paddingBottom: "20%",
          paddingLeft: "43%",
        }}
      >
        <IconButton sx={{ color: "#59CE8F", marginLeft: "10%" }} size="large">
          <EventBusyIcon fontSize="large" />
        </IconButton>
        <br />
        <Typography variant="p" sx={{ fontSize: "23px" }}>
          No Bike Available
        </Typography>
      </Box>
    </>
  );
}
