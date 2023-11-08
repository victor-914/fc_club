import React from "react";
import img from "../../assets/heropic.jpg";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import vidImg from "../../assets/video_wallpaper.jpg";
import yti from "../../assets/you-tube-video-streaming-3d-icon.png";
import newsImg1 from "../../assets/news_wallpaper1.png";
import arunta from "../../assets/heropic.jpg";
import { StyledHeroVideo } from "./HeroVideos.styles";
import undf from "../../assets/undefeated.jpg";
import rngtl from "../../assets/Rangers.jpg"
import heading from "../../assets/heading.webp"
function HeroVideos() {
  return (
    <StyledHeroVideo>
      <header className="newsHeader">Latest Videos</header>
      <main className="gridContainer">
        <div className="grid-box-one content">
          <aside className="grid-box-one-aside">
            <div className="grid_img_cover_one"></div>
            <Image src={newsImg1} id="grid_two_img" layout="fill" />
            <main className="mediaCont">
              <div className="youTubeIcon">
                <Image src={yti} />
              </div>
              <header className="grid_two_header">
                RANGERS EARN VALUABLE POINT IN ILORIN
              </header>

              <aside className="grid_two_aside">
                <div className="timeCont_gridtwo">
                  <div className="time">5 min</div>|
                  <div className="catergory">Highlights</div>
                </div>
                <div className="shareButton">
                  <AiOutlineShareAlt />
                </div>
              </aside>
            </main>
          </aside>
        </div>
        <div className="grid-box-two content">
          <div className="grid_img_cover_one"></div>
          <Image src={vidImg} id="grid_two_img" layout="fill" />
          <main className="mediaCont">
            <div className="youTubeIcon">
              <Image src={yti} />
            </div>
            <header className="grid_two_header">
              RANGERS CHASE VITAL POINTS TO ILORIN
            </header>

            <aside className="grid_two_aside">
              <div className="timeCont_gridtwo">
                <div className="time">7 min</div>|
                <div className="catergory">Highlights</div>
              </div>
              <div className="shareButton">
                <AiOutlineShareAlt />
              </div>
            </aside>
          </main>
        </div>
        <div className="grid-box-three content">
          <main className="grid_three_imgCont">
            <div className="grid_img_cover_three"></div>
            <Image className="grid_three_img" layout="fill" src={undf} />
          </main>
          <main className="mediaCont_three">
            <div className="youTubeIcon_three">
              <Image src={yti} />
            </div>
            <header className="grid_three_header">
              Rangers remains undefeated
            </header>
            <footer className="grid-box-one-aside-footer">
              <div className="timeCont">
                <div className="time">5 min</div> |
                <div className="catergory"> Highlights</div>
              </div>

              <div className="shareButton_gridone">
                <AiOutlineShareAlt />
              </div>
            </footer>
          </main>
        </div>
        <div className="grid-box-four content">
          <main className="grid_three_imgCont">
            <div className="grid_img_cover_three"></div>
            <Image className="grid_three_img" layout="fill" src={arunta} />
          </main>
          <main className="mediaCont_three">
            <div className="youTubeIcon_three">
              <Image src={yti} />
            </div>
            <header className="grid_three_header">
              ARUNTA! man of the match
            </header>
            <footer className="grid-box-one-aside-footer">
              <div className="timeCont">
                <div className="time">6 min</div>|
                <div className="catergory">Highlights</div>
              </div>

              <div className="shareButton_gridone">
                <AiOutlineShareAlt />
              </div>
            </footer>
          </main>
        </div>
        <div className="grid-box-five content">
          <main className="grid_three_imgCont">
            <div className="grid_img_cover_three"></div>
            <Image className="grid_three_img" layout="fill" src={heading} />
          </main>
          <main className="mediaCont_three">
            <div className="youTubeIcon_three">
              <Image src={yti} />
            </div>
            <header className="grid_three_header">
              RANGERS EARN VALUABLE POINT IN ILORIN
            </header>
            <footer className="grid-box-one-aside-footer">
              <div className="timeCont">
                <div className="time">4 min</div> |
                <div className="catergory"> Highlights</div>
              </div>

              <div className="shareButton_gridone">
                <AiOutlineShareAlt />
              </div>
            </footer>
          </main>
        </div>
        <div className="grid-box-six content">
          <main className="grid_three_imgCont">
            <div className="grid_img_cover_three"></div>
            <Image className="grid_three_img" layout="fill" src={rngtl} />
          </main>
          <main className="mediaCont_three">
            <div className="youTubeIcon_three">
              <Image src={yti} />
            </div>
            <header className="grid_three_header">
              RANGERS vs kano pillar
            </header>
            <footer className="grid-box-one-aside-footer">
              <div className="timeCont">
                <div className="time">8 min</div> |
                <div className="catergory"> Highlights</div>
              </div>

              <div className="shareButton_gridone">
                <AiOutlineShareAlt />
              </div>
            </footer>
          </main>
        </div>
      </main>
    </StyledHeroVideo>
  );
}

export default HeroVideos;
