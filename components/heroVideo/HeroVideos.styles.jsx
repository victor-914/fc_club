import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
export const StyledHeroVideo = styled.section`
  width: 98%;
  margin: auto;
  height: auto;
  padding: 150px 0px 150px 0px;

  .newsHeader {
    font-size: calc(${BaseFontSize.bfs} + 0.8vw);
    width: 80%;
    height: auto;
    margin: auto;
    background-color: ${Color.primaryColor};
    margin-bottom: 40px;
    color: #fff;
    letter-spacing: 1.5px;
    padding: 8px;
  }

  .gridContainer {
    display: grid;
    width: 80%;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-template-areas:
      "top-box-1       top-box-1 top-box-2       top-box-2"
      "bottom-box-1 bottom-box-2 bottom-box-3 bottom-box-4";
  }

  .content {
    border-radius: 5px;
  }
  .grid-box-one {
    grid-area: top-box-1;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.7s;
    height: 45vh;
    position: relative;
    border-radius: 8px;
    display: flex;
  }

  .grid_img_cover_one {
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    z-index: 1;
    border-radius: 8px;
    box-shadow: inset 0px -100px 50px rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.5);
  }

  .imgContainer {
    position: relative;
    width: 50%;
    height: 100%;
    border-radius: 5px;
  }

  .grid-box-one-aside {
    width: 50%;
    height: 100%;
    cursor: pointer;
  }

  .grid-box-one-aside-header {
    font-weight: 700;
    font-size: 14px;
    padding: 8px;
    margin: auto;
    text-decoration: underline;
    cursor: pointer;
  }

  /* .redLine {
    /* margin-lef: 8px; 
    width: 50%;
    transition: width 0.4s;
    height: 2px;
    background-color: ${Color.primaryColor};
  } */

  /* .textContent {
    font-size: 16px;
    padding: 8px;
    height: 75%;
  } */

  .grid-box-one-aside-footer {
    /* position: absolute; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .timeCont {
    display: flex;
    width: 50%;
    justify-content: space-around;
    padding: 8px;
  }

  .shareButton {
    padding: 8px;
    font-size: 20px;
    color: #fff;
  }

  .shareButton_gridone {
    color: #fff;
    padding: 8px;
    font-size: 20px;
  }
  /* 
  #img {
    border-radius: 5px 0px 0px 5px;
    transition: transform 0.5s;
  } */

  .grid-box-one:hover {
    transition: box-shadow 0.4s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  /* .grid-box-one:hover .redLine {
    width: 100%;
    transition: width 0.4s;
    cursor: pointer;
  } */

  .grid-box-one:hover #grid_two_img {
    /* width: 100%; */
    border-radius: 8px;
    transition: transform 0.7s;
    /* cursor: pointer; */
    transform: scale(1.2);
  }

  .grid-box-two {
    grid-area: top-box-2;
    position: relative;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  }

  .grid-box-two:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .grid-box-two:hover #grid_two_img {
    transform: scale(1.2);
    transition: transform 0.7s;
    border-radius: 8px;
  }

  #grid_two_img {
    border-radius: 8px;
    transition: transform 0.7s;
  }

  .grid_img_cover {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .mediaCont {
    /* background-color: red; */
    z-index: 7;
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: auto;
    /* padding: 10px; */
  }

  .youTubeIcon {
    width: 80px;
    height: 80px;
    margin: 0;
  }

  /* .grid_two_header {
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    width: 99%;
    margin: auto;
    line-height: 1.3;
    padding-left: 13px;
    /* text-decoration: underline; 
  } */

  .grid_two_header {
    font-size: calc(${BaseFontSize.bfs} + 0.7vw);
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    text-decoration: underline;
  }

  .timeCont_gridtwo {
    color: #fff;
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-around;
  }

  .grid_two_aside {
    display: flex;
    justify-content: space-between;
  }

  .grid-box-three {
    grid-column: 1/3;
    height: 45vh;
    width: 381px;
    position: relative;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.7s;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  }

  .grid-box-three:hover {
    transition: box-shadow 0.7s;
  }

  .grid_three_imgCont {
    width: 100%;
    position: relative;
    height: 100%;
  }

  .grid_three_img {
    border-radius: 8px;
  }

  .grid_img_cover_three {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0px -100px 50px rgba(0, 0, 0, 0.7);
  }

  .mediaCont_three {
    z-index: 7;
    position: absolute;
    width: 100%;
    bottom: 10px;
    height: auto;
    /* padding: 10px; */
  }

  .youTubeIcon_three {
    width: 50px;
    height: 50px;
    margin: 0;
  }

  .grid_three_header {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    width: 100%;
    margin: auto;
    line-height: 1.3;
    padding-left: 13px;
    /* text-decoration: underline; */
  }

  .grid-box-one-aside-footer {
    /* position: absolute; */
    /* bottom: 5px; */
    z-index: 1;
    color: #fff;
  }

  .grid-box-four {
    grid-column: 3/5;
    width: 381px;
    position: relative;
  }

  .grid-box-five {
    grid-column: 5/7;
    position: relative;
  }

  .grid-box-six {
    grid-column: 7/9;
    position: relative;
  }

  .grid-box-four,
  .grid-box-six,
  .grid-box-five {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.7s;
    cursor: pointer;
  }

  .grid-box-three:hover,
  .grid-box-four:hover,
  .grid-box-six:hover,
  .grid-box-five:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transition: all 0.7s;
  }

  .grid-box-three:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.2);
  }

  .grid-box-four:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.2);
  }
  .grid-box-six:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.2);
  }
  .grid-box-five:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.2);
  }

  @media (min-width: 320px) and (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
