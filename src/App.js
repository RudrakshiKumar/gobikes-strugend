import "./assets/styles/App.css";
import Home from "./pages/desktop/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/desktop/AboutUs";
import PrivacyPolicy from "./pages/desktop/PrivacyPolicy";
import TermsCondition from "./pages/desktop/TermsCondition";
import ListYourVehicle from "./pages/desktop/ListYourVehicle";
import ContactUs from "./pages/desktop/ContactUs";
import FAQs from "./pages/desktop/FAQs";
import OffersForYou from "./pages/desktop/OffersForYou";
import Dashboard from "./pages/desktop/Dashboard";
import BookingFlow from "./pages/desktop/BookingFlow";
import BookNowPage from "./pages/desktop/BookNowPage";

import PersonalDetails from "./components/desktop/PersonalDetails";

import OTP from "./components/desktop/OTP";

import ScrollToTop from "./components/ScrollToTop";
import MyRides from "./components/desktop/MyRides";
import Trial from "./components/desktop/Process";
import MobileLogin from "./pages/mobile/MobileLogin";
import MobileListYourVehicle from "./pages/mobile/MobileListYourVehicle";
import MobileContactUs from "./pages/mobile/MobileContactUs";
import MobileFAQs from "./pages/mobile/MobileFAQs";
import MobileBookingFlow from "./pages/mobile/MobileBookingFlow";




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

          {/* For Mobile View */}
          <Route path="/MobileLogin" element={<MobileLogin />} />
          <Route path="/MobileListYourVehicle" element={<MobileListYourVehicle />} />
          <Route path="/MobileContactUs" element={<MobileContactUs />} />
          <Route path="/MobileFAQs" element={<MobileFAQs />} />
          <Route path="/MobileBookingFlow" element={<MobileBookingFlow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
