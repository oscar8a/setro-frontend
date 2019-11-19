import React from 'react';
import { CardDeck, Row, Col, Container } from 'react-bootstrap';
import CartProduct from '../Cart/CartProduct';

class Cart extends React.Component {

  state = {
    cartArr: [],
    cartTotal: 0,
    checkedOut: false
  }



  render(){
    return <div className="containerdiv">
      <h2> This is the CART </h2>
      {this.props.cart.map(singleProduct => <Col md="4" key={singleProduct.id}><CartProduct product={singleProduct} key={singleProduct.id}/></Col>)}
      </div>
  }

}
export default Cart