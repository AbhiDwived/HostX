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
                      <h1>SSL Certificates</h1>
                      <p>In the expansive realm of cybersecurity, SSL (Secure Sockets Layer) stands as a cornerstone technology, providing a secure and encrypted connection between users and websites. This encryption protocol ensures the confidentiality and integrity of data transmitted over the internet. Let's delve into the world of SSL and comprehend its significance in securing online communication.</p>
                      <p>At HostX we provide safest service for your business</p>
                    </div>
                    <div data-aos="fade-down">
                    </div>
                  </section>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <img src="/images/home-slider/s3.png" className='img-fluid' style={{ width: '600px', height: '400px' }} alt="Shared Hosting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedHosting;
