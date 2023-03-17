import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import profileImage from "../assets/Profile.png";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Profile from "./Profile";
import Booking from "./Booking";
import GoCoins from "./GoCoins";
import PostLoginNavbar from "./PostLoginNavbar";
import PostLoginFooter from "./PostLoginFooter";

export default function DashBoard() {
  const [active, setActive] = useState("profile");
  return (
    <>
      <PostLoginNavbar />

      <Container sx={{ marginTop: "5%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: 350,
                height: 350,
                borderRadius: 2,
                boxShadow: 2,
                backgroundColor: "#e3f2fd",
              }}
            >
              <div style={{ padding: "17%" }}>
                <img
                  src={profileImage}
                  alt="Profile"
                  style={{
                    width: "80%",
                    marginLeft: "10%",
                  }}
                />
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ marginTop: "25%" }}
                >
                  Dibyajyoti Sahoo
                </Typography>
              </div>
            </Box>
            <Button
              variant="contained"
              startIcon={<AccountBoxOutlinedIcon />}
              sx={{
                justifyContent: "flex-start",
                width: "350px",
                marginTop: "5%",
                padding: "10px",
                fontSize: "17px",
                backgroundColor: "#4cbb17",
                ":hover": {
                  backgroundColor: "#4cbb17",
                },
              }}
              onClick={() => setActive("profile")}
            >
              Profile
            </Button>
            <Button
              variant="contained"
              startIcon={<BookOnlineOutlinedIcon />}
              sx={{
                justifyContent: "flex-start",
                width: "350px",
                marginTop: "3%",
                padding: "10px",
                fontSize: "17px",
                backgroundColor: "#4cbb17",
                ":hover": {
                  backgroundColor: "#4cbb17",
                },
              }}
              onClick={() => setActive("booking")}
            >
              Bookings
            </Button>
            <Button
              variant="contained"
              startIcon={<AccountBalanceWalletOutlinedIcon />}
              sx={{
                justifyContent: "flex-start",
                width: "350px",
                marginTop: "3%",
                padding: "10px",
                fontSize: "17px",
                backgroundColor: "#4cbb17",
                ":hover": {
                  backgroundColor: "#4cbb17",
                },
              }}
              onClick={() => setActive("goCoins")}
            >
              Go Coins
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            {active === "profile" && <Profile />}
            {active === "booking" && <Booking />}
            {active === "goCoins" && <GoCoins />}
          </Grid>
        </Grid>
      </Container>
      <div className="h-40"></div>
      <PostLoginFooter />
    </>
  );
}