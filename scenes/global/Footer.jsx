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
      <Box
        width="80%"
        display="flex"
        justifyContent="space-between"
        color="#fff"
        margin="auto"
        padding="20px"
        fontSize={`${BaseFontSize.bfs} + 5vw`}
      >
        <section className="footerCont">
          <div>Privacy Policy</div>
          <div>Help & Support</div>
          <div>Jobs & Careers</div>
          <div>Team of Use</div>
        </section>
      </Box>
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
  }
`;
