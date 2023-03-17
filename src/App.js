import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import ListYourVehicle from "./components/ListYourVehicle";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import OffersForYou from "./components/OffersForYou";
import Dashboard from "./components/Dashboard";
import BookingFlow from "./components/BookingFlow";
import BookNowPage from "./components/BookNowPage";

import PersonalDetails from "./components/PersonalDetails";

import OTP from "./components/OTP";

import ScrollToTop from "./components/ScrollToTop";
import MyRides from "./components/MyRides";
import Trial from "./components/Process";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListYourVehicle" element={<ListYourVehicle />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OffersForYou" element={<OffersForYou />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MyRides" element={<MyRides />} />
          <Route path="/BookingFlow" element={<BookingFlow />} />
          <Route path="/BookNowPage" element={<BookNowPage />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/PersonalDetails" element={<PersonalDetails />} />
          <Route path="/Trial" element={<Trial />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
