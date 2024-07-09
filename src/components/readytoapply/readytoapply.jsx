import React from 'react';
import './readytoapply.css';
import detailsimg from "../../assets/images/details-img.webp";

const Button = () => {
    return (
        <div className="button-container">
             <img src= {detailsimg} alt="Company Logo" className="company-logo"/>
            <div className="nav-btn-container">
                <h3 >Ready To Apply?</h3>
                <p>Complete the eligibilities checklist now and get started with <br/>your online application</p>
            </div>
            <form className="application-form">
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" required placeholder='Name' className='rta-name' />
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" required  placeholder='Email:' className='rta-email'/>
                </div>
                <button type="submit" className="submit-btn">Upload Resume</button>
                <br/><br/>
                <div className="form-group">
                    <p>Do you have a work permit?</p>
                    <label className="radio-inline">
                        <input className='rta-radio' type="radio" name="workPermit" value="yes" required /> Yes
                    </label>
                    <label className="radio-inline">
                        <input className='rta-radio'  type="radio" name="workPermit" value="no" required /> No
                    </label>
                </div>
                <div className="form-group">
                    <p>Do you have a relevant degree?</p>
                    <label className="radio-inline">
                        <input className='rta-radio'  type="radio" name="relevantDegree" value="yes" required /> Yes
                    </label>
                    <label className="radio-inline">
                        <input className='rta-radio'  type="radio" name="relevantDegree" value="no" required /> No
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input className='rta-radio'  type="checkbox" name="jobAlert" /> Create relevant job alert
                    </label>
                </div>
                <button type="submit" className="submit-btn1">Submit Application</button>
            </form>
            <hr className="horizontal-line" />
            <h4>Don't have an account? <span className='hello'>Signup</span></h4>
        </div>
    );
};
export default Button;