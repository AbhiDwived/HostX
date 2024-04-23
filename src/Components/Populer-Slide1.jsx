import React from 'react';
import '../Style/Populer.css';


const PopulerSlide = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mb-4 ">
            <div className="text-center ">
                <div className="row justify-content-center" data-aos="zoom-in">
                    <div className='col-md-4'>
                        <div className="card">
                            <div className="container-body">
                                <div className="bg-colored"> {/* Apply the bg-colored class here */}
                                    <p className="title">starting At</p>
                                    <h5 className="card-title">$9.99/m</h5>
                                </div>
                                <div className="bg-coloredhosting"> {/* Apply the bg-colored class here */}
                                    <p className="card-text">Shared Hosting</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">2GB RAM</li>
                                    <li className="list-group-item">20GB SSD Cloud Storage</li>
                                    <li className="list-group-item">Weekly Backups</li>
                                    <li className="list-group-item">DDoS Protection</li>
                                    <li className="list-group-item">Full Root Access</li>
                                    <li className="list-group-item">24/7/365 Tech Support</li>
                                </ul>
                                <button className="btn btn-primary mt-3 mb-4">Order Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className="card">
                            <div className="container-body">
                                <div className="bg-colored"> {/* Apply the bg-colored class here */}
                                    <p className="title">starting At</p>
                                    <h5 className="card-title">$29.99/m</h5>
                                </div>
                                <div className="bg-coloredhosting"> {/* Apply the bg-colored class here */}
                                    <p className="card-text">Shared Hosting</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">4GB RAM</li>
                                    <li className="list-group-item">40GB SSD Cloud Storage</li>
                                    <li className="list-group-item">Weekly Backups</li>
                                    <li className="list-group-item">DDoS Protection</li>
                                    <li className="list-group-item">Full Root Access</li>
                                    <li className="list-group-item">24/7/365 Tech Support</li>
                                </ul>
                                <button className="btn btn-primary mt-3 mb-4">Order Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className="card">
                            <div className="container-body">
                                <div className="bg-colored"> {/* Apply the bg-colored class here */}
                                    <p className="title">starting At</p>
                                    <h5 className="card-title">$49.99/m</h5>
                                </div>
                                <div className="bg-coloredhosting"> {/* Apply the bg-colored class here */}
                                    <p className="card-text">Shared Hosting</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">8GB RAM</li>
                                    <li className="list-group-item">60GB SSD Cloud Storage</li>
                                    <li className="list-group-item">Weekly Backups</li>
                                    <li className="list-group-item">DDoS Protection</li>
                                    <li className="list-group-item">Full Root Access</li>
                                    <li className="list-group-item">24/7/365 Tech Support</li>
                                </ul>
                                <button className="btn btn-primary mt-3 mb-4">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopulerSlide;
