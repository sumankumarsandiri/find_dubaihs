import './Explore_more.css';
// CAROUSEL images
import image1 from '../../assets/images/image1.avif';
import image2 from '../../assets/images/image2.avif';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.avif';
import image5 from '../../assets/images/image5.avif';

// most popular categerios images
import restaurant from '../../assets/images/restaurant.jpg';
import tutorlogo from '../../assets/images/tutorlogo.jpg';
import hotel from '../../assets/images/hotel.jpg';
import eventplanner from '../../assets/images/eventplanner.jpg';
import Travels from '../../assets/images/Travels.jpg';
import beauty from '../../assets/images/beauty.jpg';
import contractor from '../../assets/images/contractor.jpg';
import ca from '../../assets/images/ca.jpg';
import atm_card from '../../assets/images/atm_card.jpg';
import hospital from '../../assets/images/hospital.jpg';
import jewellery from '../../assets/images/jewellery.jpg';
import service from '../../assets/images/service.jpg';
import realestate from '../../assets/images/realestate-logo.png';
import { Link } from 'react-router-dom';


// EXPLORE DIRECT CATEGERE IMAGES
import tut1 from '../../assets/images/tut1.jpg';
import tut2 from '../../assets/images/tut2.jpg';
import tut3 from '../../assets/images/tut3.jpg';
import tut4 from '../../assets/images/tut4.jpg';
import tut5 from '../../assets/images/tut5.jpg';
import tut6 from '../../assets/images/tut6.jpg';
import res1 from '../../assets/images/res1.jpg';
import res2 from '../../assets/images/res2.jpg';
import res3 from '../../assets/images/res3.jpg';
import res4 from '../../assets/images/res4.jpg';
import res5 from '../../assets/images/res5.jpg';
import res6 from '../../assets/images/res6.jpg';
import shop1 from '../../assets/images/shop1.jpg';
import shop2 from '../../assets/images/shop2.jpg';
import electric1 from '../../assets/images/electric1.jpg';
import electric2 from '../../assets/images/electric2.jpg';
import plum1 from '../../assets/images/plumb1.jpg';
import plum2 from '../../assets/images/plumb2.jpg';
import trans1 from '../../assets/images/trans1.jpg';
import trans2 from '../../assets/images/trans2.jpg';
// import Package from '../../assets/images/Package.jpg';

import { useState, useEffect } from 'react';


// how it works images
import howitworkimg1 from '../../assets/images/howitworksimg1.png';
import howitworkimg2 from '../../assets/images/howitworksimg2.png';
import howitworkimg3 from '../../assets/images/howitworksimg3.png';
import { Button, Col, Row } from 'react-bootstrap';

export function ExploreMore() {

    // EXPLORE DIRECT CATEGERIES CODE
    const [selectedCategory, setSelectedCategory] = useState('tutor');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const categories = {
        tutor: [
            {
                imageUrl: tut1,
                heading4: 'English Tutor',
                heading6: 'Abu Dhabi',
                atag: 'View Profile',
            },
            {
                imageUrl: tut2,
                heading4: 'Hindi Tutor',
                heading6: 'Dubai',
                atag: 'View Profile',
            },
            {
                imageUrl: tut3,
                heading4: 'Arabic Tutor',
                heading6: 'Ajman',
                atag: 'View Profile',
            },
            {
                imageUrl: tut4,
                heading4: 'Bengali Tutor',
                heading6: 'Dubai',
                atag: 'View Profile',
            },


        ],
        restaurant: [
            {
                imageUrl: res1,
                heading4: 'Verde Beach Dubai',
                heading6: 'Dubai',
                atag: 'View Restaurant',
            },
            {
                imageUrl: res2,
                heading4: 'Zenon',
                heading6: 'Dubai',
                atag: 'View Restaurant',
            },
            {
                imageUrl: res3,
                heading4: 'Lena',
                heading6: 'Order Online',
                atag: 'View Restaurant',
            },
            {
                imageUrl: res4,
                heading4: 'Smoki Moto',
                heading6: 'Dubai',
                atag: 'View Restaurant',
            },


        ],
        onlineShopping: [
            {
                imageUrl: shop1,
                heading4: 'Dubai Mall',
                heading6: 'Dubai',
                atag: 'View Mall',
            },
            {
                imageUrl: shop2,
                heading4: 'Mall of Emirates',
                heading6: 'Dubai',
                atag: 'View Mall',
            },

        ],
        electricians: [
            {
                imageUrl: electric1,
                heading4: 'Abu Dhabi',
                atag: 'Menu',
            },
            {
                imageUrl: electric2,
                heading4: 'Dubai',
                atag: 'Menu',
            }

        ],
        plumber: [
            {
                imageUrl: plum1,
                heading4: 'Dubai',
                atag: 'Menu',
            }
            ,
            {
                imageUrl: plum2,
                heading4: 'Dubai',
                atag: 'Menu',
            },
        ],
        transport: [
            {
                imageUrl: trans1,
                heading4: 'Dubai',
                atag: 'Book Taxi',
            }
            ,
            {
                imageUrl: trans2,
                heading4: 'Dubai',
                atag: 'Book Taxi',
            },
        ]
    };


    useEffect(() => {

        const defaultItems = categories[selectedCategory];

    }, [selectedCategory]);


    const [rating, setRating] = useState(0);



    const handleRatingClick = (value) => {
        setRating(value);
    };
    return (
        <div>
            {/* CAROUSEL JSX CODE */}

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 exploremore_carousel_images" src={image1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 exploremore_carousel_images" src={image2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 exploremore_carousel_images" src={image3} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 exploremore_carousel_images" src={image4} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 exploremore_carousel_images" src={image5} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


            {/* MOST POPULAR CATEGERIOS JSX CODE */}

            <div>
                <h1 style={{ fontSize: "33px", textAlign: "center" }} className='mt-5'>Most Popular Categories</h1>
                <br />
                <div className="categories-container">
                    <div className='container'>
                        <div className='row'>

                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                             <Link to="/restaurent" style={{textDecoration:'none',color:'black'}}>
                                <img className="category-img" src={restaurant} alt="Restaurant" />
                                <h6>Restaurant</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                            <Link to="/beauty" style={{textDecoration:'none',color:'black'}}> 
                                <img className="category-img" src={beauty} alt="Beauty" />
                             <h6>Beauty</h6>
                             </Link>  

                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                             
                                <img className="category-img" src={hotel} alt="Hotel" />
                                <h6>Hotel</h6>

                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={contractor} alt="Contractor" />
                                <h6>Contractor</h6>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                
                                <img className="category-img" src={tutorlogo} alt="Tutors" />
                                <h6>Tutors</h6>

                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={eventplanner} alt="Event Planner" />
                                <h6>Event Planner</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories-container">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={Travels} alt="Tour & Travels" />
                                <h6>Tour & Travels</h6>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                              
                                    <img className="category-img" src={ca} alt="Bank" />
                                    <h6>Bank</h6>
                              
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                
                                    <Link to="/hospitalhome"><img className="category-img" src={hospital} alt="Hospitals" />
                                    </Link>
                                    <h6>Hospitals</h6>
                               
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                             
                                    <img className="category-img" src={atm_card} alt="ATM" />
                                    <h6>ATM</h6>
                                
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={jewellery} alt="Jewellery" />
                                <h6>Jewellery</h6>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={service} alt="Service Center" />
                                <h6>Service Center</h6>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>

                                
                            <Link to="/hpackages">  <img className="category-img" src="https://imgcld.yatra.com/ytimages/image/upload/t_holidays_srplist_desktop_hc/v1543820513/Magnum/Dubai%20Skyline%20Sunset/Dubai_Skyline_Sunset_5quIu6.jpg" alt="packages" /></Link>
                                    <h6>Packages</h6>
                               

                                <Link to="/realestate" style={{textDecoration:'none',color:'black'}}>
                                <img className="category-img" src={realestate} alt="Service Center" />
                                <h6>Realestate</h6>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* EXPLORE DIRECT CATEGERIES JSX CODE */}
<div>
                <h3 className="mpcategories-heading ">Explore Directory Category</h3>
                <div className="mt-5 directory-catergory">
                    <Row className="mt-3" xs={12} md={6} lg={6} style={{ textAlign: "center", width: '100%' }}>
                        <Col>
                            <Button onClick={() => handleCategoryClick('tutor')}>Tutor</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => handleCategoryClick('restaurant')}>Restaurant</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => handleCategoryClick('onlineShopping')}>Shopping</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => handleCategoryClick('electricians')}>Electricians</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => handleCategoryClick('plumber')}>Plumber</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => handleCategoryClick('transport')}>Transport</Button>
                        </Col>
                    </Row>
                    <div >
                        <Row className="mt-5" style={{ width: '100%' }}>
                            {categories[selectedCategory].map((item,index) => (
                                <Col key={index} xs={12} md={6} lg={3} className="mb-3">
                                    <div className='card' style={{height:'500px',width:'360px'}}>
                                        <img src={item.imageUrl} className='card-img-top' style={{height:'300px',marginTop:'-200px'}}></img>
                                        <div className='card-body' style={{marginTop:'300px'}}>
                                            <h4 className='card-title' style={{textAlign:'center'}}>{item.heading4}</h4>
                                            <h6 className="card-text mt-4" style={{ textAlign: "center" }}>{item.heading6}</h6>
                                            <a href="/restaurant" className="btn btn-primary cards_button " style={{ marginLeft: '6px', color:'white',width:'150px' ,backgroundColor:'#40E0D0'}}>{item.atag}</a>
                                        </div>
                                        <div style={{ textAlign: 'center', marginLeft: '0px' }}>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span
                                                    key={star}
                                                    onClick={() => handleRatingClick(star)}
                                                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                            <p style={{ display: 'none' }}>Selected rating: {rating}</p>
                                        </div>
                                    </div>
                                </Col>
                            )) }
                        </Row>
                    </div>
                </div>
            </div>
            {/* HOW IT WORKS JSX CODE */}
            <div className='how-it-works-main mt-5'>
                <div className='how-it-works-title'>
                    <h1>How It Work</h1>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <div className='how-it-works-body mt-3'>
                            <div>
                                <img src={howitworkimg1}></img>
                            </div>
                            <div>
                                <h3>Choose What To Do</h3>
                                <p style={{ color: '#949494' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <div className='how-it-works-body  mt-3'>
                            <div>
                                <img src={howitworkimg2}></img>
                            </div>
                            <div>
                                <h3>Find What You Want</h3>
                                <p style={{ color: '#949494' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <div className='how-it-works-body  mt-3'>
                            <div>
                                <img src={howitworkimg3}></img>
                            </div>
                            <div>
                                <h3>Explore Amazing Places</h3>
                                <p style={{ color: '#949494' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}