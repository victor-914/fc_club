import React from "react";
import styled from "styled-components";
import { Color } from "../../utils/color";
import Product from "../shopProduct/ShopProduct";
import { useRouter } from "next/router";

function HeroProductCarousel({ item }) {
   const router = useRouter()
  return (
    <StyledHeroProductCarousel className="carouselContainer">
      <div className="carouselContainer">
        <header className="heroProductHeader">
          <div className="trending">Trending Now</div>
        </header>

        <div className="productContainer">
          {item?.data.map((texture, index) => (
            <Product data={texture} />
          ))}
        </div>
      </div>
      <button
       onClick={() => router.push("/products")}
      className="viewShop">Enter shop</button>
    </StyledHeroProductCarousel>
  );
}

export default HeroProductCarousel;

const StyledHeroProductCarousel = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 100px;

  .carouselContainer {
    background-image: url("/news_wallpaper1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    padding: 40px 0px 40px 0px;
    width: 100%;
  }

  .productContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
  }

  .heroProductHeader {
    background-color: ${Color.primaryColor};
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 8px;
    color: #fff;
    font-weight: 700;
  }

  .viewShop {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin: 5px;
    width: 20%;
    height: 40px;
    background-color: ${Color.primaryColor};
    text-align: center;
    transition: text-decoration 0.04s;
  }

  .viewShop:hover {
    text-decoration: underline;
    cursor: pointer;
    transition: text-decoration 0.04s;
    position: relative;
    height: 40px;
  }

  .trending {
    font-size: 25px;
    font-weight: 700;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  .navButton_left {
    position: absolute;
    top: 41%;
    right: 6%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.6) !important;
    z-index: 10;
    border-radius: 8px 0px 0px 8px;
    transition: background-color 0.4s;
  }

  .navButton_left:hover {
    background-color: ${Color.primaryColor} !important;
    transition: background-color 0.4s;
  }

  .navButton_right {
    position: absolute;
    top: 41%;
    right: 2%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 30px; */
    width: 80px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.6) !important;
    z-index: 10;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.4s;
  }

  .navButton_right:hover {
    background-color: ${Color.primaryColor} !important;
    transition: background-color 0.4s;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .heroProductHeader {
      width: 100%;
    }

    .navButton_right {
      right: 4px;
    }

    .navButton_left {
      left: 4px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .heroProductHeader {
      width: 100%;
    }
    .navButton_right {
      right: 4px;
    }

    .navButton_left {
      left: 4px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
