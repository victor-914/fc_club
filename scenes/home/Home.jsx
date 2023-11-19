import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import HomePageBanner from "../../components/homePageBanner/HomePageBanner";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import HomeCatergories from "../../components/homeCatergories/HomeCatergories";
import CartMenu from "../global/CartMenu";
import NewsComponents from "../../components/news/NewsComponents";
import HeroProductCarousel from "../../components/heroProductCarousel/HeroProductCarousel";
import HeroVideos from "../../components/heroVideo/HeroVideos";
import HeroHistory from "../../components/heroHIstory/HeroHistory";
import Partners from "../../components/partners/Partners";
import LatestFixture from "../../components/latestFixture/LatestFixture";
import LatestMatch from "../../components/latestMatch/LatestMatch";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <HomeCatergories />
      <LatestFixture  hideHeader={false}/>
      <NewsComponents />
      <LatestMatch />
      <HeroProductCarousel />  
      {/* <HeroVideos /> */}
      <SocialMedia /> 
      <Partners />   
    </div>
  );
}

export default Home;
