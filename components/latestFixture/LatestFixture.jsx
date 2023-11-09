import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import Image from "next/image";
import kanoPillar from "../../assets/kanoPillar.png";
import rangers from "../../assets/main_logo.png";
function LatestFixture() {
  return (
    <StyledFixture>
      <div className="cover"></div>
      <section className="fixtureSection">
        <header className="fixtureHeader">Latest Fixture</header>
        <section>
          <div>16 Nov</div>
          <div>Awka</div>
        </section>
        <main className="fixtureContainer">
          <div className="home fixture">
            <div className=" name homeName">Kano Pillar</div>
            <div className="logoCont">
              <div className=" logo awayLogo">
                <Image src={kanoPillar} className="img" layout="fill" />
              </div>
            </div>
          </div>
          <aside className="vs">VS</aside>
          <div className="away fixture">
            <div className="logoCont">
              <div className=" logo awayLogo">
                <Image src={rangers} className="img" layout="fill" />
              </div>
            </div>
            <div className="name awayName">Rangers Intl</div>
          </div>
        </main>
      </section>
    </StyledFixture>
  );
}

export default LatestFixture;

const StyledFixture = styled.section`
  width: 100%;
  height: 80vh;
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
    width: 80%;
    height: 100%;
    margin: auto;
  }

  .fixtureHeader {
    font-size: calc(${BaseFontSize.bfs} + 1.1vw);
    font-weight: 700;
    color: #fff;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
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
    height: 30%;
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

  .vs {
    font-size: calc(${BaseFontSize.bfs} + 0.3vw);
    color: #fff;
    font-weight: 800;
  }
`;
