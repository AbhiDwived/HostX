import React from 'react'
import "../../Style/services.css"
import ssl from '../../images/ssl.jpg'
import auth from "../../images/auth.jpg"
import encryption from "../../images/encryption.jpg"
import dataIntegrity from "../../images/data-integrity.jpg"
import sslWork from "../../images/sslwork.avif"
const SslCertificates = () => {
  return (
    <div>
      <div className='container-fluid text-white ssl-top' style={{ background: `url(${ssl})`, backgroundSize: "cover" }}>
        <div className='row px-5 py-5'>
          <div className='col-lg-7 col-sm-12 float-end mt-5 ps-5' style={{ display: "flex", alignItems: "center", fontFamily: "roboto-Serif" }}>
            <div>
              <h1 style={{ color: "red" }}><b> SSL (Secure Sockets Layer)</b>
              </h1>
              <p className='mt-4 fs-3 '>
                In the expansive realm of cybersecurity, SSL (Secure Sockets Layer) stands as a cornerstone technology, providing a secure and encrypted connection between users and websites. This encryption protocol ensures the confidentiality and integrity of data transmitted over the internet.
              </p>
            </div>
          </div>
          <div className='col-lg-5 col-sm-12' >
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row pb-5'>
          <div className='col-sm-12 mt-5'>
            <div className='row mx-auto'>
              <div className='col-sm-10 mx-auto'>
                <h1 className='mt-3 ' style={{ color: "red" }}>At HostX we provide safest service for your business </h1>
                <p className='fs-5' style={{ color: "black" }} >SSL (Secure Sockets Layer) is a cryptographic protocol
                  designed to secure the communication between web browsers and servers.
                  Its primary function is to encrypt the data exchanged between a user's browser and
                  a website, preventing unauthorized access or tampering during transmission</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h1 className='mt-5 ' style={{ color: "red" }}>Key Components of SSL</h1>
          </div>
        </div>
      </div>
      {/* card key components */}
      <div className="container-fluid p-5" style={{ background: "#224d18" }}>
        <div className='row '>
          <div className='col-sm-11 col-lg-11 col-md-11 pb-5 text-light mx-auto'>

            <div className='row mx-auto'>
              <div className='col-sm-12 col-lg-4 col-md-6 rounded' >
                <div className="p-sm-5 p-md-5 mt-md-5 mt-sm-5 mt-lg-5 mx-3 card ssl-card" style={{ height: "450px" }}>
                  
                    <img src={encryption} alt="" height="170px" width="280px" className='img-fluid' />
                    <h4 style={{ color: "#224d18" }}>Encryption</h4>
                    <p>
                      Utilizes cryptographic algorithms to transform data into an unreadable format during transmission.
                      Protects sensitive information from being intercepted by malicious actors.
                    </p>
                  
                </div>
              </div>
              <div className='col-sm-12 col-lg-4 col-md-6 rounded' >
                <div className="p-sm-5 p-md-5 mt-md-5 mt-sm-5 mt-lg-5 mx-3 card ssl-card"style={{ height: "450px" }} >
                 
                    <img src={auth} alt="" height="170px" width="280px" className='img-fluid' />
                    <h4 style={{ color: "#224d18" }}>Authentication</h4>
                    <p>
                      Verifies the identity of the website, ensuring users connect to the intended destination.
                      Helps prevent man-in-the-middle attacks by confirming the legitimacy of the server.
                    </p>
                
                </div>
              </div>
              <div className='col-sm-12 col-lg-4 col-md-6 rounded' >
                <div className="p-sm-5 p-md-5 mt-md-5 mt-sm-5 mt-lg-5 mx-3 card ssl-card" style={{ height: "450px" }} >
                   
                    <img src={dataIntegrity} alt="" height="170px" width="280px" className='img-fluid' />
                    <h4 style={{ color: "#224d18" }}>Data Integrity</h4>
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
      {/* end key components */}
      {/* https://techx-37d3.onrender.com/ManagedIT */}
      {/* start ssl works */}
      <div className='container-fluid' >
        <div className='row'>
          <div className='col-sm-12 text-center pt-5'>
            <h1 style={{ color: "red" }}>How SSL Works</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row py-4'>
          <div className='col-sm-11 text-light mx-auto  pb-5'>

            <div className='row mx-auto'>
              <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                <div className='card p-4 m-2 shadow ssl-work-card'>
                  <h3 style={{ color: "#224d18" }}>Handshake Phase</h3>
                  <p>
                    Initiates a secure connection by performing a handshake between the client (user's browser) and the server.
                    During the handshake, the server presents its SSL certificate to the client.
                  </p>
                </div>
              </div>
              <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                <div className='card p-4 m-2 shadow ssl-work-card'>
                  <h3 style={{ color: "#224d18" }}>SSL Certificate</h3>
                  <p>
                    Contains the server's public key, its digital signature, and other relevant information.
                    Validates the server's identity and establishes a secure channel for communication.
                  </p>
                </div>
              </div>
              <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                <div className='card p-4 m-2 shadow ssl-work-card'>
                  <h3 style={{ color: "#224d18" }}>Data Encryption</h3>
                  <p>
                    Once the secure connection is established, SSL encrypts the data exchanged between the client and the server.
                    Uses symmetric key encryption for efficient data transmission.
                  </p>
                </div>
              </div>
              <div className='col-sm-12 col-lg-3 col-md-6 rounded '>
                <div className='card p-4 m-2 shadow ssl-work-card'>
                  <h3 style={{ color: "#224d18" }}>Secure Connection</h3>
                  <p>
                    The encrypted data travels securely between the client and the server, safeguarded from eavesdropping or tampering.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* end how work ssl  */}
      {/* start ssl versio */}
      <div className='container-fluid' style={{ background: "#224d18" }}>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <h1 className=' mt-3 ' style={{ color: "red" }} >SSL/TLS Evolution</h1>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="container-fluid" style={{ background: "#224d18" }} >
        <div className='row'>
          <div className='col-sm-11 pb-5 mx-auto'>
            <div className='row pb-5 mx-auto'>
              <div className='col-sm-6 col-md-6 col-lg-4 rounded' >
                <div className="p-5 mx-3 card mt-5 ssl-evolution" >
                  <div className="" >
                    <h3 style={{ color: "#224d18" }}>SSL 2.0</h3>
                    <p>
                      The first version, released in 1995, had vulnerabilities that prompted subsequent improvements.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-4 rounded ' >
                <div className="p-5 mx-3 card mt-5 ssl-evolution" >
                  <div className="" >
                    <h3 style={{ color: "#224d18" }}>SSL 3.0</h3>
                    <p>
                      Addressed vulnerabilities present in SSL 2.0 but was later found to have its own security flaws.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm-6 col-md-6 col-lg-4 rounded' >
                <div className="p-5 mx-3 card mt-5 ssl-evolution" >
                  <div className="" >
                    <h3 style={{ color: "#224d18" }} >TLS </h3><span>
                      (Transport Layer Security)
                    </span>
                    <p>
                      An enhanced and more secure successor to SSL, TLS 1.0 was introduced in 1999
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end ssl version */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 mt-5 text-center'>
            <h1 className='my-4' style={{ color: "red" }}>Importance of SSL</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row mx-auto'>
          <div className='col-sm-11 mx-auto px-3 '>

            <div className='row mx-auto pb-4'>
              <div className='col-sm-6 col-md-6 col-lg-3 px-3 rounded' >
                <div className=''>
                  <h3 style={{ color: "#224d18" }}>Data Protection</h3>
                  <p className=''>
                    Safeguards sensitive information such as login credentials, personal details, and financial transactions.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-3  px-3 rounded' >
                <div className=''>
                  <h3 style={{ color: "#224d18" }}> Credibility</h3>
                  <p className=' '>
                    Websites with SSL certificates display a padlock icon, indicating a secure connection.
                    Builds trust among users and enhances the credibility of online platforms.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-3 px-3 rounded' >
                <div className=''>
                  <h3 style={{ color: "#224d18" }}>SEO Benefits</h3>
                  <p className=''>
                    Search engines favor secure websites, and SSL is considered a ranking factor.
                    Implementation can positively impact a website's search engine visibility.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-3 px-3 rounded' >
                <div className=''>
                  <h3 style={{ color: "#224d18" }}>Compliance</h3>
                  <p className=''>
                    Many data protection regulations and standards require the use of encryption, making SSL a compliance necessity.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h1 style={{ color: "red" }}>Obtaining an SSL Certificate</h1>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-9  pt-3 pb-5 mx-auto'>
            <div className='row mx-auto'>
              <div className='col-sm-6   px-3'>
                <div className=''>
                  <h3 style={{ color: "#224d18" }}> Certificate Authority (CA)</h3>
                  <p> SSL certificates are issued by trusted Certificate Authorities.
                    CAs verify the identity of the certificate requester before issuance.</p>
                </div>
              </div>
              <div className='col-sm-6 px-3'>
                <div className=''>
                  <h3 style={{ color: "#224d18" }}>Types of SSL Certificates</h3>
                  <p>
                    Different types include Domain Validated (DV), Organization Validated (OV), and Extended Validation (EV), each offering varying levels of validation and assurance.
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

export default SslCertificates