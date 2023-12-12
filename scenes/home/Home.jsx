// import ShoppingList from "./ShoppingList";
// import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import HomeCatergories from "../../components/homeCatergories/HomeCatergories";
import NewsComponents from "../../components/news/NewsComponents";
import HeroProductCarousel from "../../components/heroProductCarousel/HeroProductCarousel";
import HeroVideos from "../../components/heroVideo/HeroVideos";
// import HeroHistory from "../../components/heroHIstory/HeroHistory";
import Partners from "../../components/partners/Partners";
import LatestFixture from "../../components/latestFixture/LatestFixture";
import LatestMatch from "../../components/latestMatch/LatestMatch";
function Home({ data }) {
  return (
    <div className="home">
      <MainCarousel />
      <HomeCatergories />
      <LatestFixture item={data.fixturesData} />
      <NewsComponents item={data.articlesData} video={data.videosData} />
      <LatestMatch item={data.matchesData} />
      {/* <HeroProductCarousel item={data.productsData} /> */}
      {/* <HeroVideos item={data.videosData} /> */}
      <SocialMedia />
      <Partners />
    </div>
  );
}

export default Home;
