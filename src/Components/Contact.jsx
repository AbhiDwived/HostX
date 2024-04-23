import React from 'react';
import contactbg from "../images/contactbg.jpg";



const Contact = () => {
  return (
     <div className='container-fluid' style={{ background: '#224d18', fontFamily: "Roboto, Serif" }}>
        <div className='row justify-content-center '>
          <div className='col-sm-12 mx-auto'>
            <div className="row mx-auto px-2 py-5"> {/* Adjusted padding for smaller screens */}
              <div className="col-md-7 py-5">
                <h3 className='text-light'><b>Contact Us</b></h3>
                <h1 className='text-light'><b>Get in Touch With Us</b></h1>
                <hr className='text-white' />
                <p className='pb-3 text-white'>
                  Every guide is trained and excited to work with you, whether you need help with a password reset or you're looking for a team to build your complete web presence.
                </p>
                <div className='row mt-3 mb-3'>
                  <div className='col-sm-12 col-md-4 mb-3'>
                    <div className='text-white'>
                      <p>Head Office (Only inquiries)
                        England, Hertfordshire, UK <br />
                        <a href='mailto:Info@hostx.live' className='text-white'>Info@hostx.live</a>
                      </p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-4 mb-3'>
                    <div>
                      <p className='text-white'>
                        Any Technical Support Assistance <br />
                        (Software)[24/7]<br />
                        <a href='mailto:support@hostx.live' className='text-white'>support@hostx.live</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                <div className='col-sm-12 col-md-4 mb-3'>
                    <div>
                      <p className='text-white'>Graphic Design Logo,
                        (Flyers, B’Cards and more)<br />
                        <a href='mailto:Info@xdesign.live' className='text-white'>Info@xdesign.live</a>
                      </p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-4'>
                    <div>
                      <p className='text-white'>Sales Enquiry,<br />
                        <a href='mailto:sales@hostx.live' className='text-white'>sales@hostx.live</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-5">
                <div className="rounded p-5" style={{ height: "auto", maxWidth: "400px", background: "#0B0C1B" }}>
                  <h4 className='text-white'>Fill up the form and our team will get back to you within 24 hours.</h4>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label text-white">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter Your Full Name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email Id" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-white">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder='Write Your Message'></textarea>
                  </div>
                  <div className="mb-3">
                    <input type="button" className="btn text-white px-4" value="SEND" style={{ background: "#224d18" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Contact;
