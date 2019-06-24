import React from 'react';
import styled from 'styled-components';

import './Login.css'

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 35% 0px 35%;
    width: 50%;
    background-color: white;
    height: 200px;
    padding: 25px 1% 0px 1%;;
    border-radius: 10px;
`

const FormContainer = styled.div`
    display: flex;
`

const InputField = styled.input`
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid grey;
`

const Button = styled.button`
    margin-top: 10px;
    border-radius: 10px;
    background-color: #db6450;
    color: white;
    padding: 10px;
`


class Login extends React.Component {
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
            <FormContainer>
                <LoginForm>
                    <InputField
                    placeholder="Username"
                    onChange={this.handleChange}
                    type='text'
                    value={this.state.username}
                    name='username'
                    />
                    <InputField
                    placeholder="Password"
                    onChange={this.handleChange}
                    type='text'
                    value={this.state.password}
                    name='password'
                    />
                    <Button onClick={this.handleLogin}>Login</Button>
                </LoginForm>
            </FormContainer>
        )
    }
}

export default Login;