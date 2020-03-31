import React, { Component  } from 'react';
import { NavLink } from "react-router-dom";

import juiceHeadLogo from "../images/juiceHeadLogo.png";
import juiceHead from "../images/juiceHead.png";

import pachaMamaLogo from "../images/pachaMamaLogo.png";
import pachaMama from "../images/pachaMama.png";

import glasBasixLogo from "../images/glasBasixLogo.png";
import glasBasix from "../images/glasBasix.png";

import nakedLogo from "../images/nakedLogo.png";
import naked from "../images/naked.png";

import twistLogo from "../images/twistLogo.png";
import twist from "../images/twist.png";

export default function Ejuice() {
    return (
        <div className='ejuice-wrapper'>
            <div className='product-link-wrapper'>
                <NavLink to="/" activeClassName ="nav-link-active">
                    <img src={juiceHeadLogo} />
                </NavLink>

                <NavLink to="/" activeClassName ="nav-link-active">
                    <img src={pachaMamaLogo} />
                </NavLink>

                <NavLink to="/" activeClassName ="nav-link-active">
                    <img src={glasBasixLogo} />
                </NavLink>

                <NavLink to="/" activeClassName ="nav-link-active">
                    <img src={nakedLogo} />
                </NavLink>

                <NavLink to="/" activeClassName ="nav-link-active">
                    <img src={twistLogo} />
                </NavLink>
                
                {/* <img src={juiceHead} /> */}
                
                {/* <img src={pachaMama} /> */}
                
                {/* <img src={glasBasix} /> */}
                
                {/* <img src={naked} /> */}
                
                {/* <img src={twist} /> */}
            </div>
        </div>
    )
}