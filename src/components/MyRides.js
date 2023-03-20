import Booking from "./Booking";

import PostLoginNavbar from "./PostLoginNavbar";
import PostLoginFooter from "./PostLoginFooter";

export default function MyRides() {
  return (
    <>
      <PostLoginNavbar />
      <div className="m-10">
        <Booking />
      </div>
      <div style={{ marginTop: "10%" }}></div>
      <PostLoginFooter />
    </>
  );
}
