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
                  <img src="/images/home-slider/s4.png" alt="" className='img-fluid' style={{ width: '600px', height: '400px' }} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <section>
                  <div>
                    <h1>Website & App Builder</h1>
                    <p>In the fast-paced digital landscape,  HostX helps in establishing a robust online presence is paramount for individuals and businesses alike. Website and app builders have emerged as transformative tools, enabling users to create compelling and functional digital platforms without the need for extensive coding or development expertise. Let's explore the world of website and app builders and uncover how they empower the creation of engaging online experiences.</p>
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
