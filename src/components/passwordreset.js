import './passwordreset.css'
import { Apple, ChevronLeft, Facebook, Google } from 'react-bootstrap-icons';
import passwordresetimg from '../assets/images/Forgot Password (Set a new Password) FD.png'

import React from 'react'
import { Link } from 'react-router-dom';

export default function Passwordreset() {
    return (
        <div>
            <div className='d-flex flex-container '>

                <div className=''>
                    <div>
                        <form className='passwordreset-form'>
                            <div className='d-flex back-button'>
                                <ChevronLeft style={{ color: "ff6b01" }}></ChevronLeft><h6>
                                <Link to="/login" className='text-dark'> Back to Login</Link>
                                </h6>
                            </div>
                            <br></br>
                            <br></br>

                            <h2 style={{ color: "#ff6b01" }}>Set a password</h2>
                            <div style={{color:"#9f9898", fontSize:"11px"}}> Your previous password has been reset. Please set a new password for your account</div>
                            <br></br>
                            <div className=''>

                                <div className="input-group-item full-width">
                                    <label>Create Password</label>
                                    <input type="password" />
                                </div>
                            </div>
                            <div className=''>

                                <div className="input-group-item full-width">
                                    <label>Re-enter Password</label>
                                    <input type="password" />
                                </div>
                            </div>
                            {/* <div className=''>

                                <div className="input-group-item full-width">
                                    <label>Password</label>
                                    <input type="password" />
                                </div>
                            </div> */}
                            {/* <div className='d-flex' >
                                <div style={{}}>
                                    <input type='radio'></input> Remember ME
                                </div>
                                <div style={{ marginLeft: "250px" }}>
                                    <span className='text-danger'>Forgot Password</span>

                                </div>
                            </div> */}
                            <br></br>
                            <div>
                                <button className='btn login-button full-width' >
                                    <Link to='/congratulations' className='text-white'>
                                    Set Password
                                    </Link>
                                 </button>
                            </div>
                            <br></br>
                            
                            <br></br>
                            {/* icons code */}
                           
                        </form>
                    </div>
                </div>
                {/* forgot password image */}
                <div className='justify-content-end'>
                    <img src={passwordresetimg} alt='img' className='passwordreset-img'></img>
                </div>

            </div>

        </div>
    )
}
