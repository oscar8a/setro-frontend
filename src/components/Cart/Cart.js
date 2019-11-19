import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import { CardDeck, Row, Col, Container } from 'react-bootstrap';
import CartProduct from '../Cart/CartProduct';

class Cart extends React.Component {

  state = {
    cart: [],
    itemCount: [],
    checkedOut: false
  }

  fetchCartItems = () => {
    fetch(`http://localhost:3000/cart/${window.sessionStorage.getItem("cartID")}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      cart: data,
      itemCount: this.props.cart
    },() => console.log(this.state)))
  }

  componentDidMount(){
    console.log("componentdidmount",this.props.cart)
    
    this.fetchCartItems();
  }

  getQty = (item) => {
    console.log(item)
    const itemObj = this.state.itemCount.find(x =>x.product_id === item.id)
    
    return itemObj.quantity
  }

  createTable = () => {
    return <Table striped bordered hover size="sm" variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Product Species</th>
        <th>Common Name</th>
        <th>Origin and Country</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {this.renderProducts()}
    </tbody>
  </Table>
  }

  renderProducts(){
    return this.state.cart.map(singleProduct => <CartProduct product={singleProduct} key={singleProduct.id} cart={this.props.cart} qty={this.getQty(singleProduct)}/>)
  }

  render(){
    return <div className="cartcontainerdiv">
      <h2> This is the CART </h2>
      {
        this.createTable()
      // this.state.cart.map(singleProduct => <Col md="4" key={singleProduct.id}><CartProduct product={singleProduct} key={singleProduct.id} cart={this.props.cart} qty={this.getQty(singleProduct)}/></Col>)
      }
      <div>
      <h2> Your total is: {this.props.runningTotal}</h2>
      <Button variant="success" size="lg" block>
        Place Order
      </Button>
      </div>
      </div>
  }

}
export default Cart