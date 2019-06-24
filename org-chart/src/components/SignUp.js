import React from 'react';
import styled from 'styled-components';


const FormContainer = styled.div`
    display: flex;
`

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 35% 0px 35%;
    width: 50%;
    background-color: white;
    height: 450px;
    padding: 25px 5% 0px 5%;
    border-radius: 10px;
`

const Input = styled.input`
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
    :hover{
        opacity: 1;
    }
`

class SignUp extends React.Component {
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
                <SignUpForm>
                    <Input
                        placeholder="Username"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.username}
                        name='username'
                    />
                    <Input
                        placeholder="Password"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.password}
                        name='password'
                    />                
                    <Input
                        placeholder="Your Company"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.company}
                        name='company'
                    />
                    <Input
                        placeholder="Your Name"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.name}
                        name='name'
                    />
                    <Input
                        placeholder="Your Title"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.title}
                        name='title'
                    />
                    <Input
                        placeholder="Your Manager"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.manager}
                        name='manager'
                    />
                    <Input
                        placeholder="Your Department"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.department}
                        name='department'
                    />
                    <Input
                        placeholder="Your Department Head"
                        onChange={this.handleChange}
                        type='text'
                        value={this.state.departmentHead}
                        name='departmentHead'
                    />
                    <Button onClick={this.handleLogin}>Register</Button>
                </SignUpForm>
            </FormContainer>
        )
    }
}

export default SignUp;