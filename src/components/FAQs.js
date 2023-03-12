import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import MobileFAQ from "./MobileFAQ";
import Navbar from "./Navbar";
import { Typography, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const FAQs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Navbar />
      {isMatch ? (
        <MobileFAQ />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mt: 6,
              marginRight: 10,
              padding: 5,
              boxShadow: 3,
              borderRadius: 2,

              position: "fixed",
              top: -1,
            }}
          >
            <Box>
              <Typography variant="h4">FAQ Section</Typography>
              <Box sx={{ bgcolor: "#59CE8F20", mt: 3 }}>
                <NavLink to="#booking">
                  <Typography sx={{ p: 1.5 }}>Booking</Typography>
                </NavLink>

                <Typography sx={{ p: 1.5 }}>Booking Cancellation</Typography>
                <Typography sx={{ p: 1.5 }}>Safety and Tips</Typography>
                <Typography sx={{ p: 1.5 }}>Security Deposit</Typography>
                <Typography sx={{ p: 1.5 }}>Accident ot Damage</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ pl: "20%" }}>
            <MobileFAQ />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default FAQs;
