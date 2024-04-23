import React from 'react'
import '../Style/Newsletter.css';
const Basic = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        console.log('Subscribed:', email);
      };
  return (
     
        
        <div>
    <div className="custom-container">
      <div className="text-center mb-4">
        <h2 style={{ color: '#fff' }}>Subscribe To Get Our Newsletter</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <form onSubmit={handleSubscribe}>
            <div className="form-group">
              <input
                type="email"
                className="form-control mb-4"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="custom-button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  
  
        {/* Our Other Services */}
  
  
        <div className="Otherservices-container">
          <div className="text-center">
            <h2>Our Other Services</h2>
          </div>
  
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-4">
              <div className="mx-auto">
                <h3>Website</h3>
                <h1 className="blue">Design & Development</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus harum nulla aliquam? Possimus, quis facere,
                  voluptatem necessitatibus, velit quas beatae sunt at repellendus
                  voluptatum et.
                </p>
  
                <div className="row">
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  </div>
  
                  <div className="row">
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                </div>
  
                <button className="custom-button">VIEW DETAILS</button>
              </div>
            </div>
  
            <div className="col-sm-4">
              <div className="mx-auto">
                <img
                  src="/images/services-img/01.png" // Example image URL, replace with your image URL
                  alt="Section 2 Image"
                  className="img-fluid" data-aos="zoom-in"
                />
              </div>
            </div>
          </div>
  
  
          {/* SEO Service */}
  
  <div className="Seoservice-container">
          <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-4">
              <div className="mx-auto">
                <img
                  src="/images/services-img/02.png" // Example image URL, replace with your image URL
                  alt="Section 2 Image"
                  className="img-fluid" data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="mx-auto">
                <h3>Website</h3>
                <h1 className="blue">SEO Service</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus harum nulla aliquam? Possimus, quis facere,
                  voluptatem necessitatibus, velit quas beatae sunt at repellendus
                  voluptatum et.
                </p>
  
                <div className="row">
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  </div>
  
                  <div className="row">
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                </div>
  
                <button className="custom-button">VIEW DETAILS</button>
              </div>
            </div>
          </div>
          </div>
  
  
          <div className="Marketing-container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-4">
              <div className="mx-auto">
                <h3>Internet</h3>
                <h1 className="blue">Marketing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus harum nulla aliquam? Possimus, quis facere,
                  voluptatem necessitatibus, velit quas beatae sunt at repellendus
                  voluptatum et.
                </p>
  
                <div className="row">
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  </div>
  
                  <div className="row">
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <p>
                      <span className="blue-tick">✓</span>
                      <span className="white-text">Lorem ipsum dol</span>
                    </p>
                  </div>
                </div>
  
                <button className="custom-button">VIEW DETAILS</button>
              </div>
            </div>
  
            <div className="col-sm-4">
              <div className="mx-auto">
                <img
                  src="/images/services-img/03.png" // Example image URL, replace with your image URL
                  alt="Section 2 Image"
                  className="img-fluid" data-aos="zoom-in"
                />
              </div>
            </div>
          </div>
          </div>
  
  
  
  
  
        </div>
      </div>
      
  
  )
}

export default Basic