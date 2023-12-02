// MaintenanceSign.js
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import store from "../../assets/tinified/store.jpeg";
const MaintenanceSignContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  position: fixed;
  z-index: 300;
  width: 100%;
  height: 100%;
  bottom: 0px;

  .loader {
    --s: 25px;
    --g: 5px;
    width: calc(2 * (1.353 * var(--s) + var(--g)));
    aspect-ratio: 1;
    background: linear-gradient(#ff1818 0 0) left/50% 100% no-repeat,
      conic-gradient(
        from -90deg at var(--s) calc(0.353 * var(--s)),
        #fff 135deg,
        #666 0 270deg,
        #aaa 0
      );
    background-blend-mode: multiply;
    --_m: linear-gradient(
        to bottom right,
        #0000 calc(0.25 * var(--s)),
        #000 0 calc(100% - calc(0.25 * var(--s)) - 1.414 * var(--g)),
        #0000 0
      ),
      conic-gradient(
        from -90deg at right var(--g) bottom var(--g),
        #000 90deg,
        #0000 0
      );
    -webkit-mask: var(--_m);
    mask: var(--_m);
    background-size: 50% 50%;
    -webkit-mask-size: 50% 50%;
    mask-size: 50% 50%;
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
    animation: l9 1.5s infinite;
  }
  @keyframes l9 {
    0%,
    12.5% {
      background-position: 0% 0%, 0 0;
    }
    12.6%,
    37.5% {
      background-position: 100% 0%, 0 0;
    }
    37.6%,
    62.5% {
      background-position: 100% 100%, 0 0;
    }
    62.6%,
    87.5% {
      background-position: 0% 100%, 0 0;
    }
    87.6%,
    100% {
      background-position: 0% 0%, 0 0;
    }
  }

  .imgCont {
    width: 50%;
    height: 80%;
    position: relative;
    margin: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .imgCont {
      width: 100%;
      height: 70%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .imgCont {
      width: 90%;
      height: 70%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .imgCont {
      width: 60%;
      height: 80%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    .imgCont {
      width: 60%;
      height: 80%;
    }
  }
`;

const MaintenanceSign = () => {
  return (
    <MaintenanceSignContainer>
      {/* <div class="lds-dual-ring"></div> */}
      <div class="loader"></div>

      {/* <PiWarningCircleFill /> */}
      <strong>Under upgrade</strong>
      <p>Sorry for the inconvenience. We'll be back better!</p>

      <div className="imgCont">
        <Image
          src={store}
          layout="fill"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          priority
        />
      </div>
    </MaintenanceSignContainer>
  );
};

export default MaintenanceSign;
