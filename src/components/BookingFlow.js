import {
  AppBar,
  Box,
  Button,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HeroDestini from "../assets/HeroDestini.png";
import HondaSP from "../assets/HondaSP.png";
import { Link } from "react-router-dom";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "15%",
  right: "-7%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "green",
  color: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

export default function BookingFlow() {
  const [packages, setPackages] = useState("dailyPackages");

  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", padding: "20px" }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
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
            <Grid item xs={12} sm={5}>
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
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                border: "1px solid lightGray",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <Typography variant="h5">FILTER</Typography>
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  BOOKING DURATION
                </Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="daily package"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="daily package"
                    control={<Radio color="success" />}
                    label="Daily Package"
                    onClick={() => {
                      setPackages("dailyPackages");
                      handlePopup();
                    }}
                  />
                  <FormControlLabel
                    value="weekly package"
                    control={<Radio color="success" />}
                    label="Weekly Package"
                    onClick={() => {
                      setPackages("weeklyPackages");
                      handlePopup();
                    }}
                  />
                  <FormControlLabel
                    value="15 days package"
                    control={<Radio color="success" />}
                    label="15 Days Package"
                    onClick={() => {
                      setPackages("15daysPackages");
                      handlePopup();
                    }}
                  />
                  <FormControlLabel
                    value="monthly package"
                    control={<Radio color="success" />}
                    label="Monthly Package"
                    onClick={() => {
                      setPackages("monthlyPackages");
                      handlePopup();
                    }}
                  />
                </RadioGroup>
              </div>
              <hr />
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  TRANSMISSION TYPE
                </Typography>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("gear");
                      handlePopup();
                    }}
                  />
                  Gear
                </div>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("gearLess");
                      handlePopup();
                    }}
                  />
                  Gearless
                </div>
              </div>
              <hr />
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  GO HUBS
                </Typography>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("baghajatin");
                      handlePopup();
                    }}
                  />
                  Baghajatin
                </div>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("tikiaparaRailwayStation");
                      handlePopup();
                    }}
                  />
                  Tikiapara Railway Station
                </div>
              </div>
              <hr />
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  Brands
                </Typography>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("hero");
                      handlePopup();
                    }}
                  />
                  Hero
                </div>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("honda");
                      handlePopup();
                    }}
                  />
                  Honda
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            {packages === "dailyPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "100%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "weeklyPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "100%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹4049
                        </Typography>
                        <br />
                        <Typography variant="p">1000 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹7019
                        </Typography>
                        <br />
                        <Typography variant="p">2400 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "15daysPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "100%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹8099
                        </Typography>
                        <br />
                        <Typography variant="p">2000 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹9099
                        </Typography>
                        <br />
                        <Typography variant="p">3000 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "monthlyPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "100%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹15299
                        </Typography>
                        <br />
                        <Typography variant="p">4500 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹16300
                        </Typography>
                        <br />
                        <Typography variant="p">5500 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "gear" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "gearLess" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "100%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "baghajatin" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "tikiaparaRailwayStation" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "100%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "hero" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "100%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "honda" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <div style={{ display: "flex" }}>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "25px" }}
                        >
                          View
                        </Button>
                      </span>
                      <span style={{ width: "100%", padding: "5px" }}>
                        <hr />
                      </span>
                    </div>
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#4cbb17" }}
                          component={Link}
                          to="/BookNowPage"
                          onClick={handlePopup}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <IconButton>
              <TaskAltOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Success
            </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ ml: 5 }}>
            Date and time changed
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
