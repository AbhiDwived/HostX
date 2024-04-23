import React from 'react'
import about from "../images/about.jpg"
import mission from "../images/mission.jpg"
import vision from ".././images/vision.jpg"
const AboutUs = () => {
    return (
        <div>
            <div className='container-fluid bg-light' >
                <div className='row'>
                    <div className='col-sm-11 mx-auto'  >
                        <div className='row mx-auto' >
                            <div className='col-sm-6  p-5'>
                                <img src={about} alt="mobile-app" height="560px" width="600px" className='img-fluid'  />
                            </div>
                            <div className='col-sm-6 py-5'>
                                <div>
                                    <h1 style={{ color: "red" }}><b>About Us</b></h1>
                                    <p className='fs-5'>HostX is a leading hosting company that goes beyond just sales of hosting and domains. We are committed to providing comprehensive solutions for individuals and businesses looking to establish a strong online presence. Our dedication to customer satisfaction and technical expertise sets us apart in the industry.
                                        <p className='fs-5'>With years of experience in the web hosting industry, HostX has gained a reputation for delivering reliable and affordable hosting services. We understand the unique needs of our clients and strive to offer tailored solutions to meet their specific requirements. Whether you are a small business owner, a blogger, or a large corporation, HostX has the perfect hosting package for you.
                                            <p className='fs-5'>At HostX, we strongly believe that hosting is not just about providing server space. It's about empowering our customers to succeed online. That's why we offer a range of additional services, including website building assistance. Our team of experts is always ready to help you create a stunning website that reflects your brand identity and engages your target audience.</p>
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 my-5 text-center'>
                        <h1 style={{ color: "red" }}>Why Us</h1>
                        <p className='fs-4'>There are several reasons why HostX is the preferred choice for individuals and businesses looking for hosting solutions:
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className='row '>
                    <div className='col-sm-11 text-light mx-auto'>

                        <div className='row mx-auto px-3'>
                            <div className='col-sm-12 col-lg-4 col-md-6 rounded mb-2' >
                                <div className="p-5 mx-3 card shadow " >
                                    <div style={{ height: "220px" }}>
                                        <h3 style={{ color: "#224d18" }} >Reliability</h3>
                                        <p>
                                            We understand the importance of a stable online presence. With our state-of-the-art infrastructure and redundant network connections, we ensure maximum uptime for your website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-lg-4 col-md-6 rounded mb-2' >
                                <div className="p-5 mx-3 card shadow" >
                                    <div style={{ height: "220px" }}>
                                        <h3 style={{ color: "#224d18" }} >Affordable Pricing </h3>
                                        <p>
                                            We believe that everyone should have access to quality hosting services without breaking the bank. That's why we offer competitive pricing options that fit any budget.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12 col-lg-4 col-md-6 rounded mb-2' >
                                <div className="p-5 mx-3 card shadow" >
                                    <div style={{ height: "220px" }}>
                                        <h3 style={{ color: "#224d18" }} >Exceptional Customer Support</h3>
                                        <p>Our dedicated support team is available 24/7 to assist you with any technical issues or inquiries. We pride ourselves on providing prompt and reliable support to ensure your peace of mind.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card shadow */}
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-sm-7 my-5 pb-3 text-light mx-auto'>

                        <div className='row mx-auto'>
                            <div className='col-sm-6  rounded mb-2' >
                                <div className="p-5 mx-3 card shadow" >
                                    <div style={{ height: "220px" }}>
                                        <h3 style={{ color: "#224d18" }}>Cloud Hosting</h3>
                                        <p>
                                            As your business grows, your hosting needs may change. HostX offers scalable hosting solutions, allowing you to easily upgrade your resources as your website traffic increases.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 rounded' >
                                <div className="p-5 mx-3 card shadow" >
                                    <div style={{ height: "220px" }}>

                                        <h3 style={{ color: "#224d18" }}>Cutting-Edge Technology</h3>
                                        <p>
                                            We stay up-to-date with the latest advancements in the industry to provide our customers with the best possible hosting experience. From high-performance servers to advanced security measures, we have you covered.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid ' style={{ background: "#224d18" }} >
                <div className='row'>
                    <div className='col-sm-11 mx-auto'  >
                        <div className='row mx-auto my-5 py-5' >

                            <div className='col-sm-6 px-5' >
                                <div>
                                    <h1 style={{ color: "red" }}>Our Mission</h1>
                                    <p className='fs-4 text-white'>
                                        At HostX, our mission is to empower individuals and businesses to establish a strong online presence. We strive to provide reliable and affordable hosting services coupled with exceptional customer support. Our goal is to help our clients succeed in the digital world by offering tailored solutions that meet their specific needs.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <img src={mission} alt="mobile-app" width="650px" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-light' >
                <div className='row'>
                    <div className='col-sm-11 mx-auto'  >
                        <div className='row mx-auto py-5' >
                            <div className='col-sm-6  p-5'>
                                <img src={vision} alt="mobile-app" height="450px" width="600px" className='img-fluid' />
                            </div>
                            <div className='col-sm-6 py-5'>
                                <div>
                                    <h1 style={{ color: "red" }}><b>Our Vision</b></h1>
                                     <p className='fs-5'>        
Our vision is to become the leading hosting company, known for our commitment to customer satisfaction and technical expertise. We aim to continuously innovate and improve our services to stay ahead of industry trends. By fostering long-term partnerships with our clients, we aspire to be the go-to hosting provider for individuals and businesses worldwide.    
                                     </p>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row pb-3'>
          <div className='col-sm-12 my-5'>
            <div className='row mx-auto'>
              <div className='col-sm-10 mx-auto'>
                <p className="text-white fs-5">HostX is more than just a hosting company. We are a trusted partner that goes the extra mile to ensure your online success. With our reliable services, affordable pricing, exceptional support, and commitment to innovation, we are confident in our ability to meet and exceed your hosting needs. Join HostX today and experience the difference for yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default AboutUs