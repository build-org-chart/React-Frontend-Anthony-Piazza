import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { history } from "../../helpers/history";

import { getAllCompanies } from "../../actions";

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
  background-color: #db6450;
  color: white;
  padding: 10px;
  border: 1px solid grey;
`;

const JoinCompanyForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 35% 0px 35%;
  width: 30%;
  background-color: white;
  height: 120px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
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
    // this.props.history.push("/home");
  };
  render() {
    return (
      <JoinCompanyForm>
        <Select
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        >
          {this.props.companies.map(company => {
            return (
              <option name="name" value={company.name} key={company.id}>
                {company.name}
              </option>
            );
          })}

          {/* <option value="" disabled selected>
            Select your Company...
          </option>
          <option value="agribusiness">Agribusiness</option>
          <option value="communications-electronics">
            Communications & Electronic Goods
          </option>
          <option value="construction">Construction</option>
          <option value="defense">Defense</option>
          <option value="energy-natural-resources">
            Energy & Natural Resources
          </option>
          <option value="finance-insurance-real-estate">
            Finance, Insurance, & Real Estate
          </option>
          <option value="food-beverage">Food & Beverage</option>
          <option value="health">Health</option>
          <option value="labor">Labor</option>
          <option value="law-lobbyists">Law & Lobbyists</option>
          <option value="misc">Misc Business</option>
          <option value="other">Other</option>
          <option value="technology">Technology</option>
          <option value="transportation">Transportation</option> */}
        </Select>
        <Button onClick={this.handleJoin}>View My Company Chart</Button>
      </JoinCompanyForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    companies: state.companies
  };
};

export default connect(
  mapStateToProps,
  { history, getAllCompanies }
)(JoinCompany);
