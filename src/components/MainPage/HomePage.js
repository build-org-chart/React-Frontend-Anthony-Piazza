import React from "react";
import Org from "./OrgChart";
import styled from "styled-components";
import CompanyPage from "../Login-SignUp/CompanyPage.js";
import { connect } from "react-redux";

const HomePageDiv = styled.div`
  height: 100vh;
  background-color: #db6450;
  color: white;
  padding-top: 80px;
`;

const HomePage = props => {
  return (
    <HomePageDiv>
      {props.account_type === 0 ? (
        <CompanyPage />
      ) : (
        <Org
          searchMemberID={props.searchMemberID}
          userSearch={props.userSearch}
          history={props.history}
        />
      )}
    </HomePageDiv>
  );
};

const mapStateToProps = state => {
  return {
    account_type: state.user.account_type
  };
};

export default connect(
  mapStateToProps,
  {}
)(HomePage);
