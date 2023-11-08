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
    <Box width="100%" backgroundColor="#000">
      <Box
        width="80%"
        display="flex"
        justifyContent="space-between"
        color="#fff"
        margin="auto"
        padding="20px"
        fontSize={`${BaseFontSize.bfs} + 5vw`}
      >
        <Typography mb="30px">Careers</Typography>
        <Typography mb="30px">Our Stores</Typography>
        <Typography mb="30px">Terms & Conditions</Typography>
        <Typography mb="30px">Privacy Policy</Typography>
      </Box>
    </Box>
  );
}

export default Footer;

const StyledFootertext = styled.div`
  background-color: red;
  text-align: justify;

  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
