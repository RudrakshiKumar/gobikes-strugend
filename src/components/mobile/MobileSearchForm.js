import {
  Button,
  Grid,
  InputAdornment,
  Modal, 
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Bangalore from "../../assets/images/Bangalore.jpg";
import Chandigarh from "../assets/images/Chandigarh.jpg";
import Chennai from "../assets/images/Chennai.jpg";
import Dehradun from "../assets/images/Dehradun.webp";
import Delhi from "../assets/images/Delhi.webp";
import Ghaziabad from "../assets/images/Ghaziabad.jpg";
import Goa from "../assets/images/Goa.jpg";
import Hyderabad from "../assets/images/Hyderabad.jpg";
import Kolkata from "../assets/images/Kolkata.jpg";
import Manali from "../assets/images/Manali.jpg";
import Mumbai from "../assets/images/Mumbai.webp";
import Pune from "../assets/images/Pune.jpg";
import Gurgaon from "../assets/images/Gurgaon.jpg";
import Guwahati from "../assets/images/Guwahati.jpg";
import Jaipur from "../assets/images/Jaipur.jpg";
import Leh from "../assets/images/Leh.jpg";
import Noida from "../assets/images/Noida.jpg";
import Udaipur from "../assets/images/Udaipur.jpg";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const MobileSearchForm = () => {
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      className=""
      sx={{
        // marginTop: 10,
        // marginRight: 10,
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">
        Commuting Made <span style={{ color: "#aeea00" }}>Easy</span>,
        <br />
      </Typography>
      <Typography variant="h6" sx={{ marginTop: "5px" }}>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
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
  );
};

export default MobileSearchForm;
