import React from "react";
import Features from "./Features";
import Faq from "./Faq";
import Statistics from "./Statistics";
import KnowMore from "./KnowMore";
import Offer from "./Offer";
import Video from "./Video";

export default function RightSection() {
  return (
    <>
      <Offer />
      <Video />
      <Features />
      <Faq />
      <Statistics />
      <KnowMore />
    </>
  );
}
