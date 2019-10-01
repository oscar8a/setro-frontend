import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = (props) => {

  return <Fragment >

    <Card class='card'bg="success">
    <Card.Body>
      <Card.Title>{props.product.species}</Card.Title>
      <Card.Text>
        {props.product.common_name}
        <br></br>
        {props.product.origin} | {props.product.country}
      </Card.Text>
    </Card.Body>
      <Button variant="light" onClick={() => props.addToCart(props.product)}> ADD TO <span role='img' aria-label="cart">🛒</span></Button>
    </Card>
  </Fragment>


}
export default Product