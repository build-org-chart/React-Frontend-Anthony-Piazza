import React from "react";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import SignUp from "./SignUp";
import Login from "./Login";
import "./Login.css";
import BGimg from "../../imgs/triangles.jpg";


const LoginPageDiv = styled.div`
  height: 100vh;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

const TagLine = styled.h3`
  color: white;
  margin-top: -60px;
  font-weight: lighter;
  font-size: .77rem;
  padding-bottom: 80px;
`;

const Instruction = styled.p`
  color: white;
  padding-bottom: 15px;
  font-weight: lighter;
  font-size: .7rem;
`;

const UserType = styled(NavLink)`
  background-color: #36393f;
  border-radius: 10px;
  padding: 5px 1%;
  margin: 10px 2% 0px 2%;
  color: white;
  font-weight: light;
  border: 1px white solid;
  border-radius: 10px;
  :hover {
    background-color: #db6450;
    color: white;
  }
`;

const MenuDiv = styled.div`
  background-color: #36393f;
  margin: 0px 35%;
  padding: 20px 0%;
  border-radius: 10px;
`

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
    
  };
  render() {
    return (
      <LoginPageDiv className="img">
        <img src="../../imgs/logo.jpg" alt="Logo" />
        <TagLine>A Better Way to Make Decisions.</TagLine>
        <MenuDiv>  
          <Instruction>*SELECT AN OPTION TO CONTINUE*</Instruction>
          <UserType activeClassName="user-type" to="/user/signup">
            New User
          </UserType>
          <UserType activeClassName="user-type" to="/user/login">
            Returning User
          </UserType>
          <Route path="/user/signup" component={SignUp} />
          <Route path="/user/login" component={Login} />
        </MenuDiv>
      </LoginPageDiv>
    );
  }
}

export default LoginPage;
