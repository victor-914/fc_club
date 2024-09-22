import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Color } from "../../utils/color";
import Cookies from "js-cookie";
function LogoutComponent() {
  const router = useRouter();
  
  const handleLogout = () => {
    Cookies.remove("user_jwt")
    Cookies.remove("user_id")
    router.push("/");
  };
  return (
    <StyledLogout>
      <main className="container">
        <button className="signUp" onClick={handleLogout}>
          log out
        </button>
      </main>
    </StyledLogout>
  );
}

export default LogoutComponent;

const StyledLogout = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2a2a2a;

  .container {
    width: 30%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container button {
    font-weight: 600;
    color: #fff;
    font-size: 20px;
    padding: 10px;
    width: auto;
    border-radius: 20px;
    text-transform: uppercase;
  }

  .container button:hover {
    border: 2px solid #fff;
  }

  .signUp {
    background-color: ${Color.primaryColor};
    border: none;
    outline: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .container {
      width: 70%;
    }

    .container button {
      width: auto;
      font-size: 16px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .container {
      width: 70%;
    }

    .container button {
      width: auto;
      font-size: 16px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      width: 70%;
    }

    .container button {
      width: auto;
      font-size: 16px;
    }
  }
`;
