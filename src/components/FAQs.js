import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import MobileFAQ from "./MobileFAQ";
import { Typography, Grid } from "@mui/material";

const FAQs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
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
              marginTop: 10,
              marginRight: 10,
              padding: 5,
              boxShadow: 3,
              borderRadius: 2,

              position: "fixed",
              top: -1,
            }}
          >
            <Box>
              <Typography>FAQ Section</Typography>
              <Box sx={{ bgcolor: "#EAEAEA" }}>
                <Typography>Booking</Typography>
                <Typography>Booking Cancellation</Typography>
                <Typography>Safety and Tips</Typography>
                <Typography>Security Deposit</Typography>
                <Typography>Accident ot Damage</Typography>
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
