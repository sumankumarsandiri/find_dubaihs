import React, { useEffect, useState } from 'react';
import registrationimg from '../assets/images/Sign up img.png'
import sample from '../assets/images/Password Set FD.png'
import './registration.css'
import screen1 from '../assets/images/Splash 1.png'
import screen2 from '../assets/images/Splash 2.png'
import { Apple, Facebook, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export function Registration() {
  const [currentView, setCurrentView] = useState('welcome1');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentView('welcome2');
    }, 3000);

    const timer2 = setTimeout(() => {
      setCurrentView('registration');
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className='registration-section'>
      {currentView === 'welcome1' && (
        <img src={screen1} alt="Welcome 1" className='welcome-images' />
      )}
      {currentView === 'welcome2' && (
        <img src={screen2} alt="Welcome 2" className='welcome-images' />
      )}
      {currentView === 'registration' && (
        <div className='d-flex flex-container'>
          <div className='registration-img-section'>
            <img src={registrationimg} className='register-image' alt='img'  ></img>
            {/* <img src={registrationimg} className='register-image-1' alt='img'  ></img> */}

          </div>
          <div>
            <form className='register-form'>
              <h2 style={{ color: "#ff6b01" }}>Registration</h2>
              <div className='register-text'>Let's get you all set up so you can access your personal account</div>
              <br></br>
              <div className=''>
                {/*  */}
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
                  <div style={{paddingLeft:"-100px"}}><input type='checkbox'></input>  I agree to all the  <span
                    style={{ color: "#ff6b01", fontWeight: "600" }}>
                    Terms
                  </span> and <span
                    style={{ color: "#ff6b01", fontWeight: "600" }}>Privacy Policies</span></div>
                </div>
                {/*  */}
              </div>
              <br></br>
              <div>
                <button className='btn register-button full-width' style={{ backgroundColor: "#ff6b01", color: 'white' }}>Login</button>
              </div>
              <br></br>
              <div style={{
                display: 'flex',           /* Use Flexbox */
                justifyContent: 'center', /* Center horizontally */
                alignItems: 'center',     /* Center vertically */
              }}>
                Already have an account? 
                <Link to="/login" className='text-dark'>
                <span style={{ color: "#ff6b01", fontWeight: "600" }}>Login</span>
                </Link>

              </div>
             
              <div>
                {/* hr line design */}
                <div className="line-container">
                  <span className="line-text">Or Sign Up with</span>
                </div>
              </div>
              {/* design for sign up options */}
              <div className='d-flex'>
                <div className='registration-icons'>
                  <Facebook style={{color:"#0f90f3"}}></Facebook>
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

        //   <div className="input-group-item full-width">
        //   <label>Email</label>
        //   <input type="email" />
        // </div>

        // <div>
        //   <h1>Registration Form</h1>
        //   <form className='registration-form'>
        //     <div className='row'>
        //       <div className='col-6'>
        //         <div className='container'>
        //           <div className='entryarea'>
        //             <input type='text' className='registration_input'></input>
        //             <div className='labelLine'>First Name:</div>
        //           </div>

        //         </div>
        //         <label className='text'>First Name:</label>
        //         <input type="text" name="username" required />
        //       </div>
        //       <div className='col-6'>
        //         <label>Email:</label>
        //         <input type="email" name="email" required />
        //       </div>

        //     </div>
        //     <div className='row'>
        //       <div className='col-6'>
        //         <label className='text'>Username:</label>
        //         <input type="text" name="username" required />
        //       </div>
        //       <div className='col-6'>
        //         <label>Email:</label>
        //         <input type="email" name="email" required />
        //       </div>

        //     </div>
        //     <div>
        //       <label className='text'>Username:</label>
        //       <input type="text" name="username" required />
        //     </div>
        //     <div>
        //       <label>Email:</label>
        //       <input type="email" name="email" required />
        //     </div>
        //     <div>
        //       <label>Password:</label>
        //       <input type="password" name="password" required />
        //     </div>

        //     <button type="submit">Register</button>
        //   </form>
        // </div>
      )}
    </section>
  )
}
