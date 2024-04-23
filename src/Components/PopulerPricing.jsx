import React, { useState, useEffect } from 'react';
import PopulerSlide1 from './Populer-Slide1';
import PopulerSlide2 from './Populer-Slide2';



import '../Style/PopulerPricing.css'; // Create a CSS file for your styles

function PopulerPricing() {
    const [activeSlider, setActiveSlider] = useState(0);
  
    const handleSliderChange = (index) => {
      setActiveSlider(index);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        const nextIndex = (activeSlider + 1) % 2; // Adjusted to match the number of slides
        handleSliderChange(nextIndex);
      }, 5000); // Adjust the interval as needed (5 seconds in this example)
  
      return () => clearInterval(interval);
    }, [activeSlider]);
  
    return (
      <div className="populer-container">
        <div className="text-center ">
            <h1>Populer Pricing</h1>
        </div>
        <div id="pageSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${activeSlider === 0 ? 'active' : ''}`}>
              <PopulerSlide1 />
            </div>
            <div className={`carousel-item ${activeSlider === 1 ? 'active' : ''}`}>
              <PopulerSlide2 />
            </div>
          </div>
          <div className="slider-indi-container">
            <div className="slider-indicators">
              <button
                className={`slider-indicator ${activeSlider === 0 ? 'active' : ''}`}
                onClick={() => handleSliderChange(0)}
              ></button>
              <button
                className={`slider-indicator ${activeSlider === 1 ? 'active' : ''}`}
                onClick={() => handleSliderChange(1)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default PopulerPricing;