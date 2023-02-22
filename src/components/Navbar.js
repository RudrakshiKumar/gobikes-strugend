import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import star from "../assets/star.png";
import loginPopup from "../assets/loginPopup.webp";
import googleLogo from "../assets/googleLogo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNavbar from "./MobileNavbar";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@mui/material/Card";
import { bgcolor } from "@mui/system";
import { MuiTelInput } from "mui-tel-input";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";

// const Item = styled(Paper)(({ theme }) => ({}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  height: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: 4,
  borderRadius: 2,
  flexWrap: "wrap",
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // const [value, setValue] = useState();

  // const [phone, setPhone] = React.useState("");

  // const handleChange = (newPhone) => {
  //   setPhone(newPhone);
  // };

  return (
    <Box>
      {isMatch ? (
        <MobileNavbar />
      ) : (
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              component="img"
              sx={{
                height: 50,
                ml: 10,
              }}
              alt="Your logo."
              src={logo}
            />
            <Box
              sx={{
                mr: 10,
              }}
            >
              <Typography variant="h6" component="div" sx={{ color: "black" }}>
                <Button
                  sx={{ color: "black", marginLeft: "auto" }}
                  color="primary"
                >
                  List your Vehicle
                </Button>

                <Button
                  onClick={handleOpen}
                  sx={{ color: "black" }}
                  color="primary"
                >
                  Login
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Login />
                </Modal>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
}
