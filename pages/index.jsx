import Home from "../scenes/home/Home";
import api from "../utils/api";
export default function HomePage(props) {
  return (
    <>
      <Home data={props} />
    </>
  );
}

export async function fetchData(url) {
  const response = await api.get(url);
  return response.data;
}

async function getData() {
  const videos =
    "/api/videos?populate=*";

  const fixtures = "/api/fixture-countdowns?populate=*";
  const articles =
    "/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=6";
  const products =
    "/api/products?populate=*&pagination[page]=1&pagination[pageSize]=6";

  const [
    // videosData,
     fixturesData, articlesData,
      productsData
    ] =
    await Promise.all([
      // fetchData(videos),
      fetchData(fixtures),
      fetchData(articles),
      fetchData(products),
    ]);

  return {
    //  videosData,
     fixturesData, 
     articlesData,
      productsData 
    };
}

export async function getServerSideProps() {
  try {
    const {
      // videosData,
      // matchesData,
      fixturesData,
      articlesData,
      productsData,
    } = await getData();

    return {
      props: {
        // videosData,
        // matchesData,
        fixturesData,
        articlesData,
        productsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        error: "An error occurred while fetching data.",
      },
    };
  }
}
