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
import Trial from "./components/Trial";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <PostLoginNavbar />
      {/* <Trial /> */}
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
      {/* <NoBikesAvailable /> */}

      <Footer />
    </>
  );
}

export default App;
