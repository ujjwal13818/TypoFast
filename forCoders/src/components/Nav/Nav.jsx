import React from "react";
import logo from './../../Assets/logo.jpeg'
import './Nav.css';
const Nav = () => {
    return(
        <div className="nav-container">
            <div className="nav-left">
              <img className="flash-logo" src={logo} alt="logo" />
              <p className="flash-logo-text">
                Typofast.
              </p>
            </div>
              <div className="nav-right">
                <a
                className="nav-linkedin-link"
                href="http://localhost:2500/features">Go Back</a>
            </div>
        </div>
    )
}

export default Nav;