import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Money from "../assets/Money.png";
import Bike from "../assets/Bike.png";
import Rent from "../assets/Rent.png";
import open24hours from "../assets/open24hours.png";
import payLater from "../assets/payLater.png";
import instantRefund from "../assets/instantRefund.png";

export default function Features() {
  return (
    <>
      <Container sx={{ marginTop: "5%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Poppin" }}>
          Why choose GoBikes?
        </Typography>
        <Box sx={{ flexGrow: 1, marginTop: "4%" }}>
          <Grid container spacing={13}>
            <Grid item xs={12} sm={6}>
              <img src={Money} alt="Money" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppin"} fontWeight={"bold"} fontSize={"21px"}>
                  Different Flexible Packages
                </Typography>
                <Typography variant="p" sx={{ fontSize: "20px", fontFamily: "Poppin" }}>
                  Grab daily, weekly, fortnight and monthly packages at
                  discounted rates
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={Bike} alt="Bike" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppin"} fontWeight={"bold"} fontSize={"21px"}>Wide Range</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily: "Poppin" }}
                >
                  Looking for a particular brand or location? We have probably
                  got it
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={13}>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={Rent} alt="Rent" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppin"} fontWeight={"bold"} fontSize={"21px"}>Highly Maintained Fleet</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily: "Poppin" }}
                >
                  Get high quality and serviced vehicles.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={open24hours} alt="open24hours" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppin"} fontWeight={"bold"} fontSize={"21px"}>24*7 At Service</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily: "Poppin" }}
                >
                  Day or night, rent a bike
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={13}>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={payLater} alt="payLater" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppin"} fontWeight={"bold"} fontSize={"21px"}>Book Now, Pay later</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily: "Poppin" }}
                >
                  Flexibility to decide when and how to pay.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={instantRefund} alt="instantRefund" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppin"} fontWeight={"bold"} fontSize={"21px"}>Instant Refund</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily: "Poppin" }}
                >
                  Facing an issue while booking/pick up? We initiate instant
                  refund.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
