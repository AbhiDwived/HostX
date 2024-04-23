import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { backupFeature } from './data.js';
import imgGirl from '../../images/whybackup1.jpg'
const Basic = () => {
    const [defaultImage, setDefaultImage] = useState({});
   
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
        <div className='conatiner-fluid'>
            <div className='row'>
                <div className='col-sm-11 mx-auto'>
                    <Slider {...settings}>
                        {
                        backupFeature.map((item) => (
                            <div className='row  px-lg-5 px-md-5'>
                                <div className='col-sm-12 col-lg-12 col-md-12'>
                                    <div className=" card basic-slider p-lg-3 p-md-3 p-sm-3" style={{ backgroundImage: `url(${item.linkImg})`, height: "350px", backgroundSize: "cover", }} >
                                        <img src="" alt="" />
                                        <h3 className='text-white'>{item.title}</h3>
                                        <span className="category text-white">{item.desciption}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default Basic