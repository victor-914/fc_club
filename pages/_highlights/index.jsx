import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import RelatedVideo from "../../components/relatedVideos/RelatedVideo";
import api from "../../utils/api";

function HighLights({ videos }) {
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
            src={videos?.data?.[0]?.attributes?.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <main className="titleContainer">
          <main>{videos?.data?.[0]?.attributes.title}</main>
          <aside className="subTitle">
            {videos?.data?.[0]?.attributes.description}
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
    position: relative;
    margin: auto;
    display: flex;
    align-items: end;
    text-transform: uppercase;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    font-size: calc(${BaseFontSize.bfs} + 1.5vw);
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #11192fc1;
    box-shadow: inset 350px -40px 60px ${Color.secondaryColor};
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
    margin: auto;
  }

  .titleContainer {
    width: 75%;
    height: auto;
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
  @media (min-width: 320px) and (max-width: 480px) {
    .news_header {
      width: 100%;
    }

    .videoIframe {
      width: 95%;
      height: 50vh;
    }

    .titleContainer{
    width: 95%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .videoIframe {
      width: 95%;
      height: 50vh;
    }

    .titleContainer{
    width: 95%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

export async function getStaticProps() {
  try {
    const initialData = await api.get("/api/latest-videos");
    const videos = initialData.data;

    return {
      props: {
        videos,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
