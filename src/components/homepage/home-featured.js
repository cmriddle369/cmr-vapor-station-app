import React from "react";
import { NavLink } from "react-router-dom";

import aegisKit from "../images/aegisKit.jpg";
import tfv16Tank from "../images/tfv16Tank.jpg";
import smokCoils from "../images/smokCoils.jpg";

export default function HomeFeatured() {
    return (
        <div className="home-featured-wrapper">
            <h2>Featured Products: </h2>
            <div className="featured-mod">
                <NavLink exact to="/products">
                    <img src={aegisKit} alt="featured-mod"></img>
                </NavLink>

                <div className="mod-description">
                    <p>
                        Aegis Kit Mod
                    </p>
                </div>
            </div>

            <div className="featured-tank">
                <NavLink exact to="/products">
                    <img src={tfv16Tank} alt="featured-tank"></img>
                </NavLink>

                <div className="tank-description">
                    <p>
                        TFV16 Tank
                    </p>
                </div>
            </div>

            <div className="featured-coils">
                <NavLink exact to="/products">
                    <img src={smokCoils} alt="featured-coils"></img>
                </NavLink>

                <div className="coils-description">
                    <p>
                        Smok Coils
                    </p>
                </div>
            </div>
        </div>
    )
}