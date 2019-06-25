import React from "react";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import SignUpInitial from "./SignUpInitial";
import Login from "./Login";
import "./Login.css";
import BGimg from "../../imgs/brickwall.jpg";

const LoginPageDiv = styled.div`
  height: 100vh;
  background-color: #db6450;
  background-image: url(${BGimg});
`;

const TagLine = styled.h3`
  color: white;
  margin-top: -60px;
  font-weight: lighter;
`;

const Instruction = styled.p`
  color: white;
  margin-top: 40px;
  font-weight: lighter;
`;

const UserType = styled(NavLink)`
  background-color: white;
  border-radius: 10px;
  padding: 5px 1%;
  margin: 10px 2% 0px 2%;
  color: black;
  font-weight: light;
  :hover {
    background-color: #36393f;
    color: white;
  }
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      manager: "",
      departmentHead: "",
      department: "",
      title: "",
      company: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    const username = this.state.username;
    localStorage.setItem("username", username);
    window.location.reload();
  };
  render() {
    return (
      <LoginPageDiv className="img">
        <img src="../../imgs/logo.jpg" alt="Logo" />
        <TagLine>A Better Way to Make Decisions.</TagLine>
        <Instruction>*Select an option to continue.*</Instruction>
        <UserType activeClassName="user-type" to="/user/signup">
          New User
        </UserType>
        <UserType activeClassName="user-type" to="/user/login">
          Returning User
        </UserType>
        <Route path="/user/signup" component={SignUpInitial} />
        <Route path="/user/login" component={Login} />
      </LoginPageDiv>
    );
  }
}

export default LoginPage;
