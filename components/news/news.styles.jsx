import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
export const StyledNewsGrid = styled.div`
  width: 100%;
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

  .grid-box-one {
    grid-area: top-box-1;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.7s;
    height: 45vh;
    position: relative;
    border-radius: 8px;
    display: flex;
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

  .redLine {
    width: 50%;
    transition: width 0.4s;
    height: 2px;
    background-color: ${Color.primaryColor};
  }

  .textContent {
    font-size: 16px;
    padding: 8px;
    height: 75%;
  }

  .grid-box-one-aside-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .timeCont {
    display: flex;
    width: 30%;
    justify-content: space-around;
    padding: 8px;
  }

  .shareButton {
    padding: 8px;
    font-size: 20px;
    color: #fff;
  }

  .shareButton_gridone {
    color: #000;
    padding: 8px;
    font-size: 20px;
  }

  #img {
    border-radius: 5px 0px 0px 5px;
    transition: transform 0.5s;
  }

  .grid-box-one:hover {
    transition: box-shadow 0.4s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .grid-box-one:hover .redLine {
    width: 100%;
    transition: width 0.4s;
    cursor: pointer;
  }

  .grid-box-one:hover #img {
    border-radius: 8px;
    transition: transform 0.7s;
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
    z-index: 7;
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: auto;
    padding: 10px;
  }

  .youTubeIcon {
    width: 50px;
    height: 50px;
  }

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
    grid-area: bottom-box-1;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.7s;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    height: 400px;
    grid-template-areas:
      "image"
      "image"
      "image"
      "image"
      "title"
      "content"
      "content"
      "footer";
  }

  .grid-box-three:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.7s;
  }

  .grid_three_imgCont {
    width: 100%;
    position: relative;
    grid-area: image;
  }

  .grid_three_img {
    border-radius: 8px 8px 0px 0px;
  }

  .grid_img_cover_three {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 8px 8px 0px 0px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .grid_three_header {
    font-size: 14px;
    padding: 5px;
    font-weight: 600;
    grid-area: title;
    text-decoration: underline;
  }

  .grid_three_content {
    font-size: 16px;
    padding: 8px;
    grid-area: content;
    text-align: justify;
    font-weight: 400;
  }

  .grid_three_footer {
    grid-area: footer;
  }

  .grid-box-five {
    grid-area: bottom-box-3;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.7s;
    position: relative;
    display: flex;
    flex-direction: column;
    grid-area: bottom-box-3;
  }

  .grid-box-four {
    grid-area: bottom-box-2;
  }

  .grid-box-six {
    grid-area: bottom-box-4;
  }

  .grid-box-four,
  .grid-box-six,
  .grid-box-five {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.7s;
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.7s;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    height: 400px;
    grid-template-areas:
      "image"
      "image"
      "image"
      "image"
      "title"
      "content"
      "content"
      "footer";
  }

  .grid-box-three:hover,
  .grid-box-four:hover,
  .grid-box-six:hover,
  .grid-box-five:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.7s;
  }

  .grid-box-three:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.3);
  }

  .grid-box-four:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.3);
  }
  .grid-box-six:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.3);
  }
  .grid-box-five:hover .grid_three_img {
    transition: transform 0.7s;
    transform: scale(1.3);
  }

  .grid_three_footer {
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
  }

  #two_footer {
    color: #fff;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: auto;
    padding: 50px 0px 50px 0px;

    .newsHeader {
      width: 95%;
    }

    .gridContainer {
      display: grid;
      width: 95%;
      grid-template-columns: 1fr;
      grid-column-gap: 30px;
      grid-template-areas:
        "top-box-1"
        "top-box-2"
        "bottom-box-1"
        "bottom-box-2"
        "bottom-box-3"
        "bottom-box-4";
    }

    .grid-box-one {
      grid-area: top-box-1;
      height: 400px;
      display: none;
    }
    .grid-box-two {
      grid-area: top-box-2;
      height: 400px;
    }
    .grid-box-three {
      grid-area: bottom-box-1;
      height: auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-four {
      grid-area: bottom-box-2;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-five {
      grid-area: bottom-box-3;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }

    .grid-box-six {
      grid-area: bottom-box-4;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: auto;
    padding: 50px 0px 50px 0px;

    .newsHeader {
      width: 95%;
    }

    .gridContainer {
      display: grid;
      width: 95%;

      grid-template-columns: 1fr;
      grid-column-gap: 30px;
      grid-template-areas:
        "top-box-1"
        "top-box-2"
        "bottom-box-1"
        "bottom-box-2"
        "bottom-box-3"
        "bottom-box-4";
    }

    .grid-box-one {
      grid-area: top-box-1;
      height: 400px;
      display: none;
    }
    .grid-box-two {
      grid-area: top-box-2;
      height: 400px;
    }
    .grid-box-three {
      grid-area: bottom-box-1;
      height: auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-four {
      grid-area: bottom-box-2;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-five {
      grid-area: bottom-box-3;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }

    .grid-box-six {
      grid-area: bottom-box-4;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: auto;

    .newsHeader {
      width: 95%;
    }

    .gridContainer {
      display: grid;
      width: 95%;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-template-areas:
        "top-box-1 top-box-1"
        "top-box-2 top-box-2"
        "bottom-box-1 bottom-box-2"
        "bottom-box-3 bottom-box-4";
    }

    .grid-box-one {
      display: none;
    }
    .grid-box-two {
      grid-area: top-box-2;
      height: 350px;
      width: 100%;
    }
    .grid-box-three {
      grid-area: bottom-box-1;
      height: auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-four {
      grid-area: bottom-box-2;
      display: grid;
      height: auto;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-five {
      grid-area: bottom-box-3;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }

    .grid-box-six {
      grid-area: bottom-box-4;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    width: auto;

    .newsHeader {
      width: 95%;
    }

    .gridContainer {
      display: grid;
      width: 95%;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-template-areas:
        "top-box-1 top-box-1"
        "top-box-2 top-box-2"
        "bottom-box-1 bottom-box-2"
        "bottom-box-3 bottom-box-4";
    }

    .grid-box-one {
      display: none;
    }
    .grid-box-two {
      grid-area: top-box-2;
      height: 380px;
      width: 100%;
    }
    .grid-box-three {
      grid-area: bottom-box-1;
      height: auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-four {
      grid-area: bottom-box-2;
      display: grid;
      height: auto;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
    .grid-box-five {
      grid-area: bottom-box-3;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }

    .grid-box-six {
      grid-area: bottom-box-4;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
      grid-template-areas:
        "image"
        "image"
        "image"
        "image"
        "title"
        "content"
        "content"
        "footer";
    }
  }
  @media (min-width: 1201px) {
    .newsHeader {
      width: 98%;
    }

    .gridContainer {
      width: 98%;
    }
  }
`;
