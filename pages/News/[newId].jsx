import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import api from "../../utils/api";
import { BaseFontSize, Color } from "../../utils/color";
// import Breadcrumbs from "nextjs-breadcrumbs";
import l from "../../assets/afriinvest.png";
import parserHook from "../../hooks/parserHook";
function PerArticle({ data }) {
  const [url, setUrl] = useState(null);

  const content = parserHook(data?.data?.attributes?.content);
  useEffect(() => {
    setUrl(
      data?.data?.attributes?.images?.data[0]?.attributes?.formats?.large?.url
    );

    return () => {
      setUrl(null);
    };
  }, [data]);

  const imgLoader = () => {
    return url;
  };

  return (
    <>
      {/* <Breadcrumbs
        omitRootLabel
        activeItemClassName="brActive"
        omitIndexList={[1]}
        containerStyle={{
          width: "90%",
          margin: "auto",
          height: "auto",
          paddingTop: "11vh",
          position: "-webkit-sticky",
          // position: "sticky",
          // top: 0,
        }}
        listStyle={{
          display: "flex",
          marginLeft: "5px",
          padding: "5px",

          textTransform: "capitalize",
          fontSize: "15px",
        }}
        inactiveItemStyle={{
          padding: "5px",
          color: `${Color.primaryColor}`,
          fontWeight: "700",
          color: "#000",
        }}
        transformLabel={(title) => "go back - " + title}
      /> */}
      <Container>
        <DateComponent
          date={data?.data?.attributes?.createdAt}
          type="published"
        />

        <Title>{data?.data?.attributes?.title}</Title>

        <BannerImage>
          <Image src={l} loader={imgLoader} layout="fill" />
        </BannerImage>

        <Content
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Container>
    </>
  );
}

export default PerArticle;

export async function getStaticPaths() {
  const res = await api.get(`/api/articles?fields[0]=title`);
  const paths = res?.data?.data?.map((item) => ({
    params: { newId: item.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const initialData = await api.get(
    `/api/articles/${params?.newId}?populate[images][fields][0]=*&fields[0]=title&fields[1]=content&fields[2]=slug&fields[3]=createdAt`
  );
  const data = initialData.data;
  return {
    props: {
      data,
    },
  };
}

const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 5px;
  padding-top: 3%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 70%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

const BannerImage = styled.div`
  width: 100%;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 300px;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 300px;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

const Title = styled.h1`
  font-size: calc(${BaseFontSize.bfs} + 0.4vw);
  font-weight: 700;
  line-height: 1.2;
  text-align: justify;
  padding: 10px;
  padding-bottom: 10px;

  @media (max-width: 760px) {
  }
`;

const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

const DateContainer = styled.div`
  font-size: 0.8rem;
  color: #333;
  padding: 16px;
  font-weight: 700;
`;

export const DateComponent = ({ date, type }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <DateContainer>
      {type === "published" ? "Published" : "Updated"} on {formattedDate}
    </DateContainer>
  );
};
