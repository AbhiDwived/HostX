import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      {/* Upper Row of Cards */}
      <div className="row mt-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card ${index === 0 || index === 2 ? 'mt-5 ' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">Card {index + 1}</h5>
                <p className="card-text">Some description about the card.</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Circular Image in the Center */}
      <div className="row mt-3">
        <div className="col-12 text-center">
          <img
            src="https://placekitten.com/200/200" // Replace with your circular image URL
            alt="Circular"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>

      {/* Bottom Row of Cards */}
      <div className="row mt-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card ${index + 3 === 4 || index + 3 === 6 ? 'mb-5' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">Card {index + 4}</h5>
                <p className="card-text">Some description about the card.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
