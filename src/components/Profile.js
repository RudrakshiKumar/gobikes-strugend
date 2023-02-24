import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import profileImage from "../assets/Profile.png";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";

export default function Profile() {
  return (
    <>
      <Container sx={{ marginTop: "2%" }}>
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
              }}
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
              }}
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
              }}
            >
              Go Coins
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "2",
              }}
            >
              <div style={{ padding: "3%" }}>
                <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                  Profile
                </Typography>
                <Typography variant="p" sx={{ fontSize: "18px" }}>
                  Basic Details
                </Typography>
                <hr style={{ marginTop: "3%" }} />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={7}>
                    <Grid container sx={{ marginTop: "5%" }}>
                      <Grid item xs={12} sm={10}>
                        <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                          Name
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="text"
                          color="success"
                          sx={{ fontSize: "15px" }}
                        >
                          Edit
                        </Button>
                      </Grid>
                    </Grid>
                    <Typography variant="p" sx={{ fontSize: "18px" }}>
                      Dibyajyoti Sahoo
                    </Typography>
                    <hr style={{ marginTop: "3%" }} />
                    <Grid container sx={{ marginTop: "5%" }}>
                      <Grid item xs={12} sm={10}>
                        <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="text"
                          color="success"
                          sx={{ fontSize: "15px" }}
                        >
                          Edit
                        </Button>
                      </Grid>
                    </Grid>
                    <Typography variant="p" sx={{ fontSize: "18px" }}>
                      sahoodibyajyoti25@gmail.com
                    </Typography>
                    <hr style={{ marginTop: "3%" }} />
                    <div style={{ marginTop: "5%" }}>
                      <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                        Mobile Number
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: "18px" }}>
                        8260921530
                        <IconButton sx={{ marginLeft: "2%", color: "green" }}>
                          <VerifiedRoundedIcon fontSize="small" />
                        </IconButton>
                      </Typography>
                      <hr style={{ marginTop: "3%" }} />
                    </div>
                    <Grid container sx={{ marginTop: "5%" }}>
                      <Grid item xs={12} sm={10}>
                        <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                          Address
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="text"
                          color="success"
                          sx={{ fontSize: "15px" }}
                        >
                          Edit
                        </Button>
                      </Grid>
                    </Grid>
                    <Typography variant="p" sx={{ fontSize: "18px" }}>
                      Not Provided
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Box
                      sx={{
                        border: "1px solid lightGrey",
                        borderRadius: "8px",
                        marginTop: "10px",
                        marginRight: "10px",
                        width: "100%",
                      }}
                    >
                      <div style={{ padding: "4%" }}>
                        <IconButton>
                          <LockRoundedIcon fontSize="large" />
                        </IconButton>
                        <br />
                        <Typography variant="p">
                          Details GoBikes uses to verify your identity can't be
                          changed. Some personal details can be edited, but we
                          may ask you to verify your identity the next time you
                          book or create a listing.
                        </Typography>
                        <br />
                        <div style={{ marginTop: "5%" }}>
                          <IconButton>
                            <PersonPinRoundedIcon fontSize="large" />
                          </IconButton>
                          <br />
                          <Typography variant="p">
                            Personal info that you've shared with us, like
                            email, address and options to manage it. This info
                            is private to you.
                          </Typography>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
