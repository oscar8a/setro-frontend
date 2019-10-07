import React, { Fragment } from "react";
import Product from './Product'
import { CardDeck, Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const ProductCollection = (props) => {
  
  return(
    <Fragment>
      <h3> this is the Product Collection</h3>
      <div>

      
      <Container fluid="false">
        <Row noGutters="true">
      {props.allProducts.map(singleProduct => <Col md={3} key={singleProduct.id}><Product addToCart={props.addToCart} product={singleProduct} key={singleProduct.id}/></Col>)}
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