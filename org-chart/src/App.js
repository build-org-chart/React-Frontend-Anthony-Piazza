import React from 'react';
// import axios from 'axios';

import './App.css';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginContainer/LoginPage';
import withAuthenticate from './components/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(HomePage)(LoginPage);

class App extends React.Component{
  constructor(){
    super();
    this.state={
      members:[],
      error: []
    }
  }
  // componentDidMount(){
  //   axios
  //     .get('')
  //     .then(res => {
  //       this.setState({ members: res.data })
  //     })
  //     .catch(err => {
  //       this.setState({ error: err.response.message })
  //     })
  // }
  render(){
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
