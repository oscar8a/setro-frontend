import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Product extends Component {

  state = {
    status: ''
  }

  render(){

  return <Card className='card' bg="success">
    <Card.Header>{this.props.product.species}</Card.Header>
    <Card.Body>
      <Card.Title>{this.props.product.common_name}</Card.Title>
      <Card.Text>
        {this.props.product.origin} | {this.props.product.country}
      </Card.Text>
    </Card.Body>
    <Card.Footer><Button variant="light" onClick={() => this.props.addToCart(this.props.product)}> ADD TO <span role='img' aria-label="cart">🛒</span></Button></Card.Footer>
    </Card>
  }


}
export default Product