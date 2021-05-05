import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from 'react-socks';

const IntroTextContainer = styled.div`
  padding: 5%;
  display: block;
  border: 2px solid #98A886;
  background-color: #B5C2A8;
  text-align: center;
`;

const IntroText = () => {

  return (
    <IntroTextContainer>
        <h2>Welcome to our Online Seed Store</h2>
        <p>Feel free to look at our catalogue of tree seeds available</p>
    </IntroTextContainer>
  )
}

export default IntroText;