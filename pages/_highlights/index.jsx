import React from "react";
import styled from "styled-components";
// import { BaseFontSize, Color } from "../../utils/color";
import HeroVideos from "../../components/heroVideo/HeroVideos";
import { BaseFontSize, Color } from "../../utils/color";
import RelatedVideo from "../../components/relatedVideos/RelatedVideo";

function HighLights() {
  return (
    <StyledHighLights>
      <main className="header_news">
        <div className="cover"></div>
        <header className="news_header">Latest Videos</header>
        <span className="line"></span>
      </main>
      <section className="videoContainer">
        <div className="videoIframe">
          <iframe
            width="100%"
            height="100%"
            controls="0"
            // modestbranding="1"
            src="https://www.youtube-nocookie.com/embed/4zUiWcX7wM0?si=5JVD-ujqRiaJJ88R&amp;start=19&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <main className="titleContainer">
          <main>
            Steph Catley and Lia Walti go head-to-head in Invisi Goals
          </main>
          <aside className="subTitle">
            Steph and Lia guess the invisible goalscorer from these classic
            Arsenal Women fixtures
          </aside>
        </main>
      </section>
      <RelatedVideo />
    </StyledHighLights>
  );
}

export default HighLights;

const StyledHighLights = styled.section`
  width: 100%;
  height: auto;

  .header_news {
    width: 100%;
    height: 40vh;
    background-image: url("/news_banner.png");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f3f3f3;
  }

  .news_header {
    width: 50%;
    height: 100%;
    /* background-color: green;  */
    position: relative;
    margin: auto;
    display: flex;
    align-items: end;
    text-transform: uppercase;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    font-size: calc(${BaseFontSize.bfs} + 1.5vw);
    color: #fff;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #11192fc1;
    box-shadow: inset 350px -40px 60px ${Color.secondaryColor};

    /* box-shadow: inset 30px -30px 500px 20px ${Color.secondaryColor}; */
  }

  .videoContainer {
    width: 100%;
    height: auto;
    background-color: ${Color.secondaryColor};
    padding-bottom: 50px;
  }

  .videoIframe {
    width: 75%;
    height: 80vh;
    /* background-color: green; */
    margin: auto;
    /* padding-top: 9px; */
  }

  .titleContainer {
    width: 75%;
    height: auto;
    /* padding: 20px; */
    margin: auto;
    padding-top: 15px;
  }

  .titleContainer main {
    font-size: calc(${BaseFontSize.bfs} + 0.4vw);
    font-weight: 600;
    color: #fff;
    line-height: 1.5;
  }
  .subTitle {
    font-size: calc(${BaseFontSize.bfs});
    font-weight: 300;
    color: #fff;
    padding-top: 10px;
  }
`;
