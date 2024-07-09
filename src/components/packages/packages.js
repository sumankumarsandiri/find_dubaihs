import React from 'react'
import './packages.css';
import { Link } from 'react-router-dom';

function Packages() {
    return (

        <div className='container-fluid f'>

            <div className='jackpact-conatianers'>
                <Link to="/hpackages"><h2 class="" style={{ color: "green", cursor: "pointer" }}>Jackpot Deals on Top Selling Packages</h2></Link>
                <p className="font16 lineHeight19 fw400" style={{ color: "red", cursor: "pointer" }}>
                    Save extra with our exclusive deals!
                </p>

                <div className='row'>

                    <div className='  col-sm-6 col-md-3 col-lg-2 kk'>
                        <Link to=""><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/DTCM_The%20Address%20JBR_Night.jpg?crop=134:207&downsize=134:207" className='bread'></img></Link>
                        <span className='he'>Dubai 4N</span>
                    </div>
                    
                    <div className='  col-sm-6 col-md-3 col-lg-2 kk'>
                        <Link to=""><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZF.jpg?crop=134:207&downsize=134:207" className='bread'></img></Link>
                        <span className='he'>Goa 4N</span>
                    </div>
                    <div className='  col-sm-6 col-md-3 col-lg-2 kk'>
                        <Link to=""><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Verdant%20tea%20plantations%20of%20Munnar.jpg?crop=134:207&downsize=134:207" className='bread'></img></Link>
                        <span className='he'>Kerala 4N</span>
                    </div>
                    <div className='  col-sm-6 col-md-3 col-lg-2 kk'>
                        <Link to=""><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1404/Pura-Ulun-Danu-temple.jpg?crop=134:207&downsize=134:207" className='bread'></img></Link>
                        <span className='he'>Bali 6N</span>
                    </div>

                    <div className='  col-sm-6 col-md-3 col-lg-2 kk'>
                        <Link to=""><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3052/Beautiful%20tropical%20beach%20in%20Thailand.jpg?crop=134:207&downsize=134:207" className='bread'></img></Link>
                        <span className='he'>Thailand 5N</span>
                    </div>



                    <div className=' col-sm-6 col-md-3 col-lg-2 kk'>
                        <Link to=""><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4916/kuta.jpg?crop=156:227&downsize=156:227" className='bread'></img></Link>
                        <span className='he'>Vietnam 6N</span>
                    </div>

                </div> &nbsp; &nbsp; 


                 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Europe-Holiday-1200x320-19Mar.jpg?crop=1200:320&ampdownsize=1200:320&quot" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/HoneyPackages_1200x320_23Jan.jpg?crop=1200:320&ampdownsize=1200:320&quot" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/SwissPeak-1200x320-20Mar.jpg?crop=1200:320&ampdownsize=1200:320&quot" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>&nbsp;&nbsp;


                 <div className='International-conatianer'>
                    <h2 class="" style={{ color: "green", cursor: "pointer" }}>International Destinations!</h2>
                    <div className='row'>
                        <div className='clos col-12 col-sm-6 col-md-3 col-lg-2 kk'>
                            <Link to='/dpackages'> <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/DTCM_The%20Address%20JBR_Night.jpg?crop=134:207&downsize=134:207" className='bread'></img></Link>
                            <div class="itemCard__ftr"><div>
                                <span class="he">Dubai</span>
                                <p class="p1">Starting at ₹49,700 Per person</p></div></div>

                        </div>


                        <div className='clos col-12 col-sm-6 col-md-3 col-lg-2 kk'>
                            <Link to="/tpackages"><img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3198/shutterstock_176887880.jpg?crop=156:227&downsize=156:227" className='bread'></img></Link>
                            <span className='he'>Thailand</span><p class="p1">Starting at ₹12,700 Per person</p>
                        </div>
                        <div className='clos col-12 col-sm-6 col-md-3 col-lg-2 kk'>
                            <a href='#'>   <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1971/PetronasTwinTowersAndKLCCPark.jpg?crop=156:227&downsize=156:227" className='bread'></img></a>
                            <span className='he'>Malaysia</span><p class="p1">Starting at ₹16,000 Per person</p>
                        </div>


                        <div className='clos col-12 col-sm-6 col-md-3 col-lg-2 kk'>
                            <a href='#'>   <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2514/singapore1.jpg?crop=156:227&downsize=156:227" className='bread'></img></a>
                            <span className='he'>Singapore</span><p class="p1">Starting at ₹17,000 Per person</p>
                        </div>
                        <div className='clos col-12 col-sm-6 col-md-3 col-lg-2 kk'>
                            <a href='#'>   <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/61/Opera-Bar.jpg?crop=370:240?crop=156:227&downsize=156:227" className='bread'></img></a>
                            <span className='he'>Australia</span><p class="p1">Starting at ₹10,000 Per person</p>
                        </div>
                        <div className='clos col-12 col-sm-6 col-md-3 col-lg-2 kk'>
                            <a href='#'>   <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2547/cape-town.jpg?crop=156:227&downsize=156:227" className='bread'></img></a>
                            <span className='he'>South Africa</span><p class="p1">Starting at ₹11,000 Per person</p>
                        </div>
                    </div>
                </div>

            </div>
         </div>

    )
}

export default Packages

