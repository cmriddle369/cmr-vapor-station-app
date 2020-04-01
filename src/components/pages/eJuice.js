import React, { Component  } from "react";

import juiceHead from "../images/juiceHead.png";

import pachaMama from "../images/pachaMama.png";

import glasBasix from "../images/glasBasix.png";

import naked from "../images/naked.png";

import twist from "../images/twist.png";

export default function Ejuice() {
    return (
        <div className="ejuice-wrapper">
            <div className="product-link-wrapper">
                <h1>eJuice</h1>
                <h2>Juice Head</h2>
                <div className="juiceHead-wrapper">
                    <img src={juiceHead} width={200} height={300}></img>
                </div>

                <h2>Pacha Mama</h2>
                <div className="pachaMama-wrapper">
                    <img src={pachaMama} width={200} height={100}></img>
                </div>

                <h2>Glas Basix</h2>
                <div className="glasBasix-wrapper">
                    <img src={glasBasix}></img>
                </div>

                <h2>Naked</h2>
                <div className="naked-wrapper">
                    <img src={naked}></img>
                </div>
                
                <h2>Twist</h2>
                <div className="twist-wrapper">
                    <img src={twist}></img>
                </div>
            </div>
        </div>
    )
}