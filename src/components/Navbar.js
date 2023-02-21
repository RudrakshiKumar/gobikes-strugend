import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png";
import star from "../assets/star.png";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@mui/material/Card';


const Item = styled(Paper)(({ theme }) => ({

}));



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '60%',
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
     
      <Box sx={style} className=''>
      <Grid container columns={16} className=''>
      
      <Grid xs={7} className='bg-gray-100 rounded-l-md'>


      
        <Grid className="rounded-l-md " item sx={{bgcolor: "",    }}
    textAlign="center" 
    
                 >
               
        <Box
        className="m-auto "
            component="img"
            sx={{
             
            height: 70, pt:2, px: 5,
            }}
            alt="Your logo."
            src={logo}
        /> <br/>
          <Box
          className="m-auto"
            component="img"
            sx={{
            height: 230,
            }}
            alt="Your logo."
            src={loginPopup}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2, pb:1, }}>
        <div className='grid grid-cols-4 px-5 mx-auto'>
        <div>
        <span className='text-sm'>15+</span> <br /> <span className='text-[11px] text-gray-500'>Cities</span>
        </div>
        <div>
        <span className='text-sm'>50000+</span> <br /> <span className='text-[11px] text-gray-500'>Happy Customers</span>
        </div>
        <div>
        <span className='text-sm'>6000+</span> <br /> <span className='text-[11px] text-gray-500'>Bikes</span>
        </div>
        <div>
        <Box>
        <span className='text-sm'>4.8/5
        <Box className='inline-block'
            component="img"
            sx={{
            height: 15,
            px: 1, mb: 0.5,
            }}
            alt="Your logo."
            src={star}
        /> </span> <br /> <span className='text-[11px] text-gray-500'>1200+ reviews</span>
        </Box>
        
        </div>

        </div>
       
        
        
      
        
           
          </Typography>             
        </Grid>
        
      </Grid>
      <Grid xs={9}>
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
         
      <Button className="" variant="outlined" sx={{textTransform: "none", mt: 1,}}>
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







