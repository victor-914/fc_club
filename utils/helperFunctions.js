import api from "./api";

export function filterByCategory(data, catergory) {
  let filteredData = [];
  data.forEach((ele) => {
    if (ele.attributes.product_catergory === catergory) {
      filteredData.push(ele);
    }
  });
  return filteredData;
}

export function addCommasToNumber(number) {
  if (number === null || number === undefined) {
    return null;
  } else {
    const numStr = String(number);
    const parts = numStr.split(".");
    if (parts[0]) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return parts.join(".");
  }
}

export async function createOrder(products) {
  try {
    const response = await api.post("api/product-orders", products);
    return response;
  } catch (error) {
    console.error("Order creation failed:", error.message);
    throw new Error("Failed to create order");
  }
}

export async function updateOrderStatus(orderId, load) {
  try {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxNDQyMDQ2LCJleHAiOjE3MDQwMzQwNDZ9.MTewXe-kDqSZ2H8Kbhw9eC_VK9op5jBikSbfCWAJjl4";
    // Make API request to update order status
    console.log(orderId, "updated");
    const url = `api/product-orders/${orderId}`;
    console.log(url, "url");
    if (orderId === null || load === {}) return;
    const response = await api.put(url, load, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log(response, "response");
  } catch (error) {
    console.error("Order status update failed:", error.message);
    throw new Error("Failed to update order status");
  }
}

export const sendEmail = async () => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sales@rangers.com",
      pass: "your_email_password",
    },
  });

  // Email options
  const mailOptions = {
    from: "sales@rangers.com",
    to: user.userInfo.email,
    subject: "Order Confirmation",
    text: "Thank you for your order!",
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export async function signIn(username, password) {
  try {
    const res = await api.post("/api/auth/local", {
      identifier: username,
      password: password,
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
}
