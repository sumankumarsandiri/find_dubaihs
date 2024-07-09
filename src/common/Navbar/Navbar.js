
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PersonBadgeFill } from 'react-bootstrap-icons';
import Logo from '../../assets/images/Find_Dubai_Logo.png';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='nav-page'>
            <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar">
                    <h1 className="brand font">
                        <img src={Logo} alt='img' className='fd-logo' />
                    </h1>
                    <div className="nav-links">
                        <Link to="/" className='nav-Link'>Home</Link>
                        <Link to="/explore-more" className='nav-Link'>Explore</Link>
                        <Link to="/listing" className='nav-Link'>Listing</Link>
                        <Link to="/pages" className='nav-Link'>Pages</Link>
                    </div>
                    <div className="navbar-profile">
                        <PersonBadgeFill className='navbar-profile-pic' />
                        <Link to="/login" className='nav-profile-link'>Login/Signup</Link>
                    </div>
                    <div className="hamburger" onClick={toggleSidebar}>
                        &#9776;
                    </div>
                </div>
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <div className="close-btn" onClick={toggleSidebar}>
                        &times;
                    </div>
                    <ul>
                        <li><Link to={'#home'} className='nav-Link'>Home</Link></li>
                        <li><Link to="explore-more" className='nav-Link'>Explore</Link></li>
                        <li><Link to="#listing" className='nav-Link'>Listing</Link></li>
                        <li><Link to="#pages" className='nav-Link '>Pages</Link></li>
                    </ul>
                </div>
                {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            </div>
        </div>
    );
}

