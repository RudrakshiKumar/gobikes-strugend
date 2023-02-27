import { Box, Container, Grid, Typography } from "@mui/material";

import React from "react";
import goImage from "../assets/goImage.png";
import bike1 from "../assets/bike1.webp";
import bike2 from "../assets/bike2.webp";
import bike3 from "../assets/bike3.webp";
import Offer from "./Offer";

const OffersForYou = () => {
  return (
    <div>
      <Box sx={{ marginLeft: "5%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Offers for you
        </Typography>
      </Box>

      <Box sx={{ display: { md: "flex" }, justifyContent: "center" }}>
        <Box
          sx={{
            marginTop: "4%",
            width: { md: "30%", xs: "94%" },
            pr: { md: 5, xs: 2 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  margin: "3%",
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
                <img className="w-[50%] m-auto py-2" src={bike1} alt="bike1" />
                <Box
                  sx={{
                    m: { md: "auto" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed #9c3",
                    width: { md: "55%", xs: "80%" },
                    marginTop: "5%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#9c3",
                      marginLeft: { md: "17%" },
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
                <div style={{ marginTop: "5%" }}></div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
        </Box>
        <Box
          sx={{
            marginTop: "4%",
            width: { md: "30%", xs: "94%" },
            pr: { md: 5, xs: 2 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  margin: "3%",
                  boxShadow: "1",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" color="#9c3">
                      Get Flat Rs. 50 OFF
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
                  Get Flat Rs. 50 off on orders above Rs. 1,000
                </Typography>
                <img
                  className="w-[51%] m-auto py-4 h-50"
                  src={bike2}
                  alt="bike2"
                />
                <Box
                  sx={{
                    m: { md: "auto" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed #9c3",
                    width: { md: "55%", xs: "80%" },
                    marginTop: "5%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#9c3",
                      marginLeft: { md: "27%" },
                    }}
                  >
                    GOBIKES50
                  </span>
                  <button
                    style={{
                      border: "2px solid #9c3",
                      backgroundColor: "#9c3",
                      color: "#fff",
                      marginLeft: { md: "25%" },
                      height: "50px",
                      padding: "0 20px",
                      fontWeight: "500",
                    }}
                  >
                    COPY
                  </button>
                </Box>
                <div style={{ marginTop: "5%" }}></div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
        </Box>
        <Box
          sx={{
            marginTop: "4%",
            width: { md: "30%", xs: "94%" },
            pr: { md: 5, xs: 2 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  margin: "3%",
                  boxShadow: "1",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" color="#9c3">
                      Get Flat Rs. 100 OFF
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
                  Get Flat Rs. 100 off on orders above Rs. 2,000
                </Typography>
                <img
                  className="w-[50%] m-auto py-4 h-50"
                  src={bike3}
                  alt="bike3"
                />
                <Box
                  sx={{
                    m: { md: "auto" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed #9c3",
                    width: { md: "55%", xs: "80%" },
                    marginTop: "5%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#9c3",
                      marginLeft: { md: "30%" },
                    }}
                  >
                    GOBIKES100
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
                <div style={{ marginTop: "5%" }}></div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
        </Box>
      </Box>
    </div>
  );
};

export default OffersForYou;
