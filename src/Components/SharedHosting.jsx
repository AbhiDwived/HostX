import React, { useEffect } from 'react';
import '../Style/Slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SharedHosting() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='shared-hosting-container d-flex justify-content-center align-items-center'>
      <div className='shared-container'>
        <div className='row'>
          <div className='col-sm-8 mx-auto'>
            <div className='row mx-auto'>
              <div className='col-sm-6 '>
                <div className="content-left">
                  <section>
                    <div>
                      <h1>Shared </h1>
                      <h2>Hosting Services</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eaque explicabo
                        blanditiis, commodi repellat cupiditate magni dolorem nulla porro.</p>
                    </div>
                    <div data-aos="fade-down">
                      <button className='custom-button'>
                         {/* style={{ backgroundColor: '#202736', color: '#fff', padding: '10px 20px', textDecoration: 'none', display: 'inline-block',  transition: 'background-color 0.3s ease' }}> */}
                        View Details
                      </button>

                    </div>
                  </section>
                </div>
              </div>
              <div className='col-sm-6'>
                <img src="/images/home-slider/slider-item-01.png" className='img-fluid ' alt="Shared Hosting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedHosting;
