import React from 'react';
import '../../pages/App/App.css'
import {
    Link
    } from 'react-router-dom';

const NavBar = ({props, handleGetUserLocation}) => (
        <div>
            <h2>Welcome </h2>
            <Link to='/signin'>Sign In</Link>
            <Link to='/weather'>
                <span onClick={handleGetUserLocation}  >Weather</span>
            </Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/'>Log Out</Link>
        </div>
)
export default NavBar