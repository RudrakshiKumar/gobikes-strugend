import React from "react";
import rightSection from "../assets/rightSection.jpeg";
import Features from "./Features";
import BookRide from "./BookRide";
import Faq from "./Faq";
import Statistics from "./Statistics";
import KnowMore from "./KnowMore";
import Offer from "./Offer";
import Video from "./Video";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";

export default function RightSection() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      {isMatch && (
        <Box>
          <img
            src={rightSection}
            alt="Right Section"
            style={{
              width: "50vw",
              height: "85vh",
            }}
          />

          <Offer />
          <Video />
          <Features />
          <BookRide />
          <Faq />
          <Statistics />
          <KnowMore />
        </Box>
      )}
    </Box>
    {/* <>
      <img
        src={rightSection}
        alt="Right Section"
        style={{
          width: "49.1vw",
          height: "85vh",
        }}
      />
      <Offer />
      <Video />
      <Features />
      <BookRide />
      <Faq />
      <Statistics />
      <KnowMore />
    </> */}
  );
}
