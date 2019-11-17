import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Product extends Component {

  state = {
    status: ''
  }

  render(){
  const productObj = this.props.product

  return <Card className="productcard">
    <Card.Header>{productObj.species}</Card.Header>
    <Card.Body>
      <Card.Title>{productObj.common_name}</Card.Title>
      <Card.Text>
        {productObj.origin} | {productObj.country}
      </Card.Text>
    </Card.Body>
    <Card.Footer><Button variant="light" onClick={() => this.props.addToCart(productObj)}> ADD TO <span role='img' aria-label="cart">🛒</span></Button>
    <Button>
      $ {productObj.price}
    </Button>
    </Card.Footer>
    </Card>
  }


}
export default Product