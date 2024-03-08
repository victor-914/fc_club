import React, { useState } from "react";
import styled from "styled-components";
import { Accordion } from "../../components/accordion/Accordion";
import { BaseFontSize } from "../../utils/color";
import Ticket from "../../components/tickets/Ticket";
import LatestFixture from "../../components/latestFixture/LatestFixture";
import api, { fetcher } from "../../utils/api";
import useSWR from "swr";
import Pagination from "../../components/pagination/Pagination";

export const groupFixturesByMonth = (fixtures, months) => {
  const fixturesByMonth = {};

  months.forEach((month) => {
    fixturesByMonth[month.name] = { fixtures: [], _id: month.id };
  });

  fixtures?.forEach((fixture) => {
    const fixtureMonth = new Date(fixture.attributes.date).toLocaleString(
      "en-US",
      { month: "long" }
    );
    fixturesByMonth[fixtureMonth].fixtures.push(fixture);
  });

  for (const month in fixturesByMonth) {
    if (fixturesByMonth[month].fixtures.length === 0) {
      delete fixturesByMonth[month];
    }
  }

  const sortedMonths = Object.keys(fixturesByMonth).sort((a, b) => {
    const aDate = new Date(a);
    const bDate = new Date(b);
    return aDate + bDate;
  });

  const sortedFixtures = sortedMonths.map((month) => ({
    month,
    fixtures: fixturesByMonth[month].fixtures,
    id: fixturesByMonth[month]._id,
  }));

  const sorted = sortedFixtures.sort((a, b) => {
    if (a.id < b.id) return 1;
    if (a.month > b.month) return -1;
    return 0;
  });

  return sorted;
};

export const months = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

function MatchesFixture({ fixturesData, fixture_dateData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/ticket-fixtures?sort[0]=date:desc&fields[0]=symbol&fields[1]=venue&fields[2]=date&fields[3]=home_title&fields[4]=away_title&fields[5]=isTicketAvailable&pagination[pageSize]=3&pagination[page]=${currentPage}`,
    fetcher,
    {
      fallbackData: fixture_dateData,
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const fixturesByMonth = groupFixturesByMonth(data?.data, months);

  return (
    <StyledMatches>
      <main className="header_news">
        <div className="cover"></div>
        <header className="news_header">Matches</header>
      </main>
      <LatestFixture item={fixturesData} />
      <section className="container">
        <main className="newsContainer">
          <div className="newsSubCont">
            {fixturesByMonth?.map((item) => (
              <Accordion key={item.month} title={item.month}>
                {item?.fixtures?.map((data, indx) => (
                  <div>
                    <Ticket key={indx} item={data} />
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
  const fixtures = "/api/fixture-countdowns?populate=*";
  const fixture_date = "/api/ticket-fixtures?populate=*";

  const [fixture_dateData, fixturesData] = await Promise.all([
    fetchData(fixture_date),
    fetchData(fixtures),
  ]);

  return { fixture_dateData, fixturesData };
}

export async function getStaticProps(context) {
  try {
    const { fixture_dateData, fixturesData } = await getData();

    return {
      props: {
        fixture_dateData,
        fixturesData,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        error: "An error occurred while fetching data.",
      },
    };
  }
}
