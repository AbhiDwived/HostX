import React from 'react';
import '../Style/Slider.css';

function VideoSlider() {
  return (
    <div className="video-slider-container d-flex justify-content-center align-items-center">
      <div className class="video-container">
        <div className='row'>
          <div className='col-sm-8 mx-auto' >
            <div className="content-center">
              <section>
                <h1>Background</h1>
                <h2>Video Slider</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eaque explicabo
                  blanditiis, commodi repellat cupiditate magni dolorem nulla porro.</p>
                <a href="#" class="custom-button">View Details</a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSlider;
