import React, { useState } from "react";
import styled from "styled-components";
import { NewsBox } from "../../components/accordion/Accordion";
import { BaseFontSize } from "../../utils/color";
import Head from "next/head";
import api, { fetcher } from "../../utils/api";
import Pagination from "../../components/pagination/Pagination";
import useSWR from "swr";

function News({ news }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error ,isLoading} = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/articles?sort[0]=publishedAt:desc&populate[images][fields][0]=*&fields[0]=title&fields[1]=publishedAt&pagination[pageSize]=3&pagination[page]=${currentPage}`,
    fetcher,
    {
      fallbackData: news,
    }
  );

  //  if(isLoading) return <div>loading</div>

  return (
    <StyledNews>
      <Head>
        <title>News</title>
      </Head>
      <main className="header_news">
        <div className="cover"></div>
        <header className="news_header">News</header>
      </main>

      <section className="container">
        <main className="newsContainer">
          <div className="newsSubCont">
            {data?.data?.map((item) => (
              <NewsBox key={item?.id} data={item} />
            ))}
          </div>
        </main>
      </section>

      <Pagination
        data={data?.meta}
        stateIndex={currentPage}
        setstateIndex={setCurrentPage}
      />
    </StyledNews>
  );
}

export default News;

const StyledNews = styled.section`
  height: auto;
  background-color: #f1f2f3;

  .header_news {
    width: 100%;
    height: 30vh;
    background-image: url("/news_banner.png");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f3f3f3;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(23, 32, 48, 0.7);
  }

  .news_header {
    width: 50%;
    height: 100%;
    position: relative;
    margin: auto;
    display: flex;
    text-transform: uppercase;
    align-items: end;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    font-size: calc(${BaseFontSize.bfs} + 1.5vw);
    color: #fff;
  }

  .container {
    width: 80%;
    height: auto;
    margin: auto;
    padding-top: 50px;
    display: flex;
    padding-bottom: 40px;
  }

  .newsContainer {
    width: 65%;
    height: auto;
    margin: auto;
    padding-top: 50px;
  }

  .dontMiss {
    width: 35%;
    height: 100vh;
  }

  .newsSubCont {
    height: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;

    .container {
      width: 100%;
    }

    .newsContainer {
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;

    .container {
      width: 100%;
    }

    .newsContainer {
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

export async function getServerSideProps() {
  try {
    const initialData = await api.get(
      "/api/articles?sort[0]=publishedAt:desc&populate[images][fields][0]=*&fields[0]=title&fields[1]=publishedAt&pagination[pageSize]=3&pagination[page]=1"
    );
    const news = initialData.data;

    return {
      props: {
        news,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
