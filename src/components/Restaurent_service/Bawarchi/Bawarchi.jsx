import './Bawarchi.css';
import biryani4 from '../../../assets/images/biryani4.jpg';
import { PersonCircle, Share, Signpost, Star, StarFill, StarHalf, Stars, SuitHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { Tabs } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { TabPane } = Tabs;
export function BawarchiBiryaniComponent() {
    const [bookItem, setbookItem] = useState({
        firstname: '',
        lastname: '',
        address: '',
        phonenumber: '',
        selectyouritem: ''
    });

    const handleChange = (e) => {
        setbookItem({ ...bookItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/bookItem', bookItem);
            alert("Details saved")
            // Optionally, you can add a success message or redirect the user
        } catch (error) {
            console.error('Error submitting review:', error);
            // Handle error
        }
    };
    useEffect(() => { }, []);
    return (
        <div>
            <img src={biryani4} className='biryani1'></img>
            <div className='children_main_container '>
                <h4>Bawarchi Restaurant
                    {/* <span className='rainbow_hospital_ratings'>4.2<StarFill style={{ fontSize: '10px' }}></StarFill></span> */}
                    <span  className='rainbow_hospital_ratings' style={{color:'#40E0D0'}}><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarHalf></StarHalf> </span>
                </h4>

                <h6 style={{ color: 'GrayText' }}> Plot No. 44, RTC X Rd, Beside Sandhya Theatre, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020</h6>
                <h6 className='hospital_timings'>Open ⋅ Closes 11:30 pm</h6>

                <span style={{ padding: '8px', borderRadius: '8px', marginTop: '15px', background: '#40E0D0', color:' white' }}><Signpost></Signpost> &nbsp;Direction </span> &nbsp; &nbsp;&nbsp; &nbsp;
                <span style={{ padding: '8px', borderRadius: '8px', marginTop: '15px', background: '#40E0D0', color: 'white' }}><Share></Share> &nbsp;Share </span>&nbsp; &nbsp;&nbsp; &nbsp;
                <span style={{ padding: '8px', borderRadius: '8px', marginTop: '15px', background: '#40E0D0', color: 'white' }}><SuitHeartFill></SuitHeartFill>&nbsp; Favorites </span>
                <div className='mt-4 '>
                    <Tabs defaultActivekey="1" >
                        <TabPane tab="Overview" key="1" >
                            <h3> About this place</h3>
                            <p className='menu-item-list'>
                                Unfussy restaurant serving Hyderabadi, Indian and Chinese dishes. </p>
                            <p><b>Address:</b> Plot No. 44, RTC X Rd, Beside Sandhya Theatre, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020</p>

                            <p><b>  Hours:</b>
                                Open 9:00 AM - Close 11:30 PM</p>
                            <p><b>  Phone: </b>080740 44409</p>
                        </TabPane>
                        <TabPane tab="We Are Special In" key="2">
                            <li >
                                <b> Mutton Biryani</b>
                            </li>
                            <li><b>Hyderabad Chiken Biryani</b> </li>
                            <li><b>Grilled Chiken</b> </li>
                            <li><b>Grill Chiken</b> </li>
                            <li><b>Kebab</b> </li>
                        </TabPane>
                        <TabPane tab="Review & Ratings" key="3" style={{ width: '400px' }}>
                            <li className='menu-item-list'>
                                <h4>Bawarchi Restaurent</h4>
                            </li>
                            <li>All Reviews</li>
                            <div>
                                <span><PersonCircle></PersonCircle></span>
                                &nbsp;&nbsp;<span>Sandhya</span>
                            </div>
                            <div className='mt-3'>
                                <span style={{ border: '1px solid', color: 'white', background: '#40E0D0', padding: '5px', borderRadius: '5px' }}>4.2 &nbsp;<StarFill style={{ fontSize: '10px' }}></StarFill></span>
                                &nbsp;&nbsp;
                                <span>Biryani</span>
                                <p className='mt-2'>"Super Food quality Good service by staff And user friendly atmosphere""</p>
                                <hr></hr>
                            </div>
                            <form>
                                <h2>Question & Answers</h2>
                                <div>
                                    <label>Would you like to ask a question?</label>
                                    <div>
                                        <input type="text" placeholder='Post your Question' className='mt-2'></input>
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
                        <TabPane tab="Book Your Order" key="4"  className='tabs_form_container'>

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
                                        <option>Hyderabad Biryani</option>
                                        <option>Grilled Chiken</option>
                                        <option>Kebab</option>
                                        <option>Grill Chiken</option>
                                        <option>Mutton Biryani</option>

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
    )
}