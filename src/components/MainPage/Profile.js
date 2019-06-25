import React from 'react';
import styled from 'styled-components';

const ProfilePageDiv = styled.div`
    height: 100vh;
    background-color: #db6450;
    color: white;
    padding-top: 20px;
`

const Profile = () => {
    return(
        <ProfilePageDiv className="profile">
            <h1>Welcome, (username here) to your profile. </h1>
        </ProfilePageDiv>
    )
}

export default Profile;