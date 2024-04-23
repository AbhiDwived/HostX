import React, { useEffect } from 'react';
import '../../Style/Slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SharedHosting() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='shared-hosting-container d-flex justify-content-center'>
      <div className='shared-container'>
        <div className='row'>
          <div className='col-sm-10 mx-auto py-5 custom'>
            <div className='row mx-auto'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className="content-left">
                  <section>
                    <div>
                      <h1>Domain & Email Registration </h1>
                      <p>Your domain is the digital gateway to your online identity, making it crucial to understand and leverage essential domain features. Whether you're launching a personal blog, a business website, or an e-commerce platform, the right domain features can enhance your online presence, brand recognition, and overall user experience.</p>
                      <p>At HostX we provide you best service to choose your domain as per your need.</p>
                    </div>
                    <div data-aos="fade-down">
                    </div>
                  </section>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <img src="/images/home-slider/s1.png" className='img-fluid' style={{ width: '600px', height: '400px' }} alt="Shared Hosting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedHosting;
