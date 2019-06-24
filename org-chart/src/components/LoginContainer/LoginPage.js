import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SignUp from '../../components/SignUp';
import Login from '../LoginContainer/Login';
import './Login.css'

const LoginPageDiv = styled.div`
    background-color: #da6351;
    height: 100vh;
`

const TagLine = styled.h3`
    color: white;
    margin-top: -60px;
    font-weight: lighter;
`

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            name:'',
            manager:'',
            departmentHead:'',
            department:'',
            title:'',
            company:''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleLogin = e => {
        const username = this.state.username;
        localStorage.setItem('username', username);
        window.location.reload();
    };
    render(){
        return(
             <LoginPageDiv>
                <img src="../../imgs/logo.jpg" alt="Logo"/>
                <TagLine>A Better Way to Make Decisions</TagLine>
                <NavLink className="user-type" to="/signup">New User</NavLink>
                <NavLink className="user-type" to="/login" >Returning User</NavLink>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
            </LoginPageDiv>
        )
    }
}

export default LoginPage;