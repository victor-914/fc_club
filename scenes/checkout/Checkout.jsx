import { useDispatch, useSelector } from "react-redux";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Shipping from "./Shipping";
import styled from "styled-components";
import { Color } from "../../utils/color";
import { setUserDetails } from "../../state/profile";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const handleFormSubmit = (values, actions) => {
    if (values) {
      dispatch(
        setUserDetails({
          zip_code: values?.shippingAddress.zipCode,
          country: values?.shippingAddress.country,
          email: values?.shippingAddress.email,
          customer_phoneNumber: values?.shippingAddress.phoneNumber,
          city: values?.shippingAddress.city,
          address: values?.shippingAddress.street1,
        })
      );
      st(true);
    }

    t && router.push("/_productCheckout");
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
              {/* </Box> */}
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
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default Checkout;
