
import React from 'react';
import { Link } from 'react-router-dom';
import bus1 from '../../../../assets/images/bus1.jpg'
import bus2 from '../../../../assets/images/bus2.jpg'
import bus3 from '../../../../assets/images/bus3.jpg'
import './BusHome.css';

function BusHome() {
    return (
        <div>
            <div className="homepage-container">
                <div className="overlay">
                    <div className="top-section">
                    </div>
                </div>
            </div>

            <div className="home">
                <header className="home-header">
                    <h1>Book your bus tickets easily</h1>
                </header>

                <div>
                    <div className="form-container">
                        <h2>Find your best Bus here</h2>
                        <form>
                            <input type="text" placeholder="From address" />
                            <input type="text" placeholder="To address" />
                            <input type="date" />
                            <Link to="/bussearch">
                                <button type="submit" className="find-bus-btn">Find Bus</button>
                            </Link>
                        </form>
                    </div>
                </div>

                <div className="home-images">
                    <img src={bus1} alt="Bus 1" />
                    <img src={bus2} alt="Bus 2" />
                    <img src={bus3} alt="Bus 3" />
                </div>
            </div>
        </div>

    );
}

export default BusHome;
