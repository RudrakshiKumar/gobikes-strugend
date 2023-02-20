import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png";
import loginPopup from "../assets/loginPopup.webp";
import googleLogo from "../assets/googleLogo.png";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileNavbar from './MobileNavbar';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Divider } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number-2'
import PhoneInput from 'react-phone-number-input'
import TextField from '@mui/material/TextField';
import 'react-phone-number-input/style.css'


const Item = styled(Paper)(({ theme }) => ({

}));



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
  borderRadius: 2,
};




export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
 const isMatch = useMediaQuery(theme.breakpoints.down('md'))

 const [value, setValue] = useState()

  return (
    <Box >
      
     {isMatch ? <MobileNavbar/> : 
      <AppBar position="sticky"
      sx={{
      bgcolor: 'background.paper',
    
    }}
      >  
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
            component="img"
            sx={{
            height: 50, ml: 10,
            }}
            alt="Your logo."
            src={logo}
        />
        <Box  sx={{
            mr: 10,
            }}>
  <Typography variant="h6" component="div" sx={{color: 'black',  }} >

  <Button sx={{color: 'black', marginLeft: "auto", }} color="primary">List your Vehicle</Button>


          
          <Button onClick={handleOpen} sx={{color: 'black'  }} color="primary">Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
  
      <Box sx={style} >
      <Grid container columns={16}>
      
      <Grid xs={6}>
        <Grid item sx={{bgcolor: "#EFEFEF",  borderRadius: 2,  }}
    textAlign="center"
    
                 >
        <Box
            component="img"
            sx={{
            height: 50, py: 1,
            }}
            alt="Your logo."
            src={logo}
        /> <br/>
          <Box
            component="img"
            sx={{
            height: 200,
            }}
            alt="Your logo."
            src={loginPopup}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2, pb:0, }}>
        <span>15+</span> <br /> <span>Cities</span>
           
          </Typography>             
        </Grid>
        
      </Grid>
      <Grid xs={10}>
      <Grid item sx={{ borderRadius: 2, p: 2,  }}
    textAlign="center"
    
                 >
        <Typography id="modal-modal-description" sx={{ mt: 2, pb:1,}}>
        Welcome to GoBikes
          </Typography>    
          <Typography id="modal-modal-description" sx={{ mt: 2, pb:1, }}>
          Commuting Made Easy, Affordable and Quick
          </Typography> 
          
          <Box
      component="form"
      textAlign="center"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // '& > :not(style)': { m: 1, width: '90%' },
        width: '100% ', my: 2, py: 2, }}
      // noValidate
      autoComplete="off"
    >
     <PhoneInput
  international
  defaultCountry="IN"
  value={value}
  onChange={setValue}
  />
    </Box>
    
          <Button variant="contained" sx={{textTransform: "none", mb: 2, width: '90% '}}>Send OTP</Button> <br/>
          <Divider>OR</Divider>
         
      <Button variant="outlined" sx={{textTransform: "none", mt: 1,}}>
      <Box
            component="img"
            sx={{
            height: 20,
            pr: 2,
            }}
            alt="Your logo."
            src={googleLogo}
        />
      Sign in with Google</Button>

        </Grid>
      </Grid>
         
      </Grid>
         
        </Box>
     
      
      </Modal>
          </Typography>

        </Box>
        
        
         
        </Toolbar>
        </AppBar>
      }
        
     
    </Box>
   
    
  );
}







