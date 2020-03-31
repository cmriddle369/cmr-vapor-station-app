import React from 'react';

import HomeFeatured from '../homepage/home-featured';

import ParallaxImage from '../parallax-image';
import { ParallaxProvider, withController } from 'react-scroll-parallax';
import VapeCarousel from '../carousel';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <ParallaxProvider>
                {/* {ParallaxImage()} */}
                <HomeFeatured />
                {/* <VapeCarousel /> */}
                {/* TODO: greeting message, featured products section */}
            </ParallaxProvider>
        </div>
    )
}

export default withController(Home);