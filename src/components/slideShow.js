import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

import ladyVaping from './images/ladyVaping.jpg';
import vapeCar from './images/vapeCar.jpg';
import vapeJuice from './images/vapeJuice.jpg';
import vapeOn from './images/vapeOn.jpg';

export default class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      slideImages: [
        ladyVaping,
        vapeCar,
        vapeJuice,
        vapeOn
      ]
    };
  }

  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
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
      <div>
        <div className="slide-container">
          <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <div style={{ backgroundImage: `url(${each})` }}>
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