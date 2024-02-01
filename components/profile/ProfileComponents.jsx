import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
function ProfileComponents() {
  const router = useRouter();
  const [token_id, setToken_id] = useState();
  const [token, setToken] = useState();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    customer_phoneNumber: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const handleTabChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  useEffect(() => {
    const tokenID = Cookies.get("user_jwt");
    const user_id = Cookies.get("user_id");
    setToken(tokenID);
    setToken_id(user_id);
    if (!tokenID) {
      router.push("_signup");
    }

    const fetchProfileData = async () => {
      try {
        const res = await axios.get(
          "https://rangersadmin.rangersintl.com/api/users/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFormValues({
          username: res?.data?.username,
          email: res?.data?.email,
          customer_phoneNumber: res?.data?.customer_phoneNumber,
          country: res?.data?.country,
          state: res?.data?.state,
          zip_code: res?.data?.zip_code,
          city: res?.data?.city,
          address: res?.data?.address,
        });
      } catch (error) {
        throw error;
      }
    };

    token && fetchProfileData();

    return () => {};
  }, [token]);

  const handleSave = async () => {
    try {
      const res = await axios.put(
        `https://rangersadmin.rangersintl.com/api/users/${token_id}`,
        {
          zip_code: formValues?.zip_code,
          country: formValues?.country,
          email: formValues?.email,
          customer_phoneNumber: formValues?.customer_phoneNumber,
          city: formValues?.city,
          state: formValues?.state,
          address: formValues?.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("user details updated!");
    } catch (error) {
      console.log("🚀 ~ handleSave ~ error:", error);
      toast.error("Try again later! update failed!");
    }

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
        label="Username"
        text="text"
        value={formValues.username}
        onChange={handleTabChange}
        fullWidth
        name="username"
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        label="Phone Number"
        type="tel"
        value={formValues.customer_phoneNumber}
        onChange={handleTabChange}
        name="customer_phoneNumber"
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleTabChange}
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        label="Address"
        type="text"
        value={formValues.address}
        onChange={handleTabChange}
        fullWidth
        name="address"
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        type="text"
        label="City"
        value={formValues.city}
        name="city"
        onChange={handleTabChange}
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        label="State"
        type="text"
        name="state"
        value={formValues.state}
        onChange={handleTabChange}
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <TextField
        label="Zip code"
        type="text"
        value={formValues.zip_code}
        onChange={handleTabChange}
        name="zip_code"
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <Button
        sx={{
          marginTop: "20px",
          color: "#000",
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
