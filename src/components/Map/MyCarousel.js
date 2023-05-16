import React, { useState } from "react";
import "./MyCarousel.css";
import { Carousel } from "react-bootstrap";

function MyCarousel(props) {
  return (
    <div>
      <Carousel>
        {props.Images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
