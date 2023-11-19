import React, { useState } from "react";
import styled from "styled-components";
// import { BaseFontSize } from "../../utils/color";
import { Accordion, NewsBox } from "../../components/accordion/Accordion";
import { BaseFontSize } from "../../utils/color";
import Ticket from "../../components/tickets/Ticket";
import LatestFixture from "../../components/latestFixture/LatestFixture";
function MatchesFixture() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  return (
    <StyledMatches>
      <main className="header_news">
        <div className="cover"></div>
        <header className="news_header">Matches</header>
      </main>

      <LatestFixture hideHeader={isHeaderOpen} />

      {/* <div className="fixtureWarning">Fixture are liable to change</div> */}

      <section className="container">
        <main className="newsContainer">
          <div className="newsSubCont">
            <Accordion title="November 2023">
              {[2].map(() => (
                <div>
                  <Ticket />
                  <Ticket /> <Ticket /> <Ticket />
                </div>
              ))}
            </Accordion>
            <Accordion title="December  2023">
              <Ticket />
              <Ticket />
              <Ticket />
            </Accordion>
          </div>
        </main>

        {/* <aside className="dontMiss"></aside> */}
      </section>

      {/* </main> */}
    </StyledMatches>
  );
}

export default MatchesFixture;

const StyledMatches = styled.section`
  height: auto;
  background-color: #f1f2f3;
  height: auto;
  padding: 50px 0px 50px 0px;
  /* padding-top: 50px; */

  .header_news {
    width: 100%;
    height: 30vh;
    display: none;
    background-image: url("/news_banner.png");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f3f3f3;
    margin-bottom: 5px;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0,0,0,0.7); */
    background-color: rgba(23, 32, 48, 0.7);
  }

  .news_header {
    width: 50%;
    height: 100%;
    /* background-color: green;  */
    position: relative;
    margin: auto;
    display: flex;
    text-transform: uppercase;
    align-items: end;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    font-size: calc(${BaseFontSize.bfs} + 1.5vw);
    color: #fff;
  }

  .container {
    width: 80%;
    height: auto;
    /* background-color: green; */
    margin: auto;
    height: auto;
    padding-top: 50px;
    display: flex;
  }

  .newsContainer {
    width: 65%;
    height: auto;
    margin: auto;
    padding-top: 50px;
  }

  /* .fixtureWarning{
    width: 100%;
    text-align: center;
  } */

  .dontMiss {
    width: 35%;
    height: 100vh;
  }

  .newsSubCont {
    height: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .container {
      width: 100%;
      padding-top: 20px;
    }
    .newsContainer {
      width: 90%;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .container {
      width: 100%;
      padding-top: 20px;
    }
    .newsContainer {
      width: 90%;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
