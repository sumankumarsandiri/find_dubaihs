import './Biryani_page.css';


import biryani1 from '../../../assets/images/biryani1.jpg';
import biryani2 from '../../../assets/images/biryani2.jpg';
import biryani3 from '../../../assets/images/biryani3.jpg';



import React from 'react';
import { Chat, GeoAlt, Star,  Table, Telephone } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
export function BiryaniPage() {
    return (
        <div>
           
             <h2 className='top-hospital-main-heading ' style={{ textAlign: 'center' ,marginTop:'100px'}}>Best Biryani Restaurents in Hyderabad - Order Food Online</h2>
            <div className='containerr mt-5 '>
                <img className='image-1' src={biryani3}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>Hotel Shadab</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.9</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Madina Circle ,21-1-140-144, Near High Court, High Court Rd, Charminar, Ghansi Bazaar, Hyderabad, Telangana 500012 </p>
                    <br></br>
                   
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Telephone></Telephone> Show Number</span>  &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Table></Table> Book Table</span>   &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div>
            <div className='containerr mt-5 '>
                <img className='image-1' src={biryani1}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>Grand Hotel</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.4</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Madina Circle ,21-1-140-144, Near High Court, High Court Rd, Charminar, Ghansi Bazaar, Hyderabad, Telangana 500012 </p>
                    <br></br>
                   
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Telephone></Telephone> Show Number</span>  &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Table></Table> Book Table</span>   &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div>
            <div className='containerr mt-5 '>
                <img className='image-1' src={biryani2}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>Bawarchi</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.5</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Plot No. 44, RTC X Rd, Beside Sandhya Theatre, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020 </p>
                    <br></br>
                  
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Telephone></Telephone> Show Number</span>  &nbsp; &nbsp;
                    <Link to="/bawarchi_biryani" style={{textDecoration:'none',color:'white'}}>
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Table></Table> Book Table</span>   &nbsp; &nbsp;
                    </Link>
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                    
                </div>
            </div>
            <div className='containerr mt-5 '>
                <img className='image-1' src={biryani3}  alt="dubai"></img>
                <div className='text'>
                    <h1 className='biryani_hotel_names'>Paradise</h1>
                    <span className='haleem_ratings mt-2 biryani_hotel_names'>4.9</span> &nbsp; &nbsp; <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star> <Star className='biryani_hotel_names'></Star>
                    <p className='mt-3 biryani_hotel_names'><GeoAlt></GeoAlt> Madina Circle ,21-1-140-144, Near High Court, High Court Rd, Charminar, Ghansi Bazaar, Hyderabad, Telangana 500012 </p>
                    <br></br>
                   
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#6ad4cf', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Telephone></Telephone> Show Number</span>  &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#d4be6a', color: 'white', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Table></Table> Book Table</span>   &nbsp; &nbsp;
                    <span className='biryani_hotel_names' style={{ backgroundColor: '#e6ebea', color: 'black', cursor: 'pointer', border: 'none', padding: '10px', borderRadius: '5px' }}><Chat></Chat> Chat</span>   &nbsp; &nbsp;
                </div>
            </div>
        </div>
    )
}