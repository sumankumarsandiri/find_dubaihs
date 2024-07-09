




import './Restaurent.css';
import React from "react";
import Slider from "react-slick";
import biryani from "../../../assets/images/biryani1.jpg";

import phirni from '../../../assets/images/phirni.jpg';
import haleem from '../../../assets/images/haleem.jpg';
import chai from '../../../assets/images/chai.webp';
import kabab from '../../../assets/images/kabab.jpg';
import biscuit from '../../../assets/images/biscuit.webp';

import restaurent_main_carousel_image1 from '../../../assets/images/restaurent_main_carousel_image1 (2).jpg';
import restaurent_main_carousel_image2 from '../../../assets/images/restaurent_main_carousel_image2.jpg';
import restaurent_main_carousel_image3 from '../../../assets/images/restaurent_main_carousel_image3.jpg';
import { Link } from 'react-router-dom';
export function RestaurantComponent() {
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
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 restaurent_images" src={restaurent_main_carousel_image1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 restaurent_images" src={restaurent_main_carousel_image2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 restaurent_images" src={restaurent_main_carousel_image3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <h1 className='restaurent_title'><span style={{
                color: 'rgb(64, 224, 208)'
            }}>Hyderabad</span> Famous Food</h1>
            <div className="restaurent-slider-container">

                <Slider {...settings}>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <Link to="/biryani_page" style={{ textDecoration: 'none', color: 'black' }}>
                            <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                                <img className="card-img-top" src={biryani} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                                <div className="card-body">
                                    <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Hyderabad Biryani</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={phirni} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Phirni</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={haleem} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Haleem</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={chai} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Irani Chai</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={kabab} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Kabab</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mx-3 card-1" style={{ height: '230px', width: '200px' }}>
                            <img className="card-img-top" src={biscuit} alt="tutor" style={{ height: '150px', marginTop: '-80px' }} />
                            <div className="card-body">
                                <h5 className="card-titles" style={{ textAlign: "center", marginTop: '150px' }}>Osmania Biscuits</h5>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}