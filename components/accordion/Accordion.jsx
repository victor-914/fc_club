import React, { useState } from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import demo from "../../assets/news_demo.jpg";
import Image from "next/image";
const AccordionWrapper = styled.div`
  width: 100%;
  margin: 10px 0px 10px 0px;
  height: auto;
`;

const AccordionHeader = styled.div`
  /* background-color: ${Color.primaryColor}; */
  /* background-color: #aqaqdb0b8; */
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
  /* overflow: scroll; */
  display: ${(props) => (props.isExpanded ? "block" : "none")};
  /* transition: max-height 0.3s ease-in-out; */
  transition: display 1s;
  /* justify-content: space-between; */
`;

const AccordionIcon = styled.div`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;

export const Accordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

export const NewsBox = () => {
  return (
    <StyledNewBox>
      <main className="imgCont">
        <Image src={demo} layout="fill" />
      </main>

      <div className="headerCont">
        <aside>Match report</aside>
        <header>November academy internationals: Who plays where</header>
      </div>
    </StyledNewBox>
  );
};

const StyledNewBox = styled.div`
  height: auto;
  /* background-color: green; */
  /* border: 2px solid red; */
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
    /* width: fit-content; */
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
    text-transform: uppercase;
    font-size: calc(${BaseFontSize.bfs} - 0.1vw);
  }

  .headerCont aside {
    font-size: calc(${BaseFontSize.bfs} - 0.3vw);
    top: 2px;
    /* font-weight: 700; */
    position: absolute;
    color: #333;
    left: 10px;
    text-transform: capitalize;
    /* font-weight: 800px; */
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
      font-weight: 500;
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
