import React from 'react';
import '../Style/Newsletter.css';

const SubscribePage = () => {
    return (
        <div className='container-fluid'>
            {/* Our Other Services */}
            <div className="Otherservices-container fstyle">
                <div className="text-center mb-4 mb-md-5">
                    <h1>Our Hosting Services</h1>
                </div>

                <div className="row d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
                        <div className="mx-auto p-3 p-md-0"> {/* Added padding for mobile view */}
                            <h2 className="blue">Shared hosting</h2>
                            <p>
                                Shared hosting is a type of web hosting service where multiple websites share resources on a single server. In this hosting model, each website has its own partition or directory on the server, but resources such as CPU, memory, and disk space are shared among all the websites hosted on that server. This makes shared hosting a cost-effective option, particularly for small websites and businesses.
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
                        <div className="mx-auto p-3 p-md-0"> {/* Added padding for mobile view */}
                            <img
                                src="/images/home-slider/slider-item-01.png" // Example image URL, replace with your image URL
                                alt="Section 2 Image"
                                className="img-fluid" data-aos="zoom-in"
                            />
                        </div>
                    </div>
                </div>

                {/* SEO Service */}
                <div className="Seoservice-container">
                    <div className="row d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
                            <div className="mx-auto p-3 p-md-0"> {/* Added padding for mobile view */}
                                <img
                                    src="/images/home-slider/slider-item-02.png" // Example image URL, replace with your image URL
                                    alt="Section 2 Image"
                                    className="img-fluid" data-aos="zoom-in"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
                            <div className="mx-auto p-3 p-md-0"> {/* Added padding for mobile view */}
                                <h2 className="blue">VPS hosting</h2>
                                <p>
                                    VPS hosting is a popular choice for businesses and individuals who need more control and resources than what shared hosting offers but do not require the full power or cost of a dedicated server. It's suitable for medium-sized websites, applications, and projects with moderate traffic and resource needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marketing */}
                <div className="Marketing-container">
                    <div className="row d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
                            <div className="mx-auto p-3 p-md-0"> {/* Added padding for mobile view */}
                                <h2 className="blue">Dedicated hosting</h2>
                                <p>
                                    Dedicated hosting is a suitable choice for websites with high traffic volumes, resource-intensive applications, or specific security and compliance requirements. It provides the level of control and performance necessary for demanding online projects.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
                            <div className="mx-auto p-3 p-md-0"> {/* Added padding for mobile view */}
                                <img
                                    src="/images/home-slider/slider-item-03.png" // Example image URL, replace with your image URL
                                    alt="Section 2 Image"
                                    className="img-fluid" data-aos="zoom-in" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribePage;
