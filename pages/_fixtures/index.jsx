import React, { useState } from "react";
import styled from "styled-components";
import { Accordion } from "../../components/accordion/Accordion";
import { BaseFontSize } from "../../utils/color";
import Ticket from "../../components/tickets/Ticket";
import LatestFixture from "../../components/latestFixture/LatestFixture";
import api, { fetcher } from "../../utils/api";
import useSWR from "swr";
import Pagination from "../../components/pagination/Pagination";
function MatchesFixture({ fixturesData, fixture_dateData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/group-by-dates?sort[0]=title:desc&populate[ticket_fixtures][fields][0]=*&populate[ticket_fixtures][populate][away_logo][fields][0]=url&pagination[pageSize]=2&pagination[page]=${currentPage}`,
    fetcher,
    {
      fallbackData: fixturesData,
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <StyledMatches>
      <main className="header_news">
        <div className="cover"></div>
        <header className="news_header">Matches</header>
      </main>
      <LatestFixture item={fixture_dateData} />
      <section className="container">
        <main className="newsContainer">
          <div className="newsSubCont">
            {data?.data?.map((item) => (
              <Accordion
                key={item?.attributes?.title}
                title={item?.attributes?.title}
              >
                {item?.attributes?.ticket_fixtures?.data?.map((data) => (
                  <div>
                    <Ticket key={data?.attributes?.title} item={data} />
                  </div>
                ))}
              </Accordion>
            ))}
          </div>
        </main>
      </section>
      <Pagination
        data={data.meta}
        stateIndex={currentPage}
        setstateIndex={setCurrentPage}
      />
    </StyledMatches>
  );
}

export default MatchesFixture;

const StyledMatches = styled.section`
  height: auto;
  background-color: #f1f2f3;
  height: auto;
  padding: 50px 0px 50px 0px;

  .header_news {
    width: 100%;
    height: 30vh;
    display: none;
    background-image: url("/news_banner.png");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f3f3f3;
    margin-bottom: 5px;
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
    height: auto;
    padding-top: 50px;
    display: flex;
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
    .container {
      width: 100%;
      padding-top: 20px;
    }
    .newsContainer {
      width: 90%;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .container {
      width: 100%;
      padding-top: 20px;
    }
    .newsContainer {
      width: 90%;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

export async function fetchData(url) {
  const response = await api.get(url);
  return response.data;
}

async function getData() {
  const fixtures =
    "/api/ticket-fixtures?populate=*&pagination[page]=1&pagination[pageSize]=1";
  const fixture_date =
    "/api/group-by-dates?sort[0]=title:desc&populate[ticket_fixtures][fields][0]=*&populate[ticket_fixtures][populate][away_logo][fields][0]=url&pagination[pageSize]=2&pagination[page]=1";

  const [fixture_dateData, fixturesData] = await Promise.all([
    fetchData(fixtures),
    fetchData(fixture_date),
  ]);

  return { fixturesData, fixture_dateData };
}

export async function getServerSideProps(context) {
  try {
    const { fixturesData, fixture_dateData } = await getData();

    return {
      props: {
        fixturesData,
        fixture_dateData,
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
