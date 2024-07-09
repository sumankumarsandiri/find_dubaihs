import React from 'react'
import './dpackages.css';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import FileCopyIcon from '@mui/icons-material/FileCopy';
// import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';


export default function Dpackages() {
    return (
        <div className='f '>
            <div className='total '>
                <div className='col-md-6 col-lg-4'>
                    <Link to="/packages"> <h4 style={{ textAlign: 'center' }}> <span style={{ color: 'blue', cursor: "pointer" }}>Dubai Packages</span></h4></Link>
                    <h6 style={{ textAlign: 'center', fontSize: '13px', fontStyle: 'italic', color: "red", cursor: "pointer" }}>Savour the Best of Nature and Culture</h6>
                </div>
                <br />
                <div className='row this'>
                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <Link to="/formpackage"><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/Canon%201453.jpg" alt='Location' className='card-img-top' /></Link>
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                       <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}> Dubai Super Saver - 3 Star</span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-4' >
                                        &nbsp; Dubai 4N
                                    </div>
                                    
                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <FlightTakeoffIcon />  Round Trip Flights<br></br>
                                            <ConnectingAirportsIcon />  Airport Transfers<br></br>
                                            <RestaurantIcon />  Selected Meals
                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <LocalHotelIcon />  3 Star Hotels<br></br>
                                            <FileCopyIcon /> Visa Assistance

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> No Cost EMI at ₹1,02,012/month<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> ₹3,06,036 /Person Total Price ₹6,12,072


                        </div>

                    </div>
                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/Small-1R9A9876.jpg" alt='Location' className='card-img-top' />
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Wonderful Dubai Getaway</span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-4' >
                                        &nbsp; Dubai 4N 
                                    </div>
                                    {/* <div className='col-4'>
                                        1N Brussels
                                    </div>
                                    <div className='col-4'>
                                        &nbsp; 3N Paris
                                    </div> */}
                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                            <ConnectingAirportsIcon /> Airport Transfers<br></br>
                                            <RestaurantIcon /> Selected Meal
                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <LocalHotelIcon /> 3,4 Star Hotels<br></br>
                                            <FileCopyIcon /> Visa Assistance

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> No Cost EMI at ₹77,748/month <br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> ₹2,33,243 /Person Total Price ₹4,66,486


                        </div>

                    </div>
                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/DTCM-Virtual%20Working%20CampaignBurj%20Al%20Arab%2015.jpg" alt='Location' className='card-img-top' />
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Dubai Super Saver - 4 Star</span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-4' >
                                        &nbsp; Dubai 4N

                                    </div>
                                    {/* <div className='col-4'>
                                        3N Lausanne
                                    </div>
                                    <div className='col-4'>
                                        &nbsp; 2N Engelbrthg

                                    </div> */}
                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                            <LocalActivityIcon /> 3 Activaties<br></br>
                                            <RestaurantIcon /> Selected Meals
                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <LocalHotelIcon /> 3,4 Star Hotels<br></br>
                                            <FileCopyIcon /> Visa Assistance

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> No Cost EMI at ₹80,912/month<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> ₹2,42,737 /Person Total Price ₹4,85,474


                        </div>

                    </div>

                </div>&nbsp;
                <div>
                    <h4>Special offers </h4>
                </div> &nbsp;
                <div className="offerCard">
                    <div class="offerContents"><img class="offerIcon" src="https://promos.makemytrip.com/images/ic-my-cash@2x.png" alt="offer card icon" /><div><div class="offerInfo "><p><strong>Contact Details: 0124-478-1941 </strong></p>
                    </div>
                        <div class="offerInfo marginBottom5"><p><strong>Talk with our Holiday Experts to grab best deals on Holiday packages </strong></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/DTCM-At%20the%20top-Burj%20Khalifa%206.jpg" alt='Location' className='card-img-top' />
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Exciting trip to Dubai</span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-4' >
                                        &nbsp; 6N Dubai


                                    </div>
                                    {/* <div className='col-4'>
                                        2N Rovaniemi

                                    </div>
                                    <div className='col-4'>
                                        &nbsp; 1N Kiruna

                                    </div> */}
                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                            <LocalActivityIcon /> 2 Activaties

                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <LocalHotelIcon /> 3,4 Star Hotel<br></br>
                                            <RestaurantIcon /> Selected Meals

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> No Cost EMI at ₹80,912/month<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> ₹2,42,737 /Person Total Price ₹4,85,474
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/Canon%200199.jpg" alt='Location' className='card-img-top' />
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Dubai Super Saver - 3 Star</span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-4' >
                                        &nbsp;  4N Dubai


                                    </div>
                                    {/* <div className='col-4'>
                                        3N Paris

                                    </div>
                                    <div className='col-4'>
                                        &nbsp; 2N Amster


                                    </div> */}
                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                            <LocalActivityIcon /> 3 Activaties<br></br>
                                            <RestaurantIcon /> Selected Meals
                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <LocalHotelIcon /> 3,4 Star Hotels<br></br>
                                            <FileCopyIcon /> Visa Assistance

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> No Cost EMI at ₹1,14,203/month<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> ₹3,42,609 /Person

                            Total Price ₹6,85,218
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/235/Magnificent%20St%20Peter's%20church.jpg" alt='Location' className='card-img-top' />
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Enchanted Dubai Rendezvous</span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-4' >
                                        &nbsp;  4N Dubai

                                    </div>
                                    {/* <div className='col-4'>
                                        3N Budapest
                                    </div>
                                    <div className='col-4'>
                                        &nbsp; 2N Prague

                                    </div> */}
                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                        <FlightTakeoffIcon />Round Trip Flights<br></br>
                                        <LocalActivityIcon /> 1 Activatiy

                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                        <LocalHotelIcon /> 4 Star Hotels<br></br>
                                        <RestaurantIcon /> Selected meals

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon  className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> No Cost EMI at ₹67,310/month<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> ₹2,01,929 /Person

                                Total Price ₹4,03,858
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
