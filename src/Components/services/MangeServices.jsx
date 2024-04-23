import React from 'react'
import manage from "../../images/manage.jpg"
import integrated from "../../images/intigrity.gif"
const MangeServices = () => {
  return (
    <div>
      <div className='container-fluid bg-light' >
        <div className='row'>
          <div className='col-sm-11 col-lg-11 col-md-11 mx-auto'  >
            <div className='row mx-auto my-3' >
              <div className='col-sm-12 col-lg-6 col-md-6 py-lg-5 py-md-5'>
                <div>
                  <h1 style={{ color: "red" }}><b>Managed Services</b></h1>
                  <p className='fs-5 pt-2'>
                    In the dynamic landscape of technology and business, managing an organization's IT infrastructure, networks, and systems can be a complex and resource-intensive task. This is where managed services step in, offering a proactive and strategic approach to handling IT needs. Let's explore the world with HostX of managed services and understand how they contribute to the efficiency and success of businesses.
                  </p>
                </div>
              </div>
              <div className='col-sm-12 col-lg-6 col-md-6 py-lg-5 py-md-5'>
                <img src={manage} alt="mobile-app" className='img-fluid' style={{ height: "400px", width: "660px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
      <div className='row'>
        <div className="col-sm-10 col-lg-10 col-md-10 mx-auto py-5">
          <div className='row mx-auto'>
            <div className='col-sm-11 col-lg-8 col-md-8 mx-auto'>
              <h1 style={{ color: "red" }}>What are Managed Services?</h1>
              <p>At HostX Managed services refer to the practice of outsourcing certain aspects of an organization's IT operations to a third-party provider. These services are designed to enhance the overall functionality, security, and reliability of IT systems while allowing businesses to focus on their core objectives.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 style={{ color: "red" }}>Key Components of Managed Services:</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#224d18" }}>
        <div className='row '>
          <div className='col-sm-11 text-light mx-auto'>

            <div className='row mx-auto pb-5'>
              <div className='col-sm-12 col-lg-4 col-md-6 mt-5 rounded' >
                <div className="p-5 mx-3 card manage-security" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }}>Network Management</h3>
                    <p>
                      Monitors and maintains the health and performance of network infrastructure.
                      Addresses issues such as connectivity, bandwidth, and network security.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-4 col-md-6 mt-5 rounded' >
                <div className="p-5 mx-3 card manage-security" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }}>IT Security Management </h3>
                    <p>
                      Implements and manages security measures to protect against cyber threats.
                      Includes tasks such as firewall management, antivirus updates, and vulnerability assessments.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm-12 col-lg-4 col-md-6 mt-5 rounded' >
                <div className="p-5 mx-3 card manage-security" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }} >Data Backup and Recovery </h3>
                    <p>
                      Provides an entire physical server exclusively for your website.
                      Offers maximum control, performance, and security
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-4 col-md-6 mt-5 rounded' >
                <div className="p-5 mx-3 card manage-security" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }}>Infrastructure Management</h3>
                    <p>
                      Manages hardware and software components of IT infrastructure.
                      Includes servers, storage, virtualization, and other foundational elements.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-4 col-md-6 mt-5 rounded' >
                <div className="p-5 mx-3 card manage-security" >
                  <div style={{ height: "210px" }}>

                    <h3 style={{ color: "#224d18" }}>Help Desk and User Support</h3>
                    <p>
                      Provides technical support to end-users.
                      Resolves issues, answers queries, and ensures smooth user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-4 col-md-6 mt-5 rounded' >
                <div className="p-5 mx-3 card manage-security" >
                  <div style={{ height: "210px" }}>

                    <h3 style={{ color: "#224d18" }}> Cloud Services Management</h3>
                    <p>
                      Assists in the adoption and management of cloud-based services.
                      Ensures optimal utilization of cloud resources and data security.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* card  */}
      {/* <div className="container-fluid" style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-11 my-5 text-light mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-4  rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }}>Infrastructure Management</h3>
                    <p>
                      Manages hardware and software components of IT infrastructure.
                      Includes servers, storage, virtualization, and other foundational elements.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>

                    <h3 style={{ color: "#224d18" }}>Help Desk and User Support</h3>
                    <p>
                      Provides technical support to end-users.
                      Resolves issues, answers queries, and ensures smooth user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>

                    <h3 style={{ color: "#224d18" }}> Cloud Services Management</h3>
                    <p>
                      Assists in the adoption and management of cloud-based services.
                      Ensures optimal utilization of cloud resources and data security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 style={{ color: "red" }}>Assists in the adoption and management of cloud-based services.
              Ensures optimal utilization of cloud resources and data security.</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#224d18" }}>
        <div className='row '>
          <div className='col-sm-11 text-light mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-12 col-lg-4 col-md-6 mb-3 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }}>Cost Efficiency</h3>
                    <p>
                      Offers a predictable, subscription-based pricing model.
                      Eliminates the need for significant upfront investments in IT infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div className=' col-sm-12 col-lg-4 col-md-6 mb-3 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }}>Proactive Monitoring and Maintenance:</h3>
                    <p>
                      Identifies and resolves issues before they escalate.
                      Regular maintenance ensures optimal performance and reduces downtime.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm-12 col-lg-4 col-md-6 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }} >Access to Expertise  </h3>
                    <p>
                      Provides access to a team of skilled professionals with diverse IT expertise.
                      Ensures that organizations benefit from the latest technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-7 my-5 text-light mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-6  rounded' >
                <div className="p-5 mb-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }}>Focus on Core Business</h3>
                    <p>
                      Allows businesses to concentrate on core objectives rather than IT management. Enhances overall productivity and efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>

                    <h3 style={{ color: "#224d18" }}>Scalability</h3>
                    <p>
                      Adapts to the changing needs of the business.
                      Easily scales up or down based on growth, ensuring flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container-fluid bg-light'>
        <div className='row'>
          <div className='col-sm-11 mx-auto'>
            <div className='row mx-auto'>
              <div className='col-sm-5'>
                <div className='py-5 '>
                  <img src={integrated} alt="integrated" height="605px" width="530px" className='img-fluid' />
                </div>
              </div>
              <div className='col-sm-7 '>
                <div className='row pb-3' >
                  <h1 className='my-5 text-center' style={{ color: "red" }}>Benefits of Integrated Security</h1>

                  <div className='col-sm-6 mb-3 rounded px-4'  >

                    <div className=' card shadow p-4' style={{ height: "230px" }}>
                      <h3 style={{ color: "#224d18" }}> Managed IT Support</h3>
                      <p>
                        Provides ongoing support for IT infrastructure and end-users
                      </p>
                    </div>
                  </div>
                  <div className='col-sm-6 rounded px-4' >
                    <div className=' card shadow p-4' style={{ height: "230px" }}>
                      <h3 style={{ color: "#224d18" }}> Managed Security Services</h3>~
                      <p>
                        Focuses on protecting against cybersecurity threats.
                        Includes services like threat monitoring, incident response, and vulnerability management
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row pb-5'>
                  <div className='col-sm-6 mb-3 rounded px-4' >
                    <div className=' card shadow p-4' style={{ height: "230px" }}>

                      <h3 style={{ color: "#224d18" }}>Managed Cloud Services</h3>
                      <p>
                        Assists in the adoption and management of cloud computing services.
                        Includes cloud migration, optimization, and security
                      </p>
                    </div>
                  </div>
                  <div className='col-sm-6 rounded px-4' >
                    <div className=' card shadow p-4' style={{ height: "230px" }}>

                      <h3 style={{ color: "#224d18" }}>Managed Network Services</h3>
                      <p>
                        Ensures the efficiency and security of network operations.
                        Includes monitoring, maintenance, and troubleshooting.
                        Choosing a Managed Services Provider:
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default MangeServices