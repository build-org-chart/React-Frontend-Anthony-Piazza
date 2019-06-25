import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

import CreateCompany from './CreateCompany';
import JoinCompany from './JoinCompany';

const ProfilePageDiv = styled.div`
    height: 100vh;
    background-color: #db6450;
`

const Instruction = styled.p`
    color: white;
    margin-top: 40px;
    font-weight: lighter;
`

const UserType = styled(NavLink)`
    background-color: white;
    border-radius: 10px;
    padding: 5px 1%;
    margin: 10px 2% 0px 2%;
    color: black;
    font-weight: light;
    :hover{
        background-color: #36393f;
        color: white;
    }
`



const Profile = () => {
    return(
        <ProfilePageDiv className="profile">
            <h1>Welcome, (username here)</h1>
            <Instruction>You aren't a part of a company yet!</Instruction>
            <Instruction>*Select an option to continue.*</Instruction>
            <UserType activeClassName="user-type" to="/profile/create">Create a Company</UserType>
            <UserType activeClassName="user-type" to="/profile/join" >Join a Company</UserType>
            <Route path="/profile/create" component={CreateCompany} />
            <Route path="/profile/join" component={JoinCompany} />
        </ProfilePageDiv>
    )
}

export default Profile;