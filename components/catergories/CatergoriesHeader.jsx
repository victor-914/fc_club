import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BaseFontSize } from "../../utils/color";
function CatergoriesHeader({ image, text }) {
  return (
    <StyledCatergories>
      <div className="cover"></div>
      <main className="imgCont">
        <Image src={image} layout="fill" />
        <div className="headerText">{text}</div>
      </main>
    </StyledCatergories>
  );
}

export default CatergoriesHeader;

const StyledCatergories = styled.section`
  width: 100%;
  height: 70vh;
  position: relative;

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    box-shadow: inset 5em -10em 100px 40px rgba(0, 0, 0, 0.3);
  }

  .imgCont {
    width: 100%;
    height: 100%;
  }

  .headerText {
    width: 100%;
    height: 50%;
    margin: auto;
    position: absolute;
    bottom: 0%;
    display: flex;
    justify-content: center;
    align-items: end;
    text-align: center;
    z-index: 1;
    font-size: calc(${BaseFontSize.bfs} + 3vw);
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
    text-shadow: 1px 1px #000;
    background-color: RED;
  }

  .latestProduct {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    margin: auto;
    font-weight: 400;
    color: #000;
    letter-spacing: 0.5px;
  }
`;
