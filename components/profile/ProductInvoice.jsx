import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import DownloadInvoice from "./DownloadInvoice";

const ProductInvoice = () => {
  const router = useRouter();
  const [token, setToken] = useState();
  const [product, setProduct] = useState();
  const [userDetails, setUserDetails] = useState();
  const [viewDownload, setViewDownload] = useState(false);
  useEffect(() => {
    const tokenID = Cookies.get("user_jwt");
    setToken(tokenID);
    if (!tokenID) {
      router.push("_signup");
    }

    const fetchProfileData = async () => {
      try {
        const res = await axios.get(
          "https://rangersadmin.rangersintl.com/api/users/me?populate[product_order][fields][0]=*&fields[0]=*",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProduct(res?.data?.product_order);
        setUserDetails(res?.data);
      } catch (error) {
        throw error;
      }
    };

    token && fetchProfileData();

    return () => {};
  }, [token]);

  const formatTime = (time) => {
    const dateObject = new Date(time);
    const formattedDate = dateObject.toLocaleString();

    return formattedDate;
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        alignItems: "flex-start",
        justifyContent: `${isMobile ? "center" : "flex-start"}`,
        flexWrap: "wrap",
        padding: "20px 0px 30px 0px",
        position: "relative",
        gap: "10px",
        margin: "auto",
        height: "120vh",
      }}
    >
      {userDetails?.product_order?.map((data) => (
        <Card
          key={data?.id}
          sx={{
            width: "300px",
            height: "300px",
            border: "1px solid #910f1a7e",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "start",
              height: "100%",
              width: "100%",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Invoice #{data?.id}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Date: {formatTime(data?.createdAt)}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Amount: &#x20A6; {data?.total_price}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Status: {data?.gateway_response}
            </Typography>
            <Button
              onClick={() => setViewDownload(!viewDownload)}
              variant="outlined"
              sx={{ marginTop: "10px" }}
            >
              View More
            </Button>
            {viewDownload && (
              <DownloadInvoice
                details={userDetails}
                view={viewDownload}
                invoice={data}
                setView={setViewDownload}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductInvoice;
