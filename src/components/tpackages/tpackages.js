import React from 'react'
import './tpackages.css';
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

export default function tpackages() {
    return (
        <div className='f'>
            <div className='total1'>

                <div className='col-md-6 col-lg-4'>
                    <Link to="/packages"> <h4 style={{ textAlign: 'center' }}> <span style={{ color: 'blue', cursor: "pointer", marginRight: "105px" }}>Thailand Packages</span></h4></Link>
                    <h6 style={{ textAlign: 'center', fontSize: '13px', fontStyle: 'italic', color: "red", cursor: "pointer" }}>Thailand Packages
                        Experience the dreamy beachside </h6>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card_section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3052/Beautiful%20tropical%20beach%20in%20Thailand.jpg" alt='Location' className='card-img-top' />
                            <div className="">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span className="text-card" style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer', }}>Spectacular Krabi and Phuket </span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-6' >
                                        &nbsp; <span>2N Krabi</span>

                                    </div>
                                    <div className='col-6'>
                                        <span style={{ marginLeft: "10px" }}>3N Phuket</span>
                                    </div>

                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                            <ConnectingAirportsIcon /> Airport Transfers<br></br>
                                            <RestaurantIcon /> Selected Meals
                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <LocalHotelIcon /> 4 Star Hotels<br></br>
                                            <LocalActivityIcon />  5 Activities

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> Includes extra ₹5,060 discount for packages with flights<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> ₹51,875 /Person Total Price ₹1,03,750
                        </div>
                    </div>

                    <div className=' col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/Marble-Temple.jpg" alt='Location' className='card-img-top' />
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>The Best of Pattaya & Bangkok </span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-6' >
                                        &nbsp; 3N Pattaya


                                    </div>
                                    <div className='col-6'>
                                        2N Bangkok
                                    </div>

                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                            <ConnectingAirportsIcon /> Airport Transfers<br></br>
                                            <RestaurantIcon />  Selected Meals
                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                            <LocalHotelIcon /> 4 Star Hotels<br></br>
                                            <LocalActivityIcon /> 7 Activities

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> Includes extra ₹4,444 discount for packages with flights<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }} /> ₹45,561 /Person Total Price ₹91,122


                        </div>

                    </div>

                    <div className='col-md-6 col-lg-4 kk'>
                        <div className=' mt-4 card-section '>
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3052/Phi-Phi%20island.jpg" alt='Location' className='card-img-top' />
                            <div className="card-body-main">
                                <div className='row'>
                                    <div className='col-6 ml-2'>
                                        <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Tour of the Magnificent Islands </span>

                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                    <div className='col-6' >
                                        &nbsp; 2N Krabi



                                    </div>
                                    <div className='col-6'>
                                        1N Phi Phi Island
                                    </div>

                                </div><hr />

                                <div className='row '>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                        <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                        <ConnectingAirportsIcon /> Airport Transfers<br></br>
                                        <RestaurantIcon /> Selected Meals
                                        </ul>
                                    </p>
                                    <p className='travel-para mb-2 col-6'>
                                        <ul className='ko'>
                                        <LocalHotelIcon /> 4 Star Hotels<br></br>
                                        <LocalActivityIcon /> 5 Activities

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-2' />
                            <AttachMoneyIcon  className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> Includes extra ₹5,677 discount for packages with flights<br></br>
                            <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> ₹55,095 /Person Total Price ₹1,10,190


                        </div>

                    </div>&nbsp; &nbsp;
                    <div className='row'>
                        <div className='col-md-6 col-lg-4 kk'>
                            <div className=' mt-4 card-section '>
                                <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/6555/Couple%20images.JPG" alt='Location' className='card-img-top' />
                                <div className="card-body-main">
                                    <div className='row'>
                                        <div className='col-6 ml-2'>
                                            <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Island Bliss Retreat - Exploring Thailand </span>

                                        </div>
                                    </div>
                                    <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                        <div className='col-6' >
                                            &nbsp; 2N Krabi



                                        </div>
                                        <div className='col-6'>
                                            2N Phi Phi Island
                                        </div>

                                    </div><hr />

                                    <div className='row '>
                                        <p className='travel-para mb-2 col-6'>
                                            <ul className='ko'>

                                            <ConnectingAirportsIcon /> Airport Transfers<br></br>
                                            <RestaurantIcon /> Selected Meals
                                            </ul>
                                        </p>
                                        <p className='travel-para mb-2 col-6'>
                                            <ul className='ko'>
                                            <LocalHotelIcon /> 4 Star Hotels<br></br>
                                            <LocalActivityIcon /> 5 Activities

                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <hr className='mt-2' />
                                <AttachMoneyIcon  className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> Includes extra ₹7,601 discount for packages with flights<br></br>
                                <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> ₹77,917 /Person Total Price ₹1,55,834
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 kk'>
                            <div className=' mt-4 card-section '>
                                <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/Wat-Arun-Bangkok.jpg" alt='Location' className='card-img-top' />
                                <div className="card-body-main">
                                    <div className='row'>
                                        <div className='col-6 ml-2'>
                                            <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>City Lights & Coastal Marvels - Bangkok</span>

                                        </div>
                                    </div>
                                    <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                        <div className='col-6' >
                                            &nbsp; 2N Bangkok



                                        </div>
                                        <div className='col-6'>
                                            3N Phuket
                                        </div>

                                    </div><hr />

                                    <div className='row '>
                                        <p className='travel-para mb-2 col-6'>
                                            <ul className='ko'>
                                            <FlightTakeoffIcon /> Intercity Flight Transfer<br></br>
                                                 <ConnectingAirportsIcon /> Airport Transfers<br></br>
                                                 <RestaurantIcon /> Selected Meals
                                            </ul>
                                        </p>
                                        <p className='travel-para mb-2 col-6'>
                                            <ul className='ko'>
                                            <LocalHotelIcon /> 4 Star Hotels<br></br>
                                            <LocalActivityIcon /> 4 Activities

                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <hr className='mt-2' />
                                <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> Includes extra ₹6,890 discount for packages with flights<br></br>
                                <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> ₹55,870 /Person Total Price ₹1,23,455
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 kk'>
                            <div className=' mt-4 card-section '>
                                <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/Bangkok8.jpg" alt='Location' className='card-img-top' />
                                <div className="card-body-main">
                                    <div className='row'>
                                        <div className='col-6 ml-2'>
                                            <span style={{ fontSize: '12px', text: "medium", color: "red", cursor: 'pointer' }}>Vibe in Bangkok - 4 nights</span>

                                        </div>
                                    </div>
                                    <div className='row' style={{ marginTop: "10px", color: "blue", fontSize: "medium", cursor: "pointer" }}>
                                        <div className='col-6' >
                                            &nbsp; 4N Bangkok
                                        </div>
                                        <div className='col-6'>
                                            3N Phuket
                                        </div>

                                    </div><hr />

                                    <div className='row '>
                                        <p className='travel-para mb-2 col-6'>
                                            <ul className='ko'>
                                            <FlightTakeoffIcon /> Round Trip Flights<br></br>
                                            <ConnectingAirportsIcon /> Airport Transfers<br></br>
                                            <RestaurantIcon /> Selected Meals
                                            </ul>
                                        </p>
                                        <p className='travel-para mb-2 col-6'>
                                            <ul className='ko'>
                                            <LocalHotelIcon /> 4 Star Hotels<br></br>
                                            <LocalActivityIcon /> 3 Activities

                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <hr className='mt-2' />
                                <AttachMoneyIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> Includes extra ₹4,572 discount for packages with flights<br></br>
                                <PriceCheckIcon className='mb-2 ml-2' style={{ color: 'green', cursor: "pointer" }}/> ₹46,865 /Person

                                    Total Price ₹93,730
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div >

    )
}



