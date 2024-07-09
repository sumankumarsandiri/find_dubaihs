import React from 'react'
import './verifycode.css'
import verifycodeimg from '../assets/images/Forgot Password (Verify Code) FD.png';
import { Apple, ChevronLeft, Facebook, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function Verifycode() {
    return (
        <div >
            <div className='d-flex flex-container'>

                <div className=''>
                    <div>
                        <form className='verifycode-form'>
                            <div className='d-flex back-button'>
                                <ChevronLeft style={{ color: "ff6b01" }}></ChevronLeft>
                                <h6>
                                <Link to="/login" className='text-dark'> Back to Login</Link>
                                </h6>
                            </div>
                            <h2 style={{ color: "#ff6b01" }}>Verify Code</h2>
                            <div style={{color:"#9f9898", fontSize:"12px"}}>An authentication code has been sent to your email id</div>
                            <br></br>
                            <div className=''>

                                <div className="input-group-item full-width">
                                    <label>Enter Code</label>
                                    <input type="text" />
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
                            <div><div style={{
                             
                            }}>
                                Didn't receave a code? <span style={{
                                    // color:"#ff6b01",
                                    color: "red",
                                    fontWeight: "600"
                                }}>
                                    Resend</span>
                            </div></div>

                            <br></br>
                            <div>
                                <button className='btn login-button full-width' >Verify</button>
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
                            <div className='icons'>
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
                    <img src={verifycodeimg} alt='img' className='verifycode-img'></img>
                </div>

            </div>
        </div>
    )
}
