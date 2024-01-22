import React, { useState } from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import Image from "next/image";
import router from "next/router";

const AccordionWrapper = styled.div`
  width: 100%;
  margin: 10px 0px 10px 0px;
  height: auto;
`;

const AccordionHeader = styled.div`
  color: ${Color.primaryColor};
  color: rgb(0, 0, 0);
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;

  span {
    font-size: calc(${BaseFontSize.bfs} + 0.3vw);
    font-weight: 700;
    letter-spacing: -1px;
    font-weight: "Lato" !important;
  }

  :hover {
    color: ${Color.primaryColor};
  }
`;

const AccordionContent = styled.div`
  display: ${(props) => (props.isExpanded ? "block" : "none")};
  transition: display 0.3s ease-in-out;
`;

const AccordionIcon = styled.div`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;

export const Accordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={toggleAccordion}>
        <span>{title}</span>
        <AccordionIcon isExpanded={isExpanded}>▲</AccordionIcon>
      </AccordionHeader>
      <AccordionContent isExpanded={isExpanded}>{children}</AccordionContent>
    </AccordionWrapper>
  );
};

export const NewsBox = (news) => {
  return (
    <StyledNewBox onClick={() => router.replace(`/News/${news?.data?.id}`)}>
      <main className="imgCont">
        <Image
          src={news?.data?.attributes?.images?.data?.[0]?.attributes?.url}
          blurDataURL="data:image/webp;base64,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"
          layout="fill"
          quality={100}
        />
      </main>

      <div className="headerCont">
        <header>{news?.data?.attributes?.title}</header>
      </div>
    </StyledNewBox>
  );
};

const StyledNewBox = styled.div`
  height: auto;
  margin: auto;
  width: 100%;
  margin: 20px 0px 20px 0px;
  display: flex;
  padding: 1px;
  border-radius: 3px;
  height: 120px;
  box-shadow: 1px 1px 3px 2px #19181842;
  background-color: #fff;

  .imgCont {
    width: 150px;
    position: relative;
  }

  .headerCont {
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    padding-left: 20px;
    align-items: center;
    letter-spacing: 0.3px;
    justify-content: center;
  }

  .headerCont header {
    font-weight: 700;
    text-transform: capitalize !important;
    font-size: calc(${BaseFontSize.bfs} - 0.01vw);
    text-align: justify;
    padding: 5px;
    letter-spacing: -0.6px !important;
    word-spacing: -0.3px !important;
  }

  .headerCont header:hover {
    text-decoration: underline;
    color: ${Color.primaryColor};
    cursor: pointer;
  }

  .headerCont aside {
    font-size: calc(${BaseFontSize.bfs} - 0.3vw);
    top: 2px;
    position: absolute;
    color: #333;
    left: 10px;
    text-transform: capitalize;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .imgCont {
      width: 30%;
      position: relative;
    }
    .headerCont {
      width: 70%;
      height: 100%;
      padding-left: 1%;
    }

    .headerCont header {
      font-weight: 700;
      text-transform: uppercase;
      font-size: calc(${BaseFontSize.bfs} - 0.9vw);
    }

    .headerCont aside {
      left: 1%;
      font-size: calc(${BaseFontSize.bfs} - 1.3vw);
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .imgCont {
      width: 30%;
      position: relative;
    }
    .headerCont {
      width: 70%;
      height: 100%;
      padding-left: 1%;
    }

    .headerCont header {
      font-weight: 500;
      text-transform: uppercase;
      font-size: calc(${BaseFontSize.bfs} - 0.9vw);
    }

    .headerCont aside {
      left: 1%;
      font-size: calc(${BaseFontSize.bfs} - 1.3vw);
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
