
import Navbar from '../common/Navbar/Navbar'


import { Link } from "react-router-dom";
// test
import React, { useEffect, useState } from "react";
import apiList from '../services/apiList';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide2 from "../assets/images/slide2.png";
import "../App.css";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import dubaiListings from "./landingdata";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "../assets/images/pizz-img.jpg"; // default image
import slide2a from "../assets/images/nightlife-img.jpg";
import slide3 from "../assets/images/shopping-img.jpg"; // example image for Ajman
import slide4 from "../assets/images/beauty-img.jpg"; // example image for Burj AI Arab
import slide5 from "../assets/images/atlantis-img.jpg"; // example image for Dubai Creek
import slide6 from "../assets/images/atlantis-img.jpg"; // example image for Bur Dubai
import {
  Container,
  Box,
  Typography,
  TextField,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

import atlantisimg from "../assets/images/atlantis-img.jpg";
import palacedubaiimg from "../assets/images/palacedubai-img.jpg";
import haytimg from "../assets/images/hyat-img.jpg";
import inkhotel from "../assets/images/inkhotel-img.jpg";
import tajmahal from '../assets/images/Tajmhal-img.jpg';

import { Telephone, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';
import {
  RestaurantOutlined,
  AddHomeWorkOutlined,
  LuggageOutlined,
  ApartmentOutlined,
  ExploreOutlined,
} from "@mui/icons-material";
import {  useNavigate } from "react-router-dom";
import banner from "../assets/images/Header.png";

import dubai1 from "../assets/images/dubai2.jpg";
import dubai2 from "../assets/images/dubai6.avif";
import dubai3 from "../assets/images/dubai7.avif";
import {
  CurrencyDollar,
  MapFill,
  PhoneFill,

} from "react-bootstrap-icons";

const categories = [
  {
    icon: (
      <RestaurantOutlined
        sx={{ fontSize: 40, color: "#00C3FF", backgroundColor: "white" }}
      />
    ),
    
    label: "Restaurants",
    description: "Italian, Chinese, Mexican & many more",
  },
  {
    
    icon: (
      <AddHomeWorkOutlined
        sx={{ fontSize: 40, color: "#00C3FF", backgroundColor: "white" }}
      />
    ),

    label: "Hospitals",
    description: "Pharmacy, Labs & more",
  },
  {
    icon: (
      <LuggageOutlined
        sx={{ fontSize: 40, color: "#00C3FF", backgroundColor: "white" }}
      />
    ),
    label: "Travel",
    description: "Flights, Trains, Buses & more",
  },
  {
    icon: (
      <ApartmentOutlined
        sx={{ fontSize: 40, color: "#00C3FF", backgroundColor: "white" }}
      />
    ),
    label: "Hotels",
    description: "From B&B to all inclusive & more",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#40E0D0", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, background: "#40E0D0", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrowA(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: '#40E0D0', borderRadius: '50%', width: '50px', height: '50px', padding: "15px", color: 'white' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowA(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: '#40E0D0', borderRadius: '50%', width: '50px', height: '50px', padding: "15px", color: 'white' }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  let navigate = useNavigate();
  const [showMore] = useState(6);
  const [hideSplash, setHideSplash] = useState(true);
  const [contentDisplay, setContentDisplay] = useState(true);
  const settingsA = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrowA />,
    prevArrow: <SamplePrevArrowA />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow small />,
          prevArrow: <SamplePrevArrow small />
        }
      }
    ]
  };

  const regions = [
    { title: 'Eat and Drunk', listings: 'Ecperince bubai flavour', img: slide1 },
    { title: 'Night life', listings: 'Enjoy your stay', img: slide2 },
    { title: 'Shopping', listings: 'Gifts and Souvenirs', img: slide3 },
    { title: 'Endulge', listings: 'Beauty Shops', img: slide4 },
    { title: 'Dubai Creek', listings: '35+ listings', img: slide5 },
    { title: 'Bur Dubai', listings: '60+ listings', img: slide6 }
  ];
  const displaySplash1 = () => {
    return (
      <div>
        <img src="./splash 1.png" alt="splash1" className="splash1_image" />
      </div>
    );
  };
  const displaySplash2 = () => {
    return (
      <div>
        <img src="./splash 2.png" alt="splash1" className="splash1_image" />
      </div>
    );
  };


  setTimeout(() => {
    setHideSplash(false);
    setTimeout(() => {

        setHideSplash(false)
        setTimeout(() => {
            setContentDisplay(false)
        },3000)
    }, 2000)})
    
    const getUser = async () => {
        try {
            const response = await axios.get(`${apiList.loginSuccess}`, {withCredentials:true})
            console.log("response", response.data)
            if (response.data.success === true) {
                Cookies.set("user_jwt", response.data.token);
            }
        } catch (error) {
            console.log(error);
        }

    }
  

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {contentDisplay ? (
        <div>{hideSplash ? displaySplash1() : displaySplash2()}</div>
      ) : (
        <div >
          <Box
           
            sx={{
              position: "relative",
              minHeight: "100vh",
              display: "grid",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "auto",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              },
            }}
           
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                padding: { xs: 2, md: 4 },
                borderRadius: 2,
                width: { xs: "90%", md: "72%" },
                color: "white",
                display: "grid",
                gap: 2,
              }}
            >
              <Box sx={{ textAlign: "left", padding: { xs: 1, md: 2 } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Oleo Script, cursive",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  Find your <span style={{ color: "#00C3FF" }}>Local</span>{" "}
                  needs
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Oleo Script, cursive",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  Let's uncover the best{" "}
                  <span style={{ color: "#00C3FF" }}>places</span> to stay,
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Oleo Script, cursive",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  eat, shop, or <span style={{ color: "#00C3FF" }}>visit</span>
                  ..!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr auto" },
                  gap: 2,
                  alignItems: "center",
                  paddingRight: { xs: 0, md: 5 },
                  marginBottom: 6,
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="What you'd like to find?"
                  margin="dense"
                  fullWidth
                  size="small"
                  InputProps={{
                    sx: {
                      backgroundColor: "white",
                      borderRadius: { xs: 5, md: 1 },
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      height: 40,
                      border: {
                        xs: "none",
                        md: "1px solid rgba(0, 0, 0, 0.23)",
                      },
                      "&:hover": {
                        borderColor: "#00C3FF",
                        borderWidth: 2,
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none", // Remove border for mobile view
                      },
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  placeholder="Search your locality"
                  margin="dense"
                  fullWidth
                  size="small"
                  InputProps={{
                    sx: {
                      backgroundColor: "white",
                      borderRadius: { xs: 5, md: 1 },
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      height: 40,
                      border: {
                        xs: "none",
                        md: "1px solid rgba(0, 0, 0, 0.23)",
                      },
                      "&:hover": {
                        borderColor: "#00C3FF",
                        borderWidth: 2,
                      },
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocationOnIcon
                          sx={{
                            fontSize: { xs: "0.9rem", md: "1.2rem" },
                            color: "#00C3FF",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none", // Remove border for mobile view
                      },
                    },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      height: 40,
                      backgroundColor: "#00C3FF",
                      borderRadius: { xs: 5, md: 1 },
                      color: "whitesmoke",

                      padding: "0 1rem",
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      "&:hover": {
                        backgroundColor: "#47dce1",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SearchIcon />
                    <span style={{ fontSize: 16, marginLeft: 4 }}>Search</span>
                  </IconButton>
                </Box>
              </Box>
              <Grid container justifyContent="space-between" spacing={1}>
                {categories.map((category, index) => (
                  <Grid item key={index} xs={6} sm={4} md={2}>
                    <Paper
                      sx={{
                        padding: (theme) => theme.spacing(2, 0.5),
                        borderRadius: 2,
                        cursor: "pointer",
                        textAlign: "center",
                        width: "100%",
                        height: { xs: 120, sm: 140, md: 150 },
                        color: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        "&:hover": {
                          backgroundColor: "white",
                          borderColor: "#00C3FF",
                          borderWidth: 1,
                          color: "black",
                          borderStyle: "solid",
                        },
                      }}
                    >
                      {category.icon}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: "bold",
                          margin: { xs: 0.5, md: 1 },
                          fontSize: { xs: "0.8rem", md: "1rem" },
                        }}
                      >
                        {category.label}
                      </Typography>
                      {category.description && (
                        <Typography
                          variant="body2"
                          sx={{ fontSize: { xs: "0.6rem", md: "0.8rem" } }}
                        >
                          {category.description}
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Paper
                    sx={{
                      padding: 0,
                      textAlign: "center",
                      alignContent: "center",
                      cursor: "pointer",
                      width: 100,
                      height: 100,
                      color: "#00C3FF",
                      background: "transparent",
                    }}
                  >
                    
                    <ExploreOutlined sx={{ fontSize: 40 }} />
                    <Link to="/explore-more"> 
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "0.8rem",
                      }}
                    >
                     
                      
                  Explore More
                    </Typography>
                    </Link> 
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={2}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Paper
                    sx={{
                      padding: 0,
                      textAlign: "center",
                      alignContent: "center",
                      cursor: "pointer",
                      width: 150,
                      height: 150,
                      color: "#00C3FF",
                      background: "transparent",
                    }}
                  >
                    <ExploreOutlined sx={{ fontSize: 40 }} />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "1rem",
                      }}
                    >
                      Explore More
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <div className="explore_region container">
            <h1 className="explore_region_title">
              <span style={{ color: "#40E0D0" }}>Explore</span> Top Regions
            </h1>
            <p className="explore_region_subtitle">
              Search through Dubai's best city centers and find what you need in
              your vicinity.
            </p>
            <div className="">
              <br></br>
              <Slider {...settings} className="explore_region_slider">
               
                  <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <div className="slide1 ">
                     
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Abu Dhabi
                      </h3>
                      <p style={{ color: "white", textAlign: "center" }}>
                        50+ listing
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <div className="slide3 mx-3 ">
                     
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Ajman
                      </h3>
                      <p style={{ color: "white", textAlign: "center" }}>
                        25+ listing
                      </p>
                    </div>
                  </div>

                <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                  <div className="slide4 mx-3 ">
                   
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Burj AI Arab
                    </h3>
                    <p style={{ color: "white", textAlign: "center" }}>
                      40+ listing
                    </p>
                  </div>
                </div>
             
                  <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <div className="slide5 mx-3 ">
                      
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Dubai Creek
                      </h3>
                      <p style={{ color: "white", textAlign: "center" }}>
                        35+ listing
                      </p>
                    </div>
                  </div>
               
                  <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                      <div className="slide6 mx-3 ">
                     
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Bur Dubai{" "}
                      </h3>
                      <p style={{ color: "white", textAlign: "center" }}>
                        60+ listing
                      </p>
                      </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                      <div className="slide6 mx-3 ">
                      
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Bur Dubai{" "}
                      </h3>
                      <p style={{ color: "white", textAlign: "center" }}>
                        60+ listing
                      </p>
                      </div>
                  </div>
               
              </Slider>
              <div className="explore_region_background_theme"></div>
            </div>
          </div>

          <div className="container latestlisting-container mt-2">
            <h2 className="latestlistingheading_title">
              Latest <span>Listing</span>
            </h2>
            <p className="latestp1">See what's hot and trending in Duba!</p>
            <div className="latestrow-grid">
              {dubaiListings.slice(0, showMore).map((place, index) => (
                <div className="latest-cards" key={index}>
                  <div className="cardxx listing_package_cards">
                    <div className="likeimg">
                      <img
                        src={place.imageSrc}
                        className="img-fluid"
                        alt={place.name}
                      />

                      <div className="like">{place.like}</div>
                    </div>

                    <div className="listingsubcard">
                      <div className="rate">
                        <h6 className="listingrateh6">{place.name}</h6>
                        <p className="ratep">
                          <span className="ratep1 "> {place.price}</span>
                          <h5 className="ratet1"> AED</h5>
                          <span className="ratep2">{place.total}</span>
                          <h5 className="ratet2">AED</h5>
                        </p>
                      </div>
                      <p className="listingdes">{place.description}</p>
                      <div className="latestcard-details">
                        <div className="latestcard-location">
                          <IoLocationOutline className="latestshicon" />
                          <span>{place.location}</span>
                        </div>
                        <div className="latestcard-phone">
                          <IoCall className="latestshicon" />
                          <span>{place.mobileNo}</span>
                        </div>
                      </div>
                      <div className="latestlisting-category">
                        <p className="latesticon-card">
                          <span className="listingcategory_icon">
                            {place.categoryicon}{" "}
                          </span>
                          <h3>{place.categoryName}</h3>
                        </p>
                        <div className="listing-rating">{place.rating}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>

            <div className='container'>
              <div>
                <h1 style={{ textAlign: 'center' }}> <span style={{ color: 'rgb(10, 226, 241)' }}>Tastefull restarents</span> <span>to visit</span></h1>
                <h6 style={{ textAlign: 'center', fontSize: '13px', fontStyle: 'italic' }}> it is good and we have all the recepies anf chinese russuan is althroughy things rhej</h6>
              </div>
              <br />
              <div className='row '>
                <div className='col-12 col-md-6 col-lg-4 '>
                  <div className=' mt-4 card-section '>
                  <img src={dubai3} alt='Location' className='card-img-top' />
                    <div className="card-body-main">
                      <div className='row'>
                        <div className='col-6 ml-2'>
                          <span style={{ fontSize: '12px' }}> 11:30 to 12:30PM</span>
                          <h6> SHIMAS </h6>
                        </div>
                      </div>
                      <div className='row  '>
                        <div className='col-6 '>
                          &nbsp;  <Telephone style={{ color: 'red' }}></Telephone> 904-839-34
                        </div>
                        <div className='col-6 travel-location'>
                          <GeoAltFill style={{ color: 'red' }}></GeoAltFill>near mg nagar
                        </div>
                      </div><hr />
                      <p className=' travel-para mb-2'>img elements must have an alt prop, either with meaningful text, or an empty string to the  </p>
                      <hr className='mt-2' />
                      <span className='mb-2 ml-2' style={{ color: 'red' }}> <CurrencyDollar></CurrencyDollar>  from 50 rupes</span>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 '>
                  <div className=' mt-4 card-section '>
                  <img src={dubai3} alt='Location' className='card-img-top' />
                    <div className="card-body-main">
                      <div className='row'>
                        <div className='col-6 ml-2'>
                          <span style={{ fontSize: '12px' }}> 11:30 to 12:30PM</span>
                          <h6> SHIMAS </h6>
                        </div>

                      </div>
                      <div className='row  '>
                        <div className='col-6 '>
                          &nbsp;  <Telephone style={{ color: 'red' }}></Telephone> 904-839-34
                        </div>
                        <div className='col-6 travel-location'>
                          <GeoAltFill style={{ color: 'red' }}></GeoAltFill>near mg nagar
                        </div>
                      </div><hr />
                      <p className=' travel-para mb-2'>img elements must have an alt prop, either with meaningful text, or an empty string to the  </p>
                      <hr className='mt-2' />
                      <span className='mb-3 ml-2' style={{ color: 'red' }}> <CurrencyDollar></CurrencyDollar>  from 50 rupes</span>
                    </div>
                  </div>
                </div>
                
                <div className='col-12 col-md-6 col-lg-4 '>
                  <div className=' mt-4 card-section '>
                  <img src={dubai3} alt='Location' className='card-img-top' />
                    <div className="card-body-main">
                      <div className='row'>
                        <div className='col-6 ml-2'>
                          <span style={{ fontSize: '12px' }}> 11:30 to 12:30PM</span>
                          <h6> SHIMAS </h6>
                        </div>

                      </div>
                      <div className='row  '>
                        <div className='col-6 '>
                          &nbsp;  <Telephone style={{ color: 'red' }}></Telephone> 904-839-34
                        </div>
                        <div className='col-6 travel-location'>
                          <GeoAltFill style={{ color: 'red' }}></GeoAltFill>near mg nagar
                        </div>
                      </div><hr />
                      <p className=' travel-para mb-2'>img elements must have an alt prop, either with meaningful text, or an empty string to the  </p>
                      <hr className='mt-2' />
                      <span className='mb-3 ml-2' style={{ color: 'red' }}> <CurrencyDollar></CurrencyDollar>  from 50 rupes</span>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <br />
            <br />
            <div className='travel-main'>
              <div className='travel-sub'>
                <h2>Best Way</h2>
                <h1><span style={{ color: 'white' }}>Find</span> your <span style={{ color: 'white' }}>need</span> in the Best Way</h1>
                <h6>discover exciting things, <span style={{ color: 'white' }}>looking for great</span></h6>
              </div>
              <div className='row travel-path'>
                <div className='col-1'></div>

                <div className='col-3 travel-place'>
                  <button>1</button><br />
                  This is a beautiful place to visit and explore and have fun
                </div>
                <div className='col-3 mt-4 travel-place'>
                  <button>2</button><br />
                  This is a beautiful place to visit and explore and have fun
                </div>
                <div className='col-3 travel-place'>
                  <button>3</button><br />
                  This is a beautiful place to visit and explore and have fun
                </div>

                <div className='col-1'></div>
              </div>
            </div>
          </div>
          <div className='Greatplaces-main-container'>
            <div>
              <h1 className='Greatplaces-main-heading'> <span className='greatpalce-color'> Great places</span> to stay</h1>

              <p className='greatplaces-main-heading-2'>Hotels and resorts for you to feel like a real New Yorker</p>
            </div>


            <div className="containerr ">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className='greatplace-box-container'>
                            <img src={atlantisimg} className='greatplace-box-container-image' alt="Atlantis The Royal Dubai" />
                            <div>
                                <h3 className='Great-place-card-tiltle-1'> Atlantis The Royal Dubai</h3>
                                <h6 className='Great-place-card-tiltle-2'> < TelephoneFill className='telephone-icon' /> +555-40-220-6672</h6>
                                <p className='Great-place-card-tiltle-3'> <GeoAltFill className='location-icon' /> Atlantis resort - Palm Jumeirah</p>
                                <h6>
                                    Atlantis the royal is the latest landmark to shine the spotlight on Dubai.
                                    A few months after its 2023 launch, the resort.
                                </h6>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className='greatplace-box-container'>
                    <img src={palacedubaiimg} className='greatplace-box-container-palace-image' alt="Palace Dubai Greek Harbour" />
                    <div>
                      <h3 className='Great-place-card1-tiltle-1'>Palace Dubai Greek Harbour</h3>
                      <h6 className='Great-place-card1-tiltle-2'> < TelephoneFill className='telephone-icon' /> +555-40-220-6672</h6>
                      <p className='Great-place-card1-tiltle-3'> <GeoAltFill className='location-icon' /> Dubai Festival City</p>
                      <h6>
                        Atlantis the royal is the latest landmark to shine the spotlight on Dubai.
                        A few months after its 2023 launch, the resort.
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className='greatplace-box-container'>
                    <img src={haytimg} className='greatplace-box-container-hyat-image' alt="Hyatt Centric Jumeirah" />
                    <div>
                      <h3 className='Great-place-card2-tiltle-1'>Hyatt Centric Jumeirah</h3>
                      <h6 className='Great-place-card2-tiltle-2'> < TelephoneFill className='telephone-icon' /> +555-40-220-6672</h6>
                      <p className='Great-place-card2-tiltle-3'> <GeoAltFill className='location-icon' /> La Mer-Beach - Dubai</p>
                      <h6>
                        Atlantis the royal is the latest landmark to shine the spotlight on Dubai.
                        A few months after its 2023 launch, the resort.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className='greatplace-box-container'>
                    <img src={inkhotel} className='greatplace-box-container-ink-image' alt="INK Hotel" />
                    <div>
                      <h3 className='Great-place-card3-tiltle-1'>INK Hotel</h3>
                      <h6 className='Great-place-card3-tiltle-2'> < TelephoneFill className='telephone-icon' /> +555-40-220-6672</h6>
                      <p className='Great-place-card3-tiltle-3'> <GeoAltFill className='location-icon' /> Building 20, Al Jadaf Waterfront</p>
                      <h6>
                        Atlantis the royal is the latest landmark to shine the spotlight on Dubai.
                        A few months after its 2023 launch, the resort.
                      </h6>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
               
              </div>
            
           

            <div className="container-fluid mt-5">
            <div className="row">

                <div className="col-12 col-md-4">
                  <img className="tajmahal-img" src={tajmahal} alt="Taj Mahal" />
                </div>
                <div className="col-12 col-md-8">
                  <div className="special-container">
                    <h3 className="special-heading-1">Sign up to get</h3>
                    <h1 className="special-heading-2">Special Offer Every Day</h1>

                  </div>
                </div>
              </div>
              
            </div>

            <div>
              <h1 className='things_title'><span style={{ color: '#40E0D0' }}> Things </span>to do</h1>
              <p className='things_subtitle'>Great suggestions on what to do and where to go!</p>
              <div className='hyderabad_restaurent'>
                <Slider {...settingsA} className='explore_region_slider'>
                  {regions.map((region, index) => (
                    <div key={index} className={`thingtodo-box-${index + 1}`}>
                      <div className={`slide${index + 1} card`}>
                        {region.img && <img src={region.img} alt={region.title} className='slide-img' />}
                        <h3 className='slide-title'>{region.title}</h3>
                        <p className='slide-subtitle'>{region.listings}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <br></br>
              <br></br>
            </div>


            <div className="hello-container">
              <h5 >WHAT THEY SAY</h5>
              <h1>Our Testimonials</h1>
              <div className="card-container">
                <div className="cards-1">
                  <div className="profile-circle">
                    <div className="inner-circle"></div> {/* Circle inside profile circle */}
                  </div>
                  {/* <h3>Card 1 Title</h3> */}
                  <p>Find Dubai is my go-to resource whenever</p>
                  <p>I'm searching for local businesses in Dubai.</p>
                  <p>It's easy to navigate and the filters help me</p>
                  <p>narrow down my search quickly.</p>
                  <p><b>Nivin Paul, Businessman</b></p>
                </div>
                <div className="cards-1">
                  <div className="profile-circle"></div>
                  {/* <h3>Card 2 Title</h3> */}
                  <p>Browsing through the categories on Find</p>
                  <p>Dubai is a fun way to find new places to try. I</p>
                  <p>recently discovered a fantastic hidden gem of </p>
                  <p>a coffee shop thanks to your</p>
                  <p><b>Suchit Tiwari, Customer</b></p>
                </div>
              </div>
            </div>
          </div>
        
      )}
    </div>
  );
};

export default Home;

