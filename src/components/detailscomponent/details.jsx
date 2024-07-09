
import React from 'react';
import { Link } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import './details.css';
import detailsimg from "../../assets/images/details-img.webp";

const Apply = () => {
    return (
        <div className="button-container">
            <img src= {detailsimg} alt="Company Logo" className="company-logo"/>
            <div className="nav-btn-container">
                <h3>ART Technologies</h3>
                <h4 className='details-heading'>
                    Graphical Designer 
                    <span>
                        <Link to="/job-readytoapply" className="custom-btn">Apply</Link>
                    </span>
                </h4>
                <h5><i className="ri-map-pin-line"></i> Abu Dhabi</h5>
            </div>
            <div className="job-details">
                <div className="job-detail"><b>Job Type:</b><br/> <b>Full Time</b></div>
                <div className="job-detail"><b>Experience:</b> <br/><b>1+ year</b></div>
                <div className="job-detail"><b>Salary:</b><br/> <b>$250 per hour</b></div>
                <div className="job-detail"><b>Role:</b><br/> <b>Designer</b></div>
            </div>
            <div className="job-response">
                <div className="response"><h2 >Job Description</h2><span className="spacer"></span><h2> and Job Responsibilities</h2></div>
            </div><br/>
            
            <h4>Requirements:</h4>
            <ul className='deatils-data'>
                <li>Study design briefs and determine Requirements</li>
                <li>Schedule projects and define budget constraints</li>
                <li>Conceptualize visuals based on requirements</li>
                <li>Prepare rough drafts and present ideas</li>
            </ul>
            <h4 className='details-skilss'>Skills:</h4>
            <p className='details-data1'>Familiarity with design software and technologies (such as InDesign, Illustrator, Dreamweaver, Photoshop)</p>
            <h4 className='details-skilss'>Requirements:</h4>
            <p className='details-data1'>Must have a Bachelor's degree in a relevant course</p>
        </div>
    );
};

export default Apply;