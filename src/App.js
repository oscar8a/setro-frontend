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
    searchTerm: "",
    loggedInUserId: null,
    cart: []
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
    console.log('loginuser', data)
    this.setState({
      loginStatus: true,
      user: data.user,
      token: data.jwt
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
    fetch(`http://localhost:3000/orders/${this.state.user.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  addToCart = (item) => {
    console.log(item)
    // fetch('http://localhost:3000/order_products', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   body: {
    //     WOT: "WOT"
    //   }
    // })
    // .then(resp => resp.json())
    // .then(data => {
    //   this.setState({
    //     allProductsData: data
    //   })
    // })
  }

  componentDidMount(){
    console.log("APP STATE", this.state)
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

        <Route path="/cart" render={props => (<Cart { ...props } />)} />





        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  }
}
serviceWorker.unregister();

export default App;
