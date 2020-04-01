import React from "react";
import { Parallax } from "react-parallax";

import vapeBackground from "../images/vapeBackground.png";
 
const ParallaxImage = () => (
    <Parallax className="parallax-background" y={[-20, 20]}
        bgImage={vapeBackground}
        bgAlt="vapor cloud"
        strength={500}
    >
    </Parallax>
);

export default ParallaxImage;