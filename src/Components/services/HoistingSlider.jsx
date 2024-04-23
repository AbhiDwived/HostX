import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {consideration } from './considerations.js';
const HoistingSlider = () => {
    const [defaultImage, setDefaultImage] = useState({});
    const imgGirl = '../../images/whybackup1.jpg'; 
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: imgGirl,
        }));
    };
  return (
    <div>
       <div className='conatiner-fluid'>
            <div className='row mb-5 '>
                <div className='col-sm-11 mx-auto'>
                    <Slider {...settings}>
                        {
                        consideration.map((item) => (
                            <div className='row  px-5'>
                                <div className='col-sm-12'>
                                    <div className=" card p-5 shadow" style={{ height: "300px"}} >   
                                        <h3 style={{ color: "#224d18" }}>{item.title}</h3>
                                        <span className="category">{item.desciption}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
    </div>
    </div>
  )
}

export default HoistingSlider
