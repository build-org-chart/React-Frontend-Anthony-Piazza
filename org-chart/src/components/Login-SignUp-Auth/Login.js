import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { history } from '../../helpers/history';
import { login } from '../../actions';

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
    border: 1px solid grey;
`

const Select = styled.select`
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    :invalid { 
        color: gray; 
    }
    :first{
        color: grey;
    }
`

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            credentials:{
                email: '',
                password: ''
            }
        }
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
        this.props.login(this.state.credentials)
    };

    render(){
        return(
            <FormContainer>
                <LoginForm>
                    <Select 
                        required 
                        name='company_type' 
                        value={this.state.company_type} 
                        onChange={this.handleChange}>
                            <option value="" disabled selected>Select your Company...</option>
                            <option value="agribusiness">Agribusiness</option>
                            <option value="communications-electronics">Communications & Electronic Goods</option>
                            <option value="construction">Construction</option>
                            <option value="defense">Defense</option>
                            <option value="energy-natural-resources">Energy & Natural Resources</option>
                            <option value="finance-insurance-real-estate">Finance, Insurance, & Real Estate</option>
                            <option value="food-beverage">Food & Beverage</option>
                            <option value="health">Health</option>
                            <option value="labor">Labor</option>
                            <option value="law-lobbyists">Law & Lobbyists</option>
                            <option value="misc">Misc Business</option>
                            <option value="other">Other</option>
                            <option value="technology">Technology</option>
                            <option value="transportation">Transportation</option>
                    </Select>
                    <InputField
                    placeholder="Email"
                    onChange={this.handleChange}
                    type='text'
                    value={this.state.email}
                    name='email'
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

const mapStateToProps = state => {
    return{
        error: state.error,
        loggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { login, history })(Login);