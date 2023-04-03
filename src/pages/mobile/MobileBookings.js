import React from "react";
import Booking from "../../components/desktop/Booking";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import MobilePostLoginNavbar from "../../layouts/mobile/MobilePostLoginNavbar";

const MobileBookings = () => {
  return (
    <div>
      <MobilePostLoginNavbar />
      <Booking />
      <div className="my-20"></div>
      <MobileFooter />
    </div>
  );
};

export default MobileBookings;
