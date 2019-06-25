import React from 'react';
import Org from './OrgChart';
import styled from 'styled-components';

const HomePageDiv = styled.div`
    height: 100vh;
    background-color: #db6450;
    color: white;
    padding-top: 80px;
`

const HomePage = () => {
    return(
        <HomePageDiv>
            <Org />
      </HomePageDiv>
    )
}

export default HomePage;