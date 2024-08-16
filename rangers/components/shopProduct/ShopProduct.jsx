import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Color } from "../../utils/color";
import { addCommasToNumber } from "../../utils/helperFunctions";

const Product = ({ data }) => {
  const router = useRouter();

  const loadImg = () => {
    return data?.attributes?.images?.data?.[0]?.attributes?.url
  };
  return (
    <StyledProductCarousel>
      <div className="imgContainer">
        <Image
          src={data?.attributes?.images?.data?.[0]?.attributes?.url}
          layout="fill"
          loader={loadImg}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,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"
        />
      </div>

      <div class="showcase-content">
        <h3>
          <p class="showcase-title">{data?.attributes?.title}</p>
        </h3>

        <div class="price-box">
          <p class="price">
            &#x20A6;
            {addCommasToNumber(data?.attributes?.price)}
          </p>
        </div>
      </div>

      <section className="accesoriesCont">
        <button onClick={() => router.replace(`/products/${data?.id}`)} className="BuyNow">
          Buy Now
        </button>
      </section>
    </StyledProductCarousel>
  );
};

export default Product;

const StyledProductCarousel = styled.section`
  width: 300px;
  height: auto;
  position: relative;
  background-color: #fff;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-top: 4px solid ${Color.primaryColor};
  padding: 10px;
  margin-top: 20px;

  .imgContainer {
    width: 100%;
    height: 300px;
    position: relative;
  }

  .img {
    border-radius: 5px;
    transition: all 0.4s;
  }

  .imgCarouselCont {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .accesoriesCont {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 10px;
    padding-top: 10px;
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
  }

  .price {
    font-weight: 700;
    font-size: 16px;
    font-family: "Lato";
    text-align: center;
    color: ${Color.primaryColor};
  }
  .showcase-title {
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
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
