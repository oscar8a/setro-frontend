import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class Navigation extends React.Component {
  
  render(){
    return <Navbar variant="dark">

      <Navbar.Brand href="#home">🌲🌰 Seeds Store 🌰🌲</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        &nbsp;&nbsp;&nbsp;
        <Nav>
          <ButtonToolbar>
            <Button variant="light">Sign Up</Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="light">Login</Button>
          </ButtonToolbar>
        </Nav>

     </Navbar>

  }
}
export default Navigation