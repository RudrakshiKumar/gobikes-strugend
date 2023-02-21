import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import star from "../assets/star.png";
import loginPopup from "../assets/loginPopup.webp";
import googleLogo from "../assets/googleLogo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNavbar from "./MobileNavbar";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Divider } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number-2";
import PhoneInput from "react-phone-number-input";
import TextField from "@mui/material/TextField";
import "react-phone-number-input/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@mui/material/Card";
import { bgcolor } from "@mui/system";
import { MuiTelInput } from "mui-tel-input";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileLogin = () => {
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
        // onClick={handleDrawerClose}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        className="m-auto "
        component="img"
        sx={{
          height: 60,
          mb: 4,
          mt: 5,
        }}
        alt="Your logo."
        src={logo}
      />
      <Typography
        id="modal-modal-description"
        sx={{
          // mt: 2,
          pb: 1,
          fontWeight: "semi-bold",
          fontSize: 25,
          font: "poppins",
        }}
      >
        Welcome to <span className="text-[#4CBB17]"> GoBikes </span>
      </Typography>
      <Typography
        id="modal-modal-description"
        sx={{ pb: 1, color: "text.secondary" }}
      >
        Commuting Made <span className="text-[#4CBB17]">Easy</span>,{" "}
        <span className="text-[#4CBB17]">Affordable </span>
        and <span className="text-[#4CBB17]">Quick</span>
      </Typography>
      {/* <Box
                            className=""
                            component="form"
                            textAlign="center"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              "& > :not(style)": {
                                // ml: 4,
                                width: "86%",
                                height: "90%",
                              },

                              my: 2,
                              py: 2,
                            }}
                            // noValidate
                            autoComplete="off"
                          >
                            <PhoneInput
                              international
                              defaultCountry="IN"
                              value={value}
                              onChange={setValue}
                            />
                          </Box> */}
      <MuiTelInput
        sx={{
          my: 2,
          width: "85% ",
          borderColor: "#FF5733",
        }}
        value={phone}
        onChange={handleChange}
        focusOnSelectCountry
        forceCallingCode
        flagSize="medium"
        defaultCountry="IN"
      />
      <Button
        disabled
        variant="contained"
        sx={{
          textTransform: "none",
          my: 2,
          py: 1.5,
          width: "85% ",
          fontSize: 18,
          fontWeight: 400,
          // bgcolor: "#4CBB17",
          bgcolor: "text.disabled",
        }}
      >
        Send OTP
      </Button>
      <br />
      <Divider
        sx={{
          mt: 1,
          color: "text.disabled",
          mx: 4,
        }}
      >
        OR
      </Divider>
      <Button
        className=""
        variant="outlined"
        sx={{
          textTransform: "none",
          mt: 3,
          color: "#4CBB17",
          fontWeight: "bold",
          borderColor: "#4CBB17",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 20,
            pr: 2,
          }}
          alt="Your logo."
          src={googleLogo}
        />
        Sign in with Google
      </Button>
    </Box>
  );
};

export default MobileLogin;
