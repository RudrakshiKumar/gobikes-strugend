import React from "react";
import logo from "../assets/logo.png";
import { Box } from "@mui/system";
import { Typography, TextField, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RideCompletion = () => {
  return (
    <div className="text-center m-5 w-[40%] m-auto">
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
          <Typography variant="h5" sx={{ color: "#59CE8F", my: 4 }}>
            Ride Completed Successfully!
          </Typography>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",

              p: 2,
              width: "97%",
              color: "#ffffff",
              bgcolor: "#59CE8F",
              textAlign: "center",
              m: "auto",
            }}
          >
            {" "}
            Download Details
          </Button>{" "}
          <br />
          <Box sx={{ p: 2 }}>
            <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
            <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
            <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
            <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
            <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />
          </Box>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",

              p: 2,
              width: "97%",
              color: "#ffffff",
              bgcolor: "#59CE8F",
              textAlign: "center",
              m: "auto",
            }}
          >
            {" "}
            Rate your experience
          </Button>{" "}
          <br />
        </Box>
      </Box>
    </div>
  );
};

export default RideCompletion;
