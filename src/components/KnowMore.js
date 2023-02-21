import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function KnowMore() {
  return (
    <>
      <Container sx={{ marginTop: "7%" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "3",
          }}
        >
          <IconButton>
            <NotificationsIcon sx={{ fontSize: "30px", color: "black" }} />
          </IconButton>
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            List your vehicle
          </Typography>
          <Typography variant="h3" sx={{ marginTop: "3%", color: "#9c3" }}>
            Want to list your unused two-wheeler and earn extra income
          </Typography>
          <br />
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            List your motorcycles and scooters with India's fastest growing
            mobility platform - Just connect to turn them into earning members
            of your family.
          </Typography>
          <br />
          <Button variant="contained" color="success" sx={{ marginTop: "3%" }}>
            Know More
          </Button>
        </Box>
      </Container>
    </>
  );
}
