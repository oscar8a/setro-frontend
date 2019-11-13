import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
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
    
    //console.log(e.target.first_name.value) //keep this just in case

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
        user: {...data}
      })
    })
    .then(response => response.json())
    .then(resp => {
      console.log(resp)
      window.sessionStorage.setItem("token", resp.token)
      this.props.logInUser(resp)
      this.props.history.push('/home');
    })
  }

  render() {

    const usStatesArray = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

    return <section className="container-fluid bg">
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-8">
        <Form className="login-form" onSubmit={this.handleSubmit}>
        <h1> Signup Form </h1>
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
      </section>
      </section>
    </section>
  }

}
export default withRouter(Signup);