// import {
//   AppBar,
//   Box,
//   Button,
//   CardContent,
//   Checkbox,
//   Container,
//   FormControlLabel,
//   Grid,
//   IconButton,
//   Modal,
//   Radio,
//   RadioGroup,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import HeroDestini from "../../assets/images/HeroDestini.png";
// import HondaSP from "../../assets/images/HondaSP.png";
// import { Link } from "react-router-dom";
// import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
// import CloseIcon from "@mui/icons-material/Close";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PostLoginNavbar from "../../layouts/desktop/PostLoginNavbar";
// import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import Bangalore from "../../assets/images/Bangalore.jpg";
// import Chandigarh from "../../assets/images/Chandigarh.jpg";
// import Chennai from "../../assets/images/Chennai.jpg";
// import Dehradun from "../../assets/images/Dehradun.webp";
// import Delhi from "../../assets/images/Delhi.webp";
// import Ghaziabad from "../../assets/images/Ghaziabad.jpg";
// import Goa from "../../assets/images/Goa.jpg";
// import Hyderabad from "../../assets/images/Hyderabad.jpg";
// import Kolkata from "../../assets/images/Kolkata.jpg";
// import Manali from "../../assets/images/Manali.jpg";
// import Mumbai from "../../assets/images/Mumbai.webp";
// import Pune from "../../assets/images/Pune.jpg";
// import Gurgaon from "../../assets/images/Gurgaon.jpg";
// import Guwahati from "../../assets/images/Guwahati.jpg";
// import Jaipur from "../../assets/images/Jaipur.jpg";
// import Leh from "../../assets/images/Leh.jpg";
// import Noida from "../../assets/images/Noida.jpg";
// import Udaipur from "../../assets/images/Udaipur.jpg";
// import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const style = {
//   position: "absolute",
//   top: "15%",
//   right: "-7%",
//   transform: "translate(-50%, -50%)",
//   width: 300,
//   bgcolor: "green",
//   color: "white",
//   boxShadow: 24,
//   p: 2,
//   borderRadius: 3,
// };

// const styles = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "50%",
//   bgcolor: "background.paper",
//   borderRadius: "5px",
//   boxShadow: 24,
//   p: 4,
// };

// export default function MobileBookingFlow(props) {
//   const [packages, setPackages] = useState("dailyPackages");

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [location, setLocation] = useState(false);
//   const handleLocationOpen = () => setLocation(true);
//   const handleLocationClose = () => setLocation(false);

//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const [name, setName] = useState("Location");
//   const [setEditName] = useState("Bangalore");

//   return (
//     <>
//       <PostLoginNavbar />
//       <AppBar
//         position="sticky"
//         sx={{ backgroundColor: "white", padding: "20px" }}
//       >
//         <Container>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DateTimePicker
//                   label="Pickup Date & Time"
//                   value={startDate}
//                   onChange={(newValue) => setStartDate(newValue)}
//                   sx={{ width: "100%" }}
//                 />
//               </LocalizationProvider>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DateTimePicker
//                   label="Dropoff Date & Time"
//                   value={endDate}
//                   onChange={(newValue) => setEndDate(newValue)}
//                   sx={{ width: "100%" }}
//                 />
//               </LocalizationProvider>
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 onClick={handleLocationOpen}
//                 sx={{ marginTop: "5px", marginLeft: "12px" }}
//               >
//                 <LocationOnIcon sx={{ color: "#59CE8F", fontSize: 30 }} />
//                 <Typography
//                   sx={{ color: "#000000" }}
//                   value={name}
//                   onChange={(e) => setEditName(e.target.value)}
//                 >
//                   {name}
//                 </Typography>
//               </Button>
//             </Grid>
//             <Modal
//               open={location}
//               onClose={handleLocationClose}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//             >
//               <Box sx={styles}>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                   Choose your preferred city
//                 </Typography>
//                 <IconButton
//                   aria-label="close"
//                   onClick={() => setLocation(false)}
//                   sx={{
//                     position: "absolute",
//                     right: 8,
//                     top: 8,
//                     color: (theme) => theme.palette.grey[600],
//                   }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <Grid container spacing={2} sx={{ marginTop: "5px" }}>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Bangalore}
//                       alt="Bangalore"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Bangalore");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Bangalore
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Chandigarh}
//                       alt="Chandigarh"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Chandigarh");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Chandigarh
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Chennai}
//                       alt="Chennai"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Chennai");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Chennai
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Dehradun}
//                       alt="Dehradun"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Dehradun");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Dehradun
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Delhi}
//                       alt="Delhi"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Delhi");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Delhi
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Ghaziabad}
//                       alt="Ghaziabad"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Ghaziabad");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Ghaziabad
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Goa}
//                       alt="Goa"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Goa");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Goa
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Hyderabad}
//                       alt="Hyderabad"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Hyderabad");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Hyderabad
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Kolkata}
//                       alt="Kolkata"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Kolkata");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Kolkata
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Manali}
//                       alt="Manali"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Manali");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Manali
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Mumbai}
//                       alt="Mumbai"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Mumbai");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Mumbai
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Pune}
//                       alt="Pune"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Pune");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Pune
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Gurgaon}
//                       alt="Gurgaon"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Gurgaon");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Gurgaon
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Guwahati}
//                       alt="Guwahati"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Guwahati");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Guwahati
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Jaipur}
//                       alt="Jaipur"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Jaipur");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Jaipur
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Leh}
//                       alt="Leh"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Leh");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Leh
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Noida}
//                       alt="Noida"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Noida");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Noida
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={2}>
//                     <img
//                       className="image"
//                       src={Udaipur}
//                       alt="Udaipur"
//                       style={{
//                         width: "125px",
//                         height: "125px",
//                         borderRadius: "5px",
//                       }}
//                       onClick={() => {
//                         setName("Udaipur");
//                         setLocation(false);
//                       }}
//                     />
//                     <Typography variant="h6" align="center">
//                       Udaipur
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Modal>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 variant="contained"
//                 size="medium"
//                 sx={{
//                   backgroundColor: "#4cbb17",
//                   padding: "10px",
//                   marginTop: "5px",
//                   marginRight: "12px",
//                   ":hover": {
//                     backgroundColor: "#4cbb17",
//                   },
//                 }}
//                 onClick={handleOpen}
//               >
//                 Search
//               </Button>
//             </Grid>
//           </Grid>
//         </Container>
//       </AppBar>
//       <Container sx={{ marginTop: "2%" }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={3}>
//             <Box
//               sx={{
//                 border: "1px solid lightGray",
//                 borderRadius: "5px",
//                 padding: "10px",
//               }}
//             >
//               <Typography variant="h5">FILTER</Typography>
//               <div style={{ padding: "7px", marginTop: "8px" }}>
//                 <Typography variant="p" sx={{ fontWeight: "medium" }}>
//                   BOOKING DURATION
//                 </Typography>
//                 <RadioGroup
//                   aria-labelledby="demo-radio-buttons-group-label"
//                   defaultValue="daily package"
//                   name="radio-buttons-group"
//                 >
//                   <FormControlLabel
//                     value="daily package"
//                     control={<Radio color="success" />}
//                     label="Daily Package"
//                     onClick={() => {
//                       setPackages("dailyPackages");
//                       handleOpen();
//                     }}
//                   />
//                   <FormControlLabel
//                     value="weekly package"
//                     control={<Radio color="success" />}
//                     label="Weekly Package"
//                     onClick={() => {
//                       setPackages("weeklyPackages");
//                       handleOpen();
//                     }}
//                   />
//                   <FormControlLabel
//                     value="15 days package"
//                     control={<Radio color="success" />}
//                     label="15 Days Package"
//                     onClick={() => {
//                       setPackages("15daysPackages");
//                       handleOpen();
//                     }}
//                   />
//                   <FormControlLabel
//                     value="monthly package"
//                     control={<Radio color="success" />}
//                     label="Monthly Package"
//                     onClick={() => {
//                       setPackages("monthlyPackages");
//                       handleOpen();
//                     }}
//                   />
//                 </RadioGroup>
//               </div>
//               <hr />
//               <div style={{ padding: "7px", marginTop: "8px" }}>
//                 <Typography variant="p" sx={{ fontWeight: "medium" }}>
//                   TRANSMISSION TYPE
//                 </Typography>
//                 <div>
//                   <Checkbox
//                     {...label}
//                     color="success"
//                     size="small"
//                     inputProps={{ "aria-label": "controlled" }}
//                     onClick={() => {
//                       setPackages("gear");
//                       handleOpen();
//                     }}
//                   />
//                   Gear
//                 </div>
//                 <div>
//                   <Checkbox
//                     {...label}
//                     color="success"
//                     size="small"
//                     inputProps={{ "aria-label": "controlled" }}
//                     onClick={() => {
//                       setPackages("gearLess");
//                       handleOpen();
//                     }}
//                   />
//                   Gearless
//                 </div>
//               </div>
//               <hr />
//               <div style={{ padding: "7px", marginTop: "8px" }}>
//                 <Typography variant="p" sx={{ fontWeight: "medium" }}>
//                   GO HUBS
//                 </Typography>
//                 <div>
//                   <Checkbox
//                     {...label}
//                     color="success"
//                     size="small"
//                     inputProps={{ "aria-label": "controlled" }}
//                     onClick={() => {
//                       setPackages("baghajatin");
//                       handleOpen();
//                     }}
//                   />
//                   Baghajatin
//                 </div>
//                 <div>
//                   <Checkbox
//                     {...label}
//                     color="success"
//                     size="small"
//                     inputProps={{ "aria-label": "controlled" }}
//                     onClick={() => {
//                       setPackages("tikiaparaRailwayStation");
//                       handleOpen();
//                     }}
//                   />
//                   Tikiapara Railway Station
//                 </div>
//               </div>
//               <hr />
//               <div style={{ padding: "7px", marginTop: "8px" }}>
//                 <Typography variant="p" sx={{ fontWeight: "medium" }}>
//                   Brands
//                 </Typography>
//                 <div>
//                   <Checkbox
//                     {...label}
//                     color="success"
//                     size="small"
//                     inputProps={{ "aria-label": "controlled" }}
//                     onClick={() => {
//                       setPackages("hero");
//                       handleOpen();
//                     }}
//                   />
//                   Hero
//                 </div>
//                 <div>
//                   <Checkbox
//                     {...label}
//                     color="success"
//                     size="small"
//                     inputProps={{ "aria-label": "controlled" }}
//                     onClick={() => {
//                       setPackages("honda");
//                       handleOpen();
//                     }}
//                   />
//                   Honda
//                 </div>
//               </div>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={9}>
//             {packages === "dailyPackages" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Hero Destini 125
//                     </Typography>
//                     <img
//                       src={HeroDestini}
//                       alt="HeroDestini"
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         padding: "7px",
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Tikiapara Railway Station"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹449
//                         </Typography>
//                         <br />
//                         <Typography variant="p">100 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Honda SP 125
//                     </Typography>
//                     <img
//                       src={HondaSP}
//                       alt="HeroDestini"
//                       style={{ height: "100%", width: "81%", padding: "7px" }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Baghajatin"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹719
//                         </Typography>
//                         <br />
//                         <Typography variant="p">240 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "weeklyPackages" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Hero Destini 125
//                     </Typography>
//                     <img
//                       src={HeroDestini}
//                       alt="HeroDestini"
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         padding: "7px",
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Tikiapara Railway Station"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹4049
//                         </Typography>
//                         <br />
//                         <Typography variant="p">1000 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Honda SP 125
//                     </Typography>
//                     <img
//                       src={HondaSP}
//                       alt="HeroDestini"
//                       style={{ height: "100%", width: "81%", padding: "7px" }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Baghajatin"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹7019
//                         </Typography>
//                         <br />
//                         <Typography variant="p">2400 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "15daysPackages" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Hero Destini 125
//                     </Typography>
//                     <img
//                       src={HeroDestini}
//                       alt="HeroDestini"
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         padding: "7px",
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Tikiapara Railway Station"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹8099
//                         </Typography>
//                         <br />
//                         <Typography variant="p">2000 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Honda SP 125
//                     </Typography>
//                     <img
//                       src={HondaSP}
//                       alt="HeroDestini"
//                       style={{ height: "100%", width: "81%", padding: "7px" }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Baghajatin"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹9099
//                         </Typography>
//                         <br />
//                         <Typography variant="p">3000 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "monthlyPackages" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Hero Destini 125
//                     </Typography>
//                     <img
//                       src={HeroDestini}
//                       alt="HeroDestini"
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         padding: "7px",
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Tikiapara Railway Station"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹15299
//                         </Typography>
//                         <br />
//                         <Typography variant="p">4500 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Honda SP 125
//                     </Typography>
//                     <img
//                       src={HondaSP}
//                       alt="HeroDestini"
//                       style={{ height: "100%", width: "81%", padding: "7px" }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Baghajatin"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹16300
//                         </Typography>
//                         <br />
//                         <Typography variant="p">5500 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "gear" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Honda SP 125
//                     </Typography>
//                     <img
//                       src={HondaSP}
//                       alt="HeroDestini"
//                       style={{ height: "100%", width: "81%", padding: "7px" }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Baghajatin"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹719
//                         </Typography>
//                         <br />
//                         <Typography variant="p">240 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "gearLess" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Hero Destini 125
//                     </Typography>
//                     <img
//                       src={HeroDestini}
//                       alt="HeroDestini"
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         padding: "7px",
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Tikiapara Railway Station"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹449
//                         </Typography>
//                         <br />
//                         <Typography variant="p">100 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "baghajatin" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Honda SP 125
//                     </Typography>
//                     <img
//                       src={HondaSP}
//                       alt="HeroDestini"
//                       style={{ height: "100%", width: "81%", padding: "7px" }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Baghajatin"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹719
//                         </Typography>
//                         <br />
//                         <Typography variant="p">240 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "tikiaparaRailwayStation" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Hero Destini 125
//                     </Typography>
//                     <img
//                       src={HeroDestini}
//                       alt="HeroDestini"
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         padding: "7px",
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Tikiapara Railway Station"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹449
//                         </Typography>
//                         <br />
//                         <Typography variant="p">100 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "hero" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Hero Destini 125
//                     </Typography>
//                     <img
//                       src={HeroDestini}
//                       alt="HeroDestini"
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         padding: "7px",
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Tikiapara Railway Station"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹449
//                         </Typography>
//                         <br />
//                         <Typography variant="p">100 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//             {packages === "honda" && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                   <CardContent
//                     sx={{
//                       border: "1px solid lightGray",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       Honda SP 125
//                     </Typography>
//                     <img
//                       src={HondaSP}
//                       alt="HeroDestini"
//                       style={{ height: "100%", width: "81%", padding: "7px" }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Available at"
//                       defaultValue="Baghajatin"
//                       sx={{ marginTop: "5%" }}
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                       size="small"
//                     />
//                     <Grid container spacing={2} sx={{ padding: "5px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography
//                           variant="p"
//                           sx={{ color: "#4cbb17", fontSize: "25px" }}
//                         >
//                           ₹719
//                         </Typography>
//                         <br />
//                         <Typography variant="p">240 Km limit</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             backgroundColor: "#4cbb17",
//                             ":hover": {
//                               backgroundColor: "#4cbb17",
//                             },
//                           }}
//                           component={Link}
//                           to="/BookNowPage"
//                         >
//                           Book Now
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <hr />
//                     <Grid container spacing={2} sx={{ fontSize: "15px" }}>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Deposit : ₹2000</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Typography variant="p">Make Year : 2020</Typography>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
//       </Container>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <div style={{ display: "flex" }}>
//             <IconButton>
//               <TaskAltOutlinedIcon sx={{ color: "white" }} />
//             </IconButton>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Success
//             </Typography>
//           </div>
//           <Typography id="modal-modal-description" sx={{ ml: 5 }}>
//             Date and time changed
//           </Typography>
//         </Box>
//       </Modal>
//       <div style={{ marginTop: "10%" }}></div>
//       {/* <PostLoginFooter /> */}
//     </>
//   );
// }

import {
  AppBar,
  Box,
  Button,
  CardContent,
  Checkbox,
  Container,
  Fab,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HeroDestini from "../../assets/images/HeroDestini.png";
import HondaSP from "../../assets/images/HondaSP.png";
import { Link } from "react-router-dom";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PostLoginNavbar from "../../layouts/desktop/PostLoginNavbar";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Bangalore from "../../assets/images/Bangalore.jpg";
import Chandigarh from "../../assets/images/Chandigarh.jpg";
import Chennai from "../../assets/images/Chennai.jpg";
import Dehradun from "../../assets/images/Dehradun.webp";
import Delhi from "../../assets/images/Delhi.webp";
import Ghaziabad from "../../assets/images/Ghaziabad.jpg";
import Goa from "../../assets/images/Goa.jpg";
import Hyderabad from "../../assets/images/Hyderabad.jpg";
import Kolkata from "../../assets/images/Kolkata.jpg";
import Manali from "../../assets/images/Manali.jpg";
import Mumbai from "../../assets/images/Mumbai.webp";
import Pune from "../../assets/images/Pune.jpg";
import Gurgaon from "../../assets/images/Gurgaon.jpg";
import Guwahati from "../../assets/images/Guwahati.jpg";
import Jaipur from "../../assets/images/Jaipur.jpg";
import Leh from "../../assets/images/Leh.jpg";
import Noida from "../../assets/images/Noida.jpg";
import Udaipur from "../../assets/images/Udaipur.jpg";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "15%",
  right: "-7%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "green",
  color: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function MobileBookingFlow(props) {
  const [packages, setPackages] = useState("dailyPackages");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [location, setLocation] = useState(false);
  const handleLocationOpen = () => setLocation(true);
  const handleLocationClose = () => setLocation(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [name, setName] = useState("Location");
  const [setEditName] = useState("Bangalore");

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Grid item xs={12} sm={3}>
      {/* GG */}
      <Box
        sx={{
          border: "1px solid lightGray",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <Typography variant="h5">FILTER</Typography>
        <div style={{ padding: "7px", marginTop: "8px" }}>
          <Typography variant="p" sx={{ fontWeight: "medium" }}>
            BOOKING DURATION
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="daily package"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="daily package"
              control={<Radio color="success" />}
              label="Daily Package"
              onClick={() => {
                setPackages("dailyPackages");
                handleOpen();
              }}
            />
            <FormControlLabel
              value="weekly package"
              control={<Radio color="success" />}
              label="Weekly Package"
              onClick={() => {
                setPackages("weeklyPackages");
                handleOpen();
              }}
            />
            <FormControlLabel
              value="15 days package"
              control={<Radio color="success" />}
              label="15 Days Package"
              onClick={() => {
                setPackages("15daysPackages");
                handleOpen();
              }}
            />
            <FormControlLabel
              value="monthly package"
              control={<Radio color="success" />}
              label="Monthly Package"
              onClick={() => {
                setPackages("monthlyPackages");
                handleOpen();
              }}
            />
          </RadioGroup>
        </div>
        <hr />
        <div style={{ padding: "7px", marginTop: "8px" }}>
          <Typography variant="p" sx={{ fontWeight: "medium" }}>
            TRANSMISSION TYPE
          </Typography>
          <div>
            <Checkbox
              {...label}
              color="success"
              size="small"
              inputProps={{ "aria-label": "controlled" }}
              onClick={() => {
                setPackages("gear");
                handleOpen();
              }}
            />
            Gear
          </div>
          <div>
            <Checkbox
              {...label}
              color="success"
              size="small"
              inputProps={{ "aria-label": "controlled" }}
              onClick={() => {
                setPackages("gearLess");
                handleOpen();
              }}
            />
            Gearless
          </div>
        </div>
        <hr />
        <div style={{ padding: "7px", marginTop: "8px" }}>
          <Typography variant="p" sx={{ fontWeight: "medium" }}>
            GO HUBS
          </Typography>
          <div>
            <Checkbox
              {...label}
              color="success"
              size="small"
              inputProps={{ "aria-label": "controlled" }}
              onClick={() => {
                setPackages("baghajatin");
                handleOpen();
              }}
            />
            Baghajatin
          </div>
          <div>
            <Checkbox
              {...label}
              color="success"
              size="small"
              inputProps={{ "aria-label": "controlled" }}
              onClick={() => {
                setPackages("tikiaparaRailwayStation");
                handleOpen();
              }}
            />
            Tikiapara Railway Station
          </div>
        </div>
        <hr />
        <div style={{ padding: "7px", marginTop: "8px" }}>
          <Typography variant="p" sx={{ fontWeight: "medium" }}>
            Brands
          </Typography>
          <div>
            <Checkbox
              {...label}
              color="success"
              size="small"
              inputProps={{ "aria-label": "controlled" }}
              onClick={() => {
                setPackages("hero");
                handleOpen();
              }}
            />
            Hero
          </div>
          <div>
            <Checkbox
              {...label}
              color="success"
              size="small"
              inputProps={{ "aria-label": "controlled" }}
              onClick={() => {
                setPackages("honda");
                handleOpen();
              }}
            />
            Honda
          </div>
        </div>
      </Box>
    </Grid>
  );

  return (
    <>
      <PostLoginNavbar />
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", padding: "20px" }}
      >
        {/* <div>
          {[ 'bottom'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div> */}
        {/* <div className="float">
          <Fab style={{narginbottom :20}} color='green' size='large'>
            Filter
          </Fab>
        </div> */}

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Pickup Date & Time"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Dropoff Date & Time"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                onClick={handleLocationOpen}
                sx={{ marginTop: "5px", marginLeft: "12px" }}
              >
                <LocationOnIcon sx={{ color: "#59CE8F", fontSize: 30 }} />
                <Typography
                  sx={{ color: "#000000" }}
                  value={name}
                  onChange={(e) => setEditName(e.target.value)}
                >
                  {name}
                </Typography>
              </Button>
            </Grid>
            <Modal
              open={location}
              onClose={handleLocationClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styles}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Choose your preferred city
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={() => setLocation(false)}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[600],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Grid container spacing={2} sx={{ marginTop: "5px" }}>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Bangalore}
                      alt="Bangalore"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Bangalore");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Bangalore
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Chandigarh}
                      alt="Chandigarh"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Chandigarh");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Chandigarh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Chennai}
                      alt="Chennai"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Chennai");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Chennai
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Dehradun}
                      alt="Dehradun"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Dehradun");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Dehradun
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Delhi}
                      alt="Delhi"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Delhi");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Delhi
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Ghaziabad}
                      alt="Ghaziabad"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Ghaziabad");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Ghaziabad
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Goa}
                      alt="Goa"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Goa");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Goa
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Hyderabad}
                      alt="Hyderabad"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Hyderabad");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Hyderabad
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Kolkata}
                      alt="Kolkata"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Kolkata");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Kolkata
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Manali}
                      alt="Manali"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Manali");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Manali
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Mumbai}
                      alt="Mumbai"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Mumbai");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Mumbai
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Pune}
                      alt="Pune"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Pune");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Pune
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Gurgaon}
                      alt="Gurgaon"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Gurgaon");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Gurgaon
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Guwahati}
                      alt="Guwahati"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Guwahati");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Guwahati
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Jaipur}
                      alt="Jaipur"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Jaipur");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Jaipur
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Leh}
                      alt="Leh"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Leh");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Leh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Noida}
                      alt="Noida"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Noida");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Noida
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      className="image"
                      src={Udaipur}
                      alt="Udaipur"
                      style={{
                        width: "125px",
                        height: "125px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setName("Udaipur");
                        setLocation(false);
                      }}
                    />
                    <Typography variant="h6" align="center">
                      Udaipur
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Modal>
            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "#4cbb17",
                  padding: "10px",
                  marginTop: "5px",
                  marginRight: "12px",
                  ":hover": {
                    backgroundColor: "#4cbb17",
                  },
                }}
                onClick={handleOpen}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <div className="filter">
        {["bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              onClick={toggleDrawer(anchor, true)}
              style={{ color: "white" }}
            >
              <FilterAltOutlinedIcon />
              FIlter
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      {/* <div className="float">
          <Fab variant='extended' style={{padding: "7px", bottom: "-100px"}} color='green' size='large'>
            Filter
          </Fab>
        </div> */}

      <Container sx={{ marginTop: "2%" }}>
        <Grid container spacing={2}>
          {/* GG */}

          {/* <Grid item xs={12} sm={3}>
            <Box
              sx={{
                border: "1px solid lightGray",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <Typography variant="h5">FILTER</Typography>
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  BOOKING DURATION
                </Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="daily package"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="daily package"
                    control={<Radio color="success" />}
                    label="Daily Package"
                    onClick={() => {
                      setPackages("dailyPackages");
                      handleOpen();
                    }}
                  />
                  <FormControlLabel
                    value="weekly package"
                    control={<Radio color="success" />}
                    label="Weekly Package"
                    onClick={() => {
                      setPackages("weeklyPackages");
                      handleOpen();
                    }}
                  />
                  <FormControlLabel
                    value="15 days package"
                    control={<Radio color="success" />}
                    label="15 Days Package"
                    onClick={() => {
                      setPackages("15daysPackages");
                      handleOpen();
                    }}
                  />
                  <FormControlLabel
                    value="monthly package"
                    control={<Radio color="success" />}
                    label="Monthly Package"
                    onClick={() => {
                      setPackages("monthlyPackages");
                      handleOpen();
                    }}
                  />
                </RadioGroup>
              </div>
              <hr />
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  TRANSMISSION TYPE
                </Typography>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("gear");
                      handleOpen();
                    }}
                  />
                  Gear
                </div>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("gearLess");
                      handleOpen();
                    }}
                  />
                  Gearless
                </div>
              </div>
              <hr />
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  GO HUBS
                </Typography>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("baghajatin");
                      handleOpen();
                    }}
                  />
                  Baghajatin
                </div>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("tikiaparaRailwayStation");
                      handleOpen();
                    }}
                  />
                  Tikiapara Railway Station
                </div>
              </div>
              <hr />
              <div style={{ padding: "7px", marginTop: "8px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  Brands
                </Typography>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("hero");
                      handleOpen();
                    }}
                  />
                  Hero
                </div>
                <div>
                  <Checkbox
                    {...label}
                    color="success"
                    size="small"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      setPackages("honda");
                      handleOpen();
                    }}
                  />
                  Honda
                </div>
              </div>
            </Box>
          </Grid> */}
          {/* GG */}

          <Grid item xs={12} sm={9}>
            {packages === "dailyPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "7px",
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "weeklyPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "7px",
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹4049
                        </Typography>
                        <br />
                        <Typography variant="p">1000 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹7019
                        </Typography>
                        <br />
                        <Typography variant="p">2400 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "15daysPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "7px",
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹8099
                        </Typography>
                        <br />
                        <Typography variant="p">2000 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹9099
                        </Typography>
                        <br />
                        <Typography variant="p">3000 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "monthlyPackages" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "7px",
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹15299
                        </Typography>
                        <br />
                        <Typography variant="p">4500 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹16300
                        </Typography>
                        <br />
                        <Typography variant="p">5500 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "gear" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "gearLess" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "7px",
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "baghajatin" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "tikiaparaRailwayStation" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "7px",
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "hero" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Hero Destini 125
                    </Typography>
                    <img
                      src={HeroDestini}
                      alt="HeroDestini"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "7px",
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Tikiapara Railway Station"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹449
                        </Typography>
                        <br />
                        <Typography variant="p">100 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
            {packages === "honda" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardContent
                    sx={{
                      border: "1px solid lightGray",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Honda SP 125
                    </Typography>
                    <img
                      src={HondaSP}
                      alt="HeroDestini"
                      style={{ height: "100%", width: "81%", padding: "7px" }}
                    />
                    <TextField
                      fullWidth
                      label="Available at"
                      defaultValue="Baghajatin"
                      sx={{ marginTop: "5%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      size="small"
                    />
                    <Grid container spacing={2} sx={{ padding: "5px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="p"
                          sx={{ color: "#4cbb17", fontSize: "25px" }}
                        >
                          ₹719
                        </Typography>
                        <br />
                        <Typography variant="p">240 Km limit</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4cbb17",
                            ":hover": {
                              backgroundColor: "#4cbb17",
                            },
                          }}
                          component={Link}
                          to="/BookNowPage"
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Deposit : ₹2000</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="p">Make Year : 2020</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <IconButton>
              <TaskAltOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Success
            </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ ml: 5 }}>
            Date and time changed
          </Typography>
        </Box>
      </Modal>
      <div style={{ marginTop: "10%" }}></div>
      {/* <PostLoginFooter /> */}
    </>
  );
}
