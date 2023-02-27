import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TC/TermsCondition";

import "./App.css";
import ListYourVehicle from "./components/ListYourVehicle";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import OffersForYou from "./components/OffersForYou";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <MobileLogin /> */}
      {/* <Home /> */}
      {/* <AboutUs /> */}
      {/* <PrivacyPolicy /> */}
      <TermsCondition />
      {/* <Footer /> */}

      <Navbar />
      <Home />
      {/* <ListYourVehicle /> */}
      {/* <ContactUs /> */}
      {/* <FAQs /> */}
      {/* <OffersForYou /> */}
      <Footer />
    </>
  );
}

export default App;
