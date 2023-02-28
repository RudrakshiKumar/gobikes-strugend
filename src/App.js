import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import ListYourVehicle from "./components/ListYourVehicle";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import OffersForYou from "./components/OffersForYou";
import DashBoard from "./components/Dashboard";
import BookingFlow from "./components/BookingFlow";
import NoBikesAvailable from "./components/NoBikesAvailable";
import PostLoginNavbar from "./components/PostLoginNavbar";
import PersonalDetails from "./components/PersonalDetails";
import Dialog from "./components/Dialog";
import OTP from "./components/OTP";
import OTPVerified from "./components/OTPVerified";
import BookingConfirmation from "./components/BookingConfirmation";
import RideCompletion from "./components/RideCompletion";
import { Modal } from "@mui/material";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <PostLoginNavbar />

      {/* <Home /> */}
      {/* <ListYourVehicle /> */}
      {/* <ContactUs /> */}
      {/* <FAQs /> */}
      {/* <OffersForYou /> */}
      {/* <AboutUs /> */}
      {/* <PrivacyPolicy /> */}
      {/* <TermsCondition /> */}
      {/* <DashBoard /> */}
      <BookingFlow />
      <Dialog />
      {/* <NoBikesAvailable /> */}

      {/* <PersonalDetails />
      <OTP />
      <OTPVerified />
      <BookingConfirmation />
      <RideCompletion /> */}

      <Footer />
    </>
  );
}

export default App;
