import React from "react";
import Product from "./Product";
import { Row, Col, Container } from "react-bootstrap";
//CardDeck
import Button from "react-bootstrap/Button";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// Create a Wrapper component that'll render a <section> tag with some styles
const ButtonNavWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ProductCollection = (props) => {
  return (
    <Container fluid>
      <Row>
        {/* {props.allProducts.map(singleProduct => <Product key={singleProduct.id} addToCart={props.addToCart} product={singleProduct}/>)} */}
        {props.allProducts.map((singleProduct) => (
          <Col md="4" key={singleProduct.id}>
            <Product
              addToCart={props.addToCart}
              product={singleProduct}
              key={singleProduct.id}
            />
          </Col>
        ))}
      </Row>
      <ButtonNavWrapper>
        <Button onClick={props.navigateProduct} value="-">
          {" "}
          Go Back...{" "}
        </Button>
        <Button onClick={props.navigateProduct} value="+">
          {" "}
          See More...{" "}
        </Button>
      </ButtonNavWrapper>
    </Container>
  );
};
export default ProductCollection;
