import React from 'react';

import aegisLegend from "../images/aegisLegend.jpg";
import voopooMod from "../images/voopooMod.jpg";
import horizonTank from "../images/horizonTank.png";
import nordPod from "../images/nordPod.png";
import wocketPod from "../images/wocketPod.jpg";
import galaPod from "../images/galaPod.jpg";
import freemaxCoils from "../images/freemaxCoils.jpg";
import falconCoils from "../images/falconCoils.jpg";
import aegisKit from "../images/aegisKit.jpg";
import tfv16Tank from "../images/tfv16Tank.jpg";
import smok40Coils from "../images/smok40Coils.jpg";

export default function Products() {
    return (
        <div className='products-wrapper'>
            {/* Mods */}
            <img src={aegisLegend} />
            <img src={voopooMod} />
            <img src={aegisKit} />

            <img src={nordPod} />
            <img src={wocketPod} />
            <img src={galaPod} />

            {/* Tanks */}
            <img src={horizonTank} />
            <img src={tfv16Tank} />
            
            {/* Coils */}
            <img src={freemaxCoils} />
            <img src={falconCoils} />
            <img src={smok40Coils} />
        </div>
    )
}