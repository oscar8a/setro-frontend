import React, { Fragment } from "react";
import Product from './Product'
import { Row, Col, Container } from 'react-bootstrap';
//CardDeck
import Button from 'react-bootstrap/Button'

const ProductCollection = (props) => {
  
  return(<Fragment>
      <div>
      <Container fluid>
        <Row>
      {/* {props.allProducts.map(singleProduct => <Product key={singleProduct.id} addToCart={props.addToCart} product={singleProduct}/>)} */}
      {props.allProducts.map(singleProduct => <Col md="4" key={singleProduct.id}><Product addToCart={props.addToCart} product={singleProduct} key={singleProduct.id}/></Col>)}
        </Row>

      </Container>
      </div>
      <div>
      <Button onClick={props.handleMoreButton}> See More...  </Button>
      </div>
     
    </Fragment>
  )
}
export default ProductCollection
//just nothing