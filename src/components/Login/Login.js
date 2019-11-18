import React from 'react'
import { withRouter } from 'react-router-dom'
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

    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.errors) {
        this.setState({
          errors: data.errors
        })
      } else {
        window.sessionStorage.setItem("token", data.jwt)
        this.props.logInUser(data)
        this.props.history.push('/home')
      }
    })
  }

  onChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <>
    {/* <ul>
      {this.state.errors.map(error => <li>{ error }</li>)}
    </ul> */}
    {
      <section className="App container-fluid bg">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-3 col-md-4">
            <h1>THIS IS THE LOGIN PAGE</h1>
            <h1>STATUS: {this.props.loginStatus}</h1>
            <Form className="authform login-form" onSubmit={this.logInSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange} value={this.state.email} />
               </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange} value={this.state.password} />
              </Form.Group>

              <Button variant="primary" className="btn-block" type="submit">
                  Submit
              </Button>
            </Form>
          </section>
        </section>
      </section>
    }
    </>
  }
}
export default withRouter(Login)