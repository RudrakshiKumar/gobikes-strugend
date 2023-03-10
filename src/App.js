import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
=======
import BookingFlow from "./components/BookingFlow";
import Home from "./components/Home";
>>>>>>> 92a7545 (added features)
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  withRouter,
  ScrollRestoration,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import ListYourVehicle from "./components/ListYourVehicle";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import OffersForYou from "./components/OffersForYou";
import DashBoard from "./components/DashBoard";
import BookingFlow from "./components/BookingFlow";
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

function App() {
  return (
    <>
<<<<<<< HEAD
      <Router>
        <ScrollToTop />
        <Navbar />
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

        <Footer />
      </Router>

      {/* <BookingFlow /> */}
      {/* <Dialog /> */}
      {/* <NoBikesAvailable /> */}
      {/* <PersonalDetails />
      <OTP />
      <OTPVerified />
      <BookingConfirmation />
      <RideCompletion /> */}
=======
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bookingFlow" element={<BookingFlow />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 92a7545 (added features)
    </>
  );
}

export default App;
