import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Link }  from 'react-router-dom'

class Navigation extends React.Component {

  handleLogoutClick = () => {
    this.props.logOutUser();
  }
  
  render(){
    return(<Navbar variant="dark" className='App-header'>
      <Navbar.Brand href="/"><span role='img' aria-label="pine and a nut">🌲🌰</span> Seeds Store <span role='img' aria-label="pine and a nut">🌲🌰</span></Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/home">Home</Link>
      </Nav>
      &nbsp;&nbsp;&nbsp;
      <Nav>
      <ButtonToolbar>
      <Button variant="light"><Link to={"/cart"}><span role='img' aria-label="cart">🛒</span></Link></Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="light"><Link to={"/profile"} >Profile</Link></Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="light"><Link to={"/signup"} >Sign Up</Link></Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="light"><Link to={"/login"} >Log In</Link></Button>
      &nbsp;&nbsp;&nbsp;        <Button variant="danger" onClick={this.handleLogoutClick}>Log Out</Button>
      </ButtonToolbar>
      </Nav>
     </Navbar>)
  }
}
export default Navigation