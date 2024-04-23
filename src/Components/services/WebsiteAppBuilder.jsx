import React from 'react'
import mobileapp1 from "../../images/MobileApp1.gif";
import design from "../../images/design.png"
import framing from "../../images/framing.png"
import prototyping from "../../images/prototyping.png"
import appdevelopment from "../../images/appdevelopment.png"
import fbphone from "../../images/FB-Phone.gif"
const WebsiteAppBuilder = () => {
  return (
    <div>
      <div className='container-fluid bg-light'>
        <div className='row'>
          <div className='col-sm-11 mx-auto'  >
            <div className='row mx-auto' >
              <div className='col-sm-6 p-5'>
                <img src={mobileapp1} alt="mobile-app" className='img-fluid' height="400px" width="600px"/>
              </div>
              <div className='col-sm-6 py-5'>
                <div>
                  <h1 style={{ color: "red" }}><b>Get Mobile App for your Business</b></h1>
                  <p className='pt-2 fs-5 'style={{ color: "black" }}>Still looking for the perfect app to manage your business? TechX might just be the perfect company for the job.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h1 className='mt-5 ' style={{ color: "red" }}>Key Components of Website & App Builder</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid' >
        <div className='row pb-5'>
          <div className='col-sm-10 mx-auto'>
            <div className='row mx-auto'>
              <div className='col-sm-3 text-center'>
                <div className='bg-light rounded-circle mx-5 mt-5 mb-3' style={{ width: "180px", height: "180px" }}>
                  <img data-aos="zoom-in" src={design} alt="design" className='m-3' />
                </div>
                <div>
                  <h3 style={{ color: "#224d18" }}>Beautiful Design</h3>
                  <p>
                    Creating a beautiful mobile app design involves combining aesthetic appeal with intuitive user experience.
                  </p>
                </div>
              </div>
              <div className='col-sm-3 text-center'>
                <div className='bg-light rounded-circle mx-5 mt-5 mb-3' style={{ width: "180px", height: "180px" }}>
                  <img data-aos="zoom-in" src={framing} alt="design" className='m-3' />
                </div>
                <div>
                  <h3 style={{ color: "#224d18" }}>Wirefreaming</h3>
                  <p>
                    Wireframing is the process of creating a visual representation or blueprint of a website, application, or user interface (UI) design.
                  </p>
                </div>
              </div>
              <div className='col-sm-3 text-center'>
                <div className='bg-light rounded-circle mx-5 mt-5 mb-3' style={{ width: "180px", height: "180px" }}>
                  <img data-aos="zoom-in" src={prototyping} alt="design" height="150px" width="150px" className='m-3' />
                </div>
                <div>
                  <h3 style={{ color: "#224d18" }}>Prototyping</h3>
                  <p>
                    Prototyping is the process of creating a preliminary model or representation of a product, system, or idea to test its functionality & design.
                  </p>
                </div>
              </div>
              <div className='col-sm-3 text-center'>
                <div className='bg-light rounded-circle mx-5 mt-5 mb-3' style={{ width: "180px", height: "180px" }}>
                  <img data-aos="zoom-in" src={appdevelopment} alt="design" className='m-3' />
                </div>
                <div>
                  <h3 style={{ color: "#224d18" }}>App Development</h3>
                  <p>
                    Mobile app development refers to the process of creating software applications specifically designed to run on mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid ' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-11 mx-auto'  >
            <div className='row mx-auto my-5' >

              <div className='col-sm-6 text-white px-5' >
                <div>
                  <h1 style={{ color: "red" }}>Get Website Builder for your Business</h1>
                  <p className='fs-4'>
                    A website builder is a user-friendly platform that allows individuals and businesses to create and customize their own websites without the need for coding skills. These platforms typically offer intuitive drag-and-drop interfaces, pre-designed templates, and a variety of features to streamline the website creation process.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 px-5'>
                <img src={fbphone} alt="mobile-app" width="630px" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' >
        <div className='row'>
          <div className='col-sm-12 text-center py-5'>
            <h1 style={{ color: "red" }}> YOUR DOMAIN COMES BEARING GIFTS</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-sm-11 text-light mx-auto px-4 pb-5'>

            <div className='row mx-auto'>
              <div className='col-sm-3 rounded'>
                <div className='card p-4 m-2 shadow' style={{ height: "290px" }}>
                  <h3 style={{ color: "#224d18" }}> Drag-and-Drop Interface</h3>
                  <p>
                    Enables users to add, move, and customize elements on their website easily.
                    No coding skills are required, making it accessible to beginners.
                  </p>
                </div>
              </div>
              <div className='col-sm-3 rounded'>
                <div className='card p-4 m-2 shadow' style={{ height: "290px" }}>
                  <h3 style={{ color: "#224d18" }}> Pre-designed Templates</h3>
                  <p>
                    Offers a selection of professionally designed templates catering to various industries and purposes.
                    Users can choose a template as a starting point and customize it to suit their brand.
                  </p>
                </div>
              </div>
              <div className='col-sm-3 rounded'>
                <div className='card p-4 m-2 shadow' style={{ height: "290px" }}>
                  <h3 style={{ color: "#224d18" }}>Customization Options</h3>
                  <p>
                    Allows users to personalize colors, fonts, images, and other design elements.
                    Provides flexibility to create a unique and branded website.
                  </p>
                </div>
              </div>
              <div className='col-sm-3 rounded'>
                <div className='card p-4 m-2 shadow' style={{ height: "290px" }}>
                  <h3 style={{ color: "#224d18" }}> Mobile Responsiveness</h3>
                  <p>
                    Ensures that the website looks and functions well on different devices, including smartphones and tablets.
                    Responsive design is crucial for a positive user experience.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WebsiteAppBuilder
