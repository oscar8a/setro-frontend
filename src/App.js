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
    loginStatus: "NOT LOGGED IN",
    user: {},
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

  logInUser = (data) => {
    this.setState({
      loginStatus: "LOGGED IN",
      user: data
    })
    window.sessionStorage.setItem("token", data.jwt);
    history.push('/home');
  }

  logOutUser = () => {
    this.setState({
      loginStatus: "NOT LOGGED IN",
      user: {}
    })
    window.sessionStorage.clear();
    this.props.history.push("/login");
  }

  componentDidMount(){
    console.log(this.state)
  }

  render(){
      
    return <Router history={history}>
      {
        !!window.sessionStorage.getItem("token")
        ?
        <header><Navigation logOutUser={this.logOutUser}/></header>
        :
        null
      }
      <Switch>

        <Route exact path="/" render={props => (<Login { ...props } loginStatus={this.state.loginStatus} logInUser={this.logInUser}/>)}/>

        <Route exact path="/login" render={props => (<Login { ...props } loginStatus={this.state.loginStatus} logInUser={this.logInUser}/>)}/>

        <Route exact path="/signup" render={props => (<Signup { ...props } loginStatus={this.state.loginStatus} logInUser={this.logInUser}/>)} />

        <Route path="/home" render={props => (<Container { ...props } loginStatus={this.state.loginStatus} />)}/>

        <Route path="/profile" render={props => (<UserProfile { ...props }/>)}/>





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
