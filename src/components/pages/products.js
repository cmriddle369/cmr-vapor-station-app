import React from "react";

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
import smokCoils from "../images/smokCoils.jpg";

export default function Products() {
    return (
        <div className="products-wrapper">
            <h2>Mods</h2>
            <div className="mods-wrapper">
                <img src={aegisLegend} width={200} height={200} />
                <img src={voopooMod} width={200} height={200} />
                {/* <img src={aegisKit} width={400} height={400} /> */}
                <img src={nordPod} width={200} height={200} />
                {/* <img src={wocketPod} width={400} height={400} /> */}
                {/* <img src={galaPod} width={400} height={400} /> */}
            </div>

            <h2>Tanks</h2>
            <div className="tanks-wrapper">
                <img src={horizonTank} width={200} height={200} />
                <img src={tfv16Tank} width={200} height={200} />
            </div>
            
            <h2>Coils</h2>
            <div className="coils-wrapper">
                <img src={freemaxCoils} width={200} height={200} />
                <img src={falconCoils} width={200} height={200} />
                {/* <img src={smokCoils} width={200} height={200} /> */}
            </div>
        </div>
    )
}