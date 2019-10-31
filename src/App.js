import React from 'react';
import {Switch, Link, withRouter, Redirect, BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Signup from './components/Signup'
import Login from './components/Login/Login'
import Cart from './components/Cart'
import Container from './containers/Container'
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound'

const URL = 'http://localhost:3000/products/'

const signup = () => {
  return <Signup />
};

const cart = () => {
  return <Cart />
};

const userProfile = () => {
  return <UserProfile />
}

class App extends React.Component {

  state = {
    allProductsData: [],
    idx: 0,
    searchTerm: "",
    loggedInUserId: null,
    token: null
  }

  isLoggedIn(){
    return !!this.state.loggedInUserId
  }

  loggedInUserId(){
    return this.state.loggedInUserId
  }

  setLoggedInUserId = (userId) => {
    this.setState({
      loggedInUserId: userId
    })
  }

  logInUser = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  logOutUser = () => {
    delete localStorage.token
    delete localStorage.userId
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        allProductsData: data,
        token: localStorage.token
      })
    })
  }



  addToCart = () => {

  }

  render(){
      
    return <Router>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/signup" exact component={ Signup } />
        <Route path="/home" exact component={ Container } />
        <Route component={NotFound} />


      </Switch>
      
      {/* <div>
        <header className='App-header' ><Navigation /></header>
        <Route exact path="/" render={() => <div className="App"><Container addToCart={this.addToCart} allProducts={this.getAllData()} handleMoreButton={this.handleMoreButton} isLoggedIn={this.isLoggedIn} /></div>} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/login" render={() => <Login logInUser={this.logInUser} />} token={this.state.token} loggedInUserId={this.state.loggedInUserId} />
        <Route exact path="/cart" component={cart} />
        <Route exact path="/profile" component={userProfile} />
      </div> */}
    </Router>
  }
}
serviceWorker.unregister();

export default App;
