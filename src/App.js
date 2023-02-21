import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Link, Router, BrowserRouter, Routes } from 'react-router-dom';
import TermsCondition from './components/TermsCondition';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';


const App=()=>  {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  

  );
  
}


export default App;
