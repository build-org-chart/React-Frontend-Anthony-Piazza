import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { history } from "../../helpers/history";
import { login } from "../../actions";

import "./Login.css";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 10% -40px 10%;
  height: 310px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  display: flex;
`;

const InputField = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #36393f;
  color: white;
  padding: 10px;
  border: 1px solid white;
  :hover{
    background-color: #db6450;
    color: white;
    cursor: pointer;
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    if (this.state.credentials.username && this.state.credentials.password) {
      this.props.history.push("/home");
    }
    // console.log(this.state.credentials);
  };

  render() {
    return (
      <FormContainer>
        <LoginForm>
          <InputField
            placeholder="Username"
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            name="username"
          />
          <InputField
            placeholder="Password"
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
          />
          <Button onClick={this.handleLogin}>SIGN IN</Button>
        </LoginForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    loggingIn: state.loggingIn
  };
};

export default connect(
  mapStateToProps,
  { login, history }
)(Login);
