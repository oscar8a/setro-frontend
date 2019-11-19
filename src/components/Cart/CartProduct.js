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
      {/* {this.props.addTotal(productObj.price)} */}
    </tr>    
  }
}
export default Product