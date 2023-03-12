import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const PostLoginFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  return (
    <div className="">
      <Box sx={{}} className="relative z-50">
        <Box
          sx={{
            bgcolor: "#d6fbe6",
            display: "flex",
            justifyContent: "end",
            alignContent: "flex-start",
            pt: 2,
            px: 2,
          }}
        >
          <Button onClick={scrollToTop}>
            <ArrowUpwardIcon sx={{ color: "#59CE8F" }} />
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "#d6fbe6",
            display: "inline-flex",
            width: "100%",
            px: 10,
            pb: 10,
          }}
        >
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 50,
                ml: 10,
              }}
              alt="Your logo."
              src={logo}
            />
          </Link>
          <Box sx={{ pr: 20, pl: 30 }}>
            <Link to="/ContactUs">
              <Typography sx={{ color: "#000000" }}>Contact Us</Typography>
            </Link>
            <Link to="/PrivacyPolicy">
              <Typography sx={{ color: "#000000" }}>Privacy Policy</Typography>
            </Link>
            <Link to="/TermsCondition">
              <Typography sx={{ color: "#000000" }}>
                Terms and Conditions
              </Typography>
            </Link>
          </Box>
          <Box sx={{ px: 20 }}>
            <Link to="/OffersForYou">
              <Typography sx={{ color: "#000000" }}>Offers</Typography>
            </Link>
            <Link to="/ListYourVehicle">
              <Typography sx={{ color: "#000000" }}>
                List Your Vehicle
              </Typography>
            </Link>
            <Link to="/FAQs">
              <Typography sx={{ color: "#000000" }}>FAQs</Typography>
            </Link>
          </Box>
          <Box sx={{ px: 20 }}>
            <Link to="/AboutUs">
              <Typography sx={{ color: "#000000" }}>About Us</Typography>
            </Link>
            <Link to="/">
              <Typography sx={{ color: "#000000" }}>
                service@strugend.com
              </Typography>
            </Link>
            <Link to="/">
              <Typography sx={{ color: "#000000" }}>+91 7328834913</Typography>
            </Link>
          </Box>
        </Box>

        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ pl: 10 }}>
            {" "}
            © STRUGEND. All rights reserved.
          </Typography>
          <Box sx={{ pr: 10 }}>
            <Link to="www.google.com">
              <InstagramIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
            <Link to="www.google.com">
              <TwitterIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
            <Link to="www.google.com">
              <FacebookIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PostLoginFooter;
