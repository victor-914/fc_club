import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import Image from "next/image";
import logo from "../../assets/footer_logo-removebg-preview.png";
import afri from "../../assets/afriinvest.png";
import enugu from "../../assets/enugu_state-removebg-preview.png";
function Partners() {
  return (
    <StyledPartner>
      <main className="partnerContainer">
        <div className="partner">
          <header className="partnerHeader">Principal Club Partners</header>
          <div className="logoContainer">
            <div className="fc_logo">
              <Image src={afri} layout="fill" />
            </div>
            <div className="fc_logo">
              <Image src={enugu} layout="fill" />
            </div>
          </div>

          <div className="fc_logo">
            <Image src={logo} layout="fill" />
          </div>
        </div>
      </main>
    </StyledPartner>
  );
}

export default Partners;

const StyledPartner = styled.div`
  width: 100%;
  height: auto;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='23.07' height='40' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M17.62 0l-6.07 10.5m2.74 4.76L8.22 4.75m-5.48 0h12.13M.01 0h23.07M6.07 20L0 9.5m2.74-4.75l-6.07 10.5m-5.48 0H3.33m8.2 4.75L0 .02-11.54 20m40.68 0L23.07 9.5m2.74-4.75l-6.06 10.5m-5.49 0H26.4M34.6 20L23.08.02 11.53 20m-5.46 0L0 30.51m2.74 4.75l-6.07-10.5m-5.48 0H3.33m8.2-4.75L0 40l-11.54-19.98zM17.6 40l-6.06-10.5m2.74-4.76L8.2 35.25m-5.48 0h12.13M0 40h23.07L11.54 20.01m17.6 0l-6.07 10.5m2.74 4.75l-6.06-10.5m-5.49 0H26.4M11.53 20h23.08L23.07 40'  stroke-linecap='square' stroke-width='1' stroke='hsla(0, 0%, 0%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  .partnerContainer {
    width: 100%;
    height: 100%;
    background-color: rgb(217, 38, 40, 0.9);
    text-shadow: 1px 1px #000;
    padding-bottom: 100px;
  }

  .partnerHeader {
    font-size: calc(${BaseFontSize.bfs} + 1vw);
    font-weight: 800;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    padding-top: 40px;
    letter-spacing: -1px;
    color: #fff;
  }

  .logoContainer {
    width: 80%;
    margin: auto;
    padding:20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  

  .fc_logo {
    width: 200px;
    height: 150px;
    position: relative;
    margin: auto;
  }
`;
