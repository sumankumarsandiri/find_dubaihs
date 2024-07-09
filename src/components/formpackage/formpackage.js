

import { React, useState } from 'react';
import "./formpackage.css";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


export default function Formpackage() {

    return (
        <div className='f'>
           
                <div className='row misc ml2'>
                    <div className='col-md-6 col-lg-4 ml'>
                        <h4 className='ml fn'>Need Assistance?</h4>
                        
                    </div>
                    <Link to="/dpackages">
                        <div className='col-md-6 col-lg-4 ml1' style={{ color: "red", cursor: "pointer" }}>
                            <CloseIcon />
                        </div>
                    </Link>
                </div>
           
            <div className="form-container">
                <form>
                    <div className='row'>
                        <div className="col-6 fn form-group">
                            <label htmlFor="destination">DESTINATION:</label>
                            <input
                                type="text"
                                id="destination"
                                name="destination"
                                
                               
                            />
                        </div>
                        <div className="col-6 fn form-group">
                            <label htmlFor="departure">DEPARTURE CITY:</label>
                            <input
                                type="text"
                                id="departure"
                                name="departure"
                               
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-6 fn form-group">
                            <label htmlFor="name">NAME:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                
                            />
                        </div>
                        <div className="col-6 fn form-group">
                            <label htmlFor="phone">PHONE:</label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                
                            />
                        </div>
                    </div>
                    <div className=" fn form-group">
                        <label htmlFor="email">EMAIL ID:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            
                        />
                    </div>
                    <div className="form-group form-group-checkbox fn">
                        <label htmlFor="subscribe">
                            <input
                                type="checkbox"
                                id="subscribe"
                                name="subscribe"
                                
                            />
                            I have read and agree to the User Agreement & Privacy policy
                        </label>
                    </div>
                    {/* <input type='button' id="fm" value="submit"/> */}
                    <button className='btn btn-success s' >Submit</button>
                </form>
            </div>
        </div>
    );
}

