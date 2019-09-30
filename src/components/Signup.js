import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Signup extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: ""
  }

  //REFACTOR THESE CHANGE HANDLERS
  handleFirstNameChange = event => {
    this.setState({
      first_name: event.target.value
    }, console.log(event.target.value))
  }
 
  handleLastNameChange = event => {
    this.setState({
      last_name: event.target.value
    }, console.log(event.target.value))
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    }, console.log(event.target.value))
  }

  handlePhoneChange = event => {
    this.setState({
      phone: event.target.value
    }, console.log(event.target.value))
  }

  handleStreetChange = event => {
    this.setState({
      street: event.target.value
    }, console.log(event.target.value))
  }

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    }, console.log(event.target.value))
  }

  handleStateChange = event => {
    this.setState({
      state: event.target.value
    }, console.log(event.target.value))
  }

  handleZipcodeChange = event => {
    this.setState({
      zipcode: event.target.value
    }, console.log(event.target.value))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)

    let formData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
    }
    this.sendFormData(formData)
  }

  sendFormData = (data) => {
    console.log(data)
    console.log(this.state)
  }

  

  render() {

    const usStatesArray = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

    return <div className="signupform">
      <h1> This is the Signup Page </h1>
      <form onSubmit={this.handleSubmit}>
      {/* <Form> */}
        <Form.Row>
          <Form.Group>
            <Form.Label>First Name: </Form.Label>
            <Form.Control placeholder="First Name" onChange={event => this.handleFirstNameChange(event)} value={this.state.first_name}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control placeholder="Last Name" onChange={event => this.handleLastNameChange(event)} value={this.state.last_name}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={event => this.handleEmailChange(event)} value={this.state.email}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control placeholder="#-###-###-##-##" onChange={event => this.handlePhoneChange(event)} value={this.state.phone}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" onChange={event => this.handleStreetChange(event)} value={this.state.street}/>
        </Form.Group>

        <Form.Row>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control onChange={event => this.handleCityChange(event)} value={this.state.city}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control as="select" onChange={event => this.handleStateChange(event)} value={this.state.state}>
              {usStatesArray.map(state => {return <option>{state}</option>})}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={event => this.handleZipcodeChange(event)} value={this.state.zipcode}/>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      {/* </Form> */}
      </form>
    </div>
  }

}
export default Signup