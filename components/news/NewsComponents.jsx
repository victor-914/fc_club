import React from "react";
import img from "../../assets/heropic.jpg";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import vidImg from "../../assets/video_wallpaper.jpg";
import yti from "../../assets/you-tube-video-streaming-3d-icon.png";
import { StyledNewsGrid } from "./news.styles";
import newsImg1 from "../../assets/news_wallpaper1.png";
function NewsComponents() {
  return (
    <StyledNewsGrid>
      <header className="newsHeader">TODAY ON RANGERSINTL.COM</header>

      <main className="gridContainer">
        <div className="grid-box-one content">
          <main className="imgContainer">
            <Image src={img} id="img" layout="fill" />
          </main>

          <aside className="grid-box-one-aside">
            <div className="redLine"></div>
            <header className="grid-box-one-aside-header">
              RANGERS AMBUSH PILLARS FOR MAXIMUM POINTS
            </header>

            <main className="textContent">
              The lush turf of Awka City Stadium, Awka, Anambra state, will this
              weekend play host to one of the most...
            </main>

            <footer className="grid_three_footer">
              <div className="timeCont">
                <div className="time">5min</div>|
                <div className="catergory">news</div>
              </div>

              <div className="shareButton_gridone">
                <AiOutlineShareAlt />
              </div>
            </footer>
          </aside>
        </div>
        <div className="grid-box-two content">
          <div className="grid_img_cover"></div>
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
                <div className="time">5min</div>|
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
            <Image className="grid_three_img" layout="fill" src={newsImg1} />
          </main>
          <header className="grid_three_header">
            RANGERS EARN VALUABLE POINT IN ILORIN
          </header>
          <div className="grid_three_content">
            Rangers International F.C under coach Fidelis Ilechukwu continued
            its good start in the 2023/2024 NPFL...I
          </div>
          <footer className="grid_three_footer">
            <div className="timeCont">
              <div className="time">5min</div>|
              <div className="catergory">news</div>
            </div>

            <div className="shareButton_gridone">
              <AiOutlineShareAlt />
            </div>
          </footer>
        </div>
        <div className="grid-box-four content">
        <main className="grid_three_imgCont">
            <div className="grid_img_cover_three"></div>
            <Image className="grid_three_img" layout="fill" src={newsImg1} />
          </main>
          <header className="grid_three_header">
            RANGERS EARN VALUABLE POINT IN ILORIN
          </header>
          <div className="grid_three_content">
            Rangers International F.C under coach Fidelis Ilechukwu continued
            its good start in the 2023/2024 NPFL...I
          </div>
          <footer className="grid_three_footer">
            <div className="timeCont">
              <div className="time">5min</div>|
              <div className="catergory">news</div>
            </div>

            <div className="shareButton_gridone">
              <AiOutlineShareAlt />
            </div>
          </footer>
        </div>
        <div className="grid-box-five content">
          <main className="grid_three_imgCont">
            <div className="grid_img_cover_three"></div>
            <Image className="grid_three_img" layout="fill" src={newsImg1} />
          </main>
          <header className="grid_three_header">
            RANGERS EARN VALUABLE POINT IN ILORIN
          </header>
          <div className="grid_three_content">
            Rangers International F.C under coach Fidelis Ilechukwu continued
            its good start in the 2023/2024 NPFL...I
          </div>
          <footer className="grid_three_footer">
            <div className="timeCont">
              <div className="time">5min</div>|
              <div className="catergory">news</div>
            </div>

            <div className="shareButton_gridone">
              <AiOutlineShareAlt />
            </div>
        </footer>
        </div>
        <div className="grid-box-six content">
          <main className="grid_three_imgCont">
            <div className="grid_img_cover_three"></div>
            <Image className="grid_three_img" layout="fill" src={newsImg1} />
          </main>
          <header className="grid_three_header">
            RANGERS EARN VALUABLE POINT IN ILORIN
          </header>
          <div className="grid_three_content">
            Rangers International F.C under coach Fidelis Ilechukwu continued
            its good start in the 2023/2024 NPFL...I
          </div>
          <footer className="grid_three_footer">
            <div className="timeCont">
              <div className="time">5min</div>|
              <div className="catergory">news</div>
            </div>

            <div className="shareButton_gridone">
              <AiOutlineShareAlt />
            </div>
          </footer>
        </div>
      </main>
    </StyledNewsGrid>
  );
}

export default NewsComponents;
