import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Color } from "../../utils/color";

const Card = ({ title, imgSrc, page }) => {
  const router = useRouter();
  return (
    <StyledCard
      onClick={() =>
        router.push({
          pathname: `${page}`,
        })
      }
    >
      <div className="title">{title}</div>
      <main className="imageHolder">
        <Image src={imgSrc} layout="fill" className="image"  priority/>
      </main>
      <div className="buttonContainer">
        <button className="viewButton">SEE MORE</button>
      </div>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.section`
  width: 30%;
  height: 400px;
  cursor: pointer;
  padding: 20px;

  .image {
    object-fit: contain;
  }

  :hover {
    background-color: #f7f0f0;
  }

  :hover .viewButton {
    background-color: ${Color.primaryColor};
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.132), 0 1px 3px rgba(0, 0, 0, 0.087);
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px;
  }

  .buttonContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }

  .viewButton {
    /* line-height: 2; */
    width: 60%;
    margin: auto;
    text-align: center;
    font-weight: 600;
    padding-top: 5px;
    color: #3f3333c1;
    border: 2px solid #f7f0f0;
    padding: 8px;
  }

  .imageHolder {
    width: 80%;
    height: 70%;
    margin: auto;
    /* margin-top: 10px; */
    position: relative;
    object-fit: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    height: auto;
    .title {
      font-size: 16px;
      letter-spacing: 1px;
    }
    .image {
      object-fit: contain;
    }
    .imageHolder {
      width: 100%;
      height: 380px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    /* height: 300px; */
    /* background-color: green; */
    height: auto;
    .imageHolder {
      width: 100%;
      height: 380px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 55%;
  }
`;
