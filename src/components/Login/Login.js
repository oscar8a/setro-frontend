import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

class Login extends React.Component {
  state = {
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
      if (data.errors) {
        this.setState({
          errors: data.errors
        })
      } else {
        window.sessionStorage.setItem("token", data.token)
        this.props.logInUser(data)
        this.props.history.push('/home')
      }
    })
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value
    })
  }

  render() {

    const Background = styled.div`
      display: block;
      background: url('https://cdn.pixabay.com/photo/2019/10/05/23/49/nature-4529056_1280.jpg') no-repeat;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-color: rgba(154, 154, 154, 0.543);
      background-blend-mode: screen;
    `;

    return <>
    {/* <ul>
      {this.state.errors.map(error => <li>{ error }</li>)}
    </ul> */}
    {
      <Background className="App container-fluid">
        <section className="row justify-content-center">
          <div className="landingpagetitle">
            <h1>Welcome to Our Tree Seeds Store</h1>
            <h2>Login or Create a new User by clicking the signup form button</h2>
          </div>
          <section className="col-12 col-sm-3 col-md-4">
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
              <Button className="btn-block" variant="info" onClick={()=>this.props.history.push('/signup')}>Sign Up Form</Button>
            </Form>
          </section>
        </section>
      </Background>
    }
    </>
  }
}
export default withRouter(Login)