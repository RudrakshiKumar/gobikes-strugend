import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import GoCoins from "../../components/desktop/GoCoins";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import MobilePostLoginNavbar from "../../layouts/mobile/MobilePostLoginNavbar";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const MobileGoCoins = () => {
  return (
    <div>
      <DynamicMobileNavbar />
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "2",
        }}
      >
        <div style={{ padding: "3%" }}>
          <Box sx={{ display: "inline-flex" }}>
            <Link to="/Dashboard">
              <ArrowBackIosIcon sx={{ mt: 2, mr: 2, color: "#59CE8F" }} />
            </Link>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                Wallet
              </Typography>
              <Typography variant="p" sx={{ fontSize: "18px" }}>
                Manage your wallet
              </Typography>
            </Box>
          </Box>

          <hr style={{ marginTop: "2%" }} />
          <div style={{ marginTop: "10%" }}>
            <Typography variant="h5" sx={{ fontWeight: "regular" }}>
              Go-Coins
            </Typography>
            <Typography variant="p" sx={{ fontSize: "18px" }}>
              Quick and convienient way to pay and refund
            </Typography>
          </div>
          <Box
            sx={{
              width: "100%",
              boxShadow: "2",
              alignItems: "center",
              justifyContent: "spaceBetween",
              marginTop: "20px",
              borderRadius: "8px",
              border: "1px solid #fafafa",
              backgroundColor: "#f3f3f4",
            }}
          >
            <div style={{ padding: "36px" }}>
              <Typography variant="p" sx={{ fontWeight: "medium" }}>
                Total Balance Available
              </Typography>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <IconButton sx={{ color: "black" }}>
                  <AccountBalanceWalletOutlinedIcon />
                </IconButton>
                <Typography variant="p">0</Typography>
              </div>
            </div>
          </Box>
          <div className="mt-10 mx-5">
            <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 3 }}>
              Please Note
            </Typography>

            <ul>
              <li>
                Go-Coins can not be cancelled or transferred to another account.
              </li>
              <li>
                It can not be withdrawn in the form of cash or transferred to
                any bank account.
              </li>
              <li>It can not be used to purchase Gift Cards.</li>
              <li>
                Net-banking and credit/debit cards issued in India can be used
                for Go-Coins Topup
              </li>
              <li>Credits have an expiry. Check FAQs for more details.</li>
            </ul>
          </div>
        </div>
      </Box>

      <div className="my-20"></div>
      <MobileFooter />
    </div>
  );
};

export default MobileGoCoins;
