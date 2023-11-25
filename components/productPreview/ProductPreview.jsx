import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { useFlutterwave } from "flutterwave-react-v3";
import { useRouter } from "next/router";
// import { router } from "json-server";
import logo from "../../assets/rangers.png";
import { Color } from "../../utils/color";

function ProductPreview() {
  const [totalPrice, setTotalPrice] = useState();
  const [subTotalPrice, setSubTotalPrice] = useState();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    setTotalPrice(
      cart &&
        cart.reduce((total, item) => {
          return total + item?.count * item?.attributes?.price;
        }, 0)
    );

    setSubTotalPrice(
      cart &&
        cart.map((item) => {
          return item?.count * item?.attributes?.price;
        }, 0)
    );

    return () => {};
  }, []);

  console.log(cart, "cart@productREview", user);
  const configObj = {
    public_key: "FLWPUBK_TEST-4eac3c26b58ff5baf437340ddca82752-X",
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    // customer: {
    //   email: user.userInfo.email ,
    //   phone_number: user.userInfo.phoneNumber,
    // }
    customer: {
      email: "okaforv914@gmail.com",
      phone_number: "08144261104",
    },
    customizations: {
      title: "Rangers Intl Payout",
      description: "Payment for items in cart",
      logo: `${logo}`,
    },
  };

  // setConfig(configObj);
  // const stripe = await stripePromise;
  // const requestBody = {
  //   userName: [values.firstName, values.lastName].join(" "),
  //   email: values.email,
  //   products: cart.map(({ id, count }) => ({
  //     id,
  //     count,
  //   })),
  // };

  const handleFlutterPayment = useFlutterwave(configObj);
  const postOrder = async () => {
    const response = await api.post("api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
  };

  return (
    <StyledPreview>
      <div class="small-container cart-page">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          {/* <tbody> */}
          {cart?.map((item) => (
            <tbody>
              <tr key={item.id}>
                <td>
                  <div class="cart-info">
                    <Image
                      width="80px"
                      height="80px"
                      src={`${item?.attributes?.images?.data[0]?.attributes?.url}`}
                      className="checkout_img"
                    />
                    <div className="item_content">
                      <p>{item?.attributes?.title}</p>
                      <small>{item?.attributes?.price}</small>
                      {/* <br> */}
                      <span className="iconHolder">
                        <IoCloseOutline />
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" value={item?.count} />
                </td>
                <td>&#x20A6; {subTotalPrice}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <div class="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td> &#x20A6; {totalPrice}</td>
            </tr>
          </table>
        </div>

        <aside>
          <StyledButton
            // fullWidth
            color="primary"
            variant="contained"
            sx={{
              //   backgroundColor: "red",
              boxShadow: "none",
              color: "white",
              borderRadius: 0,
              //   padding: "15px 40px",
            }}
            onClick={() =>
              handleFlutterPayment({
                callback: (response) => {
                  // console.log(response);
                  router.push("/");
                },
                onClose: () => {},
              })
            }
          >
            Pay with Flutterwave
          </StyledButton>
        </aside>
      </div>
    </StyledPreview>
  );
}

export default ProductPreview;

const StyledPreview = styled.section`
  width: 80%;
  margin: auto;
  height: 100vh;
  padding-top: 50px;
  .cart-page {
    margin: 80px auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .cart-info {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }
  th {
    text-align: left;
    padding: 5px;
    background-color: ${Color.primaryColor};
    color: #fff;
    font-weight: normal;
  }
  td {
    padding: 10px 5px;
  }
  td input {
    width: 40px;
    height: 30px;
    padding: 5px;
  }
  .iconHolder {
    color: #901;
    font-size: 12px;
    font-weight: 800;
  }
  .checkout_img {
    position: relative;
    margin: 10px;
  }

  .item_content {
    padding: 10px;
    font-size: 15px;
  }

  .total-price {
    display: flex;
    justify-content: flex-end;
    /* background-color: red; */
  }
  .total-price table {
    border-top: 3px solid ${Color.primaryColor};
    width: 100%;
    max-width: 400px;
  }
  td:last-child {
    text-align: right;
  }
  th:last-child {
    text-align: right;
  }
  /* Media query for menu */
  @media only screen and (max-width: 800px) {
    nav ul {
      position: absolute;
      top: 70px;
      left: 0;
      background: #333;
      width: 100%;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    nav ul li {
      display: block;
      margin-right: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    nav ul li a {
      color: white;
    }
    .menu-icon {
      display: block;
      cursor: pointer;
    }
  }

  /* Media query for 600 screen size */
  @media only screen and (max-width: 600px) {
    .row {
      text-align: center;
    }
    .col-2,
    .col-3,
    .col-4 {
      flex-basis: 100%;
    }
    .single-product .row {
      text-align: left;
    }
    .single-product .col-2 {
      padding: 20px 0;
    }
    .single-product h1 {
      font-size: 26px;
      line-height: 32px;
    }
    .cart-info p {
      display: none;
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 30px;
  height: 40px;
  background-color: #000;
  color: #fff;

  /* :hover{
      background-color: #fff;
    color: #000;
    } */
`;
