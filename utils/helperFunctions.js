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

export async function validateProducts(products) {
  try {
    // Make API request to validate product quantities
    let response = await api.get("/api/products");
    response = response?.data

    return response.data;
  } catch (error) {
    console.error("Product validation failed:", error.message);
    return { success: false };
  }
}

export function deductProductQuantities(products) {
  // Implement your deduction logic here
  // Update the product quantities in your database or wherever they are stored
  return products.map((product) => ({
    id: product.id,
    quantity: product.quantity, // Deducted quantity
  }));
}

export async function createOrder(products) {
  try {
    // Make API request to create an order and get order ID
    const response = await axios.post("YOUR_API_URL/create-order", {
      products,
    });
    return response.data.orderId;
  } catch (error) {
    console.error("Order creation failed:", error.message);
    throw new Error("Failed to create order");
  }
}

export async function initiatePayment(orderId, userId) {
  try {
    // Make API request to initiate payment
    const response = await axios.post("YOUR_API_URL/initiate-payment", {
      orderId,
      userId,
    });
    return response.data.status;
  } catch (error) {
    console.error("Payment initiation failed:", error.message);
    throw new Error("Failed to initiate payment");
  }
}

export async function handlePaymentStatus(
  status,
  deductedQuantities,
  orderId,
  res
) {
  switch (status) {
    case "pending":
      // Payment is pending, do nothing for now
      res.status(200).json({ success: true });
      break;
    case "cancelled":
    case "failed":
      // Payment failed or cancelled, add back deducted quantities
      addBackDeductedQuantities(deductedQuantities);
      // Optionally, you might want to update order status here
      // For simplicity, we are not making a separate API call to update order status
      res.status(500).json({ error: "Payment failed or cancelled" });
      break;
    case "successful":
      // Payment successful, update order status
      await updateOrderStatus(orderId);
      res.status(200).json({ success: true });
      break;
    default:
      res.status(500).json({ error: "Invalid payment status" });
  }
}

function addBackDeductedQuantities(deductedQuantities) {
  // Implement logic to add back deducted quantities
  // Update the product quantities in your database or wherever they are stored
  deductedQuantities.forEach((product) => {
    // Add back the deducted quantity
    // Update product quantity in your database
  });
}

export async function updateOrderStatus(orderId) {
  try {
    // Make API request to update order status
    const response = await axios.put(`YOUR_API_URL/update-order/${orderId}`);
    if (!response.data.success) {
      throw new Error("Failed to update order status");
    }
  } catch (error) {
    console.error("Order status update failed:", error.message);
    throw new Error("Failed to update order status");
  }
}

const sendEmail = async () => {
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
