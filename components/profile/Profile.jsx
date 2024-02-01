import React, { useState } from "react";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import { AccountCircle, Receipt } from "@mui/icons-material";
import styled from "styled-components";
import ProfileComponents from "./ProfileComponents";
import { Color } from "../../utils/color";
import ProductInvoice from "./ProductInvoice";
import LogoutComponent from "../logout/Logout";
const StyledBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 100px;
`;

const ProfilePage = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <StyledBox>
      <Tabs
        value={value}
        onChange={handleTabChange}
        centered
        scrollButtons={isMobile ? "auto" : "off"}
        sx={{
          backgroundColor: `${Color.primaryColor}`,
          width: "90%",
          margin: "auto",
          borderTop: "5px solid #fff",
        }}
      >
        <Tab
          sx={{
            color: "#fff !important",
          }}
          icon={<AccountCircle />}
          label="Profile"
        />
        <Tab
          sx={{
            color: "#fff !important",
          }}
          icon={<Receipt />}
          label="Purchases"
        />
      </Tabs>

      {value === 0 && <ProfileComponents />}
      {value === 1 && <ProductInvoice />}
      <LogoutComponent />
    </StyledBox>
  );
};

export default ProfilePage;
