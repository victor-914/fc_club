import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import logo from "../../assets/viola-removebg-preview.png";
import Image from "next/image";
import styled from "styled-components";
import { BaseFontSize } from "../../utils/color";
function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <StyledFootertext>
      <main>
        <section className="footerCont">
          <div>Privacy Policy</div>
          <div>Help & Support</div>
          <div>Jobs & Careers</div>
          <div>Team of Use</div>
        </section>
      </main>
    </StyledFootertext>
  );
}

export default Footer;

const StyledFootertext = styled.div`
  background-color: red;
  text-align: justify;
  width: 100%;
  border-top: 2px solid #fff;
  background-color: #000;

  main {
    width: 80%;
    justify-content: space-between;
    color: #fff;
    margin: auto;
    padding: 20px;
    font-size: ${BaseFontSize.bfs} + 5vw;
  }

  .footerCont {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footerCont div {
    font-size: calc(${BaseFontSize.bfs} + 0.1vw);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    main {
      width: 100%;
      justify-content: space-between;
      color: #fff;
      margin: auto;
      padding: 20px;
    }

    .footerCont {
      width: 100%;
    }

    .footerCont div {
      font-size: calc(${BaseFontSize.bfs} - 1vw);
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    main {
      width: 100%;
      justify-content: space-between;
      color: #fff;
      margin: auto;
      padding: 20px;
    }

    .footerCont {
      width: 100%;
    }

    .footerCont div {
      font-size: calc(${BaseFontSize.bfs} - 0.7vw);
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
