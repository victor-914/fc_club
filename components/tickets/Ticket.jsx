import React from "react";
import styled from "styled-components";
import { BaseFontSize, Color } from "../../utils/color";
import { RiArrowRightSLine } from "react-icons/ri";
import { useRouter } from "next/router";

function formatDateStringToLocal(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString();
  return formattedDate;
}

function Ticket({ item }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.replace(`/_fixtures/${id}`);
  };

  return (
    <StyledTicket>
      <main className="container">
        <div className="againstWhom">
          <main className="enemyTeam">
            <div className="enemyTeamName">{`${item?.attributes?.home_title}   Vs  ${item?.attributes?.away_title} `}</div>

            <div className="scoreTable">
              <div>
                {item?.attributes?.home_score && item?.attributes?.home_score}{" "}
              </div>
              <div>
                {item?.attributes?.away_score && item?.attributes?.away_score}
              </div>
            </div>
          </main>
        </div>

        <div className="venue">
          <aside id="homeOrAwayResponsive" className="homeOrAway">
            <button>{item?.attributes?.symbol}</button>
          </aside>
          <main className="venuInfo">
            <div className="dateAndTime">
              {formatDateStringToLocal(item?.attributes?.date)}
            </div>
            <div className="Location">{item?.attributes?.venue}</div>
          </main>
        </div>
      </main>

      <footer className="ticketFooter">
        <main className="ticketContainer">
          <button onClick={() => handleClick(item?.id)} className="learnMore">
            News & Video <RiArrowRightSLine />
          </button>

          {item?.attributes?.isTicketAvailable && (
            <button className="learnMore">
              <a
                href="https://www.seniorbarman.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Buy Ticket <RiArrowRightSLine />
              </a>
            </button>
          )}
        </main>
      </footer>
    </StyledTicket>
  );
}

export default Ticket;

export const StyledTicket = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-top: 4px solid ${Color.primaryColor};
  margin-top: 30px;
  box-shadow: 0px 0px 4px 2px rgba(236, 229, 229, 0.2),
    -1px -0px 3px 2px rgba(233, 227, 227, 0.2);
  padding: 0px 30px 0px 30px;

  .container {
    width: 100% !important;
    height: auto;
  }

  .againstWhom {
    width: 50%;
  }

  #homeIndicator_responsive {
    display: none;
  }

  .enemyTeam {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }

  .scoreTable {
    font-weight: 700;
    font-size: 18px;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .enemyTeamName {
    font-weight: 700;
    color: #333;
    font-size: calc(${BaseFontSize.bfs} + 0.2vw);
    padding: 8px;
  }

  .venue {
    width: 50%;
    display: flex;
    align-items: center;
  }

  .homeOrAway {
  }

  .homeOrAway button {
    border: 1px solid #312e2e41;
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs} + 0.4vw);
    width: 50px;
    height: 50px;
    color: ${Color.primaryColor};
    border-radius: 4px;
  }

  .venuInfo {
    padding-left: 30px;
  }

  .dateAndTime {
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs});
    line-height: 1.8;
  }

  .Location {
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs} - 0.1vw);
    line-height: 1.8;
    color: rgba(53, 49, 49, 0.9);
  }

  .catergory {
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs} - 0.2vw);
    line-height: 1.8;
    color: rgba(53, 49, 49, 0.8);
  }

  .ticketFooter {
    width: 100%;
    height: auto;
    margin-top: 10px;
    padding: 10px 0px 10px 0px;
    border-top: 1px solid #312e2e41;
  }

  .ticketContainer {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  .learnMore {
    padding: 10px;
    margin-top: 3%;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 1px;
    transition: all 0.2s;
    font-size: calc(${BaseFontSize.bfs} - 0.2vw);
    color: #000;
    display: flex;
    align-items: center;
    margin-right: 4px;
  }

  .learnMore:hover {
    background-color: #f3f3f3;
    color: #000;
    transition: all 0.2s;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 5px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column-reverse;
      width: 100%;
    }

    .againstWhom {
      width: 95%;
    }

    .venue {
      width: 100%;
    }

    .venuInfo {
      padding-bottom: 15px;
      padding-left: 0px;
      text-align: center;
      width: 100%;
    }

    .homeOrAway {
    }

    #homeOrAwayResponsive {
      display: none;
    }

    .dateAndTime {
      font-size: calc(${BaseFontSize.bfs} - 0.4vw);
      line-height: 1.2;
    }

    .Location {
      font-size: calc(${BaseFontSize.bfs} - 0.6vw);
      line-height: 1.2;
    }

    .catergory {
      font-size: calc(${BaseFontSize.bfs} - 0.8vw);
      line-height: 1.2;
    }

    .ticketContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    #homeIndicator_responsive {
      display: block;
    }

    .learnMore {
      padding: 10px;
      margin-top: 3%;
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 1px;
      transition: all 0.2s;
      font-size: calc(${BaseFontSize.bfs} - 1vw);
      color: #000;
      display: flex;
      align-items: center;
      margin-right: 4px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 5px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column-reverse;
      width: 100%;
    }

    .againstWhom {
      width: 95%;
    }

    .venue {
      width: 100%;
    }

    .venuInfo {
      padding-bottom: 15px;
      padding-left: 0px;
      text-align: center;
      width: 100%;
    }

    .homeOrAway {
    }

    #homeOrAwayResponsive {
      display: none;
    }

    .dateAndTime {
      font-size: calc(${BaseFontSize.bfs} - 0.4vw);
      line-height: 1.2;
    }

    .Location {
      font-size: calc(${BaseFontSize.bfs} - 0.6vw);
      line-height: 1.2;
    }

    .catergory {
      font-size: calc(${BaseFontSize.bfs} - 0.8vw);
      line-height: 1.2;
    }

    .ticketContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    #homeIndicator_responsive {
      display: block;
      width: 30%;
      text-align: end;
    }

    .learnMore {
      padding: 10px;
      text-transform: uppercase;
      border-radius: 1px;
      transition: all 0.2s;
      font-size: calc(${BaseFontSize.bfs} - 1vw);
      color: #000;
      display: flex;
      align-items: center;
      margin-right: 4px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
