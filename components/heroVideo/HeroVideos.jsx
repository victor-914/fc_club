import img from "../../assets/heropic.jpg";
import vidImg from "../../assets/video_wallpaper.jpg";
import newsImg1 from "../../assets/news_wallpaper1.png";
import arunta from "../../assets/heropic.jpg";
import { StyledHeroVideo } from "./HeroVideos.styles";
import undf from "../../assets/undefeated.jpg";
import rngtl from "../../assets/Rangers.jpg";
import heading from "../../assets/heading.webp";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import yti from "../../assets/you-tube-video-streaming-3d-icon.png";
import parserHook from "../../hooks/parserHook";
import { StyledNewsGrid } from "../news/news.styles";

function HeroVideos({ title }) {
  // const content = parserHook(item?.data?.[0]?.attributes?.content);
  // const content1 = parserHook(item?.data?.[1]?.attributes?.content);
  // const content2 = parserHook(item?.data?.[2]?.attributes?.content);
  // const content3 = parserHook(item?.data?.[3]?.attributes?.content);
  // const content4 = parserHook(item?.data?.[4]?.attributes?.content);

  // const [desc, setDesc] = useState();
  // const [desc1, setDesc1] = useState();
  // const [desc2, setDesc2] = useState();
  // const [desc3, setDesc3] = useState();
  // const [desc4, setDesc4] = useState();
  // useEffect(() => {
  //   const result = getFirst20Words(content);
  //   const result1 = getFirst20Words(content1);
  //   const result2 = getFirst20Words(content2);
  //   const result3 = getFirst20Words(content3);
  //   const result4 = getFirst20Words(content4);
  //   setDesc(`${result}.......`);
  //   setDesc1(`${result1}.......`);
  //   setDesc2(`${result2}.......`);
  //   setDesc3(`${result3}.......`);
  //   setDesc4(`${result4}.......`);
  //   return () => {};
  // }, []);

  // function getFirst20Words(conten) {
  //   var words = conten?.split(" ");
  //   var first20Words = words?.slice(0, 20)?.join(" ");
  //   return first20Words;
  // }

  return (
  //   <StyledNewsGrid>
  //     <header className="newsHeader">TODAY ON RANGERSINTL.COM</header>

  //     <main className="gridContainer">
  //       <div className="grid-box-one content">
  //         <main className="imgContainer">
  //           <Image
  //             placeholder="blur"
  //             blurDataURL="data:image/webp;base64,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"
  //             className="img"
  //             src={
  //               rngtl
  //               // item?.data?.[0]?.attributes?.images?.data?.[0]?.attributes?.url
  //             }
  //             layout="fill"
  //             quality={100}
  //           />
  //         </main>

  //         <aside className="grid-box-one-aside">
  //           <div className="redLine"></div>
  //           <header className="grid-box-one-aside-header">
  //             {/* {item?.data?.[0]?.attributes?.title} */}
  //           </header>

  //           {/* <main
  //             className="textContent"
  //             dangerouslySetInnerHTML={{
  //               __html: desc,
  //             }}
  //           ></main> */}

  //           <footer className="grid_three_footer">
  //             <div className="timeCont">
  //               <div className="time">4 min</div>|
  //               <div className="catergory">news</div>
  //             </div>

  //             <div className="shareButton_gridone">
  //               <AiOutlineShareAlt />
  //             </div>
  //           </footer>
  //         </aside>
  //       </div>
  //       <div className="grid-box-two content">
  //         <div className="grid_img_cover"></div>
  //         <Image
  //           placeholder="blur"
  //           blurDataURL="data:image/webp;base64,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"
  //           className="img"
  //           src={
  //             rngtl
  //             // video?.data?.[0]?.attributes?.image?.data?.attributes?.url
  //           }
  //           layout="fill"
  //           quality={100}
  //         />
  //         <main className="mediaCont">
  //           <div className="youTubeIcon">
  //             <Image src={yti} />
  //           </div>
  //           <header className="grid_two_header">
  //             {/* {video?.data?.[0]?.attributes?.title} */}
  //           </header>

  //           <footer id="two_footer" className="grid_three_footer">
  //             <div className="timeCont">
  //               <div className="time">5 min</div>|
  //               <div className="catergory">news</div>
  //             </div>

  //             <div id="two_footer" className="shareButton_gridone">
  //               <AiOutlineShareAlt />
  //             </div>
  //           </footer>
  //         </main>
  //       </div>
  //       <div className="grid-box-three content">
  //         <main className="grid_three_imgCont">
  //           <div className="grid_img_cover_three"></div>
  //           {/* <Image
  //             placeholder="blur"
  //             blurDataURL="data:image/webp;base64,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"
  //             className="img"
  //             src={
  //               item?.data?.[1]?.attributes?.images?.data?.[0]?.attributes?.url
  //             }
  //             layout="fill"
  //             quality={100}
  //           /> */}
  //         </main>
  //         <header className="grid_three_header">
  //           {/* {item?.data?.[1]?.attributes?.title} */}
  //         </header>
  //         {/* <div
  //           className="grid_three_content"
  //           dangerouslySetInnerHTML={{
  //             __html: desc1,
  //           }}
  //         ></div> */}
  //         <footer className="grid_three_footer">
  //           <div className="timeCont">
  //             <div className="time">3 min</div>|
  //             <div className="catergory">news</div>
  //           </div>

  //           <div className="shareButton_gridone">
  //             <AiOutlineShareAlt />
  //           </div>
  //         </footer>
  //       </div>
  //       <div className="grid-box-four content">
  //         <main className="grid_three_imgCont">
  //           <div className="grid_img_cover_three"></div>
  //           {/* <Image
  //             placeholder="blur"
  //             blurDataURL="data:image/webp;base64,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"
  //             className="img"
  //             src={
  //               item?.data?.[2]?.attributes?.images?.data?.[0]?.attributes?.url
  //             }
  //             layout="fill"
  //             quality={100}
  //           /> */}
  //         </main>
  //         <header className="grid_three_header">
  //           {/* {item?.data?.[2]?.attributes?.title} */}
  //         </header>
  //         {/* <div
  //           className="grid_three_content"
  //           dangerouslySetInnerHTML={{
  //             __html: desc2,
  //           }}
  //         ></div> */}
  //         <footer className="grid_three_footer">
  //           <div className="timeCont">
  //             <div className="time">1 min</div>|
  //             <div className="catergory">news</div>
  //           </div>

  //           <div className="shareButton_gridone">
  //             <AiOutlineShareAlt />
  //           </div>
  //         </footer>
  //       </div>
  //       <div className="grid-box-five content">
  //         <main className="grid_three_imgCont">
  //           <div className="grid_img_cover_three"></div>
  //           {/* <Image
  //             placeholder="blur"
  //             blurDataURL="data:image/webp;base64,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"
  //             className="img"
  //             src={
  //               item?.data?.[3]?.attributes?.images?.data?.[0]?.attributes?.url
  //             }
  //             layout="fill"
  //             quality={100}
  //           /> */}
  //         </main>
  //         <header className="grid_three_header">
  //           {/* {item?.data?.[3]?.attributes?.title} */}
  //         </header>
  //         {/* <div
  //           className="grid_three_content"
  //           dangerouslySetInnerHTML={{
  //             __html: desc3,
  //           }}
  //         ></div> */}
  //         <footer className="grid_three_footer">
  //           <div className="timeCont">
  //             <div className="time">5 min</div>|
  //             <div className="catergory">news</div>
  //           </div>

  //           <div className="shareButton_gridone">
  //             <AiOutlineShareAlt />
  //           </div>
  //         </footer>
  //       </div>
  //       <div className="grid-box-six content">
  //         <main className="grid_three_imgCont">
  //           <div className="grid_img_cover_three"></div>
  //           {/* <Image
  //             placeholder="blur"
  //             blurDataURL="data:image/webp;base64,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"
  //             className="grid_three_img"
  //             src={
  //               item?.data?.[4]?.attributes?.images?.data?.[0]?.attributes?.url
  //             }
  //             layout="fill"
  //             quality={100}
  //           /> */}
  //         </main>
  //         <header className="grid_three_header">
  //           {/* {item?.data?.[4]?.attributes?.title} */}
  //         </header>
  //         {/* <div
  //           dangerouslySetInnerHTML={{
  //             __html: desc4,
  //           }}
  //           className="grid_three_content"
  //         ></div> */}
  //         <main className="mediaCont_three">
  //           <div className="youTubeIcon_three">
  //             <Image src={yti} />
  //           </div>
  //           <header className="grid_three_header">
  //             RANGERS vs kano pillar
  //           </header>
  //           <footer className="grid-box-one-aside-footer">
  //             <div className="timeCont">
  //               <div className="time">8 min</div> |
  //               <div className="catergory"> Highlights</div>
  //             </div>
  //             <div className="shareButton_gridone">
  //               <AiOutlineShareAlt />
  //             </div>
  //           </footer>
  //         </main>
  //       </div>
  //     </main>
  //   </StyledNewsGrid>
  // );

  // .mediaCont_three {
  //   z-index: 7;
  //   position: absolute;
  //   width: 100%;
  //   bottom: 10px;
  //   height: auto;
  //   /* padding: 10px; */
  // }

  // .youTubeIcon_three {
  //   width: 50px;
  //   height: 50px;
  //   margin: 0;
  // }

  // .grid_three_header {
  //   font-size: 20px;
  //   font-weight: 700;
  //   text-transform: uppercase;
  //   color: #fff;
  //   width: 100%;
  //   margin: auto;
  //   line-height: 1.3;
  //   padding-left: 13px;
  //   /* text-decoration: underline; */
  // }

  // .grid-box-one-aside-footer {
  //   /* position: absolute; */
  //   /* bottom: 5px; */
  //   z-index: 1;
  //   color: #fff;
  // }
// ___________________________________

    <StyledHeroVideo>
      <header className="newsHeader">{title}</header>
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
  )
}

export default HeroVideos;
