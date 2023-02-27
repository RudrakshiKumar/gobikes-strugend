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

function App() {
  return (
    <>
      <Navbar />
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

      <Footer />
    </>
  );
}

export default App;
