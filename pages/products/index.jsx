import React, { useState, useEffect } from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import mensWear from "../../assets/products_cover.gif";
import styled from "styled-components";
import ProductCarousel from "../../components/productsCard/ProductCard";
import api from "../../utils/api";
import Pagination from "../../components/pagination/Pagination";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import { useRouter } from "next/router";
import { filterByCategory } from "../../utils/helperFunctions";
import Loading from "../../components/loading/Loading";
import { BaseFontSize, Color } from "../../utils/color";
import { AiOutlineSearch } from "react-icons/ai";
import Product from "../../components/shopProduct/ShopProduct";

function ProductListing({ productResult }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [product, setProduct] = useState([]);
  const [state, setState] = useState("loading");

  const size = [
    {
      _id: "hdhJAJSDd",
      value: "XS",
    },
    {
      _id: "hdhAJJAd",
      value: "S",
    },
    {
      _id: "hdhd",
      value: "M",
    },
    {
      _id: "hdAAShd",
      value: "L",
    },
    {
      _id: "hdAShd",
      value: "XL",
    },
    {
      _id: "hdhSd",
      value: "XXL",
    },
    {
      _id: "hdAAJAAhd",
      value: "XXXL",
    },
  ];

  const router = useRouter();
  // const { data } = useSWR(
  //   `https://pellestore-new-strapi.onrender.com/products?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=1`,
  //   fetcher,
  //   {
  //     fallbackData: productResult,
  //   }
  // );

  // useEffect(() => {
  //   setState("loading");
  //   setProduct(filterByCategory(data?.data, router.query.catergory));
  //   setState("success");
  //   return () => {
  //     setProduct([]);
  //   };
  // }, [data, productResult, router.isReady]);

  //   const catergories = ["men", "women", "girls", "boys", "Accessories"];
  return (
    <>
      {/* {state === "loading" ? <Loading /> : null} */}
      {/* {state === "success" ? ( */}
      <>
        <CatergoriesHeader image={mensWear} text="ALL KITS" />
        <StyledProductListing>
          <main className="container">
            <header className="headerCont">
              <span>Showing all Football Shirts and Kit </span>
              <div className="searchBar">
                <div className="inputContainer">
                  <input
                    id="search"
                    type="search"
                    placeholder="search product"
                  />
                  <AiOutlineSearch id="icon" />
                </div>
                <button className="searchButton">search</button>
              </div>
            </header>
            <div className="filterCont">
              <main className="filter_bySize">
                <header>SIZES</header>
                <div class="checkbox-list">
                  {size.map((item) => (
                    <label>
                      <input
                        type="checkbox"
                        value={item.value}
                        class="styled-checkbox"
                      />
                      <div className="sizeText">{item.value}</div>
                    </label>
                  ))}
                </div>
              </main>
            </div>
            <div className="productCont">
              <Product />
              <Product />
              <Product />
              <Product />

              {/* <Product />  */}
              {/* <ProductCarousel/>
              <ProductCarousel/>
              <ProductCarousel/> */}
              {/* <Product /> */}
            </div>
          </main>
          {/* {product.length !== 0 ? (
            <main className="contentHolder">
              {product?.map((item) => (
                <>
                  <ProductCarousel data={item} page={"men"} />
                </>
              ))}
            </main>
          ) : (
            <div className="noProduct">No product yet</div>
          )} */}
          {/* <Pagination
            data={data?.meta}
            stateIndex={pageIndex}
            setstateIndex={setPageIndex}
          /> */}
        </StyledProductListing>{" "}
      </>
    </>
  );
}

export default ProductListing;

export const StyledProductListing = styled.section`
  width: 100%;
  height: auto;
  position: relative;

  .container {
    width: 90%;
    height: auto;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      "header header header header header header"
      "filter filter product product product product";
  }

  .headerCont {
    padding: 30px 0px 30px 0px;
    grid-area: header;
    width: 100%;
    margin: auto;
    display: flex;
    height: auto;
    justify-content: space-between;
    color: #000;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs} + 0.2vw);
    letter-spacing: -1px;
    font-family: "Syne";
    border-bottom: 1px solid ${Color.primaryColor};
  }

  .searchBar {
    width: 65%;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }

  .inputContainer {
    display: flex;
    width: 88%;
    align-items: center;
    justify-content: space-between;
    border: 2px solid red;
    padding: 0px 8px 0px 0px;
  }

  #search {
    width: 95%;
    font-weight: 400;
    padding: 5px;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .searchButton {
    background-color: ${Color.primaryColor};
    color: #fff;
    width: 10%;
    height: 100%;
  }

  #icon {
    color: #000;
    font-size: 20px;
  }

  .filterCont {
    /* padding: 10px; */
    grid-area: filter;
    height: 50vh;
    /* background-color: yellow; */
  }

  .filter_bySize {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_bySize header {
    font-size: calc(${BaseFontSize.bfs} + 0.5vw);
    font-weight: 700;
    padding: 10px;
    border-bottom: 1px solid ${Color.primaryColor};
  }

  .checkbox-list {
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    /* background-color: orange; */
  }

  .checkbox-list label {
    padding: 10px;
    width: 100%;
    align-items: center;
    display: flex;
  }

  .sizeText {
    font-weight: 700;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .checkbox-list {
    list-style: none;
    padding: 0;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  .styled-checkbox {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid red;
    border-radius: 4px;
    outline: none;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
  }

  .styled-checkbox:checked {
    background-color: ${Color.primaryColor};
    border-color: ${Color.primaryColor};
  }

  .productCont {
    padding: 10px;
    grid-area: product;
    height: 100vh;
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* background-color: purple; */
  }

  /* 
  .contentHolder {
    width: 80%;
    padding-top: 30px;
    margin: auto;
    position: relative;
    height: auto;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .noProduct {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 30px;
  } */

  @media (min-width: 360px) and (max-width: "481px") {
  }
`;

// export async function getStaticProps() {
//   const response = await api.get(
//     "https://pellestore-new-strapi.onrender.com/api/products?populate=*&pagination[page]=1&pagination[pageSize]=1"
//   );

//   let productResult = response.data;

//   // Return product data as props
//   return {
//     props: {
//       productResult,
//     },
//   };
// }
