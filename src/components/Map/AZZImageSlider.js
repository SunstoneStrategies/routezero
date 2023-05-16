import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import AZ01 from "./Images/AZ01.png";

function AZZImageSlider(props) {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://via.placeholder.com/800x400/ff0000/ffffff",
      alt: "image1",
    },
  ]);

  // settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // add arrow navigation
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // custom arrow components
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-20px" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-20px", color: "black" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  return (
    <div className="image-slider">
      <button
        type="button"
        className="close-btn"
        onClick={props.handleClose}
        style={{
          backgroundColor: "#fff",
          border: "none",
          color: "#000",
          fontSize: "24px",
          fontWeight: "bold",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 999,
        }}
      >
        X
      </button>
      <Slider {...settings} style={{ width: "100%" }}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={AZ01} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AZZImageSlider;
