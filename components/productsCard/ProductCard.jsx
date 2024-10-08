import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import One from "../../assets/RangersKit2.png";
import imagefour from "../../assets/RangersKit1.png";
import { Color } from "../../utils/color";
const ProductCarousel = ({ data }) => {
  const count = 1;
  const router = useRouter();
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const heroTextureImports = [
    One,
    imagefour,
  ];
  return (
    <StyledProductCarousel>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={false}
        swipeable={false}
        dynamicHeight={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "#000",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "#000",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {
          heroTextureImports.map((texture, index) => (
            <>
              <main className="imgCarouselCont" key={`carousel-image-${index}`}>
                <div className="overlay"></div>
                <Image
                  src={texture}
                  alt={`carousel-${index}`}
                  layout="fill"
                  className="img"
                />
              </main>
            </>
          ))
        }
      </Carousel>

      <div class="showcase-content">
        <h3>
          <p class="showcase-title">
            Ranger football club jersey
          </p>
        </h3>

        <div class="price-box">
          <p class="price">
            &#x20A6; 10,000
          </p>
        </div>
      </div>

      <section className="accesoriesCont">
        <button className="BuyNow">Buy Now</button>
      </section>
    </StyledProductCarousel>
  );
};

export default ProductCarousel;

const StyledProductCarousel = styled.section`
  width: 300px;
  height: auto;
  padding: 10px;
  position: relative;
  background-color: #fff;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-top: 4px solid ${Color.primaryColor};

  .img {
    border-radius: 5px;
    transition: all 0.4s;
  }

  .imgCarouselCont {
    width: 100%;
    height: 300px;
    position: relative;
  }

  .accesoriesCont {
    width: 100%;
    /* position: absolute; */
    /* z-index: 100; */
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 10px;
    padding-top: 10px;
    /* visibility: hidden; */
  }

  .iconCont {
    padding: 8px;
    border-radius: 5px;
    background-color: #00000091;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    cursor: pointer;

    z-index: 1000;
  }

  .iconCont:hover {
    background-color: #901d78;
  }

  .icon {
    font-size: 20px;
    color: #fff;
  }

  :hover .accesoriesCont {
    visibility: visible;
  }

  .price-box {
    display: flex;
    padding: 5px;
    font-size: 10;
    flex-direction: column;
    /* justify-content: space-around; */
  }

  .price {
    font-weight: 700;
    font-size: 16px;
    font-family: "Lato";
    /* padding: 5px; */
    color: ${Color.primaryColor};
  }
  .showcase-title {
    /* background-color: green; */
    font-weight: 600;
    text-transform: uppercase;
    /* color:${Color.primaryColor}; */
    font-size: 15px;
    font-family: "Lato";
    padding: 5px;
    transition: all 0.4s;
  }

  .BuyNow {
    width: 70%;
    background-color: ${Color.primaryColor};
    height: 45px;
    color: #fff;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    text-transform: uppercase;
    transition: all 0.4s;
    cursor: pointer;
  }

  :hover .BuyNow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transition: all 0.4s;
  }

  :hover {
    cursor: pointer;
  }

  :hover .showcase-title {
    color: ${Color.primaryColor};
    transition: all 0.4s;
  }

  :hover .img {
    transform: scale(1.1);
    transition: all 0.4s;
  }
`;
