import Card from "./Card";
import imgTwo from "../../assets/theclub.jpg";
import imgFour from "../../assets/Welcome-to-Ranger-Elmer.jpg";
// import imgFive from "../../assets/RangersKit1.png";
import imgSix from "../../assets/video_wallpaper.jpg";
import imgFive from "../../assets/news_wallpaper1.png";
import styled from "styled-components";

const HomeCatergories = () => {
  const cardData = [
    { title: "Fixtures", img: imgSix, page: "_fixtures" },
    // { title: "The Club", img: imgTwo, page: "#" },
    // { title: "Schedule", img: imgThree, page: "men" },
    { title: "News", img: imgFour, page: "_news" },
        { title: "Highlights", img: imgFive, page: "_highlights" },
    // { title: "Shop", img: imgFive, page: "products" },
    // { title: "Tickets", img: imgSix, page: "Accessories" },
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
  transform: translateY(-200px);
  position: relative;
  background-color: #fff;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.132), 0 1px 3px rgba(0, 0, 0, 0.087); */
  .cardContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
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
