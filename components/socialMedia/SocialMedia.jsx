import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InstagramEmbed } from "react-social-media-embed";
import { LinkedInEmbed } from "react-social-media-embed";
import { TwitterEmbed } from "react-social-media-embed";
import { FacebookEmbed } from "react-social-media-embed";
import { BaseFontSize } from "../../utils/color";
import api from "../../utils/api";
function SocialMedia() {
  const [insta, setInsta] = useState();
  const [twit, setTwit] = useState();
  const [link, setLinked] = useState();

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        let resp = await api.get("api/socials");
        resp = resp?.data?.data;
        setInsta(resp[0]?.attributes.url);
        setTwit(resp[1]?.attributes.url);
        setLinked(resp[2]?.attributes.url);
      } catch (error) {}
    };

    fetchSocial();

    return () => {};
  }, []);

  return (
    <StyledSocialMedia>
      {/* <header className="sub_socialsHeader">
        TAG & FOLLOW #RANGERSINTL ON INSTAGRAM
      </header> */}

      <section>
        {/* <main className="socialContainer">
            <div
             style={{
              height:"50vh !important"
             }}
              className="socials"
            >
              <InstagramEmbed
                height={"100%"}
                placeholderDisabled
                url={insta ? insta : "https://www.instagram.com/reel/C-SzJMNCDBX" }
              />
            </div>
        </main> */}
        <main className="subSocialContainer">
          <div className="sub_socials" id="linkedIn">
            <header className="sub_socialsHeader">
              TAG & FOLLOW #RANGERSINTL ON LINKEDIN
            </header>
            <LinkedInEmbed
              placeholderDisabled
              url={ link ? link : "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7116457451750617089?compact=1"}
              width={"100%"}
            />
          </div>
          <div className="sub_socials">
            <header className="sub_socialsHeader">
              TAG & FOLLOW #RANGERSINTL ON TWITTER
            </header>
            <TwitterEmbed
              placeholderDisabled
              url={
                twit
                  ? twit
                  : "https://x.com/Rangers_Intl/status/1802388177191067770"
              }
              width={"100%"}
              height={"auto"}
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
  background-color: rgb(255, 255, 255);
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
    justify-content: space-between;
    background-color: #fff;
  }

  .socials {
    width: 100%;
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
    height: 100%;
  }

  .sub_socialsHeader {
    font-size: calc(${BaseFontSize.bfs} + 1vw);
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
    width: 100%;
    padding: 0px;
    margin: auto;
    height: auto;
    background-color: #fff;
    /* margin-bottom: 1.00px; */

    header {
      font-size: 20px;
    }

    #linkedIn {
      width: 100%;
    }

    .socialContainer {
      flex-direction: column;
      height: auto;
      width: 95%;
    }

    .socials {
      width: 100%;
      height: 30vh;
      position: relative;
      cursor: pointer;
      margin-bottom: 10px;
      height: 50%;
    }

    .subSocialContainer {
      width: 95%;
      flex-direction: column;
    }

    .sub_socials {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    margin: auto;
    height: auto;
    background-color: #fff;
    /* margin-bottom: 1.00px; */

    header {
      font-size: 20px;
    }

    #linkedIn {
      width: 100%;
    }

    .socialContainer {
      flex-direction: column;
      height: auto;
      width: 95%;
    }

    .socials {
      width: 100%;
      height: 30vh;
      position: relative;
      cursor: pointer;
      margin-bottom: 10px;
      height: 50%;
    }

    .subSocialContainer {
      width: 95%;
      flex-direction: column;
    }

    .sub_socials {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
