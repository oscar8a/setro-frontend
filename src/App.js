import React from 'react';
import {Switch, Link, withRouter, Redirect, BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login/Login';
import Cart from './components/Cart';
import Container from './containers/Container';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import history from './history';

const URL = 'http://localhost:3000/products/'

class App extends React.Component {

  state = {
    loginStatus: false,
    user: {},
    token: null,
    allProductsData: [],
    idx: 0,
    // searchTerm: "",
    cart: [],
    cartID: null,
  }

  isLoggedIn(){
    // return !!this.state.loginStatus
    return !!window.sessionStorage.getItem("token")
  }

  loggedInUserId(){
    return this.state.loggedInUserId
  }

  setLoggedInUserId = (userId) => {
    this.setState({
      loggedInUserId: userId
    })
  }

  logInUser = (data) => {
    this.setState({
      user: data.user,
      token: data.jwt,
      loginStatus: true,
    })
    this.setCart();
  }

  logOutUser = () => {
    this.setState({
      loginStatus: false,
      user: {}
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
    .then(data => this.setState({
      ...this.state.cartID = data.id
    }, () => console.log("APP STATE", this.state))
    );
  }

  addItemsToOrder = () => {
    fetch('http://localhost:3000/order_products', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        order_id: this.state.cartID,
        // product_id: item.id,
        quantity: 1
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  }

  addItemToCart = (item) => {
    let containsItem = false, newQuantity = 0;

    let newCart = this.state.cart.map(cartItem => {
      if (cartItem.order_id === item.order_id && cartItem.product_id === item.product_id) {
        containsItem = true;
        newQuantity = cartItem.quantity;
        newQuantity ++; 
        return {...cartItem, quantity: newQuantity}
      } 
      return {...cartItem}
    })

    if (!containsItem) {
      newCart = [...newCart, {...item}];
    }

    this.setState({ cart: newCart })
  }

  addToCart = (item) => {
    const cart_item = {
      order_id: this.state.cartID,
      product_id: item.id,
      quantity: 1
    }

    if (this.state.cart.length !== 0) {
      this.addItemToCart(cart_item);
    } else {
      this.setState({
        ...this.state.cart.push(cart_item)
      })
    }
  }
          
  componentDidMount(){
    if (!!window.sessionStorage.getItem("token")) {
      this.setState({
        loginStatus: true,
        token: window.sessionStorage.getItem("token")
      }, () => console.log("APP STATE", this.state));
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

        <Route exact path="/" render={props => (<Login { ...props } loginStatus={this.state.loginStatus} logInUser={this.logInUser}/>)}/>

        <Route exact path="/login" render={props => (<Login { ...props } loginStatus={this.state.loginStatus} logInUser={this.logInUser}/>)}/>

        <Route exact path="/signup" render={props => (<Signup { ...props } loginStatus={this.state.loginStatus} logInUser={this.logInUser}/>)} />

        <Route path="/home" render={props => (<Container { ...props } loginStatus={this.state.loginStatus} addToCart={this.addToCart}/>)}/>

        <Route path="/profile" render={props => (<UserProfile { ...props }/>)}/>

        <Route path="/cart" render={props => (<Cart { ...props } cart={this.state.cart} />)} />





        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  }
}
serviceWorker.unregister();

export default App;