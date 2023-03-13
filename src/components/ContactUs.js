import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { Typography, Grid, Button, TextareaAutosize } from "@mui/material";
import MobileContactUs from "./MobileContactUs";
import TextField from "@mui/material/TextField";
import contactcompany from "../assets/contactcompany.svg";
import contactlocation from "../assets/contactlocation.svg";
import contactphone from "../assets/contactphone.svg";
import contactemail from "../assets/contactemail.svg";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "./Navbar";
import PostLoginFooter from "./PostLoginFooter";

const ContactUs = () => {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const [capchaIsDone, setCapchaDone] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  function onChange() {
    setCapchaDone(true);
  }

  return (
    <div>
      <Navbar />
      {isMatch ? (
        <MobileContactUs />
      ) : (
        <Box
          sx={{
            display: "flex",
            position: "relative",
            padding: "0 12%",
            boxSizing: "border-box",
            marginTop: "5%",
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h5"
                fontSize={"30px"}
                fontWeight={"bold"}
                sx={{ color: "#99CC33" }}
              >
                Contact Us
              </Typography>{" "}
              <br />
              <Typography variant="h4" fontWeight={"bold"}>
                How can we help you?
              </Typography>
              <br />
              <Typography
                variant="p"
                fontSize={"18px"}
                fontWeight={"bold"}
                sx={{ color: "#717171" }}
              >
                Fill in the form or drop an email
              </Typography>
            </Box>
            <Box className="" sx={{}}>
              <Grid container columnSpacing={2} sx={{ py: 2, mr: 20 }}>
                <Grid item xs={6} sx={{ m: "auto" }}>
                  <img
                    className="m-auto"
                    src={contactcompany}
                    alt="Extra Income"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="h6" sx={{ pb: 2 }}>
                    Registered Company
                  </Typography>
                  <Typography>GoBikes Automotive Private Limited</Typography>
                </Grid>
              </Grid>
              <Grid container columnSpacing={2} sx={{ py: 2 }}>
                <Grid item xs={6} sx={{ m: "auto" }}>
                  <img
                    className="m-auto"
                    src={contactlocation}
                    alt="Extra Income"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" sx={{ pb: 2 }}>
                    Registered Address
                  </Typography>
                  <Typography>
                    5th Floor, Seminar Building, Incubation Center IIIT Delhi,
                    New Delhi, Delhi 110020
                  </Typography>
                </Grid>
              </Grid>
              <Grid container columnSpacing={2} sx={{ py: 2 }}>
                <Grid item xs={6} sx={{ m: "auto" }}>
                  <img
                    className="m-auto"
                    src={contactphone}
                    alt="Extra Income"
                  />
                </Grid>
                <Grid item xs={6} sx={{ pb: 2 }}>
                  <Typography variant="h6" sx={{ pb: 2 }}>
                    Mobile Number
                  </Typography>
                  <Typography>+91-8448444897</Typography>
                </Grid>
              </Grid>
              <Grid container columnSpacing={2}>
                <Grid item xs={6} sx={{ m: "auto" }}>
                  <img
                    className="m-auto"
                    src={contactemail}
                    alt="Extra Income"
                  />
                </Grid>
                <Grid item xs={6} sx={{ pb: 10 }}>
                  <Typography variant="h6" sx={{}}>
                    Support :
                  </Typography>
                  <Typography sx={{}}>support@gobikes.co.in</Typography>
                  <Typography variant="h6" sx={{}}>
                    Contact Us :
                  </Typography>
                  <Typography>contact-us@gobikes.co.in</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "auto",
              left: "10em",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                bgcolor: "#FAFAFA",
                p: "10%",
                borderRadius: "20px",
                boxSizing: "border-box",
                boxShadow: "0 0 6px",
              }}
            >
              <Typography fontWeight={"bold"} fontSize={"25px"}>
                We're here for you:
              </Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30em" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  sx={{
                    height: "7vh",
                    p: "2px",
                    position: "relative",
                    margin: "auto",
                  }}
                  id="outlined-basic"
                  label="Name*"
                  variant="outlined"
                />{" "}
                <br />
                <TextField
                  sx={{
                    height: "7vh",
                    width: 10,
                    p: "2px",
                  }}
                  id="outlined-basic"
                  label="Email*"
                  variant="outlined"
                />{" "}
                <br />
                <TextField
                  sx={{
                    height: "7vh",
                    width: 10,
                    p: "2px",
                  }}
                  id="outlined-basic"
                  label="Mobile*"
                  variant="outlined"
                />{" "}
                <br />
                <TextareaAutosize
                  id="outlined-basic"
                  label="message"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ margin: "10px" }}>
                <div>
                  <ReCAPTCHA sitekey={key} onChange={onChange} />
                </div>
              </Box>
              {capchaIsDone && (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#99CC33",
                    p: "7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "35em",
                  }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      )}
      <PostLoginFooter />
    </div>
  );
};

export default ContactUs;
