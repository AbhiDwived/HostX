import React, { useState, useEffect } from 'react';
import PeoplesSlide1 from './Peoples-Slide1';
import PeoplesSlide2 from './Peoples-Slide2';
import PeoplesSlide3 from './Peoples-Slide3';


import '../Style/LovedPeoples.css'; // Create a CSS file for your styles

function LovedPeoples() {
  const [activeSlider, setActiveSlider] = useState(0);

  const handleSliderChange = (index) => {
    setActiveSlider(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeSlider + 1) % 3; // Adjusted to match the number of slides
      handleSliderChange(nextIndex);
    }, 5000); // Adjust the interval as needed (5 seconds in this example)

    return () => clearInterval(interval);
  }, [activeSlider]);

  return (
    <div className="home-container">
      <div id="pageSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${activeSlider === 0 ? 'active' : ''}`}>
            <PeoplesSlide1 />
          </div>
          <div className={`carousel-item ${activeSlider === 1 ? 'active' : ''}`}>
            <PeoplesSlide2 />
          </div>
          <div className={`carousel-item ${activeSlider === 2 ? 'active' : ''}`}>
            <PeoplesSlide3 />
          </div>
        </div>
        <div className="slider-indicators-container">
          <div className="slider-indicators">
            <button
              className={`slider-indicator ${activeSlider === 0 ? 'active' : ''}`}
              onClick={() => handleSliderChange(0)}
            ></button>
            <button
              className={`slider-indicator ${activeSlider === 1 ? 'active' : ''}`}
              onClick={() => handleSliderChange(1)}
            ></button>
            <button
              className={`slider-indicator ${activeSlider === 2 ? 'active' : ''}`}
              onClick={() => handleSliderChange(2)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LovedPeoples;