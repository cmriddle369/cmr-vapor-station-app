import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "axios";


import vapeLogo from "./images/vapeLogo.jpg";

const Navbar = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };
    
    
    return (
        <div className='navbar-wrapper'>
            <div className="left-side">
                <div>
                    <NavLink exact to="/">
                        <img src={vapeLogo} alt="logo"></img>
                    </NavLink>
                </div>
                
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName ="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/advocacy" activeClassName ="nav-link-active">
                        Advocacy
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/products" activeClassName ="nav-link-active">
                        Products
                    </NavLink>
                </div>
                

                <div className="nav-link-wrapper">
                    <NavLink exact to="/ejuice" activeClassName ="nav-link-active">
                        E-Juice
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/contact" activeClassName ="nav-link-active">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar);