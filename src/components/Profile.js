import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";

export default function Profile() {
  const [name, setName] = useState(null);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "2",
        }}
      >
        <div style={{ padding: "3%" }}>
          <Typography variant="h5" sx={{ fontWeight: "regular" }}>
            Profile
          </Typography>
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Basic Details
          </Typography>
          <hr style={{ marginTop: "3%" }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Grid container sx={{ marginTop: "5%" }}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    Name
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                    }}
                    onClick={() => setName("Name")}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="p" sx={{ fontSize: "18px" }}>
                Dibyajyoti Sahoo
              </Typography>
              <br />
              {name === "Name" && (
                <div>
                  <TextField
                    label="Name"
                    defaultValue="Dibyajyoti Sahoo"
                    size="small"
                    color="success"
                    sx={{
                      marginTop: "15px",
                    }}
                    focused
                  />
                  <br />
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                      marginTop: "5px",
                    }}
                  >
                    Save
                  </Button>
                </div>
              )}
              <hr style={{ marginTop: "3%" }} />
              <Grid container sx={{ marginTop: "5%" }}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                    }}
                    onClick={() => setName("Email")}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="p" sx={{ fontSize: "18px" }}>
                strugend@gmail.com
              </Typography>
              <br />
              {name === "Email" && (
                <div>
                  <TextField
                    label="Email"
                    defaultValue="strugend@gmail.com"
                    size="small"
                    color="success"
                    focused
                    sx={{ marginTop: "15px" }}
                  />
                  <br />
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                      marginTop: "5px",
                    }}
                  >
                    Save
                  </Button>
                </div>
              )}
              <hr style={{ marginTop: "3%" }} />
              <div style={{ marginTop: "5%" }}>
                <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                  Mobile Number
                </Typography>
                <Typography variant="p" sx={{ fontSize: "18px" }}>
                  8260921530
                  <IconButton sx={{ marginLeft: "2%", color: "green" }}>
                    <VerifiedRoundedIcon fontSize="small" />
                  </IconButton>
                </Typography>
                <hr style={{ marginTop: "3%" }} />
              </div>
              <Grid container sx={{ marginTop: "5%" }}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    Address
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                    }}
                    onClick={() => setName("Address")}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="p" sx={{ fontSize: "18px" }}>
                Odisha
              </Typography>
              <br />
              {name === "Address" && (
                <div style={{ marginTop: "10px" }}>
                  <TextField
                    label="Address"
                    defaultValue="Odisha"
                    size="small"
                    color="success"
                    focused
                  />
                  <br />
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                      marginTop: "5px",
                    }}
                  >
                    Save
                  </Button>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  border: "1px solid lightGrey",
                  borderRadius: "8px",
                  marginTop: "10px",
                  marginRight: "10px",
                  width: "100%",
                }}
              >
                <div style={{ padding: "4%" }}>
                  <IconButton>
                    <LockRoundedIcon fontSize="large" />
                  </IconButton>
                  <br />
                  <Typography variant="p">
                    Details GoBikes uses to verify your identity can't be
                    changed. Some personal details can be edited, but we may ask
                    you to verify your identity the next time you book or create
                    a listing.
                  </Typography>
                  <br />
                  <div style={{ marginTop: "5%" }}>
                    <IconButton>
                      <PersonPinRoundedIcon fontSize="large" />
                    </IconButton>
                    <br />
                    <Typography variant="p">
                      Personal info that you've shared with us, like email,
                      address and options to manage it. This info is private to
                      you.
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
