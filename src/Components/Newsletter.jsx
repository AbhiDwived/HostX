import React from 'react';
import '../Style/Newsletter.css';

const SubscribePage = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    console.log('Subscribed:', email);
  };

  return (
    <div className='container-fluid'style={{ background: "#224d18" }}>
      <div className="custom-container">
        <div className="text-center mb-4">
          <h2 style={{ color: 'red' }}>Subscribe To Get Our Newsletter</h2>
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
    </div>
  );
};

export default SubscribePage;
