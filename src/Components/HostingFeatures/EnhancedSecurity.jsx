import React from 'react'
import '../../Style/Hostingfeatures.css'

function EnhancedSecurity() {
  return (
    <div className='container-fluid'>
    <div className="HostingFeatures-container d-flex justify-content-center align-items-center ">
      <div className='Hosting-container'>
        <div className="row">
          <div className='col-sm-9 mx-auto custom-col'>
            <div className='row mx-auto px-4'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <img
                  src="/images/home-slider/bi2.png"
                  alt=""
                  className="img-fluid" />
              </div>


              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="content-left">
                  <section>
                    <div>
                      <h2>Enhanced Security</h2>
                      <p>
                        Enhancing security is crucial to protect your systems, data, and users from various threats. Below are several strategies and best practices for achieving enhanced security:
                      </p>


                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Regular Software Updates </span>
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Firewall Protection </span>
                          </p>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">SSL Encryption </span>
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Strong Authentication </span>
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Regular Backups</span>
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Security Audits and Scans </span>
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">User Permissions</span>
                          </p>
                        </div>
                      </div>

                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EnhancedSecurity