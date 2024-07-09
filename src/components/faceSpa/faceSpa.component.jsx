
import './faceSpa.component.css';



import faceImage from '../../assets/images/facemassage.jpg';
import { PersonCircle, Share, Signpost, Star, StarFill, Stars, SuitHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { Tabs } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { TabPane } = Tabs;

export function FaceSpaComponent() {

    return (
        <div className='main-back-card'>
            <img src={faceImage} className='beauty1'></img>
            <div className='beauty_main_container '>
                <div className=''>
                    <div style={{ marginTop: "10px" }} className='d-flex '>
                        <h2 className='hantus'>Hantus Spa</h2>

                        <span className='face_spa_ratings'>4.5 <StarFill style={{ fontSize: '14px', marginTop: "-5px" }}></StarFill></span>
                    </div>
                    {/* <h6 style={{ color: 'GrayText' }}>Banjara Hills, Hyderabad - Best Maternity Hospital</h6> */}
                    <h6 style={{ color: 'black', fontWeight: "bold" }}> Dubai Estates, Abudabi 500900</h6>
                    <h6 className='hantus_timings'></h6>
                    <div className='all-card'>
                        <span style={{ padding: '8px', borderRadius: '8px', marginTop: '20px', background: 'graytext', color: 'white', fontSize: "10px", fontWeight: "bold" }}><Signpost></Signpost> &nbsp;Direction </span> &nbsp; &nbsp;&nbsp; &nbsp;
                        <span style={{ padding: '8px', borderRadius: '8px', marginTop: '20px', background: 'graytext', color: 'white', fontSize: "10px", fontWeight: "bold" }}><Share></Share> &nbsp;Share </span>&nbsp; &nbsp;&nbsp; &nbsp;
                        <span style={{ padding: '8px', borderRadius: '8px', marginTop: '20px', background: 'graytext', color: 'white', fontSize: "10px", fontWeight: "bold" }}><SuitHeartFill></SuitHeartFill>&nbsp; Favorites</span>
                    </div>
                    <div>
                        <div className='tab-card'>
                            <Tabs defaultActivekey="1" >
                                <TabPane tab="Overview" key="1" >
                                    <h3 style={{ color: "" }} className='about'> About this place</h3>
                                    <p className='menu-parlour-list'>
                                        Facial massages are treatments you can do with a practitioner or on your own. </p>
                                    <p><b>Address:</b> Plot No. 78, Dubai Estates, Abudabi 500900</p>

                                    <p><b>  Hours:</b> Open 10:00 AM - Close 10:00 PM</p>

                                    <p><b>  Phone: </b> 908740 44409</p>
                                </TabPane>
                                <TabPane tab="We Are Special In" key="2">
                                    <li >
                                        <b> Facial and massage</b>
                                    </li>
                                    <li><b>Hair Care</b> </li>
                                    <li><b>Body Spa</b> </li>
                                    <li><b>MakeUP</b> </li>
                                    <li><b>Pedicure</b> </li>
                                </TabPane>
                                <TabPane tab="Review & Ratings" key="3" style={{ width: '400px' }}>
                                    <li className='menu-parlour-list'>
                                        <h4 className='about'>Face Massage</h4>
                                    </li>
                                    <li>All Reviews</li>
                                    <div className='varalxmi'>
                                        <span><PersonCircle></PersonCircle></span>
                                        &nbsp;&nbsp;<span className=''>Varalaxmi</span>
                                    </div>
                                    <div className='mt-3'>
                                        <span style={{ border: '1px solid', color: 'white', background: 'green', padding: '5px', borderRadius: '3px' }}>4.2 <StarFill style={{ fontSize: '14px',marginTop:"-5px" }}></StarFill></span>
                                        &nbsp;&nbsp;
                                        <span>Facial</span>
                                        <p className='mt-2'>"I take fruit facial here very good experience."</p>
                                        <hr></hr>
                                    </div>
                                    <form>
                                        <h3>Question & Answers</h3>
                                        <div>
                                            <label style={{ fontWeight: "bold" }}>Would you like to ask a question?</label>
                                            <div>
                                                <input type="text" placeholder='Post your Question' className='mt-2'></input>
                                            </div>
                                        </div>
                                    </form>

                                    <h5 className='mt-4'>Start your Rating</h5>
                                    <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                                    <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                                    <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                                    <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                                    <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>
                                    <div className='mt-5'>
                                        <span style={{ border: '1px solid', borderRadius: '10px', padding: '10px', textAlign: 'center' }}><b>Write a Review</b></span>
                                    </div>
                                </TabPane>
                                <TabPane tab="Book Your Service" key="4" className='face_form_container'>

                                    <form  >
                                        <div class="row g-3">
                                            <div class=" col-lg-6 col-sm-12 ">
                                                <input type="text" name='firstname'  className="form-control  " placeholder="First name" aria-label="First name"  style={{ width: '300px' }} />
                                            </div>
                                            <div class="col-lg-6 col-sm-12 ">
                                                <input type="text" name='lastname'  className="form-control beauty_form_inputs" placeholder="Last name" aria-label="Last name" />
                                            </div>
                                        </div>
                                        <div class="row g-3 mt-3">
                                            <div class="col-lg-6 col-sm-12">
                                                <input type="text" name='address' className="form-control " placeholder="Address" aria-label="Address"style={{ width: '300px' }} />
                                            </div>
                                            <div class="col-lg-6 col-sm-12 ">
                                                <input type="text" name="phonenumber"  className="form-control beauty_form_inputs" placeholder="Phone Number" aria-label="Phone Number" />
                                            </div>
                                        </div>
                                        <div >
                                            <select className="form-control mt-4 " name='selectyouritem'  style={{ width: '300px' }}>
                                                <option>--- Select Your Service ----</option>
                                                <option>Hair Care</option>
                                                <option>Fruit Facial</option>
                                                <option>Pedicure</option>
                                                <option>Body Massage</option>
                                                <option>Make Up</option>

                                            </select>
                                        </div>
                                        <div className='mt-4'>

                                            <button className='btn btn-primary sub_mit' style={{backgroundColor:"green"}} >Submit</button>
                                        </div>
                                    </form>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}