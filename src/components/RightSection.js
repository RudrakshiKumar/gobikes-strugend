import React from "react";
import rightSection from "../assets/rightSection.jpeg";
import Features from "./Features";
import BookRide from "./BookRide";
import FAQ from "./FAQ";
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
          width: "50vw",
          height: "85vh",
        }}
      />
      <Offer />
      <Video />
      <Features />
      <BookRide />
      <FAQ />
      <Statistics />
      <KnowMore />
    </>
  );
}
