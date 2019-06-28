import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { login, signUp } from "../../actions";
import { history } from "../../helpers/history";

const FormContainer = styled.div`
  display: flex;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 10%;
  height: 310px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

const Select = styled.select`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  :invalid {
    color: gray;
  }
  :first {
    color: grey;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #36393f;
  border: 1px solid white;
  color: white;
  padding: 10px;
  :hover{
    background-color: #db6450;
    cursor: pointer;
    color: white;
  }
`;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      full_name: "",
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    // const email = this.state.email;
    // localStorage.setItem("email", email);
    // this.props.history.push("/company");
    if (
      !this.state.username ||
      !this.state.full_name ||
      !this.state.email ||
      !this.state.password
    ) {
      console.log("enter the right stuff bruh!!");
    } else {
      // const newUser = {
      //   username: this.state.username,
      //   email: this.state.email,
      //   password: this.state.password,
      //   full_name: this.state.name
      // };
      this.props.signUp(this.state);
      this.props.history.push("/user/login");
    }
  };
  render() {
    return (
      <FormContainer>
        <SignUpForm>
          <Select
            required
            name="company_type"
            value={this.state.company_type}
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Select your Industry...
            </option>
            <option value="agribusiness">Agribusiness</option>
            <option value="communications-electronics">
              Communications & Electronic Goods
            </option>
            <option value="construction">Construction</option>
            <option value="defense">Defense</option>
            <option value="energy-natural-resources">
              Energy & Natural Resources
            </option>
            <option value="finance-insurance-real-estate">
              Finance, Insurance, & Real Estate
            </option>
            <option value="food-beverage">Food & Beverage</option>
            <option value="health">Health</option>
            <option value="labor">Labor</option>
            <option value="law-lobbyists">Law & Lobbyists</option>
            <option value="misc">Misc Business</option>
            <option value="other">Other</option>
            <option value="technology">Technology</option>
            <option value="transportation">Transportation</option>
          </Select>
          <Input
            placeholder="Username"
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            name="username"
          />
          <Input
            placeholder="Full Name"
            onChange={this.handleChange}
            type="text"
            value={this.state.full_name}
            name="full_name"
          />
          <Input
            placeholder="Email"
            onChange={this.handleChange}
            type="text"
            value={this.state.email}
            name="email"
          />
          <Input
            placeholder="Password"
            onChange={this.handleChange}
            type="text"
            value={this.state.password}
            name="password"
          />

          <Button onClick={this.handleLogin}>REGISTER</Button>
        </SignUpForm>
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
  { login, history, signUp }
)(SignUp);
