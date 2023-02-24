import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import emptyBookings from "../assets/emptyBookings.png";
import HondaActiva from "../assets/HondaActiva.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Booking() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "2",
        }}
      >
        <div style={{ padding: "2%" }}>
          <Typography variant="h5" sx={{ fontWeight: "regular" }}>
            Bookings
          </Typography>
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Manage your bookings
          </Typography>
        </div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Confirmed" />
          <Tab label="Pending" />
          <Tab label="Cancelled" />
        </Tabs>
        <TabPanel value={value} index={0} align="center">
          <Box
            sx={{
              width: "25%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#fff3cd",
            }}
          >
            No orders found!
          </Box>
          <img
            src={emptyBookings}
            alt="No orders found"
            style={{ marginTop: "2%" }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              width: "100%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#eeeeee",
            }}
          >
            <div style={{ padding: "10px", display: "flex" }}>
              <img
                src={HondaActiva}
                alt="HondaActiva"
                style={{
                  width: "auto",
                  height: "70px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: "15px",
                  backgroundColor: "white",
                }}
              />
              <div style={{ padding: "15px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  <span>Honda Activa 125</span>
                  <Button
                    variant="text"
                    sx={{
                      color: "#4cbb17",
                      fontSize: "15px",
                      fontWeight: "medium",
                      marginLeft: "270px",
                      outline: "none",
                    }}
                  >
                    View Details
                  </Button>
                  <br />
                  <span>
                    BookingID: #20659 | Booking Date: Feb 22, 2023 12:35 PM
                  </span>
                  <br />
                  <span>Go Hub Details: Bangalore Railway Station</span>
                </Typography>
              </div>
            </div>
            <hr style={{ fontWeight: "medium" }} />
            <Grid container>
              <Grid item xs={12} sm={4}>
                <IconButton sx={{ color: "black" }}>
                  <CalendarMonthIcon fontSize="small" />
                </IconButton>
                <Typography variant="p">Feb 23,2023 1:00PM</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <IconButton sx={{ color: "black" }}>
                  <CalendarMonthIcon fontSize="small" />
                </IconButton>
                <Typography variant="p">
                  Feb 23,2023 1:00PM Paid: <span>&#8377;</span>
                  112.28
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="p" sx={{ paddingLeft: "10px" }}>
                  Deposit: <span>&#8377;</span>200
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} align="center">
          <Box
            sx={{
              width: "25%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#fff3cd",
            }}
          >
            No orders found!
          </Box>
          <img
            src={emptyBookings}
            alt="No orders found"
            style={{ marginTop: "2%" }}
          />
        </TabPanel>
      </Box>
    </>
  );
}
