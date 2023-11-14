import React from "react";
import styled from "styled-components";
import { InstagramEmbed } from "react-social-media-embed";
import { LinkedInEmbed } from "react-social-media-embed";
import { TwitterEmbed } from "react-social-media-embed";
function SocialMedia() {
  const images = [
    // {
    //   _id: "23",
    //   img: "https://www.instagram.com/reel/CyvFwSZsVnM/?igshid=MzRlODBiNWFlZA==",
    // },
    // {
    //   _id: "298s3",
    //   img: "https://www.instagram.com/reel/Cy9B1yKrPm1/?igshid=MzRlODBiNWFlZA==",
    // },
    // {
    //   _id: "298sw3",
    //   img: "https://www.instagram.com/reel/CzMKUD9Myw7/?igshid=MzRlODBiNWFlZA==",
    // },
    {
      _id: "29ddd83",
      img: "https://www.instagram.com/reel/CyKQST-outv/?igshid=MzRlODBiNWFlZA==",
    },
  ];
  return (
    <StyledSocialMedia>
      {/* <header>Shop our Socials</header> */}
      <header>TAG & FOLLOW #RANGERSINTL ENUGU ON INSTAGRAM</header>

      <section>
        <main className="socialContainer">
          {images.map((item) => (
            <div className="socials">
              <InstagramEmbed
                placeholderDisabled
                url={item.img}
                width={"100%"}
                height={"auto"}
              />
            </div>
          ))}
        </main>
        <main className="subSocialContainer">
          <div className="sub_socials" id="linkedIn">
            <header className="sub_socialsHeader">
              TAG & FOLLOW #RANGERSINTL ENUGU ON LINKEDIN
            </header>
            <LinkedInEmbed
              placeholderDisabled
              url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7116457451750617089?compact=1"
              width={"100%"}
            />
          </div>
          <div className="sub_socials">
            <header className="sub_socialsHeader">
              TAG & FOLLOW #RANGERSINTL ENUGU ON TWITTER
            </header>
            <TwitterEmbed
              placeholderDisabled
              url="https://twitter.com/PixelAndBracket/sta/1356633038717923333"
              // width={325}
              width={"100%"}
            />
          </div>
        </main>
      </section>
    </StyledSocialMedia>
  );
}
export default SocialMedia;

const StyledSocialMedia = styled.section`
  width: 100%;
  padding: 20px 0px 20px 0px;
  margin: auto;
  height: auto;
  background-color: #fff;
  margin-bottom: 100px;

  header {
    width: 100%;
    text-align: center;
    font-size: 30px;
    padding: 10px;
    font-weight: 600;
    padding-bottom: 40px;
    /* font-family:"Syne" "Sans-serif"; */
  }

  .socialContainer {
    width: 80%;
    height: auto;
    margin: auto;
    display: flex;
    /* background-color: green; */
    justify-content: space-between;
    background-color: #fff;
  }

  .socials {
    width: 100%;
    /* border: 1px solid #901D78; */
    /* height: 30vh; */
    position: relative;
    cursor: pointer;
    height: auto;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .socials:hover .iconCont {
    visibility: visible;
  }

  .socialImg {
    object-fit: cover;
  }

  .subSocialContainer {
    width: 80%;
    margin: auto;
    padding: 30px 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sub_socials {
    width: 30%;
  }

  #linkedIn {
    width: 60%;
  }

  .sub_socialsHeader {
    font-size: 20px;
    padding: 8px;
  }

  .iconCont {
    background-color: transparent;
    width: 100%;
    z-index: 10;
    height: 100%;
    position: absolute;
    visibility: hidden;
  }

  .icon {
    width: 100%;
    height: 100%;
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    header {
      font-size: 20px;
    }

    .socialContainer {
      flex-direction: column;
      height: auto;
    }

    .socials {
      width: 100%;
      height: 30vh;
      position: relative;
      cursor: pointer;
      margin-bottom: 10px;
      height: 50%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
`;
