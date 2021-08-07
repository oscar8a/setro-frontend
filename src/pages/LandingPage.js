import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const LandingPageDiv = styled.div`
  background-color: blanchedalmond;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
`;

const LandingPage = () => {
  const history = useHistory();

  return (
    <LandingPageDiv>
      LandingPage bruh!!!!
      <div>
        <Button variant="primary" onClick={() => {
          history.push("/login");
        }}>
          Login
        </Button>

        <Button variant="primary" onClick={() => {
          history.push("/signup");
        }}>
          Signup
        </Button>
      </div>
    </LandingPageDiv>
  );
};

export default LandingPage;
