import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/router";
import { Color } from "../../utils/color";
import { usePaystackPayment } from "react-paystack";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { removeFromCart } from "../../state";
function ProductPreview() {
  const [totalPrice, setTotalPrice] = useState();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(0);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(cart.length);
  useEffect(() => {
    setTotalPrice(
      cart &&
        cart.reduce((total, item) => {
          return total + item?.count * item?.attributes?.price;
        }, 0)
    );
    const jwt = Cookies.get("user_jwt");
    setToken(jwt);
    return () => {};
  }, [cart]);

  const postItem = async (item, ref, gw_res) => {
    const url = "https://rangersadmin.rangersintl.com/api/product-orders";

    try {
      const response = await axios.post(
        url,
        {
          title: item?.attributes?.title,
          total_price: totalPrice,
          gateway_response: gw_res,
          gatewayRef_id: ref,
          gender: item?.selectedGender,
          quantity: quantity,
          size: item?.selectedSize,
          portal: "WEB",
          price: item?.attributes?.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleCall = () => {
    Promise.all(cart.map((item) => postItem(item)))
      .then((results) => {
        toast.success("purchase successful!") &&
          cart.map((item) => dispatch(removeFromCart({ id: item.id }))) &&
          router.push("/profile");
      })
      .catch((error) => {
        toast.error("purchase unsuccessful. Try again later") &&
          router.push("/profile");
      });
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: totalPrice * 100,
    publicKey: "pk_live_be3ce25eef07a69d80632b9fb7463a32d99f03de",
    channels: ["card"],
  };

  const onSuccess = (reference) => {
    console.log(reference);

    Promise.all(cart.map((item) => postItem(item)))
      .then((results) => {
        console.log("All items have been successfully posted:", results);
      })
      .catch((error) => {
        console.error("Error posting items:", error);
      });
  };

  const onClose = () => {
    console.log("closed");
  };

  const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          className="paystack-button"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Pay Now
        </button>
      </div>
    );
  };

  useEffect(() => {
    setPhone(user?.userInfo?.customer_phoneNumber);
    setEmail(user?.userInfo?.email);
    setName(user?.userInfo?.email);
    setAmount(totalPrice * 100);
    return () => {};
  });

  return (
    <StyledPreview>
      <div className="small-container cart-page">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {/* Add tbody here */}
            {cart?.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="cart-info">
                    <Image
                      width="80px"
                      height="80px"
                      src={`${item?.attributes?.images?.data[0]?.attributes?.url}`}
                      className="checkout_img"
                    />
                    <div className="item_content">
                      <p>{item?.attributes?.title}</p>
                      <small>{item?.attributes?.price}</small>
                      <br />
                      <small>{item?.selectedSize}</small>
                      <br />
                      <small>{item?.selectedGender}</small>
                      <br />
                      <span className="iconHolder">
                        <IoCloseOutline />
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" value={item?.count} />
                </td>
                <td>&#x20A6; {item?.attributes?.price * item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Total</td>
                <td> &#x20A6; {totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <button onClick={handleCall}>kkdjdjjdj</button> */}

        <aside className="pay_stackContainer">
          <PaystackHook />
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
  font-size: 18px;

  .pay_stackContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 30px 0px;
  }

  .paystack-button {
    background-color: ${Color.primaryColor};
    color: #fff;
    font-weight: 500;
    width: auto;
    border-radius: 5px;
    padding: 10px;
  }

  .paystack-button:hover {
    background-color: red;
  }

  .cart-page {
    margin: 80px auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-weight: 500;
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
    border: 1px solid #bdb5b53f;
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

// const postOrder = async (res) => {
//   // product order info
//   const requestBody = {
//     title: "product payment",
//     customer_name: "victor",
//     customer_email: "okaforv914@gmail.com",
//     total_price: 100000,
//     status: "pending",
//     customer_phoneNumber: "08144261104",
//     quantity: totalQuantity,
//     products: cart.map(({ id, attributes, count }) => ({
//       id,
//       title: attributes.title,
//       quantity: count,
//     })),
//   };
