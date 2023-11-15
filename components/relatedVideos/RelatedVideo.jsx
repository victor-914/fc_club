import React from "react";
import HeroVideos from "../heroVideo/HeroVideos";
import styled from "styled-components";
function RelatedVideo() {
  return (
    <StyledRelated>
      <header>RelatedVideo</header>

      {/* <main className="container"> */}
        <HeroVideos title={"More Highlights"} />
      {/* </main> */}
    </StyledRelated>
  );
}

export default RelatedVideo;

const StyledRelated = styled.section`
  width: 100%;
  /* background-color: green; */
  /* height: 100vh; */
  /* padding: 200px; */

  .container {
    width: 90%;
    margin: auto;
    /* padding-top: 50px; */
    /* padding: 40px 40px 40px 40px; */
  }
`;
