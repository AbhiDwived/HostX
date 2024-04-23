import React, { useEffect } from 'react';
import '../../Style/Slider.css';
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
          <div className='col-sm-8 mx-auto custom'>
            <div className='row mx-auto'>
              <div className='col-lg-6 col-md-12 col-sm-12 '>
                <div className="content-left">
                  <section>
                    <div>
                      <h1>Cloud </h1>
                      <h2>Hosting </h2>
                      <p>Cloud-based hosting solutions for scalability and fl exibility.</p>
                    </div>
                    <div data-aos="fade-down">
                      

                    </div>
                  </section>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <img src="/images/home-slider/cloud.jpg" className='img-fluid ' alt="Shared Hosting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedHosting;
