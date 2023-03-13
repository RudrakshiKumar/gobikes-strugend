import React from "react";
import "./App.css";
import BookingFlow from "./components/BookingFlow";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookNowPage from "./components/BookNowPage";
import NoBikesAvailable from "./components/NoBikesAvailable";
import PostLoginNavbar from "./components/PostLoginNavbar";
import PersonalDetails from "./components/PersonalDetails";
import Dialog from "./components/Dialog";
import OTP from "./components/OTP";
import OTPVerified from "./components/OTPVerified";
import BookingConfirmation from "./components/BookingConfirmation";
import RideCompletion from "./components/RideCompletion";
import { Modal } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import MyRides from "./components/MyRides";
import Trial from "./components/OfferCarousal";
import PostLoginFooter from "./components/PostLoginFooter";
import PreLoginFooter from "./components/PreLoginFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListYourVehicle" element={<ListYourVehicle />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OffersForYou" element={<OffersForYou />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/MyRides" element={<MyRides />} />
          <Route path="/BookingFlow" element={<BookingFlow />} />
          <Route path="/BookNowPage" element={<BookNowPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
