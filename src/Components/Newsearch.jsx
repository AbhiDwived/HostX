import React from 'react';


function SEARCH() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row p-5">
        <div className="col-sm-9 text-light mx-auto">
          <div className="row">
            <div className="col-sm-3">
              <h1>Get 10% off Today</h1>
              <p>By Register a domain name</p>
            </div>
            <div className="col-sm-9">
              <div className="input-group pb-3">
              <input
                  type="text"
                  className="form-control "
                  aria-label="Text input with dropdown button"
                  placeholder="Enter your domain"
           />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle px-5"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
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
                </div>
                <button className="btn btn-primary px-5">SEARCH</button>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <h2>.com</h2>
                  <p>$3.99/year</p>
                </div>
                <div className="col-sm-2">
                  <h2>.net</h2>
                  <p>$3.99/year</p>
                </div>
                <div className="col-sm-2">
                  <h2>.org</h2>
                  <p>$3.99/year</p>
                </div>
                <div className="col-sm-2">
                  <h2>.info</h2>
                  <p>$3.99/year</p>
                </div>
                <div className="col-sm-2">
                  <h2>.us</h2>
                  <p>$3.99/year</p>
                </div>
                <div className="col-sm-2">
                  <h2>.eu</h2>
                  <p>$3.99/year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SEARCH;
