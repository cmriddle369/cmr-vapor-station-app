import React from 'react';
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-left-side'>
                {/* copyright icon goes here */}
                {/* year established */}
                {/* company name, ie: Vapor Station. */}
                {/* all right reserved. */}
            </div>
            <div className='footer-right-side'>
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