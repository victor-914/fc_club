import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import Image from "next/image";
import kanoPillar from "../../assets/kanoPillar.png";
import rangers from "../../assets/main_logo.png";
import CountdownClock from "../countdown/CountDown";

function LatestMatch() {
  const targetDate = "2023-12-31T23:59:59";
  return (
    <StyledFixture>
      <div className="cover"></div>
      <section className="fixtureSection">
        <header className="fixtureHeader">Latest Match</header>
        {/* <section className="time">
          <main className="countdownContainer">
            <CountdownClock targetDate={targetDate} />
          </main>
          <div className="venue">Awka</div>
        </section> */}
        <main className="fixtureContainer">
          <div className="home fixture">
            <div className="name homeName">Kano Pillar</div>
            <div className="logoCont">
              <div className=" logo awayLogo">
                <Image src={kanoPillar} className="img" layout="fill" />
              </div>
              <div className="nums">1</div>
            </div>
          </div>
          <aside className="vs">-</aside>
          <div className="away fixture">
          <div className="nums">4</div>
            <div className="logoCont">
              <div className=" logo awayLogo">
                <Image src={rangers} className="img" layout="fill" />
              </div>
            </div>
            <div className="name awayName">Rangers Intl</div>
          </div>
        </main>

        <aside className="ticket">
          <button className="learnMore">Match Highlights</button>
        </aside>
      </section>
    </StyledFixture>
  );
}

export default LatestMatch;

const StyledFixture = styled.section`
  width: 100%;
  height: auto;
  background-image: url("/fixture_wp2.jpg");
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  position: relative;
  background-position: 40% 30%;
  animation: changeBackground 10s infinite;

  @keyframes changeBackground {
    0% {
      background-image: url("/fixture_wp4.jpg");
    }
    50% {
      background-image: url("/fixture_wp3.jpg");
    }
    100% {
      background-image: url("/fixture_wp1.jpg");
    }
  }

  .cover {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .fixtureSection {
    z-index: 1;
    position: relative;
    width: 90%;
    height: auto;
    margin: auto;
    padding: 20px;
  }

  .fixtureHeader {
    font-size: calc(${BaseFontSize.bfs} + 1.1vw);
    font-weight: 700;
    color: #fff;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    padding-top: 30px;
  }

  .fixtureContainer {
    width: 100%;
    margin: auto;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .fixture {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    /* padding: 10px; */
    /* background-color: ${Color.primaryColor}; */
    height: 200px;
  }

  .logoCont {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 80%;
    height: 80%;
    position: relative;
    align-items: center;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .name {
    width: 70%;
    height: 100%;
    color: #fff;
    font-size: 30px;
    /* text-align: end; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 2px 1px #000;
  }

  .awayName {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .homeName {
    justify-content: flex-end;
  }

  .vs {
    font-size: calc(${BaseFontSize.bfs} + 0.3vw);
    color: #fff;
    font-weight: 800;
  }

  .time {
    width: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #fff;
    /* background-color: red; */
    z-index: 1;
    position: relative;
  }

  .venue {
    font-size: 20px;
    width: 100%;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }

  .countdownContainer {
    width: 36%;
    margin: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .iconContainer {
    padding: 8px;
    font-size: 20px;
    font-weight: 700;
    /* background-color: red; */
  }

  .icon {
  }

  .learnMore {
    padding: 10px;
    background-color: ${Color.primaryColor};
    margin-top: 3%;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 1px;
    transition: all 0.2s;
    font-size: calc(${BaseFontSize.bfs} + 0.2vw);
    /* border-radius: 20px; */
    color: #fff;
  }

  .learnMore:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.2s;
  }

  .ticket {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .nums{
    font-size: calc(${BaseFontSize.bfs} + 1.5vw);
    color: #fff;
    font-weight: 800;
    font-family: "lato";
  }
`;
