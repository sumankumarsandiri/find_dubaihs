import React from 'react';
import { StarFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './CarList.css';
import car1 from "../../../../assets/images/car1.jpg"
import car2 from "../../../../assets/images/car2.jpg"
import car3 from "../../../../assets/images/car3.jpg"
import car4 from "../../../../assets/images/car4.jpg"
import car5 from "../../../../assets/images/car5.jpg"
import car6 from "../../../../assets/images/car6.jpg"


export default function CarList() {
    return (
        <div>
            <div className="homepage-container">
                <div className="overlay">
                    <div className="top-section">
                        <h2>For Rent $70 Per Day</h2>
                        <h1>Reserve Now and Get 50% Off</h1>
                        {/* <button className="reserve-btn">Reserve Now</button> */}
                    </div>
                </div>
            </div>
            <br>
            </br>
            <br></br>

            <div className='car_main_container'>
                <div className='row'>
                    <div className='col-4'>
                        <Link to="/carbooking">
                            <img src={car1} className='car_images' alt="BMW X6" />
                        </Link>
                        <div className='car_info'>
                            <span>BMW X6 Model</span>
                            <span className='car_ratings'>4.2&nbsp;<StarFill /></span>
                            <p>The Smooth Six-Cylinder is perfect.which automatically distributes power between wheels</p>
                            <p>Opens Morning 9AM to 6PM</p>
                            <p>15km</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={car2} className='car_images' alt="Mercedes-Benz GLE" />
                        <div className='car_info'>
                            <span>Mercedes-Benz GLE</span>
                            <span className='car_ratings'>4.2&nbsp;<StarFill /></span>
                            <p>Mercedes-Benz is a germany luxury car brand</p>
                            <p>Opens 9:00 AM to Closes 6:00 PM</p>
                            <p>20km</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={car3} className='car_images' alt="Mercedes-Benz EQS" />
                        <div className='car_info'>
                            <span>Mercedes-Benz EQS</span>
                            <span className='car_ratings'>4.7&nbsp;<StarFill /></span>
                            <p>Mercedes-Benz is a germany luxury car brand.</p>
                            <p>Opens 9:30 AM to Closes 9:30 PM</p>
                            <p>24km</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='car_main_container'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={car4} className='car_images' alt="Lamborghini Huracan EVO" />
                        <div className='car_info'>
                            <span>Lamborghini Huracan EVO</span>
                            <span className='car_ratings'>4.0&nbsp;<StarFill /></span>
                            <p>Automobili LamBorghini s.p.a is an italian manufacturer of luxury sports cars.</p>
                            <p>Opens 24 hours</p>
                            <p>20km</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={car5} className='car_images' alt="Ford Mustang" />
                        <div className='car_info'>
                            <span>Ford Mustang</span>
                            <span className='car_ratings'>3.5&nbsp;<StarFill /></span>
                            <p>This is a 1958 sports car. It's beaten by an ordinary golf 0-60 and at anything.</p>
                            <p>Opens 9:00 AM to Closes 5:00 PM</p>
                            <p>35km</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={car6} className='car_images' alt="Mercedes-Benz EQS" />
                        <div className='car_info'>
                            <span>Mercedes-Benz EQS</span>
                            <span className='car_ratings'>4.2&nbsp;<StarFill /></span>
                            <p>Mercedes-Benz is a germany luxury car brand.</p>
                            <p>Opens 10:30 PM to Closes 11:00 PM</p>
                            <p>44km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
