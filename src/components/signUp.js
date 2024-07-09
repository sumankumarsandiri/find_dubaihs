import React from 'react'
import './signUp.css'
import signupimg from '../assets/images/Sign up img.png'

export default function SignUp() {
    const containerStyle = {
        position: 'relative',
        border: '1px solid #000',
        paddingTop: '20px',
        marginTop: '20px',
    };

    const textStyle = {
        position: 'absolute',
        top: '-12px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#fff',
        padding: '0 10px',
    };
    return (
        <div>
            {/* <div className="container mt-5">
                <div style={containerStyle}>
                    <div style={textStyle}>My Text</div>
                    <input type='text' style={{ border: "none", border: 'transparent' }}></input>
                </div>
            </div> */}
            <section className='d-flex'>
                <div>
                    <div>Name</div>
                    <img src={signupimg} alt='img' className='signup-img'></img>
                </div>
                <div>
                    <form className='signup-form'>
                        <h1 style={{ color: "orange" }}>SignUP</h1>
                        <div>Let's get you all set up so you can access your personal account</div>
                        <div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="input-group-item full-width">
                                        <label>First Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="input-group-item full-width">
                                        <label>Last Name</label>
                                        <input type="text" />
                                    </div>

                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="input-group-item full-width">
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="input-group-item full-width">
                                        <label>Phone Mumber</label>
                                        <input type="number" />
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="input-group-item full-width">
                                    <label>Password</label>
                                    <input type="password" />
                                </div>
                            </div>
                            <div>
                                <div className="input-group-item full-width">
                                    <label>Comform Password</label>
                                    <input type="password" />
                                </div>
                            </div>
                            <div>
                                <div><input type='checkbox'></input>  I agree to all the  <span
                                    style={{ color: "red" }}>
                                    Terms
                                </span> and <span
                                    style={{ color: "red" }}>Privacy Policies</span></div>
                            </div>
                        </div>
                    </form>

                </div>
            </section>

        </div>
    )
}
