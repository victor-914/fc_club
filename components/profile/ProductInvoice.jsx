import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@mui/material";

const ProductInvoice = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const invoices = [
    {
      id: 1,
      date: "2023-01-01",
      amount: 100,
      status: "Paid",
    },
    {
      id: 2,
      date: "2023-02-01",
      amount: 150,
      status: "Pending",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        width: `${isMobile ? "100%" : "80%"}`,
        // height: isMobile ? "" : "300px",
        alignItems: "flex-start",
        justifyContent:'center',
        flexWrap: "wrap",
        padding: "20px 0px 30px 0px",
        gap:"20px",
        margin: "auto",
        height: `${isMobile ? "auto" : "100vh"}`,
        // backgroundColor: "green",
      }}
    >
      {invoices.map((invoice) => (
        <Card
          key={invoice.id}
          sx={{
            // margin: "10px",
            width: isMobile ? "80%" : "300px",
          }}
        >
          <CardContent
            sx={{
              // backgroundColor: "red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"flex-start",
              textAlign:"start"
            }}
          >
            <Typography variant="h3" gutterBottom>
              Invoice #{invoice.id}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Date: {invoice.date}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Amount: ${invoice.amount}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Status: {invoice.status}
            </Typography>
            {isMobile && (
              <Button variant="outlined" sx={{ marginTop: "10px" }}>
                View More
              </Button>
            )}
            {!isMobile && (
              <div>
                <Button
                  variant="outlined"
                  sx={{ marginTop: "10px", marginRight: "10px" }}
                >
                  View More
                </Button>
                <Button variant="outlined" sx={{ marginTop: "10px" }}>
                  Download PDF
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductInvoice;
