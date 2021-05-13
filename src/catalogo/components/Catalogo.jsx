import React from 'react';
import { Redirect , withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Breakpoint } from 'react-socks';

class Catalogo extends React.Component {

  render() {

    const Background = styled.div`
      background-color: #5c996c;
      /* background-image: url('https://cdn.pixabay.com/photo/2019/10/05/23/49/nature-4529056_1280.jpg'); */
      /* max-width: 100%; */
      height: fill-available;
      /* background-size: contain; */
      /* background-repeat: no-repeat; */
      /* background-color: rgba(154, 154, 154, 0.543); */
      /* background-blend-mode: screen; */
    `;

    const ContentWrapper = styled.div`
      /* top: 50px; */
      margin: 0 auto;
      padding: 2% 5%;
    `
    
    const Title = styled.div`
      text-align: center;
      background-color: #744602fa;
      padding: 30px;
      border-radius: 30px;
      color: rgb(230, 230, 230);
    `

    return <Background>
      <Breakpoint small down>
        <Title small>
          <h3>Catalogo Semillas Tropicales</h3>
          <h4>small down</h4>
        </Title>
      </Breakpoint>
      <Breakpoint medium up>
        <ContentWrapper>
          <Title>
            <h1>Catalogo Semillas Tropicales</h1>
            <h2>medium up</h2>
          </Title>
        </ContentWrapper>
      </Breakpoint>
    </Background>
  }
}

export default withRouter(Catalogo)