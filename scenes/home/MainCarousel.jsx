import { IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import One from "../../assets/ranger_giphy.gif";
import imagesix from "../../assets/giphy_rangers.gif";
import imageseven from "../../assets/rangers.gif";
import Image from "next/image";
import styled from "styled-components";

const MainCarousel = () => {
  const heroTextureImports = [
    One,
  
    imagesix,
    imageseven,
  ];
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      swipeable={false}
      autoPlay={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          {/* <NavigateBeforeIcon sx={{ fontSize: 40 }} /> */}
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          {/* <NavigateNextIcon sx={{ fontSize: 40 }} /> */}
        </IconButton>
      )}
    >
      {heroTextureImports.map((texture, index) => (
        <StyledCarousel key={`carousel-image-${index}`}>
          <Image
            src={texture.src}
            layout="fill"
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
            priority
          />
        </StyledCarousel>
      ))}
    </Carousel>
  );
};

export default MainCarousel;

const StyledCarousel = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 60vh;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 60vh;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
