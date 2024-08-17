import { useDispatch, useSelector } from "react-redux";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import Shipping from "./Shipping";
import styled from "styled-components";
import { Color } from "../../utils/color";
import { setUserDetails } from "../../state/profile";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${Color.primaryColor} !important;
  color: #fff;
`;

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const [t, st] = useState(false);
  const [token_id, setToken_id] = useState();
  const [token, setToken] = useState();
  const router = useRouter();
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

  useEffect(() => {
    const tokenID = Cookies.get("user_id");
    const token = Cookies.get("user_jwt");
    if (!tokenID && !token) {
      router.push("_signup");
    } else {
      setToken_id(tokenID);
      setToken(token);
    }

    return () => {};
  });




  const handleFormSubmit = async (values, actions) => {
    
    if (values) {
      dispatch(
        setUserDetails({
          zip_code: values?.shippingAddress.zipCode,
          country: values?.shippingAddress.country,
          email: values?.shippingAddress.email,
          customer_phoneNumber: values?.shippingAddress.phoneNumber,
          city: values?.shippingAddress.city,
          state: values?.shippingAddress.state,
          address: values?.shippingAddress.street1,
        })
      );

      try {
        const res = await axios.put(
          `https://rangersadmin.rangersintl.com/api/users/${token_id}`,
           {
            data:{
                zip_code: values?.shippingAddress.zipCode,
                country: values?.shippingAddress.country,
                email: values?.shippingAddress.email,
                customer_phoneNumber: values?.shippingAddress.phoneNumber,
                city: values?.shippingAddress.city,
                state: values?.shippingAddress.state,
                address: values?.shippingAddress.street1,
            }
           },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        st(true);
        router.push("/_productCheckout");
        toast.success("shipping details stored successfully");
      } catch (error) {
        toast.error(error?.message);
      } finally {
       router.push("/_productCheckout");
      }
    }
  };

  return (
    <Box width="80%" m="200px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Shipping Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Product Review</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Shipping
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
              <StyledButton type="submit">Proceed to Checkout</StyledButton>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  shippingAddress: {
    email: "",
    phoneNumber: "",
    country: "select country",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
};

export default Checkout;
