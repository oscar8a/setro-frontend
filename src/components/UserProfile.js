import React from 'react';
import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class UserProfile extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: ""
  }

  fetchUserData(){
    fetch('http://localhost:3000/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }


  render(){
    this.fetchUserData();
    const usStatesArray = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

    return <div className="authform">
      <h1> This is the Profile Page </h1>
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" name="password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name: </Form.Label>
            <Form.Control placeholder="First Name" name="first_name" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control placeholder="Last Name" name="last_name" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name="street" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control name="city" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control as="select" name="state">
              {usStatesArray.map(state => {return <option key={state}>{state}</option>})}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control name="zipcode" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control placeholder="#-###-###-##-##" name="phone" />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-block">
          Submit
        </Button>
      </Form>
    </div>
  }
}
export default UserProfile