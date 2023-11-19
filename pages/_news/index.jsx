import React from "react";
import styled from "styled-components";
// import { BaseFontSize } from "../../utils/color";
import { Accordion, NewsBox } from "../../components/accordion/Accordion";
import { BaseFontSize } from "../../utils/color";
function News() {
  return (
    <StyledNews>
      <main className="header_news">
        <div className="cover"></div>
        <header className="news_header">News</header>
      </main>

      <section className="container">
        <main className="newsContainer">
          <div className="newsSubCont">
            <Accordion title="November 14, 2023">
              {[1].map(() => (
                <div>
                  <NewsBox /> <NewsBox /> <NewsBox /> <NewsBox />
                </div>
              ))}
            </Accordion>
            <Accordion title="November 12, 2023">
              <NewsBox /> <NewsBox /> <NewsBox /> <NewsBox />
            </Accordion>
          </div>
        </main>

        {/* <aside className="dontMiss"></aside> */}
      </section>

      {/* </main> */}
    </StyledNews>
  );
}

export default News;

const StyledNews = styled.section`
  height: auto;
  background-color: #f1f2f3;

  .header_news {
    width: 100%;
    height: 30vh;
    background-image: url("/news_banner.png");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f3f3f3;
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
    padding-top: 50px;
    display: flex;
    padding-bottom: 40px;
  }

  .newsContainer {
    width: 65%;
    height: auto;
    margin: auto;
    padding-top: 50px;
  }

  .dontMiss {
    width: 35%;
    /* background-color: purple; */
    height: 100vh;
  }

  .newsSubCont {
    height: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;

    .container{
      width:100%;
    }

    .newsContainer{
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;

    .container{
      width:100%;
    }

    .newsContainer{
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
