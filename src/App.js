// import whois from 'whois-api';
import "./App.css";
import MobileLogin from "./components/MobileLogin";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      {/* <MobileLogin /> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
