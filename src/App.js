import React from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from 'react-redux';

import Logo from "./imgs/streemly.png";
import HomePage from "./components/MainPage/HomePage";
import LoginPage from "./components/Login-SignUp/LoginPage";
import CompanyPage from "./components/Login-SignUp/CompanyPage";
import SearchBar from "./components/MainPage/SearchBar";
import AddMember from "./components/MainPage/AddMember";
import DeleteMember from "./components/MainPage/DeleteMember";
import EditMember from "./components/MainPage/EditMember";
import AddDepartment from "./components/MainPage/AddDepartment.js";
// import withAuthenticate from './components/Login-SignUp-Auth/withAuthenticate';
// import SignUpInitial from "./components/Login-SignUp-Auth/SignUpInitial";
// const ComponentFromWithAuthenticate = withAuthenticate(HomePage)(LoginPage);

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 100px;
  width: auto;
  padding-left: 15px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      error: [],
      includedInSearch: false
    };
  }
  
  userSearch = (e) => {
    e.preventDefault();
    this.props.user.filter(searchUser => {
      if(searchUser.full_name.includes(e.target.value)){
        this.setState({ includedInSearch: true })
      }else{
        this.setState({ includedInSearch: false })
      }
    })
  };

  render() {
    return (
      <div className="App">
        {/* <ComponentFromWithAuthenticate /> */}
        <Nav>
          <Img src={Logo} alt="logo" />

          <SearchBar userSearch={this.userSearch} />
          <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/user">Log In</NavLink>
          </div>
        </Nav>
        {/* <Route path="/login" render={props => <LoginPage {...props}  />} /> */}
        {/* <Route path="/signup" component={SignUpInitial} /> */}
        <Route exact path="/home" render={props => (
          <HomePage 
            {...props} 
            includedInSearch={this.state.includedInSearch} 
            userSearch={this.userSearch} 
          />
        )} />
        <Route path="/company" render={props => <CompanyPage {...props} />} />
        <Route path="/user" render={props => <LoginPage {...props} />} />
        <Route path="/editmember" render={props => <EditMember {...props} />} />
        <Route path="/addmember" render={props => <AddMember {...props} />} />
        <Route path="/deletemember" render={props => <DeleteMember {...props} />} />
        <Route path="/adddepartment" render={props => <AddDepartment {...props} />}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, {} )(App);
