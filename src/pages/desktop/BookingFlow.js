import {
  AppBar, Box, Button, CardContent, Checkbox, Container, FormControlLabel, Grid, IconButton, Input, Modal, Radio, RadioGroup, Skeleton, TextField, Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { HeroDestini, HondaSP, CityList } from '../../Constants'
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileBookingFlow from "../../pages/mobile/MobileBookingFlow";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import dayjs from "dayjs";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const DailyPackageBikeList = [
  { model: ' Hero Destini 125', image: HeroDestini, location: 'Tikiapara Railway Station', price: '₹449', limit: '100 Km limit' },
  { model: '  Honda SP 125', image: HondaSP, location: 'Baghajatin', price: '₹719', limit: ' 240 Km limit' },
]
const WeeklyPackageBikeList = [
  { model: ' Hero Destini 125', image: HeroDestini, location: 'Tikiapara Railway Station', price: '₹4049', limit: '1000 Km limit' },
  { model: '  Honda SP 125', image: HondaSP, location: 'Baghajatin', price: '₹7019', limit: ' 2400 Km limit' },
]
const halfMonthlyPackageBikeList = [
  { model: ' Hero Destini 125', image: HeroDestini, location: 'Tikiapara Railway Station', price: '₹7000', limit: '2000 Km limit' },
  { model: '  Honda SP 125', image: HondaSP, location: 'Baghajatin', price: '₹9000', limit: ' 3000 Km limit' },
]
const MonthlyPackageBikeList = [
  { model: ' Hero Destini 125', image: HeroDestini, location: 'Tikiapara Railway Station', price: '₹15299', limit: '4500 Km limit' },
  { model: '  Honda SP 125', image: HondaSP, location: 'Baghajatin', price: '₹16300', limit: ' 5500 Km limit' },
]

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

const styles = {
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

const StyledCityCard = {
  width: "125px",
  height: "125px",
  borderRadius: "5px",
}

export default function BookingFlow(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [packages, setPackages] = useState("dailyPackages");
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [location, setLocation] = useState(false);
  const handleLocationOpen = () => setLocation(true);
  const handleLocationClose = () => setLocation(false);

  const [name, setName] = useState("Location");
  const [setEditName] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const date = useLocation();

  useEffect(() => {
    const initial_StartDate = dayjs(date.state.selected_startDate.$d);
    const initial_EndDate = dayjs(date.state.selected_endDate.$d);
    const initial_CityName = date.state.selected_cityName;
    setStartDate(initial_StartDate);
    setEndDate(initial_EndDate);
    setName(initial_CityName);
    console.log(initial_StartDate.$D);
  }, []);
  const handleNavigate = () => {
    navigate("/BookNowPage", {
      state: {
        selected_startDate: startDate,
        selected_endDate: endDate,
      },
    });
  };

  return (
    <>
      {isMatch ? (
        <MobileBookingFlow />
      ) : (
        <Box textAlign={'center'}>
          <DynamicNavbar />
          <AppBar
            position="sticky"
            sx={{ backgroundColor: "white", padding: "20px" }}
          >
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Pickup Date & Time"
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Dropoff Date & Time"
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    onClick={handleLocationOpen}
                    sx={{ marginTop: "5px", marginLeft: "12px" }}
                  >
                    <LocationOnIcon sx={{ color: "#59CE8F", fontSize: 30 }} />
                    <Typography
                      sx={{ color: "#000000" }}
                      value={name}
                      onChange={(e) => {
                        setEditName(e.target.value);
                        setName(e.target.value);
                      }}
                    >
                      {name}
                    </Typography>
                  </Button>
                </Grid>
                <Modal
                  open={location}
                  onClose={handleLocationClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Choose your preferred city
                    </Typography>
                    <IconButton
                      aria-label="close"
                      onClick={() => setLocation(false)}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[600],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Grid container spacing={2} sx={{ marginTop: "5px" }}>
                      {
                        CityList.map((city, index) => (
                          <Grid item key={index} xs={12} sm={2}>
                            <img
                              className="image"
                              src={city.image}
                              alt={city.name}
                              style={StyledCityCard}
                              onClick={() => {
                                setName(city.name);
                                setLocation(false);
                              }}
                            />
                            <Typography variant="h6" align="center">
                              {city.name}
                            </Typography>
                          </Grid>
                        ))
                      }
                    </Grid>
                  </Box>
                </Modal>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{
                      backgroundColor: "#4cbb17",
                      padding: "10px",
                      marginTop: "5px",
                      marginRight: "12px",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                    }}
                    onClick={handleOpen}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
          <Box sx={{ pt: 3, }}>
            <TextField variant={'outlined'} type="text" placeholder="search..." sx={{ width: '40vw', borderRadius: 4 }} />
            <Button variant="contained" sx={{ mx: 4 }} >Search</Button>
          </Box>
          <Typography pt={3} variant='h6' component={'h4'} color={'red'}>Available till 10 pm</Typography>
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
                          handleOpen();
                        }}
                      />
                      <FormControlLabel
                        value="weekly package"
                        control={<Radio color="success" />}
                        label="Weekly Package"
                        onClick={() => {
                          setPackages("weeklyPackages");
                          handleOpen();
                        }}
                      />
                      <FormControlLabel
                        value="15 days package"
                        control={<Radio color="success" />}
                        label="15 Days Package"
                        onClick={() => {
                          setPackages("15daysPackages");
                          handleOpen();
                        }}
                      />
                      <FormControlLabel
                        value="monthly package"
                        control={<Radio color="success" />}
                        label="Monthly Package"
                        onClick={() => {
                          setPackages("monthlyPackages");
                          handleOpen();
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
                          handleOpen();
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
                          handleOpen();
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
                          handleOpen();
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
                          handleOpen();
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
                          handleOpen();
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
                          handleOpen();
                        }}
                      />
                      Honda
                    </div>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                {isLoading ? <Grid container spacing={1} height={'100%'} width={"100%"} mx={'auto'} >
                  {[1, 2, 3, 4].map((item) => (<Grid item xs={6} sm={4} key={item}>
                    {/* <Box border={'0.4px dotted grey'}   display={'flex'} flexDirection={'column'}  > */}
                    {/* 
                <Skeleton width={'60%'} height={30} sx={{ alignSelf: 'center' }} /> */}
                    <Skeleton sx={{ color: 'black', p: 0, m: 0 }} height={'300px'} />
                    {/* <Skeleton sx={{ height: 80, width: 70, borderRadius: '50%', alignSelf: 'end', mr: 1 }} />
                <Skeleton width={'90%'} height={70} /> */}
                    {/* </Box> */}
                  </Grid>))}

                </Grid> : <Box>
                  {packages === "dailyPackages" && (
                    <Grid container spacing={2}>

                      {DailyPackageBikeList.map(({ model, image, price, location, limit }, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <CardContent
                            sx={{
                              border: "1px solid lightGray",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography
                              variant="h6"
                              align="center"
                              sx={{ fontWeight: "bold" }}
                            >
                              {model}
                            </Typography>
                            <img
                              src={image}
                              alt={model}
                              style={{
                                height: "100%",
                                width: "100%",
                                padding: "7px",
                              }}
                            />
                            <TextField
                              fullWidth
                              label="Available at"
                              defaultValue={location}
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
                                  {price}
                                </Typography>
                                <br />
                                <Typography variant="p">{limit}</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Button
                                  size="small"
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#4cbb17",
                                    ":hover": {
                                      backgroundColor: "#4cbb17",
                                    },
                                  }}
                                  onClick={handleNavigate}
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
                                <Typography variant="p">
                                  Make Year : 2020
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      ))}
                    </Grid>

                  )}
                  {packages === "weeklyPackages" && (
                    <Grid container spacing={2}>
                      {WeeklyPackageBikeList.map(({ model, image, price, location, limit }, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <CardContent
                            sx={{
                              border: "1px solid lightGray",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography
                              variant="h6"
                              align="center"
                              sx={{ fontWeight: "bold" }}
                            >
                              {model}
                            </Typography>
                            <img
                              src={image}
                              alt={model}
                              style={{
                                height: "100%",
                                width: "100%",
                                padding: "7px",
                              }}
                            />
                            <TextField
                              fullWidth
                              label="Available at"
                              defaultValue={location}
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
                                  {price}
                                </Typography>
                                <br />
                                <Typography variant="p">{limit}</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Button
                                  size="small"
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#4cbb17",
                                    ":hover": {
                                      backgroundColor: "#4cbb17",
                                    },
                                  }}
                                  onClick={handleNavigate}
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
                                <Typography variant="p">
                                  Make Year : 2020
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  {packages === "15daysPackages" && (
                    <Grid container spacing={2}>
                      {halfMonthlyPackageBikeList.map(({ model, image, price, location, limit }, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <CardContent
                            sx={{
                              border: "1px solid lightGray",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography
                              variant="h6"
                              align="center"
                              sx={{ fontWeight: "bold" }}
                            >
                              {model}
                            </Typography>
                            <img
                              src={image}
                              alt={model}
                              style={{
                                height: "100%",
                                width: "100%",
                                padding: "7px",
                              }}
                            />
                            <TextField
                              fullWidth
                              label="Available at"
                              defaultValue={location}
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
                                  {price}
                                </Typography>
                                <br />
                                <Typography variant="p">{limit}</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Button
                                  size="small"
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#4cbb17",
                                    ":hover": {
                                      backgroundColor: "#4cbb17",
                                    },
                                  }}
                                  onClick={handleNavigate}
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
                                <Typography variant="p">
                                  Make Year : 2020
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  {packages === "monthlyPackages" && (
                    <Grid container spacing={2}>
                      {MonthlyPackageBikeList.map(({ model, image, price, location, limit }, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <CardContent
                            sx={{
                              border: "1px solid lightGray",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography
                              variant="h6"
                              align="center"
                              sx={{ fontWeight: "bold" }}
                            >
                              {model}
                            </Typography>
                            <img
                              src={image}
                              alt={model}
                              style={{
                                height: "100%",
                                width: "100%",
                                padding: "7px",
                              }}
                            />
                            <TextField
                              fullWidth
                              label="Available at"
                              defaultValue={location}
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
                                  {price}
                                </Typography>
                                <br />
                                <Typography variant="p">{limit}</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Button
                                  size="small"
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#4cbb17",
                                    ":hover": {
                                      backgroundColor: "#4cbb17",
                                    },
                                  }}
                                  onClick={handleNavigate}
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
                                <Typography variant="p">
                                  Make Year : 2020
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  {packages === "gear" && (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <CardContent
                          sx={{
                            border: "1px solid lightGray",
                            borderRadius: "5px",
                          }}
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
                            style={{
                              height: "100%",
                              width: "81%",
                              padding: "7px",
                            }}
                          />
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
                                size="small"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#4cbb17",
                                  ":hover": {
                                    backgroundColor: "#4cbb17",
                                  },
                                }}
                                onClick={handleNavigate}
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
                              <Typography variant="p">
                                Make Year : 2020
                              </Typography>
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
                          sx={{
                            border: "1px solid lightGray",
                            borderRadius: "5px",
                          }}
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
                            style={{
                              height: "100%",
                              width: "100%",
                              padding: "7px",
                            }}
                          />
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
                                size="small"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#4cbb17",
                                  ":hover": {
                                    backgroundColor: "#4cbb17",
                                  },
                                }}
                                onClick={handleNavigate}
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
                              <Typography variant="p">
                                Make Year : 2020
                              </Typography>
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
                          sx={{
                            border: "1px solid lightGray",
                            borderRadius: "5px",
                          }}
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
                            style={{
                              height: "100%",
                              width: "81%",
                              padding: "7px",
                            }}
                          />
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
                                size="small"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#4cbb17",
                                  ":hover": {
                                    backgroundColor: "#4cbb17",
                                  },
                                }}
                                onClick={handleNavigate}
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
                              <Typography variant="p">
                                Make Year : 2020
                              </Typography>
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
                          sx={{
                            border: "1px solid lightGray",
                            borderRadius: "5px",
                          }}
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
                            style={{
                              height: "100%",
                              width: "100%",
                              padding: "7px",
                            }}
                          />
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
                                size="small"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#4cbb17",
                                  ":hover": {
                                    backgroundColor: "#4cbb17",
                                  },
                                }}
                                onClick={handleNavigate}
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
                              <Typography variant="p">
                                Make Year : 2020
                              </Typography>
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
                          sx={{
                            border: "1px solid lightGray",
                            borderRadius: "5px",
                          }}
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
                            style={{
                              height: "100%",
                              width: "100%",
                              padding: "7px",
                            }}
                          />
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
                                size="small"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#4cbb17",
                                  ":hover": {
                                    backgroundColor: "#4cbb17",
                                  },
                                }}
                                onClick={handleNavigate}
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
                              <Typography variant="p">
                                Make Year : 2020
                              </Typography>
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
                          sx={{
                            border: "1px solid lightGray",
                            borderRadius: "5px",
                          }}
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
                            style={{
                              height: "100%",
                              width: "81%",
                              padding: "7px",
                            }}
                          />
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
                                size="small"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#4cbb17",
                                  ":hover": {
                                    backgroundColor: "#4cbb17",
                                  },
                                }}
                                onClick={handleNavigate}
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
                              <Typography variant="p">
                                Make Year : 2020
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Grid>
                    </Grid>
                  )}
                </Box>}
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
              <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[200],
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography id="modal-modal-description" sx={{ ml: 5 }}>
                Date and time changed
              </Typography>
            </Box>
          </Modal>
          <div style={{ marginTop: "10%" }}></div>
          <DynamicFooter />
        </Box>
      )}
    </>
  );
}
