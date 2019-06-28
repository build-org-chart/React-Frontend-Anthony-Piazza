import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { createCompany } from "../../actions/index.js";

import { history } from "../../helpers/history";
import { colors } from "../../styles";

const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #db6450;
  color: white;
  padding: 10px;
  border: 1px solid grey;
`;
const CreateCompanyForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 35% 0px 35%;
  width: 30%;
  background-color: white;
  height: 120px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
`;
const Input = styled.input`
  padding: 11px 10px 11px 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

class CreateCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreate = e => {
    e.preventDefault();
    // console.log(this.state.company_name);
    this.props.createCompany(this.state, this.props.userID);
    // // this.setState({ company_name: this.state.company_name });
    // this.props.history.push("/home");
  };
  render() {
    return (
      <CreateCompanyForm>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Company Name"
        />
        <Button onClick={this.handleCreate}>Create My Company Chart</Button>
      </CreateCompanyForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    userID: state.user.id
  };
};

export default connect(
  mapStateToProps,
  { history, createCompany }
)(CreateCompany);
