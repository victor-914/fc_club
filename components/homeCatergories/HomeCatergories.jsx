import Card from "./Card";
import imgFour from "../../assets/news.webp";
import imgSix from "../../assets/fixture.jpeg";
import imgFive from "../../assets/news_wallpaper1.png";
import styled from "styled-components";

const HomeCatergories = () => {
  const cardData = [
    { title: "Fixtures", img: imgSix, page: "_fixtures" },
    { title: "News", img: imgFour, page: "News" },
    { title: "Highlights", img: imgFive, page: "_highlights" },
  ];

  return (
    <StyledCat>
      <main className="cardContainer">
        {cardData.map((card, index) => (
          <Card
            key={card.page}
            title={card.title}
            imgSrc={card.img}
            page={card.page}
          />
        ))}
      </main>
    </StyledCat>
  );
};

export default HomeCatergories;

const StyledCat = styled.section`
  width: 80%;
  height: auto;
  margin: auto;
  position: relative;
  .cardContainer {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    transform: translateY(-200px);
    background-color: #fff;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 94%;
    height: auto;

    .cardContainer {
      flex-direction: column;
      height: auto;
      gap: 10px;
      padding-bottom: 10px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    .cardContainer {
      flex-direction: column;
      height: auto;
      gap: 10px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
    .cardContainer {
      flex-direction: column;
      height: auto;
      gap: 10px;
    }
  }
`;
