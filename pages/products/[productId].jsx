import React from "react";
import ItemDetails from "../../scenes/itemDetails/ItemDetails";
import api from "../../utils/api";
import Breadcrumbs from "nextjs-breadcrumbs";
import { Color } from "../../utils/color";
function PerProduct({ productResult }) {
  return (
    <div>
      <Breadcrumbs
        omitRootLabel
        activeItemClassName="brActive"
        omitIndexList={[1]}
        containerStyle={{
          width: "90%",
          margin: "auto",
          borderBottom: `1px solid ${Color.primaryColor}`,
          height: "auto",
          paddingTop: "11vh",
        }}
        listStyle={{
          display: "flex",
          marginLeft: "5px",
          padding: "5px",

          textTransform: "capitalize",
          fontSize: "15px",
        }}
        inactiveItemStyle={{
          padding: "5px",
          color: `${Color.primaryColor}`,
          fontWeight: "700",
          color: "#000",
        }}
        transformLabel={(title) => "Back to products"}
      />

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
