import { usePDF } from "react-to-pdf";
import styled from "styled-components";
import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import logo from "../../assets/rangers.png";
import Image from "next/image";
import { Color } from "../../utils/color";

const InvoiceContainer = styled.div`
  width: ${(props) => (props.isMobile ? "100%" : "600px")};
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px dashed ${Color.primaryColor};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const InvoiceDetails = styled.div`
  margin-bottom: 20px;
  .productDetails {
    background-color: ${Color.primaryColor};
    color: #fff;
    font-weight: 700;
    padding: 5px;
    margin-bottom: 15px;
  }

  p {
    padding: 2.05px;
  }
`;

const UserDetails = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;

  .userHeader {
    background-color: ${Color.primaryColor};
    color: #fff;
    font-weight: 700;
    padding: 5px;
    margin-bottom: 15px;
  }
  p {
    padding: 2.05px;
  }
`;

function DownloadInvoice({ details, invoice, view, setView }) {
  const { toPDF, targetRef } = usePDF({
    filename: `${invoice?.id}-Rangers-purchase-invoice.pdf`,
  });
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <StyledInvoice>
      <InvoiceContainer isMobile={mobile} ref={targetRef}>
        <Header>
          <header>RANGERS'S INTL FC INVOICE</header>

          <div>
            <h5>Invoice #{invoice?.id}</h5>
          </div>
        </Header>

        <div>
          Thank you for choosing us for your sports apparel needs. We are
          thrilled to have you as a valued customer, and we appreciate your
          trust in our brand.
        </div>

        <UserDetails>
          <h6 className="userHeader">User Details</h6>
          <p>Email: {details?.email}</p>
          <p>Gateway Reference ID: {invoice?.gatewayRef_id}</p>
          <p>Session ID: {invoice?.session_id}</p>
        </UserDetails>

        <InvoiceDetails>
          <h6 className="productDetails">Product Details</h6>
          <div>Your order details are as follows:</div>
          <p>Date: {new Date(invoice?.createdAt).toLocaleDateString()}</p>
          <p>Shipping Status: {invoice?.shipping_status}</p>
          <p>Gateway Response: {invoice?.gateway_response}</p>
          {/* <p>Quantity: {invoice?.quantity}</p> */}
          <p>Gender: {invoice?.gender}</p>
          <p>Size: {invoice?.size}</p>
          <p>Price:&#x20A6; {invoice?.price}</p>
        </InvoiceDetails>
        <div>
          We are working diligently to ensure that your jersey is dispatched
          promptly and reaches you in perfect condition. You can expect a
          shipping confirmation email with tracking information shortly. Please
          feel free to track your order and reach out to us if you have any
          questions or concerns along the way. Email us:
          customercare@rangersintl.com
        </div>
      </InvoiceContainer>
      <div className="buttonContainer">
        <Button
          onClick={() => setView(!view)}
          variant="outlined"
          sx={{ marginTop: "10px" }}
        >
          close pdf
        </Button>
        <Button
          onClick={() => toPDF()}
          variant="outlined"
          sx={{ marginTop: "10px" }}
        >
          download pdf
        </Button>
      </div>
    </StyledInvoice>
  );
}

export default DownloadInvoice;

const StyledInvoice = styled.section`
  position: absolute;
  width: 100%;
  height: auto;
  padding: 10px;
  .buttonContainer {
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
  }
  left: 0px;
  top: 5%;
`;
