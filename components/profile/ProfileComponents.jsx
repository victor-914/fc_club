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
function ProfileComponents() {
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
  return (
    <Box
      sx={{
        height: "100vh",
        width: "80%",
        margin: "auto",
      }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <Button
        sx={{
          marginTop: "20px",
          color:"#000"
        }}
        variant="contained"
        // color="primary"
        onClick={handleSave}
      >
        Save
      </Button>
    </Box>
  );
}

export default ProfileComponents;
