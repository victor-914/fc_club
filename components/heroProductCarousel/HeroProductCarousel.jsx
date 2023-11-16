import React from "react";
import ProductCarousel from "../productsCard/ProductCard";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import One from "../../assets/ranger_giphy.gif";
import imagefour from "../../assets/football_wallpaper.webp";
import imagesix from "../../assets/giphy_rangers.gif";
import imageseven from "../../assets/rangers.gif";
import styled from "styled-components";
import { Color } from "../../utils/color";
import Product from "../shopProduct/ShopProduct";

function HeroProductCarousel() {
  const heroTextureImports = [One, imagefour, imagesix, imageseven];
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <StyledHeroProductCarousel className="carouselContainer">
      <div className="carouselContainer">
        <header className="heroProductHeader">
          <div className="trending">Trending Now</div>
        </header>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          swipeable={false}
          autoPlay={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button onClick={onClickHandler} className="navButton_left">
              <NavigateBeforeIcon sx={{ fontSize: 40 }} />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button onClick={onClickHandler} className="navButton_right">
              <NavigateNextIcon sx={{ fontSize: 40 }} />
            </button>
          )}
        >
          {heroTextureImports.map((texture, index) => (
            <Box
              sx={{
                display: "flex",
                backgroundColor: "transparent",
                flexWrap: "wrap",
                height: "auto",
                width: "100%",
                padding: "10px",
                margin: "auto",
                gap: "30px",
                justifyContent: "space-around",
              }}
              key={`carousel-image-${index}`}
            >
              <Product />
              <Product /> <Product /> <Product />
            </Box>
          ))}

          {/* <button className="viewShop">Enter shop</button> */}
        </Carousel>
      </div>
    </StyledHeroProductCarousel>
  );
}

export default HeroProductCarousel;

const StyledHeroProductCarousel = styled.section`
  width: 100%;
  height: auto;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 100px;

  .carouselContainer {
    /* background-color: blue; */
    background-image: url("/news_wallpaper1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    padding: 40px 0px 40px 0px;
    width: 100%;
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
    /* border-radius: 5px; */
    /* margin: auto; */
  }

  .viewShop {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin: 5px;
    width: 20%;
    height: 40px;
    padding-left: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: text-decoration 0.04s;
  }

  .viewShop:hover {
    text-decoration: underline;
    cursor: pointer;
    transition: text-decoration 0.04s;
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
      /* position: absolute; */
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

    .navButton_left {
      position: absolute;
      top: 41%;
      left: 6%;
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
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
