import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import { CardDeck, Row, Col, Container } from 'react-bootstrap';
import CartProduct from '../Cart/CartProduct';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

class Cart extends React.Component {

  state = {
    cartTotal: 0,
    cart: [],
    cartProducts: [],
    itemCount: [],
    checkedOut: false,
    isLoaded: false
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
      cartProducts: data,
      cart: this.props.cart,
      isLoaded: true
    },() => this.addToTotal() ))
  }

  componentDidMount(){
    console.log("componentdidmountPROPS",this.props)
    console.log("componentdidmountSTATE",this.state)
    
    this.fetchCartItems();
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
        {
        this.state.isLoaded
        ?
        this.renderProducts()
        :
        null
        }
    </tbody>
  </Table>
  }

  renderProducts(){
    if (!!this.state.cartProducts.length) {
      return this.state.cartProducts.map(singleProduct => <CartProduct product={singleProduct} key={singleProduct.id} cart={this.props.cart} qty={this.getQty(singleProduct.id)}/>)
    }
  }

  getQty(productID){
    const item = this.state.cart.find(item => item.product_id === productID)

    return item.quantity
  }

  addToTotal = () => {
    console.log("addtototal",this.state)
    let runningTotal = 0;

    this.state.cart.forEach(cartItem => {
      this.state.cartProducts.forEach(cartProd => {
        if (cartItem.product_id === cartProd.id) {
          
          runningTotal = runningTotal + (cartItem.quantity * cartProd.price)

          runningTotal = Math.round(runningTotal * 100) / 100

          console.log(runningTotal)

        }
      })
    })
    
    this.setState({
      cartTotal: runningTotal
    })
  }

  submitOrder = () => {
    console.log("submit order")
    fetch(`http://localhost:3000/orders/${window.sessionStorage.getItem("cartID")}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        status: true
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      checkedOut: true
    }, () => this.props.updateCheckedOut(), console.log(this.state)))
  }

  render(){
    return <div className="cartcontainerdiv">
      <h2> This is the CART </h2>
      {
        this.state.isLoaded
        ?
        this.createTable()
        :
        <Spinner animation="border" variant="success" />
      // this.state.cart.map(singleProduct => <Col md="4" key={singleProduct.id}><CartProduct product={singleProduct} key={singleProduct.id} cart={this.props.cart} qty={this.getQty(singleProduct)}/></Col>)
      }
      <div>
      <h2> Your total is: {this.state.cartTotal}</h2>
      <Button variant="success" size="lg" block onClick={this.submitOrder}>
        Place Order
      </Button>
      </div>
      {
        this.state.checkedOut
        ?
        <Alert variant="success"> Your Order has Been Placed! </Alert>
        :
        null
      }
      </div>
  }

}
export default Cart