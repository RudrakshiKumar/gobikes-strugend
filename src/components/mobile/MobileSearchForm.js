import { Box, Button, Grid, InputAdornment, Modal, TextField, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CityList } from '../../Constants';
import PlaceIcon from "@mui/icons-material/Place";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";

const style = {
  width: "100%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
};
const StyledCardOfCity = {
  width: "125px",
  height: "125px",
  borderRadius: "5px",
}
const MobileSearchForm = () => {
  const navigate = useNavigate();
  const [setName] = useState("Bangalore");
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [diableSearchBtn, setDiableSearchBtn] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [change, setChange] = useState(false);
  const [changeStart, setChangeStart] = useState(true);
  const [changeEnd, setChangeEnd] = useState(false);



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNavigate = () => {
    navigate("/BookingFlow", {
      state: { selected_startDate: startDate, selected_endDate: endDate },
    });
  };

  const handleChange = () => {
    setChange(!change);
    console.log(!change);
  };

  //Disabling Pickup & Dropoff Date Selection


  useEffect(() => {
    setChangeStart(!changeStart);
    setChangeEnd(!changeEnd);
  }, [startDate]);

  return (
    <Box
      className=""
      sx={{
        // marginTop: 10,
        // ml: "12%",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // position: "relative",
      }}
    >
      <Typography variant="h6" fontWeight={"bold"}>
        Commuting Made <span style={{ color: "#59CE8F" }}>Easy</span>,
        <br />
      </Typography>
      <Typography
        variant="h6"
        fontWeight={"bold"}
        sx={{ marginTop: "5px", font: "bold" }}
      >
        <span style={{ color: "#59CE8F" }}>Affordable</span> and{" "}
        <span style={{ color: "#59CE8F" }}>Quick</span>
      </Typography>
      <Typography variant="h7" sx={{ marginTop: "2px" }}>
        Scooter/Scooty/Bike on Rent in Delhi
      </Typography>
      <TextField
        fullWidth
        placeholder="Search City"
        value={image}
        onChange={(e) => setName(e.target.value)}
        sx={{ marginTop: "5%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ color: "#59CE8F" }}>
              <PlaceIcon />
            </InputAdornment>
          ),
        }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Choose your preferred city
            </Typography>
            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[600],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2} sx={{ marginTop: "5px", overflow: 'auto', height: '100vh', width: '100vw', pb: '20%' }}>

              {/* maping over citylist  */}
              {CityList.map((city, index) => (
                <Grid item xs={6} sm={2} key={index} textAlign={'center'}>
                  <img className="image" style={StyledCardOfCity} src={city.image} alt={city.name}
                    onClick={() => {
                      setImage(city.name);
                      setOpen(false);
                      // checking enddate is selected or not : if selected will enable Search button 
                      if (endDate !== null) {
                        setDiableSearchBtn(false)
                      }
                    }}
                  />
                  <Typography variant="h6" textAlign={'start'}>
                    {city.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Modal>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Pickup Date"
          fullWidth
          // disablePast
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          sx={{ marginTop: "5%" }}
          disabled={changeStart}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Dropoff Date"
          // disablePast
          value={endDate}
          onChange={(newValue) =>{
             setEndDate(newValue);
            if (endDate !==null) {
              setDiableSearchBtn(false)
            }}}
          sx={{ marginTop: "5%" }}
          fullWidth
          disabled={changeEnd}
        />
      </LocalizationProvider>

      <Typography variant="p" sx={{ marginTop: "2%" }}>
        Duration: {Math.floor((endDate - startDate) / (1000 * 3600 * 24))} Day
      </Typography>
      <Button
        variant="contained"
        disabled={diableSearchBtn}
        sx={{
          marginTop: "2%", width: "25%", backgroundColor: "#59CE8F",
          ":hover": { backgroundColor: "#59CE8F", }
        }}
        onClick={handleNavigate}
      >
        Search
      </Button>
    </Box>
  );
};

export default MobileSearchForm;

