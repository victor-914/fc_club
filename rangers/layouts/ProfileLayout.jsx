import React, { useState } from "react";
import {
  Tab,
  Tabs,
  TextField,
  Button,
  Box,
  AppBar,
  useMediaQuery,
} from "@mui/material";
import { AccountCircle, Receipt, LocalPlay, Email } from "@mui/icons-material";
import StarsIcon from "@mui/icons-material/Stars";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { styled } from '@emotion/styled';
import styled from "styled-components";
const StyledBox = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  /* background-color: green; */
`;

const ProfilePage = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("John Doe");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSave = () => {
    // Assume you have an API endpoint for updating the profile
    // Make a request to update the profile with the new data
    console.log("Profile updated successfully");
  };

  // const [value, setValue] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <StyledBox>
      {/* <AppBar position="static" sx={{ backgroundColor: "red" }}> */}
      <Tabs
        value={value}
        onChange={handleTabChange}
        centered={!isMobile}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={isMobile ? "auto" : "off"}
        sx={{
          backgroundColor: "#d8c9c9",
          width: "50% !important",
          margin:'auto'
        }}
      >
        <Tab icon={<AccountCircle />} label="Profile" />
        <Tab icon={<Receipt />} label="Products" />
        <Tab icon={<LocalPlay />} label="Tickets" />
        <Tab icon={<FavoriteIcon />} label="Wishlist" />
        <Tab icon={<StarsIcon />} label="Favourites" />
      </Tabs>
      {/* </AppBar> */}

      {value === 0 && (
        <div>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      )}
      {value === 1 && <div>Display Invoices here</div>}
      {value === 2 && <div>Display Tickets here</div>}
      {value === 3 && <div>Display Products here</div>}
    </StyledBox>
  );
};

export default ProfilePage;
