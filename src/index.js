import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './components/Signup'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
const home = () => {
  return <App />
};

const signup = () => {
  return <Signup />
};

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={home} />
      <Route exact path="/signup" component={signup} />
    </div>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
