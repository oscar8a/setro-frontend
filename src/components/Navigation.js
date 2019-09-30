import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Link }  from 'react-router-dom'

class Navigation extends React.Component {
  
  render(){
    return <Navbar variant="dark">

      <Navbar.Brand href="#home">🌲🌰 Seeds Store 🌰🌲</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        &nbsp;&nbsp;&nbsp;
        <Nav>
          <ButtonToolbar>
            <Button variant="light"><Link to={"/signup"} >Sign Up</Link></Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="light">Login</Button>
          </ButtonToolbar>
        </Nav>

     </Navbar>

  }
}
export default Navigation