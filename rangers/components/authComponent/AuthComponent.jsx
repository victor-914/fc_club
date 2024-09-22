import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Color } from "../../utils/color";
function AuthComponent() {
  const router = useRouter();
  return (
    <StyledAuth>
      <main className="container">
        <button className="login " onClick={() => router.push("/_login")}>
          login
        </button>

        <button className="signUp" onClick={() => router.push("/_signup")}>
          sign up
        </button>
      </main>
    </StyledAuth>
  );
}

export default AuthComponent;

const StyledAuth = styled.section`
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
    justify-content: space-between;
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

  .login {
    border: 2px solid rgba(255, 255, 255, 0.402);
  }

  .signUp {
    background-color: ${Color.primaryColor};
    border: none;
    outline: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {

    .container{
      width: 70%;
    }

    .container button{
      width: auto;
      font-size: 16px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .container{
      width: 70%;
    }

    .container button{
      width: auto;
      font-size: 16px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-color: blue;
    .container{
      width: 70%;
      background-color: green;
    }

    .container button{
      width: auto;
      font-size: 16px;
    }
  }
`;
