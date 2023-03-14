import React from "react";
import "./App.css";
import BookingFlow from "./components/BookingFlow";
import BookNowPage from "./components/BookNowPage";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bookingFlow" element={<BookingFlow />} />
          <Route exact path="/bookNowPage" element={<BookNowPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
