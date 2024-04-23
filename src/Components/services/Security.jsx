import React from 'react';
import cybersecurity from "../../images/cybersecurity.jpeg"
import cyberSecurity from "../../images/cyber-security1.gif"
import integrated from "../../images/intigrity.gif"
function Security() {

  return (
    <div style={{ fontFamily: "roboto-Serif" }}>
      <div className='container-fluid text-white' style={{ background: `url(${cybersecurity})`, height: "600px", backgroundSize: "cover" }}>
        <div className='row'>
          <div className='col-sm-6' >
          </div>
          <div className='col-sm-6 float-end mt-5 pe-5 text-white' style={{ display: "flex", alignItems: "center", fontFamily: "roboto-Serif" }}>
            <div className='pe-5'>
              <h1 style={{ color: "red" }}><b>Physical Security</b></h1>
              <p className='mt-4 fs-3 '>Physical security involves measures taken to protect tangible assets, people, and property
                from unauthorized access, theft, vandalism, and other physical threats.
                Security services in the physical realm encompass a wide range of strategies
                and technologies aimed at securing the physical premises of an entity. </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 style={{ color: "red" }}>Key Components of Physical Security Services</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#224d18" }}>
        <div className='row '>
          <div className='col-sm-11 text-light  mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-4 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "200px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-2 '>Access Control Systems</h3>
                    <p>
                      Utilizes technologies such as keycards, biometrics, and security badges to regulate entry.
                      Prevents unauthorized individuals from accessing restricted areas.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "200px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-2 '>Surveillance Systems</h3>
                    <p>
                      Implements video surveillance cameras to monitor and record activities.
                      Acts as a deterrent and provides evidence in case of security incidents.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm-4 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "200px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-2 ' > Security Personnel </h3>
                    <p>
                      Employs trained security personnel, such as guards and patrols, to monitor premises.
                      Enhances the human presence as a deterrent and ensures a rapid response to incidents.
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
          <div className='col-sm-7 text-light mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-6  rounded' >
                <div className="p-5 mb-5 mx-3 card" >
                  <div style={{ height: "200px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-2 '>Intrusion Detection</h3>
                    <p>
                      Utilizes sensors to detect unauthorized entry or movement within a secured area.
                      Triggers alarms or alerts security personnel to potential breaches.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "200px" }}>

                    <h3 style={{ color: "#224d18" }} className='mt-2 '>Perimeter Security</h3>
                    <p>
                      Establishes physical barriers, fencing, and lighting to secure the boundaries of a property.
                      Discourages trespassing and unauthorized access.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-light'>
        <div className='col-sm-11 mx-auto ' >
          <div className='row py-5 mx-auto ' >
            <div className='col-sm-6 px-5'>
              <img src={cyberSecurity} alt="webhoisting"className='img-fluid' height="400px" width="600px" />
            </div>
            <div className='col-sm-6 px-5'
            // style={{ display: "flex", alignItems: "center" ,fontFamily:"roboto-Serif" }}
            >
              <div>
                <h1 style={{ color: "red" }}>CYBER SECURITY SERVICES</h1>
                <p className='fs-4'>
                  Cybersecurity focuses on protecting digital assets, information, and computer systems from cyber threats, including hacking, data breaches, malware, and other malicious activities. Security services in the digital realm are crucial for maintaining the confidentiality, integrity, and availability of sensitive information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 style={{ color: "red" }}>Key Components of Cybersecurity Services</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#224d18" }}>
        <div className='row '>
          <div className='col-sm-11 text-light mx-auto'>

            <div className='row mx-auto '>
              <div className='col-sm-4 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-1 '>Firewalls and Network Security</h3>
                    <p>
                      Implements firewalls to monitor and control incoming and outgoing network traffic.
                      Protects against unauthorized access and cyberattacks.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-1 '>Antivirus and Anti-Malware Solutions</h3>
                    <p>
                      Deploys software to detect, prevent, and remove malicious software.
                      Regular updates ensure protection against the latest threats.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm-4 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-1' >Intrusion Prevention Systems (IPS) </h3>
                    <p>
                      Monitors and analyzes network or system activities to detect and prevent potential threats.
                      Takes proactive measures to stop malicious activities in real-time.
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
          <div className='col-sm-7 text-light mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-6  rounded' >
                <div className="p-5 mb-5 mx-3 card" >
                  <div style={{ height: "210px" }}>
                    <h3 style={{ color: "#224d18" }} className='mt-1 '>Encryption</h3>
                    <p>
                      Utilizes encryption algorithms to secure data during transmission and storage.
                      Protects sensitive information from unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 pb-5 rounded' >
                <div className="p-5 mx-3 card" >
                  <div style={{ height: "210px" }}>

                    <h3 style={{ color: "#224d18" }} className='mt-1 '>Incident Response and Forensics</h3>
                    <p>
                      Establishes protocols for responding to security incidents.
                      Conducts digital forensics to investigate and understand security breaches.
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
          <div className='col-sm-12 mt-5'>
            <div className='row mx-auto'>
              <div className='col-sm-10 mx-auto'>
                <h1 className='mt-3 ' style={{ color: "red" }}>Integrated Security Services </h1>
                <p className='fs-5' style={{ color: "black" }} >Integrated security services involve combining physical and cybersecurity measures to create a comprehensive and cohesive security strategy. This approach ensures a layered defense, addressing both tangible and digital threats for a more robust protective stance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className='container-fluid bg-light'>
        <div className='row'>
          <div className='col-sm-11 mx-auto px-5'>
            <div className='row mx-auto'>
              <div className='col-sm-5'>
                <div className='py-5 '>
                <img src={integrated} alt="integrated"className='img-fluid' height="640px" width="530px"/>
                </div>
              </div>
              <div className='col-sm-7 '>
                <div className='row' >
                  <h1 className='my-5 text-center' style={{ color: "red" }}>Benefits of Integrated Security</h1>

                  <div className='col-sm-6 pb-5 rounded '  >

                    <div className=' card p-4 shadow' style={{ height: "270px" }}>
                      <h3 style={{ color: "#224d18" }} className='mt-1 '> Holistic Protection</h3>
                      <p>
                        Addresses vulnerabilities on multiple fronts, providing comprehensive security coverage.
                      </p>
                    </div>
                  </div>
                  <div className='col-sm-6 pb-5 rounded ' >
                    <div className=' card p-4 shadow' style={{ height: "270px" }}>
                      <h3 style={{ color: "#224d18" }} className='mt-1'> Efficient Resource Utilization</h3>
                      <p>
                        Optimizes the use of security resources by integrating technologies and strategies.
                        Reduces redundancies and enhances overall efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-sm-6 pb-5 rounded ' >
                    <div className=' card p-4 shadow' style={{ height: "270px" }}>
                     
                      <h3 style={{ color: "#224d18" }} >Adaptive Security Measures</h3>
                      <p>
                        Allows for dynamic adjustments based on evolving threats and changing security needs.
                        Adapts to the specific risks faced by an organization.
                      </p>
                    </div>
                  </div>
                  <div className='col-sm-6 pb-5 rounded' >
                    <div className=' card p-4 shadow' style={{ height: "270px" }}>
                     
                      <h3 style={{ color: "#224d18" }} >Streamlined Operations</h3>
                      <p>
                        Integrates various security systems and services for centralized monitoring and management.
                        Enhances coordination and responsiveness.
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


  );
}
export default Security;

