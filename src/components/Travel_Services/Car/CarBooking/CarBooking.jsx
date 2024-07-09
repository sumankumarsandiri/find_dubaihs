import React, { useState } from 'react';
import './CarBooking.css';
import car1 from "../../../../assets/images/car1.jpg"

export default function CarBooking() {
    return (
        <div className='Car'>
            <div className="car-booking-form">
                <div className="form-container">
                    <h2 style={{ fontSize: "33px", textAlign: "center" }}>Car Booking Form</h2><br></br>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>

                        <form>
                            <h6 htmlFor="car-type">Car Type:</h6>
                            <select id="car-type" name="car-type" required>
                                <option value="">Select Car Type</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="hatchback">Hatchback</option>
                            </select>
                            <input type="text" placeholder="From address" />
                            <input type="text" placeholder="To address" />
                            <input type="date" placeholder="Pickup Date" />

                        </form>
                        <button type="submit" className="find-car-btn">Submit</button>

                    </form>
                </div>
                <div className="car-image">
                    <img src={car1} alt="Car" />
                </div>
            </div>
        </div>
    );
}
