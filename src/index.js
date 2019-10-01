import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/Navigation'
import Signup from './components/Signup'
import Login from './components/Login'
import Cart from './components/Cart'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
const addToCart = (product) => {
  console.log(product)
}

const home = () => {
  return <App addToCart={addToCart}/>
};

const signup = () => {
  return <Signup />
};

const login = () => {
  return <Login />
};

const cart = () => {
  return <Cart />
};

ReactDOM.render((
  <Router>
    <div>
      <header className='App-header' ><Navigation /></header>
      <Route exact path="/" component={home} />
      <Route exact path="/signup" component={signup} />
      <Route exact path="/login" component={login} />
      <Route exact path="/cart" component={cart} />
    </div>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
