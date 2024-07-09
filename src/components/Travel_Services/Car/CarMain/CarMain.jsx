import React from 'react';
import './CarMain.css';
import { Link } from 'react-router-dom';
import { PopularServices } from '../PopularServices/PopularServices';
import car4 from '../../../../assets/images/car4.jpg'

export default function CarMain() {
    return (
        <div>
            <div className="homepage">
                <div className="overlay">
                    <div className="top-section">
                    </div>
                    <h2 className='bgcolor'>Life is either a daring adventure or Nothing at all</h2>

                    <div className="bottom-section">
                        <div className="form-container">
                            <h2>Find your best car here</h2>
                            <form>
                                <input type="text" placeholder="From address" />
                                <input type="text" placeholder="To address" />
                                <input type="date" />
                                <input type="time" placeholder="Journey time" />
                                <select>
                                    <option value="AC Car">AC Car</option>
                                    <option value="Non-AC Car">Non-AC Car</option>
                                </select>
                                <Link to="/carlist">
                                    <button type="submit" className="find-car-btn">Find Car</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* About us  */}
            <div className="about-us">
                <div className="about-us-content">
                    <h1>About Us</h1>
                    <h3>Welcome to car rent service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis esse accusantium dignissimos labore laborum. Veniam, corporis mollitia temporibus, in quaerat vero deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit neque sit ad temporibus quam similique dolor ipsam praesentium sunt.</p>
                    <ul>
                        <li>✔️ Lorem ipsum dolor sit amet.</li>
                        <li>✔️ Lorem ipsum dolor sit amet.</li>
                        <li>✔️ Lorem ipsum dolor sit amet.</li>
                        <li>✔️ Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="about-us-image">
                    <img src={car4} alt="Car" />
                </div>
            </div>

            <PopularServices></PopularServices>


        </div>
    )
}



