import * as React from "react";
// import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

import { Typography, TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

export default function StartEarning() {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // const [capchaIsDone, setCapchaDone] = useState(false);

  // function onChange() {
  //   setCapchaDone(true);
  // }

  const [formData, setFormData] = React.useState({
    name: '', email: '', MobileNo: '', city: '', bikesQuantity: '', message: ''
  })
  
  const [showSubmit, setShowSubmit] = React.useState(true)



  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
  const btnClickHandler = e => {
    
    const errors = {};
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid Email"
    }
    if (!/^[0-9]+$/.test(formData.MobileNo)) {
      errors.MobileNo = "Enter a valid Mobile No"
    };
    
  }
  
  const handelInputeChange = (e) => {
    
    if (formData.name.length > 4 && formData.email.length > 6 && formData.MobileNo.length > 9 && formData.city.length > 1
      && formData.bikesQuantity.length > 0 && formData.message.length > 0) {
        setShowSubmit(false)
      }
      else if (formData.name.length <= 4 && formData.email.length <= 6 && formData.MobileNo.length <= 9
        && formData.city.length <= 1 && formData.bikesQuantity.length <= 0 && formData.message.length <= 0) {
          setShowSubmit(true)
          
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
      }
      
      const handelSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
          
          
          console.log(errors.email.email.email);
          console.log(errors.MobileNo);

          // verified form data 
          console.log(formData);

        } else {
          console.log(errors);
        }
      }
      
  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          width: "50%",
          color: "#ffffff",
          bgcolor: "#59CE8F",
          textAlign: "center",
          m: "auto",
          ":hover": { bgcolor: "#36b671" },
          mt: 4,
        }}
      >
        {" "}
        Start Earning With Gobikes
      </Button>{" "}
      <Dialog
        sx={{}}
        PaperProps={{ sx: { width: "35%" } }}
        // fullScreen={fullScreen}
        // maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >


        {/* earning popup div started here  */}
        <Box sx={{ bgcolor: "#EAEAEA" }}>
          <DialogActions>
            <Button
              size="small"
              autoFocus
              onClick={handleClose}
              sx={{ color: "#36b671" }}
            >
              <CloseIcon />
            </Button>
          </DialogActions>

          <DialogContent>
            <Typography variant="h5" sx={{ pb: 3 }}>List Your Vehicle </Typography>

            {/* earning form started here */}
            <Box component="form" sx={{ textAlign: "center", mb: 2, "& > :not(style)": { m: 1, width: "45ch" } }}
              noValidate autoComplete="off" onSubmit={handelSubmit}>
              <TextField id="outlined-basic" name='name' value={formData.name} onChange={handelInputeChange} required type='text' placeholder="Name*" variant="outlined" bgcolor="#ffffff" />
              <br />

              <TextField id="outlined-basic" name='email' value={formData.email} onChange={handelInputeChange} type='email' placeholder="Email*" required variant="outlined" />
           <br />
              <TextField id="outlined-basic" name='MobileNo' value={formData.MobileNo} onChange={handelInputeChange} type='number' placeholder="Mobile Number*" required variant="outlined" />
              
              <TextField id="outlined-basic" name='city' value={formData.city} onChange={handelInputeChange} placeholder="City*" required variant="outlined" />
              <br />
              <TextField id="outlined-basic" name='bikesQuantity' value={formData.bikesQuantity} onChange={handelInputeChange} type='number' placeholder="Number of Bikes*" required variant="outlined" />
              <br />

              <TextField id="outlined-basic" name='message' value={formData.message} onChange={handelInputeChange} placeholder="Message*" required className="message" variant="outlined"
                multiline rows={4}
              />{" "}
              <br />
              <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <div>
                  <ReCAPTCHA sitekey={key} onSubmitCapture={(res) => console.log(res)} onSuspend={err => console.log(err)} />
                </div>
              </Box>
            </Box>
            <Button onClick={btnClickHandler} variant="contained"
              disabled={showSubmit} //this will toggle submit button display and blur
              sx={{
                display: "flex", justifyContent: "center", width: "94%", color: "#ffffff", bgcolor: "#59CE8F",
                textAlign: "center", m: "auto", py: 1.4,
              }} >
              Submit
            </Button>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
