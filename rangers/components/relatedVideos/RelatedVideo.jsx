import React, { useState } from "react";
import styled from "styled-components";
import VideoCard from "../videoComp/VideoCard";
import Pagination from "../pagination/Pagination";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import { BaseFontSize, Color } from "../../utils/color";

function RelatedVideo() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/videos?sort[0]=title:asc&populate[image][fields][0]=url&fields[0]=*&pagination[pageSize]=4&pagination[page]=${currentPage}`,
    fetcher
  );

  return (
    <StyledRelated>
      <header className="related_header">More Highlights</header>
      <main className="container">
        {data?.data?.map((item) => (
          <VideoCard key={item.id} data={item} />
        ))}
      </main>
      <Pagination
        data={data?.meta}
        stateIndex={currentPage}
        setstateIndex={setCurrentPage}
      />
    </StyledRelated>
  );
}

export default RelatedVideo;

const StyledRelated = styled.section`
  width: 100%;
  height: auto;
  background-color: #f3f3f3;

  .related_header {
    width: 100%;
    padding: 20px;
    position: relative;
    margin: auto;
    display: flex;
    align-items: end;
    text-transform: uppercase;
    justify-content: center;
    font-weight: 800;
    font-size: calc(${BaseFontSize.bfs} + 1vw);
    color: ${Color.secondaryColor};
  }

  .container {
    width: 90%;
    margin: auto;
    display: flex;
    padding-top: 20px;
    position: relative;
    flex-wrap: wrap;
    height: auto;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
  }
`;
