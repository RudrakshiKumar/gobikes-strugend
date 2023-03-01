import {
  AppBar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React, { useState } from "react";
import HeroDestini from "../assets/HeroDestini.png";
import SocialDistanceRoundedIcon from "@mui/icons-material/SocialDistanceRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import instantRefund from "../assets/instantRefund.png";
import distanceIcon from "../assets/distanceIcon.png";
import location from "../assets/location.png";
import excessChargeIcon from "../assets/excessChargeIcon.png";
import latePenaltyIcon from "../assets/latePenaltyIcon.png";
import AssistantDirectionRoundedIcon from "@mui/icons-material/AssistantDirectionRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import AirlineSeatReclineNormalRoundedIcon from "@mui/icons-material/AirlineSeatReclineNormalRounded";
import SettingsAccessibilityRoundedIcon from "@mui/icons-material/SettingsAccessibilityRounded";
import goImage from "../assets/goImage.png";
import Faq from "./Faq";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function createData(TimeOfCancellation, RefundPercentage, RefundAmount) {
  return { TimeOfCancellation, RefundPercentage, RefundAmount };
}

const rows = [
  createData("If cancelled before 72 hours from pickup time", "100%", "₹"),
  createData(
    "If cancelled between 72 and 24 hours before pickup time",
    "No Refund",
    "₹0"
  ),
  createData("If cancelled within 24 hours of pickup time", "50%", "₹ 0.00"),
];

export default function BookNowPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", padding: "20px" }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Go Hub Location"
                defaultValue="Baghajatin"
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Pickup Date & Time"
                defaultValue="February 26, 2023 1:00 AM"
                size="small"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "#aeea00" }}>
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Dropoff Date & Time"
                defaultValue="February 27, 2023 1:00 AM"
                size="small"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "red" }}>
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#4cbb17", padding: "7px" }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Container sx={{ marginTop: "2%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                border: "1px solid lightGray",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#f8d7da",
                  border: "1px solid #f5c6cb",
                  borderRadius: "5px",
                  padding: "10px",
                  color: "#721c24",
                  width: "30%",
                }}
              >
                Only 1 Bike Available
              </Box>
              <img
                src={HeroDestini}
                alt="Hero Destini"
                style={{ width: "50%", padding: "30px", marginLeft: "100px" }}
              />
              <br />
              <Typography
                variant="p"
                sx={{ fontSize: "12px", marginLeft: "25%" }}
              >
                *Images are for representation purposes only.
              </Typography>
              <Grid container spacing={2} sx={{ marginTop: "2%" }}>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <IconButton sx={{ color: "#4cbb17" }}>
                      <SocialDistanceRoundedIcon fontSize="large" />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography variant="p">Kms Driven</Typography>
                      <Typography variant="p" color="#4cbb17">
                        900 Kms
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <IconButton sx={{ color: "#4cbb17" }}>
                      <SettingsRoundedIcon fontSize="large" />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography variant="p">Last Serviced</Typography>
                      <Typography variant="p" color="#4cbb17">
                        Aug 15, 2022
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <IconButton sx={{ color: "#4cbb17" }}>
                      <EngineeringRoundedIcon fontSize="large" />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography variant="p">Make Year</Typography>
                      <Typography variant="p" color="#4cbb17">
                        2020
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={10}>
                <Typography variant="p" fontWeight="bold">
                  Hero Destini 125
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Box
                  sx={{
                    borderRadius: "3px",
                    color: "#856404",
                    background: "#ffeeba",
                    padding: "5px",
                  }}
                >
                  10% off
                </Box>
              </Grid>
            </Grid>
            <div style={{ marginTop: "10px" }}>
              <Typography variant="p" sx={{ fontWeight: "medium" }}>
                Payment Option
              </Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="daily package"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="daily package"
                  control={<Radio color="success" />}
                  label="Pay Now  (Pay full amount now)"
                />
                <FormControlLabel
                  value="weekly package"
                  control={<Radio color="success" />}
                  label="Partial Payment  (Pay partial amount now and rest at the time of pickup)"
                />
              </RadioGroup>
            </div>
            <Box
              sx={{
                borderRadius: "3px",
                background: "#d4edda",
                color: "#155724",
                marginTop: "10px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <Typography variant="p">
                  Refundable Deposit - ₹ 2000 (To be paid at the time of pickup)
                </Typography>
              </div>
            </Box>
            <div style={{ marginTop: "10px", paddingBottom: "10px" }}>
              <Button
                variant="outlined"
                onClick={handleOpen}
                size="small"
                sx={{ width: "100%" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={10}>
                    <div style={{ paddingTop: "7px", paddingRight: "50%" }}>
                      <Typography variant="p">Cancellation Policy</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <IconButton>
                      <ChevronRightIcon sx={{ color: "blue" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    align="center"
                  >
                    Cancellation Policy
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TableContainer>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Time of Cancellation</TableCell>
                            <TableCell align="right">
                              Refund Percentage
                            </TableCell>
                            <TableCell align="right">Refund Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.TimeOfCancellation}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.TimeOfCancellation}
                              </TableCell>
                              <TableCell align="right">
                                {row.RefundPercentage}
                              </TableCell>
                              <TableCell align="right">
                                {row.RefundAmount}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                </Box>
              </Modal>
            </div>
            <Box sx={{ border: "1px solid lightGray", borderRadius: "5px" }}>
              <div style={{ padding: "10px" }}>
                <Typography variant="h6">Terms & Conditions</Typography>
                <ul>
                  <li>
                    Documents Required:- Aadhar Card, Driving License and
                    Student/Employee ID Card.
                  </li>
                  <li>
                    One Govt address proof has to be submitted at the time of
                    pickup which will be returned at the time of drop.The riders
                    needs to present all the original documents at the time of
                    pickup.
                  </li>
                  <li>
                    Fuel Charges are not included in the security deposit or
                    rent.
                  </li>
                  <li>
                    In case of any damage to the vehicle, the customer is liable
                    to pay the repair charges plus the labour charges as per the
                    Authorised Service Center.
                  </li>
                  <li>
                    Charges to be borne by the customer:- Helmet Lost: Rs. 700,
                    Key Lost: Rs.1000, Full Insurance Declared Value of the
                    vehicle in case of any theft.
                  </li>
                </ul>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "3%" }}>
          <Typography variant="h6" fontWeight="bold">
            Things To Remember
          </Typography>
          <Box
            sx={{
              border: "1px solid lightGray",
              borderRadius: "5px",
              marginTop: "15px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <div style={{ padding: "24px" }}>
                  <img
                    src={instantRefund}
                    alt="instantRefund"
                    style={{
                      width: "auto",
                      height: "55px",
                      padding: "10px",
                      marginLeft: "30px",
                    }}
                  />
                  <br />
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "17px" }}
                  >
                    Security Deposite
                    <IconButton>
                      <InfoOutlinedIcon sx={{ color: "#4cbb17" }} />
                    </IconButton>
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ marginLeft: "30px", color: "#4cbb17" }}
                  >
                    ₹2000
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div style={{ padding: "24px" }}>
                  <img
                    src={distanceIcon}
                    alt="distanceIcon"
                    style={{
                      width: "auto",
                      height: "55px",
                      padding: "10px",
                      marginLeft: "30px",
                    }}
                  />
                  <br />
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "17px" }}
                  >
                    Distance Limit
                    <IconButton>
                      <InfoOutlinedIcon sx={{ color: "#4cbb17" }} />
                    </IconButton>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#4cbb17" }}>
                    No Distance Limit
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div style={{ padding: "24px" }}>
                  <img
                    src={excessChargeIcon}
                    alt="excessChargeIcon"
                    style={{
                      width: "auto",
                      height: "55px",
                      padding: "10px",
                      marginLeft: "30px",
                    }}
                  />
                  <br />
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "17px" }}
                  >
                    Excess Charge
                    <IconButton>
                      <InfoOutlinedIcon sx={{ color: "#4cbb17" }} />
                    </IconButton>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#4cbb17" }}>
                    ₹4 per km
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div style={{ padding: "24px" }}>
                  <img
                    src={latePenaltyIcon}
                    alt="latePenaltyIcon"
                    style={{
                      width: "auto",
                      height: "55px",
                      padding: "10px",
                      marginLeft: "30px",
                    }}
                  />
                  <br />
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "17px" }}
                  >
                    Late Penalty
                    <IconButton>
                      <InfoOutlinedIcon sx={{ color: "#4cbb17" }} />
                    </IconButton>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#4cbb17" }}>
                    ₹100 per hour
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ marginTop: "3%" }}>
          <Typography variant="h6" fontWeight="bold">
            Bike Features
          </Typography>
          <div style={{ marginTop: "2%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <div style={{ display: "flex" }}>
                  <IconButton>
                    <AssistantDirectionRoundedIcon
                      fontSize="large"
                      sx={{ color: "#4cbb17" }}
                    />
                  </IconButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Displacement
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "16px",
                        color: "#4cbb17",
                        fontWeight: "bold",
                      }}
                    >
                      124cc
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div style={{ display: "flex" }}>
                  <IconButton>
                    <SpeedRoundedIcon
                      fontSize="large"
                      sx={{ color: "#4cbb17" }}
                    />
                  </IconButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Top Speed
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "16px",
                        color: "#4cbb17",
                        fontWeight: "bold",
                      }}
                    >
                      100 kmph
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div style={{ display: "flex" }}>
                  <IconButton>
                    <LocalGasStationRoundedIcon
                      fontSize="large"
                      sx={{ color: "#4cbb17" }}
                    />
                  </IconButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Fuel Capacity
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "16px",
                        color: "#4cbb17",
                        fontWeight: "bold",
                      }}
                    >
                      11L
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div style={{ display: "flex" }}>
                  <IconButton>
                    <AirlineSeatReclineNormalRoundedIcon
                      fontSize="large"
                      sx={{ color: "#4cbb17" }}
                    />
                  </IconButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Seats
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "16px",
                        color: "#4cbb17",
                        fontWeight: "bold",
                      }}
                    >
                      2 Seater
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div style={{ display: "flex" }}>
                  <IconButton>
                    <SettingsAccessibilityRoundedIcon
                      fontSize="large"
                      sx={{ color: "#4cbb17" }}
                    />
                  </IconButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Kerb Weight
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "16px",
                        color: "#4cbb17",
                        fontWeight: "bold",
                      }}
                    >
                      116 Kg
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div style={{ display: "flex" }}>
                  <IconButton>
                    <SpeedRoundedIcon
                      fontSize="large"
                      sx={{ color: "#4cbb17" }}
                    />
                  </IconButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Mileage
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "16px",
                        color: "#4cbb17",
                        fontWeight: "bold",
                      }}
                    >
                      65 Kmpl
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: "3%" }}>
          <Grid item xs={12} sm={7}>
            <Typography variant="h6">Pickup Location</Typography>
            <Typography variant="h6" sx={{ color: "#4cbb17", padding: "5px" }}>
              Baghajatin
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <img src={location} alt="location" />
          </Grid>
        </Grid>
        <Container sx={{ marginTop: "3%" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Offers for you
          </Typography>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={4}>
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
                      marginLeft: "8%",
                      height: "50px",
                      padding: "0 13px",
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
            <Grid item xs={12} sm={4}>
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
                      marginLeft: "8%",
                      height: "50px",
                      padding: "0 13px",
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
            <Grid item xs={12} sm={4}>
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
                      marginLeft: "8%",
                      height: "50px",
                      padding: "0 13px",
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
        <Faq />
      </Container>
    </>
  );
}
