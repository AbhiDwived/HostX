import React from 'react'
import '../../Style/Hostingfeatures.css'


function Uptime() {
  return (
    <div className='container-fluid'>
    <div className="HostingFeatures-container d-flex justify-content-center align-items-center">
      <div className='Hosting-container'>
      <div className='row'>
        <div className='col-sm-9 mx-auto custom-col'>
          <div className='row mx-auto px-4'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className="content-left">
                <section>
                  <div>
                    <h2>UpTime</h2>
                    <p>A 99.9% uptime guarantee is a common standard in the web hosting industry, and it represents the commitment of a service provider to keep its services available and accessible to users for at least 99.9% of the time. This translates to a maximum allowable downtime of approximately 8 hours and 45 minutes per year.</p>
                    <p>Here are some key points related to a 99.9% uptime guarantee:</p>


                    <div className="row">
                      <div className="col-sm-6">
                        <p>
                          <span className="blue-tick">✓</span>
                          <span className="white-text">Downtime Calculation</span>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p>
                          <span className="blue-tick">✓</span>
                          <span className="white-text">Service Level Agreements</span>
                        </p>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-sm-6">
                        <p>
                          <span className="blue-tick">✓</span>
                          <span className="white-text">Monitoring and Reporting</span>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p>
                          <span className="blue-tick">✓</span>
                          <span className="white-text">Redundancy and Reliability</span>
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <p>
                          <span className="blue-tick">✓</span>
                          <span className="white-text">Maintenance Windows</span>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p>
                          <span className="blue-tick">✓</span>
                          <span className="white-text">Compensation for Downtime</span>
                        </p>
                      </div>
                    </div>

                  </div>
                </section>
              </div>
            </div>


            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src="/images/home-slider/bi5.png" alt="Section 2 Image"
                className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Uptime