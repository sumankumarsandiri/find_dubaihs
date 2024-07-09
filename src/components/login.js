import React from 'react';
import './login.css'
import loginimg from '../assets/images/Login FD.png';
import { Apple, Facebook, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';



export default function Login() {
    return (
        <div>
            <section className='login-section'>
                <div className='d-flex flex-container'>
                    <div className='' >
                        <img src={loginimg} className='login-image' alt='img'></img>
                    </div>
                    <div className='' style={{ width: '100%' }}>
                        <div className='login-section'>

                            <form className='login-form'>
                                <h2 style={{ color: "#ff6b01" }}>Login</h2>
                                <div style={{color:"#9f9898", fontSize:"11px"}}>Login to access your account</div>
                                <br></br>
                                <div className=''>

                                    <div className="input-group-item full-width">
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                </div>
                                <div className=''>

                                    <div className="input-group-item full-width">
                                        <label>Password</label>
                                        <input type="password" />
                                    </div>
                                </div>
                                <div className='d-flex' >
                                    <div style={{}}>
                                        <input type='checkbox'></input> Remember ME
                                    </div>
                                    <div className='login-forgotpassword'>
                                        <Link to='/forgotpassword'><span className='text-danger'>Forgot Password</span></Link>

                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <button className='btn login-button full-width' >Login</button>
                                </div>
                                <br></br>
                                <div>
                                    <div style={{
                                        display: 'flex',           /* Use Flexbox */
                                        justifyContent: 'center', /* Center horizontally */
                                        alignItems: 'center',     /* Center vertically */
                                    }}>
                                        Don't have an account? <span style={{
                                            // color:"#ff6b01",
                                            color: "red",
                                            fontWeight: "600"
                                        }}>
                                            Sign Up</span>
                                    </div>
                                    {/* hr line design */}
                                    <div className="line-container">
                                        <span className="line-text">Or Login with</span>
                                    </div>
                                </div>
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

                </div>
            </section>


        </div>
    )
}
