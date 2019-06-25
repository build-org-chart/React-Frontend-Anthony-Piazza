import React from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";

import HomePage from "./components/HomeFeatures/HomePage";
import LoginPage from "./components/Login-SignUp-Auth/LoginPage";
// import withAuthenticate from './components/Login-SignUp-Auth/withAuthenticate';
import Profile from "./components/HomeFeatures/Profile";
import SignUpInitial from "./components/Login-SignUp-Auth/SignUpInitial";

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
        </nav>
        {/* <Route path="/login" render={props => <LoginPage {...props}  />} /> */}
        <Route exact path="/home" component={HomePage} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/signup" component={SignUpInitial} /> */}
        <Route path="/user" render={props => <LoginPage {...props} />} />
      </div>
    );
  }
}

export default App;
