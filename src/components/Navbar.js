import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {logo} from '../Constants'
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="sticky" sx={{ bgcolor: "background.paper", }} >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box component="img" alt="Your logo." src={logo}
            sx={{ height: 50, ml: 10, }} />
          <Box sx={{ mr: 10, }}>
            <Typography variant="h6" component="div" sx={{ color: "black" }}>
              <Link>
                <Button color="primary" sx={{ color: "black", marginLeft: "auto" }} >
                  List your Vehicle
                </Button>
              </Link>
              <Button sx={{ color: "black" }} color="primary">
                Login
              </Button>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
