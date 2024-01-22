import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useRouter } from "next/router";
import { Color } from "../../utils/color";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const totalPrice = cart?.reduce((total, item) => {
    return total + item?.count * item?.attributes?.price;
  }, 0);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const router = useRouter();
 const keys = uuidv4()
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const isUserLoggedIn = Cookies.get("user_jwt", { path: "" });
    if (isUserLoggedIn) {
      setIsLoggedIn(true);
    } else if (!isUserLoggedIn) {
      setIsLoggedIn(false);
    }

    return () => {};
  });

  const handleCheckout = () => {
    if (isLoggedIn) {
      router.replace("/_checkout");
      dispatch(setIsCartOpen({}));
    } else if (!isLoggedIn) {
      dispatch(setIsCartOpen({}));
      toast.error("Authentication required");
      router.replace("/_signup");
    }
  };

  // const
  return (
    <Box
      display={isCartOpen ? "flex" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="relative"
      zIndex={1000}
      width="100vh"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width={`${isNonMobile ? "30%" : "100%"}`}
        height="100%"
        backgroundColor="#fff"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">SHOPPING CART ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item?.attributes?.title}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.product_name}
                      width="123px"
                      height="164px"
                      src={`${item?.attributes?.images?.data[0]?.attributes?.url}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {/* {item.attributes.name} */}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    {/* <Typography>{item.attributes.shortDescription}</Typography> */}
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        ₦{item?.attributes?.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">₦ {totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: `${Color.primaryColor} !important`,
                color: "#fff !important",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={handleCheckout}
            >
              <Typography fontWeight="bold"> CHECKOUT</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
