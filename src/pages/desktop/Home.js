import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
// importing all the necessary image in a single line to make code presentable and well structure
import { Bangalore, Chandigarh, Chennai, Dehradun, Delhi, Ghaziabad, Goa, Hyderabad, Kolkata, Manali, Mumbai,
  Pune, Gurgaon, Guwahati, Jaipur, Leh, Noida, Udaipur,rightSectionNew } from '../../Constants';

import RightSection from "../../components/desktop/RightSection";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import MobileHome from "../mobile/MobileHome";
import SearchForm from "../../components/desktop/SearchForm";

export default function Home() {
  // Mobile View
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [image, setImage] = useState("");

  return (
    <>
      {/* Mobile View Condition Check */}
      {isMatch ? (
        <MobileHome />
      ) : (
        <Box>
          <DynamicNavbar />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <SearchForm />
            </Grid>
            <Grid item xs={12} sm={6}>
              {image === "" && (
                <img
                  src={rightSectionNew}
                  alt="Right Section"
                  style={{
                    height: "90vh",
                  }}
                />
              )}
              {/* <iframe
              className="mt-0"
              src="https://embed.lottiefiles.com/animation/29"
              width={800}
              height={1000}
            ></iframe>  */}
              {image === "Bangalore" && (
                <img
                  src={Bangalore}
                  alt="Bangalore"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Chandigarh" && (
                <img
                  src={Chandigarh}
                  alt="Chandigarh"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Chennai" && (
                <img
                  src={Chennai}
                  alt="Chennai"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Dehradun" && (
                <img
                  src={Dehradun}
                  alt="Dehradun"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Delhi" && (
                <img
                  src={Delhi}
                  alt="Delhi"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Ghaziabad" && (
                <img
                  src={Ghaziabad}
                  alt="Ghaziabad"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Goa" && (
                <img
                  src={Goa}
                  alt="Goa"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Hyderabad" && (
                <img
                  src={Hyderabad}
                  alt="Hyderabad"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Kolkata" && (
                <img
                  src={Kolkata}
                  alt="Kolkata"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Manali" && (
                <img
                  src={Manali}
                  alt="Manali"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Mumbai" && (
                <img
                  src={Mumbai}
                  alt="Mumbai"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Pune" && (
                <img
                  src={Pune}
                  alt="Pune"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Gurgaon" && (
                <img
                  src={Gurgaon}
                  alt="Gurgaon"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Guwahati" && (
                <img
                  src={Guwahati}
                  alt="Guwahati"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Jaipur" && (
                <img
                  src={Jaipur}
                  alt="Jaipur"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Leh" && (
                <img
                  src={Leh}
                  alt="Leh"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Noida" && (
                <img
                  src={Noida}
                  alt="Noida"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              {image === "Udaipur" && (
                <img
                  src={Udaipur}
                  alt="Udaipur"
                  style={{
                    height: "100vh",
                  }}
                />
              )}
              <RightSection />
            </Grid>
          </Grid>
          <DynamicFooter />
        </Box>
      )}
    </>
  );
}
