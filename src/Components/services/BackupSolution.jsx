import React from "react"
import "../../Style/services.css"
import { rgba } from 'polished';
import backup from "../../images/backup.jpg"
import Basic from "./Basic";
const BackupSolution = () => {
  return (
    <div >
      <div className='container-fluid text-white img-fluid' style={{ background: `url(${backup})`, fontFamily: "Roboto, Serif", backgroundSize: "cover" }}>
        <div className='row'>
          <div className='col-sm-11 mx-auto py-5'>
            <div className="row mx-auto py-5">
              <div className="col-sm-12 py-5 my-5" style={{ display: "flex", justifyContent: "center" }} >
                <div className="border rounded border-light p-5" style={{ background: rgba(16, 22, 30, 0.9) }}>
                  <h1 className="" style={{ color: "red" }}><b>Protect Your Data with Robust Backup Solutions</b></h1>
                  <p className="fs-5">In today's digital age, safeguarding your valuable data is more
                    critical than ever. Whether you're a business handling sensitive information
                    or an individual preserving cherished memories, investing in reliable backup
                    solutions is a non-negotiable aspect of digital hygiene.</p>
                  <h4>At Hostx we always keep advice.</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 mt-5 text-center'>
            <h1 className='mt-3' style={{ color: "red" }}> Why Backup Solutions Matter</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className='row'>
          <div className='col-sm-11 py-5 mb-5 text-light mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
              <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "200px" }}>
                    <h3 className="text-white">  Data Loss Prevention</h3>
                    <p>
                      Guard against accidental deletions, hardware failures, or unforeseen disasters that could result in data loss.
                      Ensure business continuity by having a secure backup plan in place.

                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
              <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "200px" }}>
                    <h3 className="text-white"> Security and Compliance</h3>
                    <p>
                      Meet regulatory requirements and ensure data security by implementing comprehensive backup strategies.
                      Encrypt sensitive data in backups to protect against unauthorized access.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
              <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "200px" }}>
                    <h3 className="text-white"> Seamless Recovery</h3>
                    <p>
                      Minimize downtime by having a robust backup system that enables quick and efficient data recovery.
                      Restore your systems to their previous state with ease, ensuring minimal disruption to operations.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 className='mt-3' style={{ color: "red" }}>Types of Backup Solutions</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#224d18" }}>
        <div className='row '>
          <div className='col-sm-11 mb-5 pb-5 text-light mx-auto'>

            <div className='row mx-auto'>
            <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
                 <div className="p-lg-5 p-md-5 p-sm-5 5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right,#30151d,#001420,#001420)' }} >
                  <div className="text-white" style={{ height: "200px" }}>
                    <h3> Cloud-Based Backup</h3>
                    <p>
                      Utilize the scalability and accessibility of the cloud to store your data securely.
                      Enjoy the convenience of remote access to your backups from anywhere in the world.
                    </p>
                  </div>
                </div>
              </div>
             <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
                 <div className="p-lg-5 p-md-5 p-sm-5 5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right,#30151d,#001420,#001420)' }} >
                  <div className="text-white" style={{ height: "200px" }}>
                    <h3> On-Premises Solutions</h3>
                    <p>
                      Maintain full control over your data by opting for on-premises backup solutions.
                      Ideal for businesses with specific compliance requirements or those seeking complete autonomy.
                    </p>
                  </div>
                </div>
              </div>

             <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
                <div className="p-lg-5 p-md-5 p-sm-5 5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right,#30151d,#001420,#001420)' }} >
                
                  <div className="text-white" style={{ height: "200px" }}>
                    <h3 className="">Hybrid Approaches</h3>
                    <p>
                      Combine the benefits of both cloud and on-premises solutions to create a flexible and resilient backup strategy.
                      Tailor your approach to meet the unique needs of your organization.  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*start Key Features to Look For */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 className='mt-3 ' style={{ color: "red" }} >Key Features to Look For</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid pb-5 mb-5'>
        <Basic />
      </div>
      {/*end Key Features to Look For */}
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row pb-3'>
          <div className='col-sm-12 my-5'>
            <div className='row mx-auto'>
              <div className='col-sm-10 mx-auto'>
                <h1 className='mt-3 ' style={{ color: "red" }}>As per HostX how to Safeguard Your Codebase
                  Reliable Backup Solutions for Server Environments </h1>
                <h3 className='fs-2 text-white' style={{ color: "black" }} >The Importance of Code Backups</h3>
                <p className="text-white">Developers understand the critical nature of code repositories. A loss of code due to accidental deletion, server failure, or unforeseen issues can result in significant setbacks. Implementing a robust backup solution for your codebase on a server is not just a precautionary measure; it's a necessity for ensuring the integrity and continuity of your software development projects.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start Considerations for Code Backup Solution */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 style={{ color: "red" }}>Considerations for Code Backup Solutions</h1>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="container-fluid">
        <div className='row '>
          <div className='col-sm-11 text-light mx-auto'>

            <div className='row mx-auto'>
             <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
                <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "250px" }}>
                    <h3>  Version Control Systems</h3>
                    <p>
                      Leverage dedicated version control systems like Git, Mercurial, or SVN.
                      Track changes, maintain a history of commits, and collaborate seamlessly with your team.  </p>
                  </div>
                </div>
              </div>
             <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
                <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "250px" }}>
                    <h3> Regular Automated Backups</h3>
                    <p>
                      Schedule automated backups to capture the latest version of your codebase at regular intervals.
                      Ensure that backup frequency aligns with your project's update frequency.  </p>
                  </div>
                </div>
              </div>

             <div className='col-sm-12 col-md-6 col-lg-4 rounded' >
                <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "250px" }}>
                    <h3 className="text-white">Offsite Storage</h3>
                    <p>
                      Store backups in an offsite location or a separate server to guard against server-specific issues.
                      Cloud repositories or dedicated backup servers offer secure offsite storage options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="container-fluid">
        <div className='row py-5'>
          <div className='col-sm-11 col-lg-7 col-md-11 my-5 text-light mx-auto'>

            <div className='row mx-auto'>
            <div className='col-sm-12 col-md-6 col-lg-6 rounded' >
                <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "250px" }}>
                    <h3>Incremental Backups</h3>
                    <p>
                      Implement incremental backup strategies to minimize data duplication and optimize storage space.
                      Capture only the changes made since the last backup, reducing the backup time and resource usage.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lg-6 rounded' >
              <div className="p-lg-5 p-md-5 p-sm-5 mt-md-5 mt-sm-5 mx-3 card gradient-card" style={{ backgroundImage: 'radial-gradient(circle at top right, #30151d, #001420, #001420)' }}>
                  <div className="text-white" style={{ height: "250px" }}>
                    <h3> Encryption and Access Controls</h3>
                    <p>According to HostX Choose a backup solution that can scale with your project's growth and evolving storage requirements.
                      Ensuring the safety and availability of your codebase is not just about writing and deploying code – it's about safeguarding your development investments.  </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      {/* https://techx-37d3.onrender.com/HardwareSupport */}
    </div >
    
  )
}

export default BackupSolution