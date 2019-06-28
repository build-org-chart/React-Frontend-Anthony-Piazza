import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { history } from "../../helpers/history";

import { getAllCompanies, addUserToCompany } from "../../actions";

const Select = styled.select`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  :invalid {
    color: gray;
  }
  :first {
    color: grey;
  }
`;
const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #36393f;
  color: white;
  padding: 10px;
  border: 1px solid white;
  :hover{
    background-color: #db6450;
    color: white;
    cursor: pointer;
  }
`;

const JoinCompanyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 10% 0px 10%;
  height: 110px;
  padding: 5px 1% 2px 1%;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  display: flex;
`;

class JoinCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    this.props.getAllCompanies();
  }
  //   componentDidUpdate() {
  //     console.log(this.props.companies);
  //   }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleJoin = e => {
    e.preventDefault();
    let companyToJoin = this.props.companies.filter(
      company => company.name === this.state.name
    )[0];
    console.log(companyToJoin);
    this.props.addUserToCompany(
      companyToJoin,
      this.props.userID,
      this.props.history
    );

    // this.props.history.push("/home");
  };
  render() {
    return (
      <FormContainer>
        <JoinCompanyForm>
          <Select
            required
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Select your Company...
            </option>
            {this.props.companies.map(company => {
              return (
                <option name="name" value={company.name} key={company.id}>
                  {company.name}
                </option>
              );
            })}
          </Select>
          <Button onClick={this.handleJoin}>View My Company Chart</Button>
        </JoinCompanyForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    companies: state.companies,
    userID: state.user.id
  };
};

export default connect(
  mapStateToProps,
  { history, getAllCompanies, addUserToCompany }
)(JoinCompany);
