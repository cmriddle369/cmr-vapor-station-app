import React from "react";

import HomeFeatured from "../homepage/home-featured";
import Slideshow from "./slideShow";

import ParallaxImage from "../homepage/parallax-image";
import { ParallaxProvider, withController } from "react-scroll-parallax";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="welcome-message-wrapper">
                <h2>Welcome to Vapor Station</h2>
                <p>3 Amazing locations with friendly and helpful staff</p>
            </div>
            <ParallaxProvider>
                {ParallaxImage()}
                <Slideshow />
                <HomeFeatured />
            </ParallaxProvider>
        </div>
    )
}

export default withController(Home);