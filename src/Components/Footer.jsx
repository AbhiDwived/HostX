import React from 'react';
import '../Style/Footer.css';

function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row justify-content-center bg-dark m">
        <footer className="col-11">
          <div className="row">
            <div className="col-md-6 px-5 py-2 d-flex ">
              <div className="footer-part1">
               <p> Copyright 2024 © HostX. All Rights Reserved.</p>
              </div>
            </div>
            <div className="footer-part2 col-md-6 px-5 py-2 d-flex justify-content-end ">
            <p>  WE ACCEPT: </p>
              <img src="/images/payment-methods.png" className="payment-img" alt="Accepted Payment Methods"/>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
