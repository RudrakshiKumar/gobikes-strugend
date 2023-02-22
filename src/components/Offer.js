import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import goImage from "../assets/goImage.png";

export default function Offer() {
  return (
    <>
      <Container sx={{ marginTop: "7%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Offers for you
        </Typography>
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
                    marginLeft: "17%",
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
              <div style={{ marginTop: "5%" }}>
                <Typography variant="p">
                  Get Flat Rs. 50 off on orders above Rs. 1,000
                </Typography>
              </div>
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
                    marginLeft: "17%",
                  }}
                >
                  GOBIKES50
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
              <div style={{ marginTop: "7%" }}>
                <Typography variant="p" marginLeft="5px">
                  Coupon Code
                </Typography>
              </div>
            </Box>
          </Grid>
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
              <div style={{ marginTop: "5%" }}>
                <Typography variant="p">
                  Get Flat Rs. 100 off on orders above Rs. 2,000
                </Typography>
              </div>
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
                    marginLeft: "17%",
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
              <div style={{ marginTop: "7%" }}>
                <Typography variant="p" marginLeft="5px">
                  Coupon Code
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
