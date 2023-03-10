import React, { useRef, useState, NavLink } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Container,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import MobileListYourVehicle from "./MobileListYourVehicle";
import listyourvehiclegraphic from "../assets/listyourvehiclegraphic.jpg";
import extraincome from "../assets/extraincome.svg";
import nomoney from "../assets/nomoney.svg";
import ridesharing from "../assets/ridesharing.jpg";
import listvehiclesupport from "../assets/listvehiclesupport.svg";
import listvehicleflexibility from "../assets/listvehicleflexibility.svg";
import Faq from "./Faq";
import NotificationsIcon from "@mui/icons-material/Notifications";
import listvehiclestep1image from "../assets/listvehiclestep1image.jpg";
import listvehiclestep2image from "../assets/listvehiclestep2image.jpg";
import listvehiclestep3image from "../assets/listvehiclestep3image.jpg";
import listvehiclestep4image from "../assets/listvehiclestep4image.jpg";
import listvehiclestep1icon from "../assets/listvehiclestep1icon.svg";
import listvehiclestep2icon from "../assets/listvehiclestep2icon.svg";
import listvehiclestep3icon from "../assets/listvehiclestep3icon.svg";
import listvehiclestep4icon from "../assets/listvehiclestep4icon.svg";
import GoToTop from "./ScrollToTop";
import StartEarning from "./StartEarning";
import { bgcolor } from "@mui/system";
import Navbar from "./Navbar";

const styles = {
  paperContainer: {
    backgroundImage: `url(${ridesharing})`,
  },
};

const ListYourVehicle = () => {
  // const handleClick = (e) => {
  //   console.log("this is:", this);
  // };

  // const changeBgcolor = (e) => {
  //   console.log(e.target.id);
  //   document.getElementById("step1box").classList.add("highlight");
  //   // if (active === "step1") {

  //   //   document.getElementById("step2box").classList.remove("highlight");
  //   //   document.getElementById("step3box").classList.remove("highlight");
  //   //   document.getElementById("step4box").classList.remove("highlight");
  //   // } else if (active === "step2") {
  //   //   document.getElementById("step2box").classList.add("highlight");
  //   //   document.getElementById("step1box").classList.remove("highlight");
  //   //   document.getElementById("step4box").classList.remove("highlight");
  //   //   document.getElementById("step3box").classList.remove("highlight");
  //   // } else if (active === "step3") {
  //   //   document.getElementById("step3box").classList.add("highlight");
  //   //   document.getElementById("step4box").classList.remove("highlight");
  //   //   document.getElementById("step2box").classList.remove("highlight");
  //   //   document.getElementById("step1box").classList.remove("highlight");
  //   // } else {
  //   //   document.getElementById("step4box").classList.add("highlight");
  //   //   document.getElementById("step3box").classList.remove("highlight");
  //   //   document.getElementById("step2box").classList.remove("highlight");
  //   //   document.getElementById("step1box").classList.remove("highlight");
  //   // }
  // };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState("step1");
  const element = useRef("");
  // const [appState, changeState] = useState({
  //   activeObject: null,
  //   objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  // });

  // const handleClick = (name) => {
  //   console.log(name);
  //   const e = document.getElementById(name);
  //   document.getElementById(e).classList.add("highlight");
  //   if (name !== "step1box") {
  //     document.getElementById().classList.remove("highlight");
  //   } else {
  //     document.getElementById(name).classList.add("highlight");
  //   }
  // };

  const handleClick = () => {
    // const e = element.current.id();
    element.current.classList.addClass("highlight");
  };

  return (
    <div>
      {isMatch ? (
        <MobileListYourVehicle />
      ) : (
        <Box>
          <Navbar />
          <Box display={"inline-flex"} sx={{ p: 10 }}>
            <Box>
              <Typography variant="h5" sx={{ py: 4 }}>
                Did you know you can now make money out of your unused
                two-wheeler?
              </Typography>
              <StartEarning />
            </Box>

            <Box
              component="img"
              sx={{
                width: "70%",
                m: "auto",
                py: 4,
              }}
              alt="Your logo."
              src={listyourvehiclegraphic}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ mr: "15%" }}>
              {active === "step1" && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep1image} alt="" />
                </Box>
              )}
              {active === "step2" && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep2image} alt="" />
                </Box>
              )}

              {active === "step3" && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep3image} alt="" />
                </Box>
              )}
              {active === "step4" && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep4image} alt="" />
                </Box>
              )}
            </Box>

            <Box sx={{}}>
              <Typography variant="h4" sx={{ my: 5 }}>
                Process
              </Typography>

              <Box
                ref={element}
                id="step1box"
                // className="highlight"
                onClick={() => {
                  setActive("step1");
                  handleClick();
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                >
                  <img src={listvehiclestep1icon} alt="" />
                  <Box sx={{ pl: 3 }}>
                    <Typography variant="h6" sx={{ pb: 2 }}>
                      STEP 1
                    </Typography>
                    <Typography>
                      <span className="font-bold">Sign up as a Partner</span> -
                      Enroll yourself as a partner and list your <br />{" "}
                      two-wheeler(s) on GoBikes’s platform by submitting the
                      required <br /> description. This should not take more
                      than 2 minutes.
                    </Typography>
                  </Box>
                  ;
                </Box>
              </Box>

              <Box
                ref={element}
                id="step2box"
                onClick={() => {
                  setActive("step2");
                  handleClick();
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                >
                  <img src={listvehiclestep2icon} alt="" />
                  <Box sx={{ pl: 3 }}>
                    <Typography variant="h6" sx={{ pb: 2 }}>
                      STEP 2
                    </Typography>
                    <Typography>
                      <span className="font-bold">
                        Get bookings on your dashboard
                      </span>{" "}
                      - Manage your vehicles
                      <br /> and bookings from our platform through your
                      dashboard.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                id="step3box"
                onClick={() => {
                  setActive("step3");
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                >
                  <img src={listvehiclestep3icon} alt="" />
                  <Box sx={{ pl: 3 }} onClick={() => setActive("step3")}>
                    <Typography variant="h6" sx={{ pb: 2 }}>
                      STEP 3
                    </Typography>
                    <Typography>
                      <span className="font-bold">Complete the booking</span> -
                      Customers would rent your vehicle at a <br /> price
                      defined by you and come to your preferred location for{" "}
                      <br /> pickup and drop of your vehicle.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                id="step4box"
                onClick={() => {
                  setActive("step4");
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                >
                  <img src={listvehiclestep4icon} alt="" />
                  <Box sx={{ pl: 3 }}>
                    <Typography variant="h6" sx={{ pb: 2 }}>
                      STEP 4
                    </Typography>
                    <Typography>
                      <span className="font-bold">Receive Payments</span> - We
                      will transfer your payment directly <br /> to your bank
                      account within 2 working days.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant="h4" textAlign={"center"} sx={{ mt: 10 }}>
              Why list your bike on GoBikes?
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
              <Box sx={{}}>
                <img className="" src={extraincome} alt="Extra Income" />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  Earn extra income
                </Typography>
                <Typography>
                  Make your vehicle an earning <br /> member of the family
                </Typography>
              </Box>
              <Box sx={{ ml: 15 }}>
                <img className="" src={nomoney} alt="Extra Income" />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  Zero listing fee
                </Typography>
                <Typography>
                  No upfront payment to yourself <br /> as a vendor
                </Typography>
              </Box>
              <Box sx={{ ml: 15 }}>
                <img className="" src={listvehiclesupport} alt="Extra Income" />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  ESupport
                </Typography>
                <Typography>
                  24*7 support from the <br /> GoBikes Team
                </Typography>
              </Box>
              <Box sx={{ ml: 15 }}>
                <img
                  className=""
                  src={listvehicleflexibility}
                  alt="Extra Income"
                />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  Flexibility
                </Typography>
                <Typography>
                  Your vehicle, your location, <br /> your price
                </Typography>
              </Box>
            </Box>
          </Box>
          <Faq />

          <Box
            style={styles.paperContainer}
            sx={{
              bgcolor: "#EAEAEA",
              mt: 4,
              // backgroundImage: `url(${styles})`,
            }}
          >
            <Box
              sx={{
                py: 5,
                display: "flex",
                justifyContent: "flex-end",
                pr: 10,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#ffffff",
                  width: "40%",
                  height: "5%",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "3",
                }}
              >
                <IconButton>
                  <NotificationsIcon
                    sx={{ fontSize: "30px", color: "black" }}
                  />
                </IconButton>
                <Typography variant="p" sx={{ fontSize: "20px" }}>
                  List your vehicle
                </Typography>{" "}
                <br />
                <br />
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  Register your vehicle on GoBikes to rent it out via our
                  platform. You can now make easy money while staying at home.
                  GoBikes will ensure an easy, safe and reliable process of
                  renting for you. Our GoBikes Team carefully reviews the
                  renter's documentations to ensure a smooth, hassle-free
                  process for both the renters and the vehicle owners.
                </Typography>
                <br />
                <StartEarning />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {/* <GoToTop /> */}
    </div>
  );
};

export default ListYourVehicle;
