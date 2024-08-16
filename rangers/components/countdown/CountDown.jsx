import React, { useState, useEffect } from "react";
import styled from "styled-components";
const CountdownClock = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <StyledCountClock>
      <li>
        <span id="days">{timeLeft.days}</span>Days
      </li>
      <li>
        <span id="hours">{timeLeft.hours}</span>Hours
      </li>
      <li>
        <span id="minutes">{timeLeft.minutes}</span>Minutes
      </li>
      <li>
        <span id="seconds">{timeLeft.seconds}</span>Seconds
      </li>
    </StyledCountClock>
  );
};

export default CountdownClock;

const StyledCountClock = styled.div`
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 100;
  border: 1px solid #fff;
  margin-bottom: 4px;
  display: flex;

  li {
    display: inline-block;
    font-size: 1.5em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
  }

  li span {
    display: block;
    font-size: 4.5rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
    li {
      font-size: calc(2.125rem * var(--smaller));
      font-weight: 700;
    }

    li span {
      font-size: calc(4.375rem * var(--smaller));
    }
  }

  @media all and (max-width: 768px) {
    h1 {
      font-size: calc(1.5rem * var(--smaller));
    }

    li {
      font-size: calc(1.125rem * var(--smaller));
    }

    li span {
      font-size: calc(3.375rem * var(--smaller));
    }
  }
`;
