import MainCarousel from "./MainCarousel";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import HomeCatergories from "../../components/homeCatergories/HomeCatergories";
import HeroProductCarousel from "../../components/heroProductCarousel/HeroProductCarousel";
import Partners from "../../components/partners/Partners";
import LatestFixture from "../../components/latestFixture/LatestFixture";
import AuthComponent from "../../components/authComponent/AuthComponent";
function Home({ data }) {
  return (
    <div className="home">
      <MainCarousel />
      <HomeCatergories />
      <LatestFixture item={data.fixturesData} />
      <HeroProductCarousel item={data.productsData} />
      <SocialMedia />
      <AuthComponent />
      <Partners />
    </div>
  );
}

export default Home;
