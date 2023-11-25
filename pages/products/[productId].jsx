import React from "react";
import ItemDetails from "../../scenes/itemDetails/ItemDetails";
import api from "../../utils/api";

function PerProduct({ productResult }) {
  console.log(productResult, "@itemdetail");
  return (
    <div>
      <ItemDetails data={productResult} />
    </div>
  );
}

export default PerProduct;

export async function getStaticProps({ params }) {
  const response = await api(
    `/api/products/${params.productId.toString()}/?populate=*&pagination[page]=1&pagination[pageSize]=5`
  );

  let productResult = response.data;
  // Return product data as props
  return {
    props: {
      productResult,
    },
  };
}

export async function getStaticPaths() {
  const response = await api(
    `/api/products?populate=*&pagination[page]=1&pagination[pageSize]=5`
  );

  const products = response?.data?.data;

  const paths = products?.map((item) => ({
    params: { productId: item.id.toString() },
  }));

  return { paths, fallback: true };
}
