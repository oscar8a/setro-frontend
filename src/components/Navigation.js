import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Link, withRouter }  from 'react-router-dom'

class Navigation extends React.Component {

  handleLogoutClick = () => {
    window.sessionStorage.clear();
    this.props.logOutUser();
    this.props.history.push("/login")
  }
  
  render(){

    console.log(this.props);

    return(<Navbar variant="dark" className='App-header'>
      <Navbar.Brand href="/"><span role='img' aria-label="pine and a nut">🌲🌰</span> Online Tree Seeds Store <span role='img' aria-label="pine and a nut">🌲🌰</span></Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
      &nbsp;&nbsp;&nbsp;
      <Nav>
      <ButtonToolbar>
      <Button variant="light"><Link to="/home">HOME</Link></Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="light"><Link to={"/cart"}><span role='img' aria-label="cart">🛒 CART</span></Link></Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="light"><Link to={"/profile"} >PROFILE</Link></Button>
      {/* &nbsp;&nbsp;&nbsp;
      <Button variant="light"><Link to={"/signup"} >Sign Up</Link></Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="light"><Link to={"/login"} >Log In</Link></Button> */}
      &nbsp;&nbsp;&nbsp;        <Button variant="danger" onClick={this.handleLogoutClick}>LOG OUT</Button>
      </ButtonToolbar>
      </Nav>
     </Navbar>)
  }
}
export default withRouter(Navigation)