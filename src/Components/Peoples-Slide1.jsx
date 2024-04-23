import React from 'react'
import '../Style/Peoples-Slide.css';

function LovedPeoples() {
  return (
    <div className="PeoplesSlide-container text-center mt-5">
    <h1 >Testimonial</h1>
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        odio et ante tincidunt tempus.
      </p>
    </div>
    <div>
    <img src="/images/team/01.jpg" // You can replace this with your image URL
      alt="Sample"
      className="img-center rounded-circle mt-3"/>
    <h6 className="mt-3">Jone Doe,Company</h6>
    </div>
  </div>
);
};

export default LovedPeoples

