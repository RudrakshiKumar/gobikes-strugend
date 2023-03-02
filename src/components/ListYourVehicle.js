import React, { useState } from "react";
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

const styles = {
  paperContainer: {
    backgroundImage: `url(${ridesharing})`,
  },
};

const ListYourVehicle = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState("step1");
  return (
    <div>
      {isMatch ? (
        <MobileListYourVehicle />
      ) : (
        <Box>
          <Box display={"inline-flex"} sx={{ p: 10 }}>
            <Box>
              <Typography variant="h5" sx={{ py: 4 }}>
                Did you know you can now make money out of your unused
                two-wheeler?
              </Typography>
              <Button
                sx={{
                  width: "50%",
                  color: "#ffffff",
                  bgcolor: "#59CE8F",
                  textAlign: "center",
                  m: "auto",
                  ":hover": { bgcolor: "#36b671" },
                  mt: 4,
                }}
              >
                {" "}
                Start Earning With Gobikes
              </Button>{" "}
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
            <Box
              className="m-auto "
              component="img"
              sx={{
                width: "15%",
                ml: 1,
                py: 4,
              }}
              alt="Your logo."
              src={listvehiclestep1image}
            />
            <Box sx={{ mr: "15%" }}>
              <Typography variant="h4" sx={{ my: 5 }}>
                Process
              </Typography>
              <Box sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                >
                  <img src={listvehiclestep1icon} alt="" />
                  <Box sx={{ pl: 3 }} onClick={() => setActive("step1")}>
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
                </Box>
              </Box>
              <Box sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                >
                  <img src={listvehiclestep2icon} alt="" />
                  <Box sx={{ pl: 3 }} onClick={() => setActive("step2")}>
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
              <Box sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                  onClick={() => setActive("step3")}
                >
                  <img src={listvehiclestep3icon} alt="" />
                  <Box sx={{ pl: 3 }}>
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
              <Box sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#E2f0c680",
                    p: 3,
                  }}
                >
                  <img src={listvehiclestep4icon} alt="" />
                  <Box sx={{ pl: 3 }} onClick={() => setActive("step4")}>
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
                <Button
                  sx={{
                    width: "50%",
                    color: "#ffffff",
                    bgcolor: "#59CE8F",
                    textAlign: "center",
                    m: "auto",
                    ":hover": { bgcolor: "#36b671" },
                    mt: 4,
                  }}
                >
                  {" "}
                  Start Earning With Gobikes
                </Button>{" "}
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
