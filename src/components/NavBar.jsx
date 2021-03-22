import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/octocat2.png';


const NavBar = () => {
    return(
        <Fragment >
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <Link to ="/github-search" className="navbar-brand">
                    <img src={image} alt="octocat width" className="d-inline-block align-bottom mr-2"/>
                    GitHub Search
                </Link>
                <div className="collapse navbar-collapse mt-2" id="navbarToggler">
                    <div className="navbar-nav mr-auto">
                        <Link to="/users" className="nav-item nav-link">Profile</Link>
                        <Link to ="/repos" className="nav-item nav-link">Repos</Link>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};


export default NavBar;