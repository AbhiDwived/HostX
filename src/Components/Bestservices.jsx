import React from 'react';
import '../Style/Bestservices.css';

const Bestservices = () => {
  return (
    
      <div className='services-container-fluid ' style={{ background: "#224d18" }}>

        <div className='row'>
          <div className='col-sm-12 mt-5 text-center'>
            <h1>Best services you get from HOSTX Ltd.</h1>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row py-4'>
            <div className='col-sm-11 text-light mx-auto  pb-3'>

              <div className='row mx-auto'>
                <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                    <p className='my-3'><img src="/images/Bestservices/Bs1.png" alt="" height="50px" /></p>
                    <h3>Domain & Email Registration</h3>
                    <p>Domain registration secures your online identity, while email registration enables professional communication, fostering a credible online presence.
                    </p>
                  </div>
                </div>
                <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                    <p className='my-3'><img src="/images/Bestservices/Bs2.png" alt="" height="50px" /></p>
                    <h3>Web Hosting</h3>
                    <p>Web hosting provides online storage and access for websites. It ensures site availability, speed, and security, crucial for online presence and functionality.</p>

                  </div>
                </div>
                <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                    <p className='my-3'><img src="/images/Bestservices/Bs3.png" alt="" height="50px" /></p>
                    <h3>SSL Certificates</h3>
                    <p>SSL certificates ensure secure communication between a user's browser and a website, encrypting data to prevent unauthorized access and cyber threats.</p>

                  </div>
                </div>
                <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                    <p className='my-3'><img src="/images/Bestservices/Bs4.png" alt="" height="50px" /></p>
                    <h3>Website & App Builder</h3>
                    <p>Empower creativity, design seamlessly, and launch effortlessly with an intuitive Website & App Builder platform.</p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-11 text-light mx-auto'>
              <div className='row mx-auto'>
                <div className='col-sm-12 col-lg-4 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'><img src="/images/Bestservices/Bs5.png" alt="" height="50px" /></p>
                <h3>Managed Services</h3>
                <p>Managed Services streamline operations, enhance cybersecurity, ensure scalability, and optimize IT infrastructure for organizational efficiency.</p>
                  </div>
                </div>
                <div className='col-sm-12 col-lg-4 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'><img src="/images/Bestservices/Bs6.png" alt="" height="50px" /></p>
                <h3>Security Services</h3>
                <p>Security services safeguard people, property, and information through vigilant monitoring, advanced technology, and expert personnel.</p>
              </div>
                </div>
                <div className='col-sm-12 col-lg-4 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'><img src="/images/Bestservices/Bs7.png" alt="" height="50px" /></p>
                <h3>Backup Solutions</h3>
                <p>Backup solutions safeguard data, ensuring recovery in case of loss. They secure vital information, minimize risks, and ensure business continuity.</p>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

  );
}

export default Bestservices;
