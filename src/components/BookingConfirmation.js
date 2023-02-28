import React from "react";
import logo from "../assets/logo.png";
import { Box } from "@mui/system";
import { Typography, TextField, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BookingConfirmation = () => {
  return (
    <div className="text-center">
      <Box>
        {/* <Box
          component="img"
          sx={{
            height: 70,
            pt: 2,
            px: 5,
          }}
          alt="Your logo."
          src={logo}
        /> */}
        <br />
        <Box>
          <CheckCircleIcon sx={{ fontSize: 200, color: "#59CE8F" }} />
          <Typography sx={{ color: "#59CE8F" }}>
            Booking Confirmed Successfully!
          </Typography>
          <Button> Download Details</Button> <br />
          <Button> Rate your experience</Button> <br />
          <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />{" "}
          <StarBorderIcon /> <StarBorderIcon />
        </Box>
      </Box>
    </div>
  );
};

export default BookingConfirmation;
