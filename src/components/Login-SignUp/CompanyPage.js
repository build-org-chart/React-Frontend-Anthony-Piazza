import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

import CreateCompany from './CreateCompany';
import JoinCompany from './JoinCompany';
import BGimg from "../../imgs/triangles.jpg";


const AddCompanyPageDiv = styled.div`
  height: 100vh;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

const Instruction = styled.p`
    color: white;
    padding-bottom: 15px;
    font-weight: lighter;
    font-size: .7rem;
`

const UserType = styled(NavLink)`
    background-color: #36393f;
    border-radius: 10px;
    padding: 5px 1%;
    margin: 10px 2% 0px 2%;
    color: white;
    font-weight: light;
    font-size: .8rem;
    border: 1px white solid;
    border-radius: 10px;
    :hover {
    background-color: #db6450;
    color: white;
    }
`;

const ContentDiv = styled.div`
    background-color: #36393f;
    margin: 86px 35% 0px 35%;
    padding: 20px 0%;
    border-radius: 10px;
    opacity:0.95;
`

const H1 = styled.h1`
    color: white;
    padding-top: 15px;
`
const ContentDivHeader = styled.div`
    background-color: #db6450;
    margin: -20px 44.8% 0px 44.8%;
    padding-top: 50px;
`


const CompanyPage = () => {
    return(
        <AddCompanyPageDiv>
            <ContentDivHeader>
                <H1>Welcome!</H1>
                <Instruction>You aren't a part of a company yet!</Instruction>
            </ContentDivHeader>
            <ContentDiv>    
                <Instruction>SELECT AN OPTION TO CONTINUE</Instruction>
                <UserType activeClassName="user-type" to="/company/create">Create Company</UserType>
                <UserType activeClassName="user-type" to="/company/join" >Join Company</UserType>
                <Route path="/company/create" component={CreateCompany} />
                <Route path="/company/join" component={JoinCompany} />
            </ContentDiv>
        </AddCompanyPageDiv>
    )
}

export default CompanyPage;