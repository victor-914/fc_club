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

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <HomeCatergories />
      <NewsComponents />
      <HeroProductCarousel />
      <HeroVideos/>
      <SocialMedia />
      <Subscribe />
    </div>
  );
}

export default Home;
