import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaFacebookF, FaGooglePlusG, FaYoutube } from 'react-icons/fa';
import logofd from './../../../src/assets/images/Find_Dubai_Logo.png';
import googleplay from './../../../src/assets/images/googleplay.png';
import appstore from './../../../src/assets/images/appstore.jpeg';
import { Link } from 'react-router-dom';




export default function Footer() {
    return (
        <footer className="footer mt-5 pt-5">
            <div className="footer-container container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={logofd} alt="Find Dubai" />
                    </div>
                    <div className="footer-column">
                        <h4>TRENDING CATEGORY</h4>
                        <ul className="column-list">
                            <li>Technology</li>
                            <li>Real Estate</li>
                            <li>Education</li>
                            <li>Automobiles</li>
                            <li>Jobs</li>
                            <li>Sports</li>
                            <li>Electricals</li>
                            <li>Transportation</li>
                        </ul>
                        <div className="vertical-line vertical-line1"></div>
                    </div>
                    <div className="footer-column">
                        <h4>TOP CATEGORY</h4>
                        <ul className="column-list">
                            <li>Hospitals</li>
                            <li>Travels</li>
                            <li>Health Care</li>
                            <li>Things to do</li>
                            <li>Restaurants</li>
                            <li>Hotels</li>

                         <Link to='/beauty' className='beauty'>   <li>Beauty & Spa</li></Link>
                           

                            
                            <li>Packages</li>

                        </ul>
                        <div className="vertical-line vertical-line2"></div>
                    </div>
                    <div className="footer-column">
                        <h4>HELP & SUPPORT</h4>
                        <ul className="column-list">
                            <li>About us</li>
                            <li>Feedback</li>
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                            <li>Contact us</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="search-fun">
                        <p className="search-text">Search & have fun</p>
                        <p className="search-description">
                            Search anytime for whatever you need, for your business, fun or personal needs. <span className="highlight">Find Dubai</span> helps you find it easy and fast.
                        </p>
                        <input type="text" placeholder="Keyword to search...?" className="search-bar" />
                    </div>
                    <div className="app-links">
                        <p className="app-text">DOWNLOAD OUR FREE MOBILE APPS</p>
                        <div>
                            <a href="#"><img src={googleplay} alt="Google Play" /></a>
                            <a href="#"><img src={appstore} alt="App Store" /></a>
                        </div>
                    </div>
                    <div className="social-media">
                        <p className="social-text">SOCIAL MEDIA</p>
                        <div>
                            <a href="#" className="linkedin"><FaLinkedin /></a>
                            <a href="#" className="twitter"><FaTwitter /></a>
                            <a href="#" className="facebook"><FaFacebookF /></a>
                            <a href="#" className="google-plus"><FaGooglePlusG /></a>
                            <a href="#" className="youtube"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
                <hr className="footer-line" />
                <div className="footer-bottom">
                    <p>Copyright by <span className="highlight">Find Dubai.</span> All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
