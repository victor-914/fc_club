import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
function Club() {
  return (
    <StyledClub>
      <main className="header_news">
        <div className="cover"></div>
        <header className="news_header">Club information</header>
      </main>
      <section className="container">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="info">hhfh</div>
        ))}
      </section>
    </StyledClub>
  );
}

export default Club;

const StyledClub = styled.section`
  width: 100%;
  height: auto;
  background-color: ${Color.secondaryColor};
  position: relative;

  .header_news {
    width: 100%;
    height: 30vh;
    background-image: url("/news_banner.png");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f3f3f3;
  }
  /* 
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0,0,0,0.7); 
    background-color: rgba(23, 32, 48, 0.7);
  } */

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #11192fc1;
    box-shadow: inset 350px -40px 60px ${Color.secondaryColor};

    /* box-shadow: inset 30px -30px 500px 20px ${Color.secondaryColor}; */
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
    width: 60%;
    height: auto;
    margin: auto;
    /* border: 2px solid red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    padding: 24px;
    /* margin: 20px; */
  }

  .info {
    width: 45%;
    height: 240px;
    /* background-color: red; */
    border-radius: 4.2px;
    background-image: url("/news_banner.png");
  }
`;
