import React from "react";
import styled from "styled-components";
import { Color } from "../../utils/color";
function NoContent() {
  return (
    <StyledNoC>
      <span className="loader"></span>
    </StyledNoC>
  );
}

export default NoContent;

const StyledNoC = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    position: relative;
    font-size: 48px;
    letter-spacing: 6px;
    font-weight: 800;
  }
  .loader:before {
    content: "No Content Yet";
    color: #000;
  }
  .loader:after {
    content: "";
    width: 50px;
    height: 50px;
    background-color: ${Color.primaryColor};
    background-image: radial-gradient(circle 2px, #fff4 100%, transparent 0),
      radial-gradient(circle 1px, #fff3 100%, transparent 0);
    background-position: 14px -4px, 12px -1px;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    top: -5px;
    right: 66px;
    transform-origin: center bottom;
    animation: fillBaloon 1s ease-in-out infinite alternate;
  }

  @keyframes fillBaloon {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(3);
    }
  }
`;
