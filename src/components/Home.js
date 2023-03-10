import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Bangalore from "../assets/Bangalore.jpg";
import Chandigarh from "../assets/Chandigarh.jpg";
import Chennai from "../assets/Chennai.jpg";
import Dehradun from "../assets/Dehradun.webp";
import Delhi from "../assets/Delhi.webp";
import Ghaziabad from "../assets/Ghaziabad.jpg";
import Goa from "../assets/Goa.jpg";
import Hyderabad from "../assets/Hyderabad.jpg";
import Kolkata from "../assets/Kolkata.jpg";
import Manali from "../assets/Manali.jpg";
import Mumbai from "../assets/Mumbai.webp";
import Pune from "../assets/Pune.jpg";
import Gurgaon from "../assets/Gurgaon.jpg";
import Guwahati from "../assets/Guwahati.jpg";
import Jaipur from "../assets/Jaipur.jpg";
import Leh from "../assets/Leh.jpg";
import Noida from "../assets/Noida.jpg";
import Udaipur from "../assets/Udaipur.jpg";
import RightSection from "./RightSection";
import rightSection from "../assets/rightSection.jpeg";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Link } from "react-router-dom";
// import BookOnlineIcon from "@mui/icons-material/BookOnline";

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

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = useState("");
  const [name, setName] = useState("Bangalore");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {isMatch ? (
              <MobileHome />
            ) : (
              <Box
                sx={{
                  marginTop: 10,
                  marginRight: 10,
                  padding: 5,
                  boxShadow: 3,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  position: {
                    md: "fixed",
                  },
                }}
              >
                <Typography variant="h4">
                  Commuting Made <span style={{ color: "#aeea00" }}>Easy</span>,
                  <br />
                </Typography>
                <Typography variant="h4" sx={{ marginTop: "5px" }}>
                  <span style={{ color: "#aeea00" }}>Affordable</span> and{" "}
                  <span style={{ color: "#aeea00" }}>Quick</span>
                </Typography>
                <Typography variant="h6" sx={{ marginTop: "2px" }}>
                  Scooter/Scooty/Bike on Rent in Delhi
                </Typography>
                <TextField
                  fullWidth
                  label="Search City"
                  sx={{ marginTop: "5%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: "green" }}>
                        <PlaceIcon />
                      </InputAdornment>
                    ),
                  }}
                  onClick={handleOpen}
                />
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
                    >
                      Choose your preferred city
                    </Typography>
                    <Grid container spacing={2} sx={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Bangalore}
                          alt="Bangalore"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Bangalore
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Chandigarh}
                          alt="Chandigarh"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Chandigarh
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Chennai}
                          alt="Chennai"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Chennai
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Dehradun}
                          alt="Dehradun"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Dehradun
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Delhi}
                          alt="Delhi"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Delhi
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Ghaziabad}
                          alt="Ghaziabad"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Ghaziabad
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Goa}
                          alt="Goa"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Goa
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Hyderabad}
                          alt="Hyderabad"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Hyderabad
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Kolkata}
                          alt="Kolkata"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Kolkata
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Manali}
                          alt="Manali"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Manali
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Mumbai}
                          alt="Mumbai"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Mumbai
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Pune}
                          alt="Pune"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Pune
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Gurgaon}
                          alt="Gurgaon"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Gurgaon
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Guwahati}
                          alt="Guwahati"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Guwahati
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Jaipur}
                          alt="Jaipur"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Jaipur
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Leh}
                          alt="Leh"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Leh
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Noida}
                          alt="Noida"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Noida
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <img
                          className="image"
                          src={Udaipur}
                          alt="Udaipur"
                          style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="h6" align="center">
                          Udaipur
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Modal>
                <TextField
                  fullWidth
                  label="Start Date"
                  sx={{ marginTop: "2%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: "#aeea00" }}>
                        <CalendarMonthIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="End Date"
                  sx={{ marginTop: "2%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: "red" }}>
                        <CalendarMonthIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Book Now"
                  sx={{ marginTop: "2%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: "blue" }}>
                        <BookOnlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography variant="p" sx={{ marginTop: "2%" }}>
                  Duration: 1 Day
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "2%",
                    width: "25%",
                    backgroundColor: "green",
                  }}
                >
                  Search
                </Button>
              </Box>
            )}
            <Box
              sx={{
                marginTop: 10,
                marginRight: 10,
                padding: 5,
                boxShadow: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                position: "fixed",
              }}
            >
              <Typography variant="h4">
                Commuting Made <span style={{ color: "#59CE8F" }}>Easy</span>,
                <br />
              </Typography>
              <Typography variant="h4" sx={{ marginTop: "5px" }}>
                <span style={{ color: "#59CE8F" }}>Affordable</span> and{" "}
                <span style={{ color: "#59CE8F" }}>Quick</span>
              </Typography>
              <Typography variant="h6" sx={{ marginTop: "2px" }}>
                Scooter/Scooty/Bike on Rent in Delhi
              </Typography>
              <TextField
                fullWidth
                placeholder="Search City"
                value={image}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginTop: "5%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "#59CE8F" }}>
                      <PlaceIcon />
                    </InputAdornment>
                  ),
                }}
                onClick={handleOpen}
              />
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
                  >
                    Choose your preferred city
                  </Typography>
                  <IconButton
                    aria-label="close"
                    onClick={() => setOpen(false)}
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
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Bangalore}
                        alt="Bangalore"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Bangalore");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Bangalore
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Chandigarh}
                        alt="Chandigarh"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Chandigarh");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Chandigarh
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Chennai}
                        alt="Chennai"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Chennai");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Chennai
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Dehradun}
                        alt="Dehradun"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Dehradun");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Dehradun
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Delhi}
                        alt="Delhi"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Delhi");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Delhi
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Ghaziabad}
                        alt="Ghaziabad"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Ghaziabad");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Ghaziabad
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Goa}
                        alt="Goa"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Goa");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Goa
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Hyderabad}
                        alt="Hyderabad"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Hyderabad");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Hyderabad
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Kolkata}
                        alt="Kolkata"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Kolkata");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Kolkata
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Manali}
                        alt="Manali"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Manali");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Manali
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Mumbai}
                        alt="Mumbai"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Mumbai");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Mumbai
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Pune}
                        alt="Pune"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Pune");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Pune
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Gurgaon}
                        alt="Gurgaon"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Gurgaon");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Gurgaon
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Guwahati}
                        alt="Guwahati"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Guwahati");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Guwahati
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Jaipur}
                        alt="Jaipur"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Jaipur");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Jaipur
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Leh}
                        alt="Leh"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Leh");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Leh
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Noida}
                        alt="Noida"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Noida");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Noida
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Udaipur}
                        alt="Udaipur"
                        style={{
                          width: "125px",
                          height: "125px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Udaipur");
                          setOpen(false);
                        }}
                      />
                      <Typography variant="h6" align="center">
                        Udaipur
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
              {/* <TextField
                fullWidth
                placeholder="Start Date"
                sx={{ marginTop: "2%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "#59CE8F" }}>
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  sx={{ marginTop: "2%" }}
                  fullWidth
                />
              </LocalizationProvider>
              {/* <TextField
                fullWidth
                placeholder="End Date"
                sx={{ marginTop: "2%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "red" }}>
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  sx={{ marginTop: "2%" }}
                  fullWidth
                />
              </LocalizationProvider>
              {/* <TextField
                fullWidth
                placeholder="Book Now"
                sx={{ marginTop: "2%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "blue" }}>
                      <BookOnlineIcon />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <Typography variant="p" sx={{ marginTop: "2%" }}>
                Duration: 1 Day
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "2%",
                  width: "25%",
                  backgroundColor: "#59CE8F",
                }}
                component={Link}
                to="/bookingFlow"
              >
                Search
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {image === "" && (
              <img
                src={rightSection}
                alt="Right Section"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Bangalore" && (
              <img
                src={Bangalore}
                alt="Bangalore"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Chandigarh" && (
              <img
                src={Chandigarh}
                alt="Chandigarh"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Chennai" && (
              <img
                src={Chennai}
                alt="Chennai"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Dehradun" && (
              <img
                src={Dehradun}
                alt="Dehradun"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Delhi" && (
              <img
                src={Delhi}
                alt="Delhi"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Ghaziabad" && (
              <img
                src={Ghaziabad}
                alt="Ghaziabad"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Goa" && (
              <img
                src={Goa}
                alt="Goa"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Hyderabad" && (
              <img
                src={Hyderabad}
                alt="Hyderabad"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Kolkata" && (
              <img
                src={Kolkata}
                alt="Kolkata"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Manali" && (
              <img
                src={Manali}
                alt="Manali"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Mumbai" && (
              <img
                src={Mumbai}
                alt="Mumbai"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Pune" && (
              <img
                src={Pune}
                alt="Pune"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Gurgaon" && (
              <img
                src={Gurgaon}
                alt="Gurgaon"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Guwahati" && (
              <img
                src={Guwahati}
                alt="Guwahati"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Jaipur" && (
              <img
                src={Jaipur}
                alt="Jaipur"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Leh" && (
              <img
                src={Leh}
                alt="Leh"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Noida" && (
              <img
                src={Noida}
                alt="Noida"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            {image === "Udaipur" && (
              <img
                src={Udaipur}
                alt="Udaipur"
                style={{
                  width: "49.1vw",
                  height: "85vh",
                }}
              />
            )}
            <RightSection />
          </Grid>
        </Grid>
      </Container>
      {/* <GoToTop /> */}
    </>
  );
}
