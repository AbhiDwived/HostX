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
                  <img src="/images/home-slider/s2.png" alt="" className='img-fluid' style={{ width: '600px', height: '400px' }} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <section>
                  <div>
                    <h1>Web Hosting</h1>
                    <p>Selecting the right web hosting service is a pivotal decision for anyone looking to establish an online presence. Whether you're launching a personal blog, a business website, or an e-commerce platform, the quality of your hosting can significantly impact your site's performance, security, and overall success.</p>
                    <p>At HostX we provide best hosting plan and services </p>
                  </div>
                  <div data-aos="fade-down">
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SharedHosting;
