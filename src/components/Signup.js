import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {

  // state = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   street: "",
  //   city: "",
  //   state: "",
  //   zipcode: ""
  // }

  // handleChange = event => {
  //   console.log(this.state)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      street: e.target.street.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipcode: e.target.zipcode.value,
    }
    
    //console.log(e.target.first_name.value) //DO NOT DELETE THIS

    this.sendFormData(formData)
  }

  sendFormData = (data) => {


    fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...data
      })
    })
    .then(response => response.json())
    .then(resp => console.log(resp))

    this.props.history.push('/');
  }

  

  render() {

    const usStatesArray = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

    return <div className="authform">
      <h1> This is the Signup Page </h1>
      <form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group>
            <Form.Label>First Name: </Form.Label>
            <Form.Control placeholder="First Name" name="first_name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control placeholder="Last Name" name="last_name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" name="password" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control placeholder="#-###-###-##-##" name="phone" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name="street" />
        </Form.Group>

        <Form.Row>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control name="city" />
          </Form.Group>

          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control as="select" name="state">
              {usStatesArray.map(state => {return <option key={state}>{state}</option>})}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control name="zipcode" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  }

}
export default withRouter(Signup);