import './rs-singlepage.css';
import villa from '../../../assets/images/villa.jpg';
import { PersonCircle, Share, Signpost, Star, StarFill, StarHalf, SuitHeartFill } from 'react-bootstrap-icons';
import { Tabs } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { TabPane } = Tabs;

export function RealestateSinglepageComponent() {
    const [bookItem, setbookItem] = useState({
        firstname: '',
        lastname: '',
        address: '',
        phonenumber: '',
        selectpropertytype: ''
    });

    const handleChange = (e) => {
        setbookItem({ ...bookItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/bookItem', bookItem);
            alert("Details saved");
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <div>
            <img src={villa} className='villa' alt="Biryani" />
            <div className='villa_main_container'>
                <h4>Luxurious villa sale
                    <span className='villa_ratings' style={{ color: '#40E0D0' }}>
                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarHalf />
                    </span>
                </h4>
                <h6 style={{ color: 'GrayText' }}>Plot No. 44, RTC X Rd, Beside Sandhya Theatre, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020</h6>
                <h6 className='villa_timings'>Open ⋅ Closes 11:30 pm</h6>
                <span style={{ padding: '8px', borderRadius: '8px', marginTop: '15px', background: '#40E0D0', color:' white' }}><Signpost /> &nbsp;Direction</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ padding: '8px', borderRadius: '8px', marginTop: '15px', background: '#40E0D0', color:' white' }}><Share /> &nbsp;Share</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ padding: '8px', borderRadius: '8px', marginTop: '15px', background: '#40E0D0', color:' white' }}><SuitHeartFill />&nbsp; Favorites</span>
                <div className='mt-4'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Overview" key="1">
                            <h3>About this place</h3>
                            <p className='menu-item-list'>
                                Unfussy restaurant serving Hyderabadi, Indian and Chinese dishes.
                            </p>
                            <p><b>Address:</b> Plot No. 44, RTC X Rd, Beside Sandhya Theatre, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020</p>
                            <p><b>Hours:</b> Open 9:00 AM - Close 11:30 PM</p>
                            <p><b>Phone:</b> 080740 44409</p>
                        </TabPane>
                        <TabPane tab="Review & Ratings" key="3" style={{ width: '400px' }}>
                            <li className='menu-item-list'>
                                <h4>Villas for sale</h4>
                            </li>
                            <li>All Reviews</li>
                            <div>
                                <span><PersonCircle /></span>
                                &nbsp;&nbsp;<span>Jagan</span>
                            </div>
                            <div className='mt-3'>
                                <span style={{ border: '1px solid', color: 'white', background: '#40E0D0', padding: '5px', borderRadius: '5px' }}>4.2 &nbsp;<StarFill style={{ fontSize: '10px' }} /></span>
                                &nbsp;&nbsp;
                                <span>villa</span>
                                <p className='mt-2'>"They are genuine realtors of lands and buildings"</p>
                                <hr />
                            </div>
                            <form>
                                <h2>Question & Answers</h2>
                                <div>
                                    <label>Would you like to ask a question?</label>
                                    <div>
                                        <input type="text" placeholder='Post your Question' className='mt-2' />
                                    </div>
                                </div>
                            </form>
                            <h5 className='mt-4'>Start your Rating</h5>
                            
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>
                            <div className='mt-5'>
                                <span style={{ border: '1px solid', borderRadius: '10px', padding: '10px', textAlign: 'center' }}><b>Write a Review</b></span>
                            </div>
                        </TabPane>
                        <TabPane tab="Book Your appoinment" key="4" className='tabs_form_container'>
                            {/* <form onSubmit={handleSubmit} className='villa-form'>
                                <div className="row g-3">
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name='firstname' value={bookItem.firstname} className="form-control" placeholder="First name" aria-label="First name" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name='lastname' value={bookItem.lastname} className="form-control bawarchi_form_inputs" placeholder="Last name" aria-label="Last name" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row g-3 mt-3">
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name='address' value={bookItem.address} className="form-control" placeholder="Address" aria-label="Address" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name="phonenumber" value={bookItem.phonenumber} className="form-control bawarchi_form_inputs" placeholder="Phone Number" aria-label="Phone Number" onChange={handleChange} />
                                    </div>
                                </div>
                                <div>
                                    <select className="form-control mt-4" name='selectpropertytype' value={bookItem.selectpropertytype} onChange={handleChange}>
                                        <option>--- Select Your Item ----</option>
                                        <option>Apartments</option>
                                        <option>Fields</option>
                                        <option>Villas</option>
                                        <option>Lands</option>
                                    </select>
                                </div>
                                <div className='mt-4'>
                                    <button className='villa-search-button'>Submit</button>
                                </div>
                            </form> */}
                             <form onSubmit={handleSubmit} >
                                <div className="row g-3">
                                    <div className=" col-lg-6 col-sm-12">
                                        <input type="text" name='firstname' value={bookItem.firstname} className="form-control " placeholder="First name" aria-label="First name" onChange={handleChange} style={{width:'400px'}} />
                                    </div>
                                    <div className="col-lg-6 col-sm-12 ">
                                        <input type="text" name='lastname' value={bookItem.lastname} className="form-control bawarchi_form_inputs" placeholder="Last name" aria-label="Last name" onChange={handleChange}  />
                                    </div>
                                </div>
                                <div className="row g-3 mt-3">
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name='address' value={bookItem.address} className="form-control " placeholder="Address" aria-label="Address" onChange={handleChange}  style={{width:'400px'}}/>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 ">
                                        <input type="text" name="phonenumber" value={bookItem.phonenumber} className="form-control bawarchi_form_inputs" placeholder="Phone Number" aria-label="Phone Number" onChange={handleChange}  />
                                    </div>
                                </div>
                                <div>
                                    <select className="form-control mt-4" name='selectyouritem' value={bookItem.selectyouritem} onChange={handleChange} style={{ width: '400px' }}>
                                        <option>--- Select Your Item ----</option>
                                        <option>Apartment</option>
                                        <option>Villas</option>
                                        <option>Lands</option>
                                        <option>Plots</option>
                                        

                                    </select>
                                </div>
                                <div className='mt-4'>

                                    <button style={{ border: '1px solid', color: 'white', background: '#40E0D0', padding: '10px', borderRadius: '5px', fontSize: '20px' ,width:'100px',height:'50px'}}>Submit</button>
                                </div>
                            </form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
