import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <Fragment >
            <nav className="navbar row bg-dark justify-content-start">
                <Link to ="/github-search" className="navbar-brand bg-dark col-2 text-white text-left ml-2">Home</Link>
                <Link to="/users" className="navbar-brand bg-dark col-2 text-white text-left">Profile</Link>
                <Link to ="/repos" className="navbar-brand bg-dark col-2 text-white text-left">Repos</Link>
            </nav>
        </Fragment>
    );
};


export default NavBar;