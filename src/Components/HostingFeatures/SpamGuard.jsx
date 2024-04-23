import React from 'react'
import '../../Style/Hostingfeatures.css'

function SpamGuard() {
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
                      <h2>Spam Guard</h2>
                      <p>
                        Implement Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting, and Conformance (DMARC) to authenticate and validate email senders, reducing the likelihood of email spoofing and phishing.
                        To guard against spam, whether it's in your email inbox or on your website, you can employ a combination of tools, practices, and technologies. Here are some effective ways to implement spam guards:
                      </p>


                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Email Spam Guard </span>
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Web Form Spam Guard </span>
                          </p>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Website Comment Spam Guard </span>
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">DNS-Based Blackhole Lists</span>
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Update and Patch Software: </span>
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <span className="blue-tick">✓</span>
                            <span className="white-text">Use SPF, DKIM,and DMARC: </span>
                          </p>
                        </div>
                      </div>

                    </div>
                  </section>
                </div>
              </div>


              <div className="col-lg-6 col-md-12 col-sm-12">
                <img src="/images/home-slider/bi3.png" alt="Section 2 Image"
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

export default SpamGuard