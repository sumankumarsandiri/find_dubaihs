import './jobcompany.css';

import slide4 from "../../assets/images/slide4.jpg";
import nvsimg from "../../assets/images/nvsimg.jpg";
import arttechnology from "../../assets/images/Arttenchologies-img.jpg";
import cubicimg from "../../assets/images/cubiimg.jpg";
import instinctoolsimg from "../../assets/images/instinctoolsimg.jpg";

import React from 'react';
import { Chat, GeoAlt, Heart, Phone, Star, StarFill, Table, Telephone } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
export function JobcompanyPage() {
    return (
        <div>
            {/* <h1 className='restaurent_title'><span style={{
                color: 'rgb(64, 224, 208)'
            }}>Graphic Designer Jobs</span> In Dubai</h1> */}

             <h1 className='top-hospital-main-heading ' style={{ textAlign: 'center' ,marginTop:'100px'}}> <span  style={{
                color: 'rgb(64, 224, 208)'
            }}>Graphic Designer Jobs </span>  In Dubai</h1>
            <div className='containerr mt-5 '>
                <img className='image-1' src={arttechnology}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>ART Technologies</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.9</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Nr R/A 6 - Mina Jebel Ali - Veneto - Dubai - United Arab Emirates</p>
                    <br></br>
                   <Link  to="/job-apply"><span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' , textDecoration:'none',color:'black' }}     >Job Details</span>  &nbsp; &nbsp;</Link>
                    
                    
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div>
            <div className='containerr mt-5 '>
                <img className='image-1' src={nvsimg}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>NVS Enterprises</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.4</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Nr R/A 6 - Mina Jebel Ali - Veneto - Dubai - United Arab Emirates</p>
                    <br></br>
                   
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}>Job Details</span>  &nbsp; &nbsp;
                    
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div>

            <div className='containerr mt-5 '>
                <img className='image-1' src={cubicimg}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>Cubic Technologies</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.9</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Nr R/A 6 - Mina Jebel Ali - Veneto - Dubai - United Arab Emirates</p>
                    <br></br>
                   <Link  to="/job-apply"><span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}>Job Details</span>  &nbsp; &nbsp;</Link>
                    
                    
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div>
            <div className='containerr mt-5 '>
                <img className='image-1' src={instinctoolsimg}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>instinctools</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.4</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Nr R/A 6 - Mina Jebel Ali - Veneto - Dubai - United Arab Emirates</p>
                    <br></br>
                   
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}>Job Details</span>  &nbsp; &nbsp;
                    
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div>




            {/* <div className='containerr mt-5 '>
                <img className='image-1' src={slide4}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>Bawarchi</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.5</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Madina Circle ,21-1-140-144, Near High Court, High Court Rd, Charminar, Ghansi Bazaar, Hyderabad, Telangana 500012 </p>
                    <br></br>
                  
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Telephone></Telephone> Show Number</span>  &nbsp; &nbsp;
                    <Link to="/bawarchi_biryani" style={{textDecoration:'none',color:'white'}}>
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Table></Table> Book Table</span>   &nbsp; &nbsp;
                    </Link>
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                    
                </div>
            </div>
            <div className='containerr mt-5 '>
                <img className='image-1' src={slide4}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>Paradise</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.9</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Madina Circle ,21-1-140-144, Near High Court, High Court Rd, Charminar, Ghansi Bazaar, Hyderabad, Telangana 500012 </p>
                    <br></br>
                   
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Telephone></Telephone> Show Number</span>  &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Table></Table> Book Table</span>   &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div> */}
        </div>
    )
}