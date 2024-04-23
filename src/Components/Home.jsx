import React, { useState, useEffect } from 'react';
import Domain from './HomeSlider/Domain';
import WebHosting from './HomeSlider/WebHosting';
import SSLCertificates from './HomeSlider/SSLCertificates';
import WebsiteBuilder from './HomeSlider/WebsiteBuilder';
import ManagedServices from './HomeSlider/ManagedServices';
import SecurityServices from './HomeSlider/SecurityServices';
import BackupSolutions from './HomeSlider/BackupSolutions';
import '../Style/CarouselStyles.css';
import Search from './Search';
import DomainFeatures from './DomainFeatures';
import Bestservices from './Bestservices';
import FeaturesIncluded from './FeaturesIncluded';
import LovedPeoples from './LovedPeoples';
import Newsletter from './Newsletter';
import OurotherServices from './OurotherServices';
import BackupSolution from './BackupSolution';
import Header from './Header';




function Home() {
  const [activeSlider, setActiveSlider] = useState(0);

  const handleSliderChange = (index) => {
    setActiveSlider(index);
  };

  useEffect(() => {
    // Auto slide every 5 seconds
    const intervalId = setInterval(() => {
      handleSliderChange((activeSlider + 1) % 7);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [activeSlider]);

  return (
    <div className='container-fluid'>
      <div className="home-container">
        <div id="pageSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${activeSlider === 0 ? 'active' : ''}`}>
              <Domain />
            </div>
            <div className={`carousel-item ${activeSlider === 1 ? 'active' : ''}`}>
              <WebHosting />
            </div>
            <div className={`carousel-item ${activeSlider === 2 ? 'active' : ''}`}>
              <SSLCertificates />
            </div>
            <div className={`carousel-item ${activeSlider === 3 ? 'active' : ''}`}>
              <WebsiteBuilder />
            </div>
            <div className={`carousel-item ${activeSlider === 4 ? 'active' : ''}`}>
              <ManagedServices />
            </div>
            <div className={`carousel-item ${activeSlider === 5 ? 'active' : ''}`}>
              <SecurityServices />
            </div>
            <div className={`carousel-item ${activeSlider === 6 ? 'active' : ''}`}>
              <BackupSolutions />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#pageSlider"
            data-bs-slide="prev"
            onClick={() => handleSliderChange((activeSlider - 1 + 7) % 7)} >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#pageSlider"
            data-bs-slide="next"
            onClick={() => handleSliderChange((activeSlider + 1) % 7)}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="slider-buttons">
            <button
              className={`slider-button ${activeSlider === 0 ? 'active' : ''}`}
              onClick={() => handleSliderChange(0)}
            >
              Domain
            </button>
            <button
              className={`slider-button ${activeSlider === 1 ? 'active' : ''}`}
              onClick={() => handleSliderChange(1)}
            >
              Web Hosting
            </button>

            <button
              className={`slider-button ${activeSlider === 2 ? 'active' : ''}`}
              onClick={() => handleSliderChange(2)}
            >
              SSL Certificates
            </button>
            <button
              className={`slider-button ${activeSlider === 3 ? 'active' : ''}`}
              onClick={() => handleSliderChange(3)}
            >
              Website Builder
            </button>
            <button
              className={`slider-button ${activeSlider === 4 ? 'active' : ''}`}
              onClick={() => handleSliderChange(4)}
            >
              Managed Services
            </button>
            <button
              className={`slider-button ${activeSlider === 5 ? 'active' : ''}`}
              onClick={() => handleSliderChange(5)}
            >
              Security Services
            </button>
            <button
              className={`slider-button ${activeSlider === 6 ? 'active' : ''}`}
              onClick={() => handleSliderChange(6)}
            >
              Backup Solutions
            </button>
          </div>

        </div>
      </div>


      <Search />
      <DomainFeatures />
      <Bestservices />
      <Newsletter />
      <OurotherServices />
      <FeaturesIncluded />
      <LovedPeoples />
      {/* <BackupSolution /> */}
      {/* <PopulerPricing /> */}
    </div>
  );
}

export default Home;
