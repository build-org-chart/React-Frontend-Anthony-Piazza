import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Org from '../OrgChart/OrgChart';
 
import Profile from './Profile';

const HomePage = () => {
    return(
        <div className="homepage">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
            <Org />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/profile" component={Profile} />
      </div>
    )
}

export default HomePage;