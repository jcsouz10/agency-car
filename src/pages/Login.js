import React from 'react';
import axios from 'axios';
import Body from '../components/Body/Body';

import { ContainerLogin, InputLogin, ButtonLogin } from './styled.js';

import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
      teste: false,
    }
  }

  handleInput = (e) => {
    let value = e.target.value;

    this.setState({ [e.target.name]: value })
  }

  handleLogin = () => {
    axios.post('/login', { name: this.state.name, password: this.state.password })
      .then(res => {
        localStorage.setItem('jwt', res.data.token)
        window.location.reload();
      })
      .catch(error => console.log(error.response.data.message))
  }

  render() {
    if (localStorage.getItem('jwt')) return <Redirect to="/pageOwnerAgency" />

    return (
      <Body>
        <ContainerLogin>
          <InputLogin onChange={this.handleInput} name="name" placeholder="USERNAME" />
          <InputLogin onChange={this.handleInput} name="password" placeholder="PASSWORD" type="password" />
          <ButtonLogin onClick={this.handleLogin}> Login </ButtonLogin>
        </ContainerLogin>
      </Body>
    )
  }

}
export default Login;