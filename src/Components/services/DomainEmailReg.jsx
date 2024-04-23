import React from 'react'
import "../../Style/services.css"
import domain from "../../images/url-domain-types.jpg"
import Explore from './Explore';
const DomainEmailReg = () => {
  return (
    <div>
      <div className='container-fluid bg-light' >
        <div className='row'>
          <div className='col-sm-11 col-lg-11 col-md-11 mx-auto'  >
            <div className='row mx-auto' >
              <div className='col-sm-12 col-lg-6 col-md-12 p-5'>
                <img src={domain} alt="mobile-app" className='img-fluid' />
              </div>
              <div className='col-sm-12 col-lg-6 col-md-12 py-5'
              // style={{ display: "flex", alignItems: "center" ,fontFamily:"roboto-Serif" }}
              >
                <div>
                  <h1 style={{ color: "red" }}><b>Domain Services</b></h1>
                  <p className='fs-5 pt-2'>
                    Your domain is the digital gateway to your online identity, making it crucial to understand and leverage essential domain features. Whether you're launching a personal blog, a business website, or an e-commerce platform, the right domain features can enhance your online presence, brand recognition, and overall user experience.
                  </p>
                  <p className='fs-5 pt-3'>
                    At HostX we provide you best service to choose your domain as per your need.
                  </p>


                  {/* New code for enhanced search bar */}
                  {/* New code for enhanced search bar */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with dropdown button"
                      placeholder="Enter your domain"
                      style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', marginRight: '10px' }}
                    />
                    <div className="input-group-append" style={{ marginRight: '10px' }}>
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ border: '2px solid #ced4da', borderRadius: '0.25rem', marginRight: '10px' }}
                      >
                        .com
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          .net
                        </a>
                        <a className="dropdown-item" href="#">
                          .org
                        </a>
                        <a className="dropdown-item" href="#">
                          .info
                        </a>
                        <a className="dropdown-item" href="#">
                          .us
                        </a>
                        <a className="dropdown-item" href="#">
                          .eu
                        </a>
                      </div>
                      {/* Search button */}
                      <button className="btn btn-primary" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' >
        <div className='row'>
          <div className='col-sm-12 text-center pt-5'>
            <h1 style={{ color: "red" }}><b>Find Perfect Domain Name For Your Website.</b></h1>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row py-4 '>
          <div className='col-sm-11 mx-auto pb-5 px-3'>

            <div className='row mx-auto'>
              <div className='col-sm-6 col-lg-3 col-md-6 rounded' >
                <div className='card px-4 py-5 shadow domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>com</b></h1>
                  <p>The most popular and professional extension for any kind of website.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$4.99</b></h2>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6 rounded' >
                <div className='card px-4 py-5 shadow  domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>site</b></h1>
                  <p>Grow your network, and your business, with a .net domain.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$4.99</b></h2>

                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6 rounded' >
                <div className='card px-4 py-5 shadow  domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>org</b></h1>
                  <p>Brand your site as an organization for greater good.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$3.99</b></h2>

                </div>
              </div>

              <div className='col-sm-6 col-lg-3 col-md-6 rounded' >
                <div className='card px-4 py-5 shadow  domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>tech</b></h1>
                  <p>Show you're at the forefront of today's tech scene with highly relevant domain.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$2.99</b></h2>
                </div>
              </div>
            </div>
            <div className='row  mx-auto'>
              <div className='col-sm-6 col-lg-3 col-md-6 mt-lg-5 rounded' >
                <div className='card px-4 py-5 shadow  domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>co.tz</b></h1>
                  <p>Brand your site as an organization for greater good.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$2.99</b></h2>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6  mt-lg-5 rounded' >
                <div className='card px-4 py-5 shadow  domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>co.uk</b></h1>
                  <p>Brand your site as an organization for greater good.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$2.99</b></h2>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6  mt-lg-5 rounded' >
                <div className='card px-4 py-5 shadow  domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>net</b></h1>
                  <p>The most popular and professional extension for any kind of website.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$2.99</b></h2>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6  mt-lg-5 rounded' >
                <div className='card px-4 py-5 shadow  domain-price-card'>
                  <h1 className=''><b><span style={{ color: "#ffb820" }}>.</span>io</b></h1>
                  <p>Get personal. Show off what you're all about to your visitors.</p>
                  <h4>Starting At</h4>
                  <h2 className='mt-2 mb-3'><b>$3.99</b></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 text-center mt-5 '>
            <h1 style={{ color: "red" }}> YOUR DOMAIN COMES BEARING GIFTS</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row '>
          <div className='col-sm-11 text-light mx-auto'>
            <div className='row mx-auto'>
              <div className='col-sm-6 col-lg-3 col-md-6  mt-lg-5 rounded'>
                <div className='card p-4 bearing-card'>
                  <h3 style={{ color: "#224d18" }}> Domain Name Extensions</h3>
                  <p>
                    Choose a domain extension (TLD - Top-Level Domain) that aligns with your website's purpose.
                    Common TLDs include .com, .org, .net, and more specialized options like .tech or .store.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6  mt-lg-5 rounded'>
                <div className='card p-4 bearing-card'>
                  <h3 style={{ color: "#224d18" }}> Domain Privacy Protection</h3>
                  <p>
                    Shield your personal information from public domain registration records.
                    Domain privacy protection helps prevent spam and protects your privacy.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6  mt-lg-5 rounded'>
                <div className='card p-4 bearing-card'>
                  <h3 style={{ color: "#224d18" }}> DNS Management</h3>
                  <p>
                    Have control over your Domain Name System (DNS) settings.
                    Easily configure DNS records, including A, CNAME, MX, and TXT records.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3 col-md-6  mt-lg-5 rounded'>
                <div className='card p-4 bearing-card'>
                  <h3 style={{ color: "#224d18" }}> Subdomains</h3>
                  <p>
                    Create subdomains to organize and structure your website.
                    Ideal for sections like blog.yourdomain.com or shop.yourdomain.com.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      
      <div className='row ' style={{ background: "#224d18" }}>
        <div className='col-sm-11 text-light mx-auto'>
          <div className='row mx-auto'>
            <div className='col-sm-6 col-lg-3 col-md-6 rounded'>
              <div className='card p-4 bearing-card'>
                <h3 style={{ color: "#224d18" }}>Domain Forwarding</h3>
                <p>
                  Redirect traffic from one domain to another.
                  Useful for rebranding or consolidating multiple domains under a single website.
                </p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 col-md-6 rounded'>
              <div className='card p-4 bearing-card'>
                <h3 style={{ color: "#224d18" }}>Email Forwarding</h3>
                <p>
                  Set up email aliases that forward to your primary email address.
                  Maintain a professional appearance with custom email addresses.
                </p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 col-md-6 rounded'>
              <div className='card p-4 bearing-card'>
                <h3 style={{ color: "#224d18" }}> Auto-Renewal</h3>
                <p>
                  Ensure your domain remains registered by enabling auto-renewal.
                  Prevent accidental expiration and potential loss of your domain.
                </p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 col-md-6 rounded'>
              <div className='card p-4 bearing-card'>
                <h3 style={{ color: "#224d18" }}>Transfer Lock</h3>
                <p>
                  Protect your domain from unauthorized transfers.
                  Enable a transfer lock to add an extra layer of security.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='row pb-5' style={{ background: "#224d18" }}>
        <div className='col-sm-11 col-lg-6 col-md-11 pb-3 text-light mx-md-auto mx-sm-auto mx-lg-auto px-4'>

          <div className='row mx-auto'>
            <div className='col-sm-6 col-lg-6 col-md-6 rounded '>
              <div className='card p-4 bearing-card'>
                <h3 style={{ color: "#224d18" }}>WHOIS Privacy</h3>
                <p>
                  Conceal personal information in the WHOIS database.
                  Enhance security and privacy for your domain registration details.
                </p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-6 col-md-6 rounded'>
              <div className='card p-4 bearing-card'>
                <h3 style={{ color: "#224d18" }}>Domain Registrar Reputation</h3>
                <p>
                  Choose a reputable domain registrar with a history of reliability.
                  Research customer reviews and service uptime before selecting a registrar.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/*start YOUR DOMAIN COMES BEARING GIFTS */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-9 mx-auto'>
            <div className='row mx-auto'>
              <div className='col-sm-12'>
                <h1 className=' my-5 ' style={{ color: "red", fontFamily: "orbitron", }}> At HostX we make sure your domain is safe and upto date so that your business can run smooth.</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*start  expolre  */}

      {/* <Explore /> */}
      {/* end explore */}
    </div>

  )
}

export default DomainEmailReg;