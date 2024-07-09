import './Travel.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Col, Row } from 'react-bootstrap';
import Recommend from './Recommend';
import Services from './Services';
import travelbg from "../../assets/images/travelbg.jpg"
import car from "../../assets/images/caricon.jpg"
import flight from "../../assets/images/flighticon.webp"
import bus from "../../assets/images/busicon.jpg"
import ship from "../../assets/images/shipicon.jpg"
import hotel from "../../assets/images/hoelicon.jpg"
import Auto from "../../assets/images/Autotaxi.jpg"
import uber from "../../assets/images/ubericon.jpg"
import train from "../../assets/images/trainicon.jpg"
import hospital from "../../assets/images/hospitalicon.webp"
import taxi from "../../assets/images/taxiicon.jpg"




export function TravelHomepage() {
    return (
        <div>
            <div>
                <img className="bg-image" src={travelbg} />
            </div>


            {/* MOST POPULAR Services  */}
            <div>
                <h1 className='title mt-5' style={{ fontSize: "33px", textAlign: "center" }}>Most Popular Services</h1>
                <div className="categories-container">
                    <div className='container'>
                        <div className='row' mt-5>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to="/carmain">
                                    <img className="category-img" src={car} alt="Car Rental" />
                                    <h6>CarRental</h6>
                                </Link>
                            </div>

                            <div className='col-5 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to="/flightmain">
                                    <img className="category-img" src={flight} alt="Flight" />
                                    <h6>Flight</h6>
                                </Link>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to="/bushome">
                                    <img className="category-img" src={bus} alt="Bus" />
                                    <h6>Bus</h6>
                                </Link>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={ship} alt="Ship" />
                                <h6>Ship</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={train} alt="Train" />
                                <h6>Train</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={uber} alt="Uber" />
                                <h6>Uber</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={taxi} alt="Taxi" />
                                <h6>Taxi</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={Auto} alt="Auto taxi" />
                                <h6>TukTuk</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={hospital} alt="Hospital" />
                                <h6>Hospital</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={hotel} alt="Hotel" />
                                <h6>Hotel</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={hospital} alt="Hospital" />
                                <h6>Hospital</h6>
                            </div>

                            <div className='col-6 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={hotel} alt="Hotel" />
                                <h6>Hotel</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Recommend />
            <Services />




        </div>
    )
} 