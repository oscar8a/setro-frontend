import React from 'react';
import { CardDeck, Row, Col, Container } from 'react-bootstrap';
import Product from './Product';


class Cart extends React.Component {

  state = {
    cartArr: [],
    cartTotal: "",
    checkedOut: false
  }

  render(){

    return <div className="containerdiv">
      <h2> This is the CART </h2>
      {this.props.itemDetails.map(singleProduct => <Col md="4" key={singleProduct.id}><Product product={singleProduct} key={singleProduct.id}/></Col>)}
      </div>
  }

}
export default Cart