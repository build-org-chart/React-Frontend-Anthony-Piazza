import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { addEmployeeToCompany } from "../../actions";

const FormContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #db6450;
  color: white;
  padding-top: 20px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 35% 0px 35%;
  width: 50%;
  background-color: white;
  height: 450px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #db6450;
  color: white;
  padding: 10px;
`;
class AddMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      full_name: "",
      title: "",
      email: "",
      company_id: this.props.company_id
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddMember = e => {
    e.preventDefault();

    this.props.addEmployeeToCompany(this.state, this.props.history);
  };
  render() {
    return (
      <FormContainer>
        <SignUpForm>
          <Input
            placeholder="Username"
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            name="username"
          />
          <Input
            placeholder="Email"
            onChange={this.handleChange}
            type="text"
            value={this.state.email}
            name="email"
          />
          <Input
            placeholder="Password"
            onChange={this.handleChange}
            type="text"
            value={this.state.password}
            name="password"
          />
          <Input
            placeholder="Full Name"
            onChange={this.handleChange}
            type="text"
            value={this.state.full_name}
            name="full_name"
          />
          <Input
            placeholder="Your Title"
            onChange={this.handleChange}
            type="text"
            value={this.state.title}
            name="title"
          />

          <Button onClick={this.handleAddMember}>Add Member</Button>
        </SignUpForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_id: state.user.company_id
  };
};

export default connect(
  mapStateToProps,
  { addEmployeeToCompany }
)(AddMember);
