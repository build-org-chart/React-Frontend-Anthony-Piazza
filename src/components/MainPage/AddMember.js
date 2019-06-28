import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { addEmployeeToCompany } from "../../actions";

import BGimg from "../../imgs/triangles.jpg";

const FormContainer = styled.div`
  display: flex;
  background-color: #36393f;
  margin: 0px 35% 0px 35%;
  padding: 0px 0%;
  border-radius: 10px;
  opacity:0.95;
`

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 10% 0px 10%;
  height: 310px;
  padding: 5px 1% 2px 1%;
  border-radius: 10px;
`;

const ContentDiv = styled.div`
  height: 100vh;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 280px;
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
:hover{
  background-color: #db6450;
  color: white;
  cursor: pointer;
}
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
      <ContentDiv>
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
      </ContentDiv>
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
