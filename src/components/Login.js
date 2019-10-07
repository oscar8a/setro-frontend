import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Login extends React.Component {
  state ={
    logIn: false,
    email: "",
    password: "",
    errors: []
  }

  logInSubmit = e => {
    e.preventDefault()

    fetch('http://localhost:3000/tokens', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        this.setState({
          errors: data.errors
        })
      } else {
        this.props.logInUser(data.token, data.user_id)
      }
    })
  }

  // signUpSubmit = event => {

  // }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <>
    <ul>
      {this.state.errors.map(error => <li>{ error }</li>)}
    </ul>
    {
      this.state.logIn
      ?
      <section>
        "Please Signup"
      </section> 
      :
      <section className="App">
      <h1>THIS IS THE LOGIN PAGE</h1>
      <Form className="authform" onSubmit={ this.logInSubmit }>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={ this.onChange } value={ this.state.email }/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={ this.onChange } value={ this.state.password }/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </section>

    }
    </>
  }
}
export default Login