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
import { AccountCircle, Receipt, LocalPlay } from "@mui/icons-material";
import StarsIcon from "@mui/icons-material/Stars";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { styled } from '@emotion/styled';
import styled from "styled-components";
import ProfileComponents from "./ProfileComponents";
import TicketInvoice from "./TicketInvoice";
import ProductInvoice from "./ProductInvoice";
import Favourites from "./Favourites";
import { Color } from "../../utils/color";
const StyledBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 100px;
  /* background-color: green; */
`;

const ProfilePage = () => {
  const [value, setValue] = useState(0);

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
      <Tabs
        value={value}
        onChange={handleTabChange}
        centered
        // variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={isMobile ? "auto" : "off"}
        sx={{
          backgroundColor: `${Color.primaryColor}`,
          width: "90%",
          margin: "auto",
          borderTop:"5px solid #fff"
        }}
      >
        <Tab
          sx={{
            color: "#fff !important",
          // fontSize:"20px !important",
          }}
          icon={<AccountCircle />}
          label="Profile"
        />
        <Tab
          sx={{
            color: "#fff !important",
          }}
          icon={<Receipt />}
          label="Products"
        />
        <Tab
          sx={{
            color: "#fff !important",
          }}
          icon={<LocalPlay />}
          label="Tickets"
        />
        {/* <Tab icon={<FavoriteIcon />} label="Wishlist" /> */}
        {/* <Tab icon={<StarsIcon />} label="Favourites" /> */}
      </Tabs>

      {value === 0 && <ProfileComponents />}
      {value === 1 && <ProductInvoice />}
      {value === 2 && <TicketInvoice />}
      {/* {value === 3 && <Favourites />} */}
    </StyledBox>
  );
};

export default ProfilePage;
