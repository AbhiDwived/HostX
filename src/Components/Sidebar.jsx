import React, { useState } from "react";
import "../Style/Sidebar.css"

const Sidebar1 = ({ show, onClose }) => {
    const [toggle, setToggle] = useState(1)
    if (!show) {
        return null;
    }


    const updateToggle = (id) => {
        setToggle(id)
    }


    return (
        <>
            <div className="popup z-3 px-3 sticky" >
                <ul>
                    <li onClick={() => updateToggle(1)} >All</li>
                    <li onClick={() => updateToggle(2)}>Apps</li>
                    <li onClick={() => updateToggle(3)}>Compute</li>
                    <li onClick={() => updateToggle(4)}>Storage</li>
                    <li onClick={() => updateToggle(5)}>Networking</li>
                    <li onClick={() => updateToggle(6)}>Hosting</li>
                    <li onClick={() => updateToggle(7)}>XDesign</li>
                    <li onClick={onClose} className="btn btnclose"><label className="btn-close"></label></li>
                </ul>
                <div className="tab-toggle">
                    <div className={toggle === 1 ? "show-content" : "content"} style={{ overflowY: 'auto', maxHeight: '600px' }}>
                        <p className="popup-head1">Top Apps</p>
                        <div className="row popup-img" style={{ gap: 15, }}>
                            <div className="col-lg-3 popup1-img">
                                <img className="" src="./images/sliderbar/gmail1.png" height={30} width={30} alt="" />
                                <p>Gmail</p>
                            </div>
                            <div className="col-lg-3 popup1-img">
                                <img src="./images/sliderbar/discord-img.png" height={30} width={30} alt="" />
                                <p>Discord</p>
                            </div>
                            <div className="col-lg-3 popup1-img">
                                <img className="popupimg" src="./images/sliderbar/airbnb-img.png" height={30} width={30} alt="" />
                                <p>Airbnb</p>
                            </div>
                            <div className="col-lg-3 popup1-img">
                                <img src="./images/sliderbar/slack-img.png" height={30} width={30} alt="" />
                                <p>Slack</p>
                            </div>
                            <div className="col-lg-3 popup1-img">
                                <img src="./images/sliderbar/reddit.png" height={30} width={30} alt="" />
                                <p>Reddit</p>
                            </div>
                            <div className="col-lg-3 popup1-img">
                                <img src="./images/sliderbar/yahoo.png" height={30} width={30} alt="" />
                                <p>Yahoo</p>
                            </div>
                            <div className="col-lg-3 popup1-img">
                                <img src="./images/sliderbar/evernote.png" height={30} width={30} alt="" />
                                <p>Evernote</p>
                            </div>
                            <div className="col-lg-3 popup1-img">
                                <img src="./images/sliderbar/dropbox.png" height={30} width={30} alt="" />
                                <p>Dropbox</p>
                            </div>




                            <div className="container">
                                <div style={{ marginLeft: 20 }}>Recommended</div>
                                <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/vps.png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Virtual Private Server</h>
                                                <p>Flexible virtual machines</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/business.png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Business Analysis </h>
                                                <p>Start your host business</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/cloud.png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Cloud Hosting </h>
                                                <p>Powerful bare metal servers</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/dedicated.png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Dedicated Servers </h>
                                                <p>Powerful bare metal servers</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/ds.png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Data Security </h>
                                                <p>Keep your data safe</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/wh.png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Web Hosting </h>
                                                <p>Start Hosting your website</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="container mt-1">
                                <div style={{ marginLeft: 20 }}>Storage</div>
                                <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (1).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Scalability</h>
                                                <p>Flexible resource adjustment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (2).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Accessibility </h>
                                                <p>Data access from anywhere</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (3).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Durability </h>
                                                <p>Redundant storage, high availability</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (4).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Security </h>
                                                <p>Robust encryption, access controls.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Cost-Effective </h>
                                                <p>Pay only for the storage</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (6).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Backup and Recovery </h>
                                                <p>Automated data protection</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (7).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Collaboration</h>
                                                <p>Syncing data for teamwork</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (8).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Integration</h>
                                                <p> Seamless with other services</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (9).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Compliance</h>
                                                <p>Adherence to industry standards</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Storage (10).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Flexibility.</h>
                                                <p>Supports diverse data types</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="container mt-1">
                                <div style={{ marginLeft: 10 }}>Networking</div>
                                <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (1).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Virtual Private Networks(VPNs)</h>
                                                <p>Secure remote connections.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (2).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Load Balancing</h>
                                                <p>Traffic distribution optimization.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (3).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Firewalls and Security Services</h>
                                                <p>Cyber threat protection.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (4).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Content Delivery Networks(CDN)</h>
                                                <p>Speeds web content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Software-Defined Networking(SDN)</h>
                                                <p>Centralized network management.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (6).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Cloud Networking</h>
                                                <p> Secure cloud resource management.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (7).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Wide Area Networking(WAN)Services</h>
                                                <p>Geographically dispersed connectivity</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (8).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Internet of Things (IoT) Networking:</h>
                                                <p>  Infrastructure for IoT devices.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (9).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Quality of Service (QoS) Solutions</h>
                                                <p>Traffic optimization tools.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Network (10).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Network Monitoring and Analytics</h>
                                                <p>Network performance insights.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="container mt-1">
                                <div style={{ marginLeft: 10 }}>Hosting</div>
                                <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (1).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Shared Hosting</h>
                                                <p>Shared server resources.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (2).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Virtual Private Server (VPS) Hosting</h>
                                                <p>Virtualized dedicated servers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (3).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Dedicated Server Hosting</h>
                                                <p>Exclusive server control.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (4).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Cloud Hosting</h>
                                                <p>Scalable virtual resources.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Managed WordPress Hosting</h>
                                                <p> Optimized for WordPress.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (6).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Reseller Hosting</h>
                                                <p>Leasing and reselling.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (7).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Colocation Hosting</h>
                                                <p>Own server in data center.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (8).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Clustered Hosting</h>
                                                <p>Enhanced performance servers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (9).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Grid Hosting</h>
                                                <p>Efficient resource distribution.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Hosting (10).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Game Server Hosting</h>
                                                <p>Multiplayer game infrastructure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="container mt-1">
                            <div style={{ marginLeft: 10 }}>Graphic Design:</div>
                            <div className=" compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                <div className="row">
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Graphic-design (1).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Logo Design</h>
                                                <p>Memorable brand symbols.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Graphic-design (2).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Brand Identity</h>
                                                <p> Visual brand consistency.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Graphic-design (3).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Print Collateral</h>
                                                <p>Physical promotional items.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Graphic-design (4).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Web Graphics</h>
                                                <p>Online visual elements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/Graphic-design (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Social Media Graphics</h>
                                                <p>Tailored visuals for platforms.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div> */}


                            <div className="container mt-1">
                                <div style={{ marginLeft: 10 }}>Graphic Design:</div>
                                <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (1).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Logo Design</h>
                                                <p>Memorable brand symbols.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (2).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Brand Identity</h>
                                                <p> Visual brand consistency.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (3).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Print Collateral</h>
                                                <p>Physical promotional items.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (4).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Web Graphics</h>
                                                <p>Online visual elements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Social Media Graphics</h>
                                                <p>Tailored visuals for platforms.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Social Media Graphics</h>
                                                <p>Tailored visuals for platforms.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="container mt-1">
                                <div style={{ marginLeft: 10 }}>UI/UX Design</div>
                                <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/ux-design (1).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Wireframing</h>
                                                <p>Basic layout planning.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/ux-design (2).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Prototyping</h>
                                                <p>Dynamic model creation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/ux-design (3).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>User Research</h>
                                                <p>Understanding user needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/ux-design (4).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>User Flows</h>
                                                <p>Interface navigation paths.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/ux-design (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Visual Design</h>
                                                <p>Aesthetic interface creation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                                <img src="./images/sliderbar/ux-design (6).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Usability Testing</h>
                                                <p>Practical design evaluation.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>


                    <div className={toggle === 2 ? "show-content" : "content"} style={{ overflowY: 'auto', maxHeight: '600px' }}>
                        <div>
                            <p className="popup-head1">Popular</p>
                            <div className="row popup-img" style={{ gap: 15, marginLeft: 10 }}>
                                <div className="col-lg-3 popup1-img">
                                    <img className="" src="./images/sliderbar/gmail1.png" height={30} width={30} alt="" />
                                    <p>Gmail</p>
                                </div>
                                <div className="col-lg-3 popup1-img">
                                    <img src="./images/sliderbar/discord-img.png" height={30} width={30} alt="" />
                                    <p>Discord</p>
                                </div>
                                <div className="col-lg-3 popup1-img">
                                    <img className="popupimg" src="./images/sliderbar/airbnb-img.png" height={30} width={30} alt="" />
                                    <p>Airbnb</p>
                                </div>
                                <div className="col-lg-3 popup1-img">
                                    <img src="./images/sliderbar/slack-img.png" height={30} width={30} alt="" />
                                    <p>Slack</p>
                                </div>
                                <div className="col-lg-3 popup1-img">
                                    <img src="./images/sliderbar/reddit.png" height={30} width={30} alt="" />
                                    <p>Reddit</p>
                                </div>

                            </div>
                            <div>
                                <p className="popup-head1 mt-4">All Apps</p>
                                <div className="row popup-img" style={{ gap: 15, marginLeft: 20 }}>
                                    <div className="col-lg-3 popup2-col">
                                        <img className="" src="./images/sliderbar/gmail1.png" height={30} width={30} alt="" />
                                        <p>Gmail</p>
                                    </div>
                                    <div className="col-lg-3 popup2-col">
                                        <img src="./images/sliderbar/discord-img.png" height={30} width={30} alt="" />
                                        <p>Discord</p>
                                    </div>
                                    <div className="col-lg-3 popup2-col">
                                        <img className="popupimg" src="./images/sliderbar/airbnb-img.png" height={30} width={30} alt="" />
                                        <p>Airbnb</p>
                                    </div>
                                    <div className="col-lg-3 popup2-col">
                                        <img src="./images/sliderbar/slack-img.png" height={30} width={30} alt="" />
                                        <p>Slack</p>
                                    </div>
                                    <div className="col-lg-3 popup2-col">
                                        <img src="./images/sliderbar/reddit.png" height={30} width={30} alt="" />
                                        <p>Reddit</p>
                                    </div>
                                    <div className="col-lg-3 popup2-col">
                                        <img src="./images/sliderbar/yahoo.png" height={30} width={30} alt="" />
                                        <p>Yahoo</p>
                                    </div>
                                    <div className="col-lg-3 popup2-col">
                                        <img src="./images/sliderbar/evernote.png" height={30} width={30} alt="" />
                                        <p>Evernote</p>
                                    </div>
                                    <div className="col-lg-3 popup2-col">
                                        <img src="./images/sliderbar/dropbox.png" height={30} width={30} alt="" />
                                        <p>Dropbox</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggle === 3 ? "show-content" : "content"} style={{ overflowY: 'auto', maxHeight: '600px' }}>
                        <div className="container mt-1">
                            <div style={{ marginLeft: 20 }}></div>
                            <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/vps.png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Virtual Private Server</h>
                                            <p>Flexible virtual machines</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/business.png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Business Analysis </h>
                                            <p>Start your host business</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/cloud.png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Cloud Hosting </h>
                                            <p>Powerful bare metal servers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/dedicated.png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Dedicated Servers </h>
                                            <p>Powerful bare metal servers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/ds.png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Data Security </h>
                                            <p>Keep your data safe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/wh.png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Web Hosting </h>
                                            <p>Start Hosting your website</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Compute (1).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>managed IT</h>
                                            <p>Outsourced tech management.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Compute (2).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>BI & Analtics </h>
                                            <p>Data-driven decision support.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Compute (3).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Voip Systems</h>
                                            <p>Internet-based voice communication.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Compute (4).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Remote Support</h>
                                            <p>Distance tech issue resolution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggle === 4 ? "show-content" : "content"} style={{ overflowY: 'auto', maxHeight: '600px' }}>
                        <div className="container mt-1">
                            <div style={{ marginLeft: 20 }}></div>
                            <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (1).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Scalability</h>
                                            <p>Flexible resource adjustment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (2).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Accessibility </h>
                                            <p>Data access from anywhere</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (3).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Durability </h>
                                            <p>Redundant storage, high availability</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (4).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Security </h>
                                            <p>Robust encryption, access controls.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (5).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Cost-Effective </h>
                                            <p>Pay only for the storage</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (6).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Backup and Recovery </h>
                                            <p>Automated data protection</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (7).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Collaboration</h>
                                            <p>Syncing data for teamwork</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (8).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Integration</h>
                                            <p> Seamless with other services</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (9).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Compliance</h>
                                            <p>Adherence to industry standards</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Storage (10).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Flexibility.</h>
                                            <p>Supports diverse data types</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggle === 5 ? "show-content" : "content"} style={{ overflowY: 'auto', maxHeight: '600px' }}>
                        <div className="container mt-1">
                            <div style={{ marginLeft: 10 }}></div>
                            <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (1).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Virtual Private Networks(VPNs)</h>
                                            <p>Secure remote connections.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (2).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Load Balancing</h>
                                            <p>Traffic distribution optimization.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (3).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Firewalls and Security Services</h>
                                            <p>Cyber threat protection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (4).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Content Delivery Networks(CDN)</h>
                                            <p>Speeds web content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (5).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Software-Defined Networking(SDN)</h>
                                            <p>Centralized network management.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (6).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Cloud Networking</h>
                                            <p> Secure cloud resource management.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (7).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Wide Area Networking(WAN)Services</h>
                                            <p>Geographically dispersed connectivity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (8).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Internet of Things (IoT) Networking:</h>
                                            <p>  Infrastructure for IoT devices.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (9).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Quality of Service (QoS) Solutions</h>
                                            <p>Traffic optimization tools.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Network (10).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Network Monitoring and Analytics</h>
                                            <p>Network performance insights.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggle === 6 ? "show-content" : "content"} style={{ overflowY: 'auto', maxHeight: '600px' }}>
                        <div className="container mt-1">
                            <div style={{ marginLeft: 10 }}>Hosting Services
                            </div>
                            <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (1).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Shared Hosting</h>
                                            <p>Shared server resources.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (2).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Virtual Private Server (VPS) Hosting</h>
                                            <p>Virtualized dedicated servers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (3).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Dedicated Server Hosting</h>
                                            <p>Exclusive server control.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (4).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Cloud Hosting</h>
                                            <p>Scalable virtual resources.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (5).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Managed WordPress Hosting</h>
                                            <p> Optimized for WordPress.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (6).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Reseller Hosting</h>
                                            <p>Leasing and reselling.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (7).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Colocation Hosting</h>
                                            <p>Own server in data center.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (8).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Clustered Hosting</h>
                                            <p>Enhanced performance servers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (9).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Grid Hosting</h>
                                            <p>Efficient resource distribution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/Hosting (10).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Game Server Hosting</h>
                                            <p>Multiplayer gaming platform.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggle === 7 ? "show-content" : "content"} style={{ overflowY: 'auto', maxHeight: '600px' }}>
                    <div className="container mt-1">
                                <div style={{ marginLeft: 10 }}>Graphic Design:</div>
                                <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (1).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Logo Design</h>
                                                <p>Memorable brand symbols.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (2).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Brand Identity</h>
                                                <p> Visual brand consistency.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 compute-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (3).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Print Collateral</h>
                                                <p>Physical promotional items.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (4).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Web Graphics</h>
                                                <p>Online visual elements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Social Media Graphics</h>
                                                <p>Tailored visuals for platforms.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 recom-main">
                                        <div style={{ display: "flex" }}>
                                            <div className="recom1">
                                            <img src="./images/sliderbar/Graphic-design (5).png" height={40} width={40} alt="" />
                                            </div>
                                            <div className="compute">
                                                <h>Social Media Graphics</h>
                                                <p>Tailored visuals for platforms.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        <div className="container mt-1">
                            <div style={{ marginLeft: 10 }}>UI/UX Design</div>
                            <div className="row compute-style mt-3" style={{ gap: 5, justifyContent: "center" }}>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/ux-design (1).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Wireframing</h>
                                            <p>Basic layout planning.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/ux-design (2).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Prototyping</h>
                                            <p>Dynamic model creation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 compute-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/ux-design (3).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>User Research</h>
                                            <p>Understanding user needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/ux-design (4).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>User Flows</h>
                                            <p>Interface navigation paths.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/ux-design (5).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Visual Design</h>
                                            <p>Aesthetic interface creation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 recom-main">
                                    <div style={{ display: "flex" }}>
                                        <div className="recom1">
                                            <img src="./images/sliderbar/ux-design (6).png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="compute">
                                            <h>Usability Testing</h>
                                            <p>Practical design evaluation.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>


                </div>
            </div>
        </>
    )
}
export default Sidebar1;