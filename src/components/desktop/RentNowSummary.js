import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HondaActiva from "../../assets/images/HeroDestini.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function RentNow() {
  const [payment, setPayment] = useState("");
  const [disable, setDisable] = useState(true);

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const handleDisable = () => {
    setDisable(!disable);
  };

  return (
    <>
      <Container sx={{ marginTop: "2%" }}>
        <Typography variant="h6">Summary</Typography>
        <Grid container spacing={2} sx={{ paddingTop: "5px" }}>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                border: "2px solid #e0e0e0",
                borderRadius: "4px",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={HondaActiva}
                  alt="HondaActiva"
                  style={{ width: "40%" }}
                />
                <div style={{ marginLeft: "5px" }}>
                  <Typography variant="h6">Hero Destini 125</Typography>
                  <Typography variant="p" fontSize="16px">
                    RentNow: <span style={{ fontWeight: "bold" }}>₹449</span>
                  </Typography>
                  <br />
                  <Typography variant="p" fontSize="16px">
                    Refundable Deposit:{" "}
                    <span style={{ fontWeight: "bold" }}>₹2000</span>
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                      width: "27%",
                      marginTop: "7px",
                      display: "flex",
                    }}
                  >
                    <IconButton
                      sx={{
                        padding: "3px",
                        paddingLeft: "5px",
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        borderLeft: "1px solid #e0e0e0",
                        padding: "4px",
                        paddingLeft: "6px",
                        paddingRight: "6px",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      1
                    </Typography>
                    <IconButton sx={{ padding: "3px", paddingLeft: "5px" }}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ marginTop: "7px" }}>
                    <FormControl sx={{ minWidth: 350 }}>
                      <Select
                        value={payment}
                        size="small"
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>Payment Mode:FullPayment</em>
                        </MenuItem>
                        <MenuItem value={10}>Payment Mode:FullPayment</MenuItem>
                        <MenuItem value={20}>
                          Payment Mode:PartialPayment
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div style={{ marginTop: "3%" }}>
                <Typography
                  variant="p"
                  sx={{ fontSize: "16px", color: "#4cbb17" }}
                >
                  Pickup and Drop Date
                </Typography>
                <br />
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography variant="p">
                      <span style={{ fontSize: "35px", fontWeight: "bold" }}>
                        22
                      </span>
                    </Typography>
                    <Typography variant="p" sx={{ marginLeft: "10px" }}>
                      <span>February, 2023</span>
                      <br />
                      <span>1.00PM</span>
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="p">
                      <span style={{ fontSize: "35px", fontWeight: "bold" }}>
                        23
                      </span>
                    </Typography>
                    <Typography variant="p" sx={{ marginLeft: "10px" }}>
                      <span>February, 2023</span>
                      <br />
                      <span>2.00PM</span>
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="p"
                  sx={{ fontSize: "16px", color: "#4cbb17" }}
                >
                  Pickup and Drop Location
                </Typography>
                <br />
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "5px",
                  }}
                >
                  Tikiapara Railway Station
                </Typography>
              </div>
              <Box
                sx={{
                  border: "2px solid #e0e0e0",
                  borderRadius: "4px",
                  padding: "15px",
                  marginTop: "15px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Things to Remember
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: "2px" }}>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      Kilometer Limit
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      100 Kms
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      Kilometers Changes
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      ₹3/Km
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      Location Time
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      7.00AM to 10.00Pm
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      Late Drop Fee
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      ₹100/hr
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box>
              <FormControl sx={{ minWidth: 470 }}>
                <Select
                  value={payment}
                  size="small"
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Apply Coupons</em>
                  </MenuItem>
                  <MenuItem value={10}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            color: "black",
                            backgroundColor: "#eeeeee",
                            ":hover": {
                              backgroundColor: "#eeeeee",
                            },
                          }}
                        >
                          GOCOINS
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Typography
                          variant="p"
                          sx={{ fontSize: "14px", color: "#4cbb17" }}
                        >
                          Receive GoCoins worth 10% of the booking amount
                          <br />
                          which you can redeem in your next booking.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: "#4cbb17" }}
                        >
                          APPLY
                        </Button>
                      </Grid>
                    </Grid>
                  </MenuItem>
                  <MenuItem value={20}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            color: "black",
                            backgroundColor: "#eeeeee",
                            ":hover": {
                              backgroundColor: "#eeeeee",
                            },
                          }}
                        >
                          GOCOINS
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Typography
                          variant="p"
                          sx={{ fontSize: "14px", color: "#4cbb17" }}
                        >
                          Get Flat Rs.50 Off on orders above Rs.1000.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: "#4cbb17" }}
                        >
                          APPLY
                        </Button>
                      </Grid>
                    </Grid>
                  </MenuItem>
                  <MenuItem value={30}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            color: "black",
                            backgroundColor: "#eeeeee",
                            ":hover": {
                              backgroundColor: "#eeeeee",
                            },
                          }}
                        >
                          GOCOINS
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Typography
                          variant="p"
                          sx={{ fontSize: "14px", color: "#4cbb17" }}
                        >
                          Get Flat Rs.100 Off on orders above Rs.2000.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: "#4cbb17" }}
                        >
                          APPLY
                        </Button>
                      </Grid>
                    </Grid>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                border: "2px solid #e0e0e0",
                borderRadius: "4px",
                padding: "10px",
                marginTop: "7px",
                backgroundColor: "#e0e0e0",
              }}
            >
              <Typography
                variant="p"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Fare Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                  <Typography variant="p" fontSize="15px">
                    Rent Amount
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="p" fontSize="15px">
                    ₹449.00
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                  <Typography variant="p" fontSize="15px">
                    Gohub Discount (10% off)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="p" fontSize="15px">
                    <span style={{ color: "#4cbb17" }}>-₹49.00</span>
                  </Typography>
                </Grid>
              </Grid>
              <hr
                style={{
                  background: "#9e9e9e",
                  borderColor: "#9e9e9e",
                  marginBottom: "3px",
                  marginTop: "3px",
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    Total Payable Amount
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    ₹449.10
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="p" sx={{ fontSize: "15px" }}>
                    <span>Refundable Deposit</span>
                    <br />
                    <span>(To be paid at the time of Pickup)</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="p" sx={{ fontSize: "15px" }}>
                    ₹2000.00
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Grid container sx={{ padding: "7px" }}>
              <Grid item>
                <Checkbox
                  {...label}
                  color="success"
                  size="medium"
                  inputProps={{ "aria-label": "controlled" }}
                  onClick={handleDisable}
                />
              </Grid>
              <Grid item sx={{ marginTop: "7px" }}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  I have read the Term and Conditions
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              disabled={disable}
              sx={{
                width: "100%",
                backgroundColor: "#4cbb17",
                ":hover": {
                  backgroundColor: "#4cbb17",
                },
              }}
            >
              PayNow
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
