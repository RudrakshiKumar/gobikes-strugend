import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Typography, Button, TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import contactcompany from "../../assets/images/contactcompany.svg";
import contactlocation from "../../assets/images/contactlocation.svg";
import contactphone from "../../assets/images/contactphone.svg";
import contactemail from "../../assets/images/contactemail.svg";
import ReCAPTCHA from "react-google-recaptcha";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import MobilePreLoginNavbar from "../../layouts/mobile/MobilePreLoginNavbar";
import MobileFooter from "../../layouts/mobile/MobileFooter";

const MobileContactUs = () => {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isCapchaDone, setIsCapchaDone] = useState(false);
  const [showSubmit, setShowSubmit] = React.useState(true);

  useEffect(() => {
    // console.log(formData.name.length);
    if (
      formData.name.length > 4 &&
      formData.email.length > 6 &&
      formData.mobile.length > 9 &&
      formData.message.length > 10 &&
      isCapchaDone == true
    ) {
      setShowSubmit(false);
    } else if (
      formData.name.length <= 4 ||
      formData.email.length <= 6 ||
      formData.mobile.length <= 9 ||
      formData.message.length <= 9 ||
      isCapchaDone == false
    ) {
      setShowSubmit(true);
    }
  }, [formData, isCapchaDone]);

  return (
    <div>
      <MobilePreLoginNavbar />
      <Box>
        <Box sx={{ textAlign: "center", my: 3 }}>
          <Typography
            variant="h6"
            fontSize={"30px"}
            fontWeight={"bold"}
            sx={{ color: "#59ce8f" }}
          >
            Contact Us
          </Typography>{" "}
          <Typography variant="h5" fontWeight={"bold"}>
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
        {/* CONTACT FORM */}
        <br />
        <Box
          sx={{
            bgcolor: "#FAFAFA",
            py: "10%",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            m: "auto",
            // boxSizing: "border-box",
            boxShadow: "0 0 6px",
            width: "90%",
          }}
        >
          <Box>
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              sx={{ textAlign: "center", mb: 2 }}
            >
              We're here for you
            </Typography>

            {/* ContactUs form starts here  */}
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                "& > :not(style)": { m: 1, width: "20em" },
              }}
            >
              <TextField
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{
                  height: "7vh",
                  p: "2px",
                  position: "relative",
                  margin: "auto",
                }}
              />
              <br /> <br />
              <TextField
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  height: "7vh",
                  width: 10,
                  p: "2px",
                }}
              />
              <br /> <br />
              <TextField
                name="mobile"
                type="number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                sx={{
                  height: "7vh",
                  width: 10,
                  p: "2px",
                }}
              />
              <br /> <br />
              <TextareaAutosize
                name="message"
                type="text"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                id="outlined-basic"
                placeholder="Message*"
                variant="outlined"
                sx={{ mt: 3 }}
              />
            </Box>

            <Box
              sx={{
                margin: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                m: "auto",
                mt: 3,
              }}
            >
              <div>
                <ReCAPTCHA
                  sitekey={key}
                  onChange={(e) => setIsCapchaDone(true)}
                  onErrored={(e) => setIsCapchaDone(false)}
                />
              </div>
            </Box>

            <Button
              type="submit"
              variant="contained"
              disabled={showSubmit}
              sx={{
                bgcolor: "#99CC33",
                // p: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                m: "auto",
                width: "20em",
                mt: 3,
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>

        {/* CONTACT INFO */}

        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              ml: "5%",
              mt: 10,
            }}
          >
            <Box>
              <img className="w-10" src={contactcompany} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography
                variant="h7"
                fontWeight={"bold"}
                sx={{ color: "#59CE8F" }}
              >
                Registered Company
              </Typography>{" "}
              <br />
              <Typography variant="h7" fontWeight={"bold"}>
                GoBikes Automotive Private Limited
              </Typography>
            </Box>
          </Box>{" "}
          <br />
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              ml: "5%",
            }}
          >
            <Box>
              <img className="w-12" src={contactlocation} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 4 }}>
              <Typography
                variant="h7"
                fontWeight={"bold"}
                sx={{ color: "#59CE8F" }}
              >
                Registered Address{" "}
              </Typography>{" "}
              <br />
              <Typography variant="h7" fontWeight={"bold"} fontSize={"15px"}>
                5th Floor, Seminar Building, Incubation Center IIIT Delhi, New
                Delhi, Delhi 110020{" "}
              </Typography>
            </Box>
          </Box>{" "}
          <br />
          <Box sx={{ display: "flex", ml: "5%" }}>
            <Box>
              <img className="w-8" src={contactphone} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography
                variant="h7"
                fontWeight={"bold"}
                sx={{ color: "#59CE8F" }}
              >
                Mobile Number{" "}
              </Typography>{" "}
              <br />
              <Typography variant="h7" fontWeight={"bold"}>
                +91-8448444897{" "}
              </Typography>
            </Box>
          </Box>{" "}
          <br />
          <Box sx={{ display: "inline-flex", ml: "5%" }}>
            <Box>
              <img className="w-8" src={contactemail} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Box sx={{ display: "inline-flex" }}>
                <Typography
                  variant="h7"
                  fontWeight={"bold"}
                  sx={{ color: "#59CE8F" }}
                >
                  Support :
                </Typography>
                <Typography variant="h7" fontSize={"14px"} fontWeight={"bold"}>
                  &nbsp; contact-us@gobikes.co.in
                </Typography>
              </Box>{" "}
              <br />
              <Box sx={{ display: "inline-flex" }}>
                <Typography
                  variant="h7"
                  fontWeight={"bold"}
                  sx={{ color: "#59CE8F" }}
                >
                  Contact Us :{}
                </Typography>
                <Typography variant="h7" fontSize={"14px"} fontWeight={"bold"}>
                  &nbsp; contact-us@gobikes.co.in{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <div className="h-32"></div>
      <MobileFooter />
    </div>
  );
};

export default MobileContactUs;
