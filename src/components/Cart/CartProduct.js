import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Product extends Component {
  
  render(){
  const productObj = this.props.product
  // const cartItems = this.props.cart

  return <tr>
      <td>*</td>
      <td>{productObj.species}</td>
      <td>{productObj.common_name}</td>
      <td>{productObj.origin} | {productObj.country}</td>
      <td>{this.props.qty}</td>
      <td>$ {productObj.price}</td>
    </tr>    
  }
  // <Card className="productcard">
  //   <Card.Header>{productObj.species}</Card.Header>
  //   <Card.Body>
  //     <Card.Title>{productObj.common_name}</Card.Title>
  //     <Card.Text>
  //       {productObj.origin} | {productObj.country}
  //     </Card.Text>
  //   </Card.Body>
  //   <Card.Footer>
  // <Button variant="light">Quantity: {this.props.qty}</Button>
  //   <Button>
  //     $ {productObj.price}
  //   </Button>
  //   </Card.Footer>
  //   </Card>


}
export default Product