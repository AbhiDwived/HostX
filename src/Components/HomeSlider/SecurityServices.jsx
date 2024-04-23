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
                  <img src="/images/home-slider/s6.png" alt="" className='img-fluid' style={{ width: '600px', height: '400px' }} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <section>
                  <div>
                    <h1>Security Services</h1>
                    <p>In an era dominated by digital interactions and global connectivity, the need for robust security measures has never been more critical. Security services play a pivotal role in safeguarding individuals, businesses, and organizations against a myriad of threats, both physical and digital.  At Hostx we take care of your data.
                      Let's explore the world of security services and understand their significance in preserving safety and integrity.</p>
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
