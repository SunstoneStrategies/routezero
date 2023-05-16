import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import J1 from "./Images/J1.png";
import J2 from "./Images/J2.png";
import J3 from "./Images/J3.png";
import J4 from "./Images/J4.png";
import J5 from "./Images/J5.png";
import J6 from "./Images/J6.png";
import J7 from "./Images/J7.png";
import J8 from "./Images/J8.png";
import J9 from "./Images/J9.png";
import J10 from "./Images/J10.png";
import J11 from "./Images/J11.png";
import J12 from "./Images/J12.png";
import J13 from "./Images/J13.png";

function JlImageSlider(props) {
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
    {
      id: 5,
      src: "https://via.placeholder.com/800x400/ff00ff/ffffff",
      alt: "image5",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/600x400/ffff00/ffffff",
      alt: "image6",
    },
    {
      id: 7,
      src: "https://via.placeholder.com/600x400/00ffff/ffffff",
      alt: "image7",
    },
    {
      id: 8,
      src: "https://via.placeholder.com/600x400/ff0000/ffffff",
      alt: "image8",
    },
    {
      id: 9,
      src: "https://via.placeholder.com/800x400/ff00ff/ffffff",
      alt: "image9",
    },
    {
      id: 10,
      src: "https://via.placeholder.com/600x400/ffff00/ffffff",
      alt: "image10",
    },
    {
      id: 11,
      src: "https://via.placeholder.com/600x400/00ffff/ffffff",
      alt: "image11",
    },
    {
      id: 12,
      src: "https://via.placeholder.com/600x400/ff0000/ffffff",
      alt: "image12",
    },
    {
      id: 13,
      src: "https://via.placeholder.com/800x400/ff00ff/ffffff",
      alt: "image13",
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
                  ? J4
                  : image.alt === "image3"
                  ? J3
                  : image.alt === "image2"
                  ? J2
                  : image.alt === "image5"
                  ? J5
                  : image.alt === "image6"
                  ? J6
                  : image.alt === "image7"
                  ? J7
                  : image.alt === "image8"
                  ? J8
                  : image.alt === "image9"
                  ? J9
                  : image.alt === "image10"
                  ? J10
                  : image.alt === "image11"
                  ? J11
                  : image.alt === "image12"
                  ? J12
                  : image.alt === "image13"
                  ? J13
                  : J1
              }
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default JlImageSlider;
