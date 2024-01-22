import React, { useState, useEffect } from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import mensWear from "../../assets/products_cover.gif";
import styled from "styled-components";
import api from "../../utils/api";
import Pagination from "../../components/pagination/Pagination";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import { useRouter } from "next/router";
import { BaseFontSize, Color } from "../../utils/color";
import { AiOutlineSearch } from "react-icons/ai";
import Product from "../../components/shopProduct/ShopProduct";

function ProductListing({ productResult: data }) {
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
  //   `${process.env.NEXT_PUBLIC_URL}/api/products?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=5`,
  //   fetcher,
  //   {
  //     fallbackData: productResult,
  //   }
  // );

  console.log(data, "product");

  useEffect(() => {
    // setState("loading");
    setProduct(data?.data);
    // setState("success");
    return () => {
      setProduct([]);
    };
  }, [
    data,
    // productResult,
    router.isReady,
  ]);

  return (
    <>
      <>
        <CatergoriesHeader image={mensWear} text="ALL KITS" />
        <StyledProductListing>
          <main className="container">
            <header className="headerCont">
              <span className="headerText">
                Showing all Football Shirts and Kit{" "}
              </span>
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

            {product?.length !== 0 ? (
              <main className="productCont">
                {product?.map((item) => (
                  <Product data={item} />
                ))}
              </main>
            ) : (
              <div className="noProduct">No product yet</div>
            )}
          </main>

          <Pagination
            data={data?.meta}
            stateIndex={pageIndex}
            setstateIndex={setPageIndex}
          />
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
      "product product product product product product";
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
    border: 2px solid ${Color.primaryColor};
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
    font-size: calc(${BaseFontSize.bfs} - 5px);
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

  label {
    display: block;
    margin-bottom: 10px;
  }

  .productCont {
    padding: 10px;
    grid-area: product;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 100px;
    gap: 40px;
  }

  @media (min-width: 320px) and (max-width: 481px) {
    .headerText {
      display: none;
    }

    .searchBar {
      width: 100%;
    }

    .inputContainer {
      width: 80%;
    }

    .searchButton {
      width: 20%;
    }
    .productCont {
      justify-content: center;

      align-items: center;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .headerText {
      display: none;
    }

    .searchBar {
      width: 100%;
    }

    .inputContainer {
      width: 80%;
    }

    .searchButton {
      width: 20%;
    }

    .productCont {
      justify-content: center;

      align-items: center;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

export async function getStaticProps() {
  const response = await api.get(
    "/api/products?populate=*&pagination[page]=1&pagination[pageSize]=6"
  );

  let productResult = response.data;
  console.log("🚀 ~ getStaticProps ~ response:", response)

  // Return product data as props
  return {
    props: {
      productResult,
    },
  };
}
