import React from 'react';
import { NavLink } from 'react-router-dom';

import aegisKit from "../images/aegisKit.jpg";
import tfv16Tank from "../images/tfv16Tank.jpg";
import smokCoils from "../images/smokCoils.jpg";

export default function HomeFeatured() {
    return (
        <div className='home-featured-wrapper'>
            {/* TODO => Add featured header */}
            <div className="featured-mod">
                <NavLink exact to="">
                    <img src={aegisKit} alt="featured-mod"></img>
                </NavLink>

                <div className="mod-description">
                    <p>
                        Some cool info
                    </p>
                </div>
            </div>

            <div className="featured-tank">
                <NavLink exact to="">
                    <img src={tfv16Tank} alt="featured-tank"></img>
                </NavLink>

                <div className="tank-description">
                    <p>
                        Some cool info
                    </p>
                </div>
            </div>

            <div className="featured-coils">
                <NavLink exact to="">
                    <img src={smokCoils} alt="featured-coils"></img>
                </NavLink>

                <div className="coils-description">
                    <p>
                        Some cool info
                    </p>
                </div>
            </div>
        </div>
    )
}