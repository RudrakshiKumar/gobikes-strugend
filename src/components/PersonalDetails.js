import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../assets/logo.png";
import star from "../assets/star.png";
import loginPopup from "../assets/loginPopup.webp";

const PersonalDetails = () => {
  return (
    <div>
      <Box sx={{ display: "inline-flex" }}>
        <Box sx={{ bgcolor: "#f3f4f6" }}>
          <Box
            className="m-auto "
            component="img"
            sx={{
              height: 70,
              pt: 2,
              px: 5,
            }}
            alt="Your logo."
            src={logo}
          />
          <br />
          <Box
            className="m-auto"
            component="img"
            sx={{
              height: 230,
            }}
            alt="Your logo."
            src={loginPopup}
          />
          <Typography id="modal-modal-description" sx={{ mt: 5, pb: 2.5 }}>
            <div className="grid grid-cols-4 px-5 mx-auto">
              <div>
                <span className="text-sm">15+</span> <br />{" "}
                <span className="text-[11px] text-gray-500">Cities</span>
              </div>
              <div>
                <span className="text-sm">50000+</span> <br />{" "}
                <span className="text-[11px] text-gray-500">
                  Happy Customers
                </span>
              </div>
              <div>
                <span className="text-sm">6000+</span> <br />{" "}
                <span className="text-[11px] text-gray-500">Bikes</span>
              </div>
              <div>
                <Box>
                  <span className="text-sm">
                    4.8/5
                    <Box
                      className="inline-block"
                      component="img"
                      sx={{
                        height: 15,
                        px: 1,
                        mb: 0.5,
                      }}
                      alt="Your logo."
                      src={star}
                    />{" "}
                  </span>{" "}
                  <br />{" "}
                  <span className="text-[11px] text-gray-500">
                    1200+ reviews
                  </span>
                </Box>
              </div>
            </div>
          </Typography>
        </Box>
        <Box sx={{}}>
          <Typography>Personal Deatils</Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First Name*"
              variant="outlined"
            />{" "}
            <br />
            <TextField
              id="outlined-basic"
              label="Last Name*"
              variant="outlined"
            />{" "}
            <br />
            <TextField
              id="outlined-basic"
              label="Email*"
              variant="outlined"
            />{" "}
            <br />
            <TextField
              id="outlined-basic"
              label="Mobile Number*"
              variant="outlined"
            />
          </Box>
          <Button> Submit </Button>
        </Box>
      </Box>
    </div>
  );
};

export default PersonalDetails;
