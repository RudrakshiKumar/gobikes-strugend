import { Box, Container, IconButton, Typography } from "@mui/material";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import React from "react";

export default function NoBikeAvailable() {
  return (
    <>
      <Container sx={{ marginTop: "2%" }}>
        <Box
          sx={{
            borderRadius: "5px",
            boxShadow: "3",
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
      </Container>
    </>
  );
}
