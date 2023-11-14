import React from "react";
import styled from "styled-components";

function News() {
  return (
    <StyledNews>
      <main className="header_news"></main>
    </StyledNews>
  );
}

export default News;

const StyledNews = styled.section`
  .header_news {
    width: 100%;
    height: 40vh;
    background-image: url("/news_banner.png");
  }
`;
