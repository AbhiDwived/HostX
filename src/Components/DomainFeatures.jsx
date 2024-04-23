import React from 'react';
import '../Style/DomainFeatures.css';

const DomainFeatures = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      <h1>Domain Features</h1>

      <div className="row justify-content-center px-2">
        <div className="col-sm-12 ">
          <div className="row mx-auto">
            <div className="col-sm-12 col-lg-3 col-md-6 mb-4" data-aos="fade-down-right">
              <img
                src="images/features/icon-01.png"
                className="img-fluid"
                alt="Feature Image"
              />
              <div>
                <h6 className="card-title">Firewall</h6>
                <p className="card-text">
                  In the digital age, where cyber threats continue to grow in sophistication, a firewall is a foundational element of any comprehensive cybersecurity strategy.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-3 col-md-6 mb-4" data-aos="fade-down-right">
              <img
                src="images/features/icon-02.png"
                className="img-fluid"
                alt="Feature Image"
              />
              <div>
                <h6 className="card-title">Data Encryption</h6>
                <p className="card-text">
                  Data encryption serves as a digital fortress, safeguarding sensitive information from the ever-present threats in the digital landscape.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-3 col-md-6 mb-4" data-aos="fade-down-left">
              <img
                src="images/features/icon-03.png"
                className="img-fluid"
                alt="Feature Image"
              />
              <div>
                <h6 className="card-title">Data Analysis</h6>
                <p className="card-text">
                  Data analysis is a dynamic and evolving field that empowers individuals and organizations to harness the full potential of their data.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-3 col-md-6 mb-4" data-aos="fade-down-left">
              <img
                src="images/features/icon-04.png"
                className="img-fluid"
                alt="Feature Image"
              />
              <div>
                <h6 className="card-title">Data Protection</h6>
                <p className="card-text">
                  Data protection refers to the practices and measures taken to safeguard sensitive information from unauthorized access, alteration, and destruction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainFeatures;
