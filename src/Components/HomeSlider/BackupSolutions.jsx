import React, { useEffect } from 'react';
import '../../Style/Slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SharedHosting() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='shared-hosting-container d-flex justify-content-center  '>
      <div className='shared-container'>
        <div className='row'>
          <div className='col-sm-10 mx-auto py-5 custom'>
            <div className='row mx-auto'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className="content-left">
                  <section>
                    <div>
                      <h1>Backup Solutions</h1>
                      <p>In today's digital age, safeguarding your valuable data is more critical than ever. Whether you're a business handling sensitive information or an individual preserving cherished memories, investing in reliable backup solutions is a non-negotiable aspect of digital hygiene.</p>
                      <p>At Hostx we always keep advice</p>
                    </div>
                    <div data-aos="fade-down">
                    </div>
                  </section>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <img src="/images/home-slider/s7.png" className='img-fluid' style={{ width: '600px', height: '400px' }} alt="Shared Hosting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedHosting;
