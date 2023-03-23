import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import rightSectionNew from "../../assets/images/rightSectionNew.jpg";

// import Offer from "./Offer";
// import Video from "./Video";
import Features from "../../components/desktop/Features";
import BookRide from "../../components/desktop/BookRide";
import Faq from "../../components/desktop/Faq";
import Statistics from "../../components/desktop/Statistics";
// import KnowMore from "./KnowMore";
import goImage from "../../assets/images/goImage.png";
import ReactPlayer from "react-player";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MobilePreLoginNavbar from "../../layouts/mobile/MobilePreLoginNavbar";

const MobileHome = () => {
  return (
    <>
      <MobilePreLoginNavbar />
      <Box classname="">
        <img
          src={rightSectionNew}
          alt="Header"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Box></Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", pt: 2 }}>
            Offers for you
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  // margin: "3%",
                  mt: 2,
                  boxShadow: "1",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" color="#9c3">
                      Get 10% as gocoins
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      src={goImage}
                      alt="goImage"
                      style={{ width: "61px", height: "41px" }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="p">
                  Receive GoCoins worth 10% of the booking amount which you can
                  redeem in your next booking
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed #9c3",
                    width: "55%",
                    marginTop: "5%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#9c3",
                      marginLeft: "55%",
                    }}
                  >
                    GOCOINS
                  </span>
                  <button
                    style={{
                      border: "2px solid #9c3",
                      backgroundColor: "#9c3",
                      color: "#fff",
                      marginLeft: "25%",
                      height: "50px",
                      padding: "0 20px",
                      fontWeight: "500",
                    }}
                  >
                    COPY
                  </button>
                </Box>
                <div style={{ marginTop: "5%" }}>
                  <Typography variant="p" marginLeft="5px">
                    Coupon Code
                  </Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb: 3 }}>
            Commuting Made Easy!
          </Typography>

          <ReactPlayer
            controls
            pip
            width="100%"
            url="https://youtu.be/VB4SUy5h8ME"
          />

          {/* <CardMedia sx={{ marginTop: "5%", width: "20%", height: "" }}>
            <ReactPlayer controls url="https://youtu.be/VB4SUy5h8ME" />
          </CardMedia> */}
        </Box>

        <Features />
        <BookRide />
        <Faq />
        <Statistics />
        <Box sx={{ py: 5 }}>
          <Box
            sx={{
              width: "100%",
              height: "5%",
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
            </Typography>{" "}
            <br />
            <Typography variant="h6" sx={{ marginTop: "3%", color: "#9c3" }}>
              Want to list your unused two-wheeler and earn extra income
            </Typography>
            <br />
            <Typography variant="p" sx={{ fontSize: "15px" }}>
              List your motorcycles and scooters with India's fastest growing
              mobility platform - Just connect to turn them into earning members
              of your family.
            </Typography>
            <br />
            <Button
              variant="contained"
              color="success"
              sx={{ marginTop: "10%" }}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileHome;
