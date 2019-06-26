import React from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";

import HomePage from "./components/MainPage/HomePage";
import LoginPage from "./components/Login-SignUp/LoginPage";
import CompanyPage from "./components/Login-SignUp/CompanyPage";
import Profile from "./components/MainPage/Profile";
// import withAuthenticate from './components/Login-SignUp-Auth/withAuthenticate';
// import SignUpInitial from "./components/Login-SignUp-Auth/SignUpInitial";
// const ComponentFromWithAuthenticate = withAuthenticate(HomePage)(LoginPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      error: []
    };
  }

  render() {
    return (
      <div className="App">
        {/* <ComponentFromWithAuthenticate /> */}
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/user">Log In</NavLink>
        </nav>
        {/* <Route path="/login" render={props => <LoginPage {...props}  />} /> */}
        {/* <Route path="/signup" component={SignUpInitial} /> */}
        <Route exact path="/home" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/company" render={props => <CompanyPage {...props} />} />
        <Route path="/user" render={props => <LoginPage {...props} />} />
      </div>
    );
  }
}

export default App;
