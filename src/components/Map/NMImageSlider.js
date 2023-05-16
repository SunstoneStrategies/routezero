import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import AZ1 from "./Images/AZ1.png";
import AZ2 from "./Images/AZ2.png";
import AZ3 from "./Images/AZ3.png";
import AZ4 from "./Images/AZ4.png";

function NMImageSlider(props) {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://via.placeholder.com/800x400/ff0000/ffffff",
      alt: "image1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/600x400/00ff00/ffffff",
      alt: "image2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/600x400/0000ff/ffffff",
      alt: "image3",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/600x400/0000ff/ffffff",
      alt: "image4",
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
            <img
              src={
                image.alt === "image4"
                  ? AZ4
                  : image.alt === "image3"
                  ? AZ3
                  : image.alt === "image2"
                  ? AZ2
                  : AZ1
              }
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NMImageSlider;
