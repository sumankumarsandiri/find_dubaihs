import React from 'react'
import './forgotpassword.css'
import forgotpasswordimg from '../assets/images/Forgot Password FD.png';
import { Apple, ChevronLeft, Facebook, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function Forgotpassword() {
    return (
        <div >
            <div className='d-flex flex-container'>
                
                <div className=''>
                    <div>
                        <form className='forgotpassword-form'>
                            <div className='d-flex back-button'>
                                <ChevronLeft style={{color:"ff6b01"}}></ChevronLeft>
                                <h6>
                                    <Link to="/login" className='text-dark'> Back to Login</Link>
                                    </h6>
                            </div>
                            <h2 style={{ color: "#ff6b01" }}>Forgot Your Password?</h2>
                            <div style={{color:"#9f9898", fontSize:"11px"}}>Don't worry, happens to all of us.Enter your email below to recover your password</div>
                            <br></br>
                            <div className=''>

                                <div className="input-group-item full-width">
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <button className='btn login-button full-width' >Submit</button>
                            </div>
                            <br></br>
                            <div>
                              
                                {/* hr line design */}
                                <div className="line-container">
                                    <span className="line-text">Or Login with</span>
                                </div>
                            </div>
                            <br></br>
                            {/* icons code */}
                            <div className='d-flex'>
                                <div className='registration-icons'>
                                    <Facebook style={{ color: "#0f90f3" }}></Facebook>
                                </div>
                                <div className='registration-icons'>
                                    <Google></Google>
                                </div>
                                <div className='registration-icons'>
                                    <Apple></Apple>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                {/* forgot password image */}
                <div className='justify-content-end'>
                    <img src={forgotpasswordimg} alt='img' className='forgotpassword-img'></img>
                </div>

            </div>
        </div>
    )
}
