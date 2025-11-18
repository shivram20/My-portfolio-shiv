// Slider.js
import React, { useState } from "react";
import './Css/Home.css'; // Import the CSS file

const Slider = () => {
const images = [
    { src: "./slide1.jpg", text: "First Slide Text" },
    { src: "./slide2.jpg", text: "First Slide Text" },
    { src: "./slide3.jpg", text: "Second Slide Text" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <>
<div className="slider">
      <button className="prev" onClick={prevSlide}>
        ←
      </button>
      <div className="slider-images">
        <img src={images[currentIndex].src} alt="slider" />
        <div className="slider-text">{images[currentIndex].text}</div>
      </div>
      <button className="next" onClick={nextSlide}>
        →
      </button>
    </div>
    <div className="box">
      <h2>HII I AM SHIVRAM</h2>
      
    </div>
    <div className="names">
      <h2>VASAVA SHIVRAM RAMESH</h2>
      <h4>Welcome on My Portfolio Site</h4>
      <div className="mediaLinks">
        <a href="https://www.linkedin.com/in/shivram-vasava-a5a7612a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >Linkedin</a>
        <a href="https://www.instagram.com/shivram_20x?igsh=MWo5ZzJxdjd3dW5ieg==" >Instagram</a>
      </div>
    </div>
  </>
  );
};

export default Slider;
