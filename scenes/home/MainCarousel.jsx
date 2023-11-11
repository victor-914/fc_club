import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import One from "../../assets/ranger_giphy.gif";
// import imagetwo from "../../assets/ranger.gif";
// import imagefour from "../../assets/football_wallpaper.webp";
// import imagefive from "../../assets/rangerGif.webp";
import imagesix from "../../assets/giphy_rangers.gif";
import imageseven from "../../assets/rangers.gif";
import Image from "next/image";
import styled from "styled-components";

const MainCarousel = () => {
  const heroTextureImports = [
    One,
    // imagetwo,
    // imagefour,
    // imagefive,
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
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {heroTextureImports.map((texture, index) => (
        <StyledCarousel key={`carousel-image-${index}`}>
          <Image
            src={texture.src}
            //  height={"700px"}
            //  width={}
            layout="fill"
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              // objectPosition: `${ isNonMobile ?    "5px 0%" : "-700px 0%"}`,
              backgroundAttachment: "fixed",
            }}
          />
          {console.log(texture.src, "texture")}

          {/* <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          > */}

          {/* </Box> */}
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
`;
