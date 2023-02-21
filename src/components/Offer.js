import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import goImage from "../assets/goImage.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Offer() {
  return (
    <>
      <Container sx={{ marginTop: "7%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Offers for you
        </Typography>
        <div style={{ marginTop: "5%", marginLeft: "5%" }}>
          <Carousel responsive={responsive}>
            <div>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    margin: "3%",
                    boxShadow: "1",
                    borderRadius: "5px",
                    padding: "20px",
                    width: "330px",
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
                    Receive GoCoins worth 10% of the booking amount which you
                    can redeem in your next booking
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px dashed #9c3",
                      width: "60%",
                      marginTop: "5%",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        color: "#9c3",
                        marginLeft: "10%",
                      }}
                    >
                      GOCOINS
                    </span>
                    <button
                      style={{
                        border: "2px solid #9c3",
                        backgroundColor: "#9c3",
                        color: "#fff",
                        marginLeft: "10px",
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
            </div>
            <div>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    margin: "3%",
                    boxShadow: "1",
                    borderRadius: "5px",
                    padding: "20px",
                    width: "330px",
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
                  <div style={{ marginTop: "5%" }}>
                    <Typography variant="p">
                      Get Flat Rs. 50 off on orders above Rs. 1,000
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px dashed #9c3",
                      width: "60%",
                      marginTop: "11%",
                      fontSize: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        marginLeft: "10%",
                        color: "#9c3",
                      }}
                    >
                      GOBIKES50
                    </span>
                    <button
                      style={{
                        border: "2px solid #9c3",
                        backgroundColor: "#9c3",
                        color: "white",
                        height: "50px",
                        marginLeft: "10px",
                        padding: "0 20px",
                        fontWeight: "500",
                      }}
                    >
                      COPY
                    </button>
                  </div>
                  <div style={{ marginTop: "7%" }}>
                    <Typography variant="p" marginLeft="5px">
                      Coupon Code
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </div>
            <div>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    margin: "3%",
                    boxShadow: "1",
                    borderRadius: "5px",
                    padding: "20px",
                    width: "330px",
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
                  <div style={{ marginTop: "5%" }}>
                    <Typography variant="p">
                      Get Flat Rs. 100 off on orders above Rs. 2,000
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px dashed #9c3",
                      width: "60%",
                      marginTop: "11%",
                      fontSize: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        marginLeft: "10%",
                        color: "#9c3",
                      }}
                    >
                      GOBIKES100
                    </span>
                    <button
                      style={{
                        border: "2px solid #9c3",
                        backgroundColor: "#9c3",
                        color: "white",
                        height: "50px",
                        marginLeft: "10px",
                        padding: "0 20px",
                        fontWeight: "500",
                      }}
                    >
                      COPY
                    </button>
                  </div>
                  <div style={{ marginTop: "7%" }}>
                    <Typography variant="p" marginLeft="5px">
                      Coupon Code
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </div>
          </Carousel>
        </div>
      </Container>
    </>
  );
}
