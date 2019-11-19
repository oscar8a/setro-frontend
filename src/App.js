import React from 'react';
import {Switch, Link, withRouter, Redirect, BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Container from './containers/Container';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import history from './history';

// const URL = 'http://localhost:3000/products/'

class App extends React.Component {

  state = {
    user: {},
    token: null,
    cart: [],
    cartID: null,
    productsInCart: [],
    checkedOut: false,
  }

  isLoggedIn(){
    return !!window.sessionStorage.getItem("token")
  }

  logInUser = (data) => {
    this.setState({
      user: data.user,
      token: data.token,
    })
    this.setCart();
  }

  logOutUser = () => {
    this.setState({
      user: {}
    })
  }

  fetchCartProducts = () => {
    fetch(`http://localhost:3000/myorderproducts/${window.sessionStorage.getItem("cartID")}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        cart: data
      }, () => console.log("APP STATE", this.state))
    })
  }

  setCart = () => {
    fetch('http://localhost:3000/cart', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("setCart Fetch",data)
      this.setState({
        cartID: data.id,
        checkedOut: data.status,
      })
      window.sessionStorage.setItem("cartID", data.id)
      this.fetchCartProducts();
    })
  }

  updateCartItemQty = (item) => {
    fetch(`http://localhost:3000/order_products/${item.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        order_id: item.order_id,
        product_id: item.product_id,
        quantity: item.quantity
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        cartTotal: this.state.cartTotal + 4.99
      }, () => console.log(data, this.state))
    })
  }

  addItemsToOrder = (item) => {
    fetch('http://localhost:3000/order_products', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        order_id: item.order_id,
        product_id: item.product_id,
        quantity: item.quantity
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors) {
        console.log(data.errors)
      } else {
      this.setState({
        cartTotal: this.state.cartTotal + 4.99,
        ...this.state.cart.push(data)
      }, () => console.log(data, this.state))
    }
    })
  }

  addToCart = (item) => {
    const itemToAdd = {
      order_id: parseInt(window.sessionStorage.getItem("cartID"), 10),
      product_id: item.id,
      quantity: 1
    }

    let containsItem = false, newQty = 0;

    const newCart = this.state.cart.map(stateCartItem => {
      if (stateCartItem.order_id === itemToAdd.order_id && stateCartItem.product_id === itemToAdd.product_id) {
        containsItem = true;
        newQty = stateCartItem.quantity + 1;
        stateCartItem.quantity = newQty; //check this
        this.updateCartItemQty(stateCartItem);
        return {...stateCartItem, quantity: newQty} //with this
      } 
      return {...stateCartItem}
    })

    if (!containsItem) {
      this.addItemsToOrder(itemToAdd);
      // this.setState({ ...this.state.itemDetails.push(item) })
    }
  }

  updateCheckedOut = () => {
    this.setState({
      checkedOut: true
    })
  }
          
  componentDidMount(){
    if (!!window.sessionStorage.getItem("token")) {
      this.setState({
        token: window.sessionStorage.getItem("token")
      });
      this.setCart();
    }
  }
              
    render(){
      return <Router history={history}>
      {
        this.isLoggedIn()
        ?
        <header><Navigation logOutUser={this.logOutUser}/></header>
        :
        null
      }
      <Switch>

        <Route exact path="/" render={props => (<Login { ...props } logInUser={this.logInUser}/>)}/>

        <Route exact path="/login" render={props => (<Login { ...props } logInUser={this.logInUser}/>)}/>

        <Route exact path="/signup" render={props => (<Signup { ...props } logInUser={this.logInUser}/>)} />

        <Route path="/home" render={props => (<Container { ...props } addToCart={this.addToCart}/>)}/>

        <Route path="/profile" render={props => (<UserProfile { ...props }/>)}/>

        <Route path="/cart" render={props => (<Cart { ...props } cart={this.state.cart} updateCheckedOut={this.updateCheckedOut}/>)} />





        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  }
}
serviceWorker.unregister();

export default App;