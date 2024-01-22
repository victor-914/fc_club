import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import RelatedVideo from "../../components/relatedVideos/RelatedVideo";
import api from "../../utils/api";
function PerVideoView(video) {
  return (
    <StyledPerView>
      <section className="videoContainer">
        <div className="videoIframe">
          <iframe
            width="100%"
            height="100%"
            controls="0"
            src={video.video.data.attributes.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <main className="titleContainer">
          <main>{video.video.data.attributes.title}</main>
          <aside className="subTitle">
            {video.video.data.attributes.description}
          </aside>
        </main>
      </section>

      <RelatedVideo />
    </StyledPerView>
  );
}

const StyledPerView = styled.section`
  .videoContainer {
    width: 100%;
    height: auto;
    padding-top: 12.2vh;
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
      height: 50vh !important;
    }
    
    .titleContainer{
    width: 95%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .videoIframe {
      width: 95%;
      height: 50vh !important ;
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

export default PerVideoView;

export async function getServerSideProps(context) {
  try {
    const initialData = await api.get(
      `api/videos/${context.params.vidId}`
    );
    const video = initialData.data;
    return {
      props: { video },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
