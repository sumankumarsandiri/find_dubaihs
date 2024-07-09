import './jobservice.css';
import React from "react";
import Slider from "react-slick";
// import biryani from "../../../assets/images/biryani1.jpg";

// import phirni from '../../../assets/images/phirni.jpg';
// import haleem from '../../../assets/images/haleem.jpg';
// import chai from '../../../assets/images/chai.webp';
// import kabab from '../../../assets/images/kabab.jpg';
// import biscuit from '../../../assets/images/biscuit.webp';

// import restaurent_main_carousel_image1 from '../../../assets/images/restaurent_main_carousel_image1 (2).jpg';
// import restaurent_main_carousel_image2 from '../../../assets/images/restaurent_main_carousel_image2.jpg';
import graphiimg from "../../assets/images/graphic-images.webp";
import associate from "../../assets/images/Associate-img.jpg";
import assistantimg from "../../assets/images/Assistantimg.jpg";
import qualityimg from "../../assets/images/qualityimg.jpg";
import banner from "../../assets/images/banner.jpg";


import { Link } from 'react-router-dom';
export function Jobservice() {
    var settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
<div className='restaurent_carousel'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 restaurent_images" src={banner} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 restaurent_images" src={banner} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 restaurent_images" src={banner} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            </div>
            <h1 className='restaurent_title'><span style={{
                color: 'rgb(64, 224, 208)'
            }}>Recommanded</span> Jobs</h1>
            <div className="restaurent-slider-container">

                <Slider {...settings}>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <Link to="/job-companies" style={{textDecoration:'none',color:'black'}}>
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={graphiimg} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Graphic Designer</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <Link to="/job-companies" style={{textDecoration:'none',color:'black'}}>
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={associate} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Associate Engineer</h5>
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <Link to="/job-companies" style={{textDecoration:'none',color:'black'}}>
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={assistantimg} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Assistant Manager</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <Link to="/job-companies" style={{textDecoration:'none',color:'black'}}>
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={qualityimg} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Quality Enginner</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                </Slider>
            </div>
        </div>
    )
}