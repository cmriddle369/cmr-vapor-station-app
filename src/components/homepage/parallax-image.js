import React from 'react';
import { Parallax } from 'react-parallax';

import vapeBackground from "./images/vapeBackground.png";
 
const ParallaxImage = () => (
    <Parallax className="parallax-background" y={[-20, 20]}
        bgImage={vapeBackground}
        bgAlt='vapor cloud'
        strength={500}
    >
    </Parallax>
);

// export default (ParallaxImage);


// const ParallaxImage = () => (
//     <div>
//         {/* -----basic config-----*/}
//         <Parallax
//             bgImage={vapeBackground}
//             bgImageAlt="vape-cloud"
//             strength={200}
//         >
//             {/* Put some text content here - even an empty div with fixed dimensions to have a height
//             for the parallax. */}
//             <div style={{ height: '200px' }} />
//         </Parallax>
 
//         {/* -----renderProp: "renderLayer"-----*/}
//         <Parallax
//             strength={400}
//             // renderLayer={percentage => (
//                 <div
//                     style={{
//                         backgroundAttachment: 'fixed',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundSize: 'cover',
//                         // background: `${percentage * 1})`,
//                         // left: '50%',
//                         // top: '50%',
//                         // width: percentage * 500,
//                         // height: percentage * 500,
//                     }}
//                 />
//             {/* )} */}
//         >
//         </Parallax>
//     </div>
// );
export default ParallaxImage;