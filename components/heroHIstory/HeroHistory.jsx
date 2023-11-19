import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
function HeroHistory() {
  return (
    <StyledHeroHistory>
      <main className="heroHistory">
        <div className="cover"></div>
        <div className="layoutContainer">
          <div className="textContainer">
            <header>OUR HISTORY</header>
            <p>
              “We want to spend the next 40 years building generations of
              football talents in Nigeria.”
            </p>

            <button className="learnMore">
              <span>Learn more</span>
            </button>
          </div>
        </div>
      </main>
    </StyledHeroHistory>
  );
}

export default HeroHistory;

const StyledHeroHistory = styled.section`
  width: 100%;

  .heroHistory {
    width: 100%;
    background-image: url("/theclub.jpg");
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
    position: relative;
    background-position: 40% 30%;
    box-shadow: inset 20em -3em 150px 20px rgba(0, 0, 0, 0.7);
  }

  .cover {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    position: absolute;
  }

  .layoutContainer {
    width: 82%;
    height: auto;
    position: relative;
    margin: auto;
    padding: 40px 0px 30px 0px;
  }

  .textContainer {
    font-size: 20px;
    color: #fff;
    width: 40%;
    height: auto;
  }

  .textContainer header {
    width: 100%;
    font-size: calc(${BaseFontSize.bfs} + 1.2vw);
    letter-spacing: -1px;
    font-weight: 700;
    text-align: start;
    margin: auto;
  }

  .textContainer p {
    font-size: calc(${BaseFontSize.bfs} + 1vw);
    font-weight: 300;
    letter-spacing: -0.3px;
    word-spacing: 2px;
    padding-bottom: 20px;
  }

  .learnMore {
    padding: 8px;
    background-color: ${Color.primaryColor};
    margin-top: 3%;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 1px;
    transition: all 0.2s;
    font-size: calc(${BaseFontSize.bfs} + 0.2vw);
  }

  .learnMore:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.2s;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    /* background-color: red; */

    .layoutContainer {
      /* background-color: green; */
    }

    .textContainer{
      /* background-color: papayawhip; */
      width: 80%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .textContainer{
      width: 80%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
