import React from 'react'
import '../Style/Peoples-Slide.css';

function LovedPeoples() {
  return (
    <div className="PeoplesSlide-container text-center mt-5">
    <h1 className="">Testimonial</h1>
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        odio et ante tincidunt tempus.
      </p>
    </div>
    <img 
      src="/images/team/02.jpg" // You can replace this with your image URL
      alt="Sample"
      className="img-center rounded-circle mt-3"
    />
    <h6 className="mt-3">Jone Doe,Company</h6>
  </div>
);
};

export default LovedPeoples

