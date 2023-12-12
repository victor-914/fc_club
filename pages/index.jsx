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
    "/api/videos?populate=*&pagination[page]=1&pagination[pageSize]=6";
  const matches =
    "/api/matches?populate=*&pagination[page]=1&pagination[pageSize]=6";
  const fixtures =
    "/api/ticket-fixtures?populate=*&pagination[page]=1&pagination[pageSize]=6";
  const articles =
    "/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=6";
  const products =
    "/api/products?populate=*&pagination[page]=1&pagination[pageSize]=6";

  const [videosData, matchesData, fixturesData, articlesData, productsData] =
    await Promise.all([
      fetchData(videos),
      fetchData(matches),
      fetchData(fixtures),
      fetchData(articles),
      fetchData(products),
    ]);

  return { videosData, matchesData, fixturesData, articlesData, productsData };
}

export async function getServerSideProps(context) {
  try {
    const {
      videosData,
      matchesData,
      fixturesData,
      articlesData,
      productsData,
    } = await getData();

    return {
      props: {
        videosData,
        matchesData,
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
