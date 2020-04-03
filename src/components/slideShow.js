import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

import ladyVaping from './images/ladyVaping.jpg';
import vapeCar from './images/vapeCar.png';
import vapeStuff from './images/vapeStuff.jpg';

export default class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      slideImages: [
        ladyVaping,
        vapeCar,
        vapeStuff
      ]
    };
  }

  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      arrows: false,
      indicators: true,
      pauseOnHover: true,
      onChange: (oldIndex, newIndex) => {
        console.log(
          `Slide transition finished from ${oldIndex} to ${newIndex}`
        );
      }
    };
    const { slideImages } = this.state;
    return (
      <div className="styles" style={{ backgroundColor: "#8a8a8a", height: 350}}>
        <div className="slide-container">
          <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <div style={{ backgroundImage: `url(${each})`}}>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <br />
      </div>
    );
  }
}