import React from "react";
import rightSection from "../assets/rightSection.jpeg";
import Features from "./Features";
import BookRide from "./BookRide";
import Faq from "./Faq";
import Statistics from "./Statistics";
import KnowMore from "./KnowMore";
import Offer from "./Offer";
import Video from "./Video";

export default function RightSection() {
  return (
    <>
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
    </>
  );
}
