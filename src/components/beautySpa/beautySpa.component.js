import { Typography } from '@mui/material';
import './beautySpa.component.css';
import { IoTimeOutline } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

import beautyImage from '../../assets/images/beautySpa.png';
import hairImage from '../../assets/images/hair.jpg'
import makeupImage from '../../assets/images/makeup.jpg';
import facialImage from '../../assets/images/facial.jpg';

import haircareImage from '../../assets/images/haircare.jpg'
import cosmeticImage from '../../assets/images/cosmeticks.jpg'

import lipImage from '../../assets/images/lipstick.jpg';
import eyeImage from '../../assets/images/eyeliner.jpg';
import spaImage from '../../assets/images/spa.jpg';
import creamImage from '../../assets/images/cream.jpg'
import { Link } from 'react-router-dom';


export function BeautySpaComponent() {
  return (
    <div>
      <div className='back-image d-flex justify-content-center align-items-center'>

        <Typography>
          <Typography style={{ "color": "skyblue" }} className='d-flex justify-content-center align-items-center'
            variant="h5"
            sx={{
              fontFamily: "Oleo Script, cursive",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
            }}
          >
            Welcome To Hantus Spa

          </Typography>
          <Typography className='d-flex justify-content-center align-items-center'
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
            }}
          >
            Beauty & Spa Wellness

          </Typography>
        </Typography>

      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='details row' style={{ "alignItems": "center" }}>
          <div className='col-4 '>
            <IoTimeOutline className='time' /><span style={{ fontWeight: "bold", fontSize: "15px", marginLeft: "10px" }}>Opening Hours</span><br></br>
            <span style={{ marginLeft: "43px", fontSize: "13px", marginTop: "0px", fontWeight: "bold" }} className='mon'>Mon-Sat 10 AM - 5PM</span>
          </div>
          <div className='col-4'>
            <ImAddressBook className='address-icon' />  <span style={{ fontWeight: "bold", fontSize: "15px", marginLeft: "10px" }}>Address</span> <br></br>
            <span style={{ marginLeft: "43px", fontSize: "13px", marginTop: "0px", fontWeight: "bold" }} >Abudabi Estates</span>
          </div>
          <div className='col-4'>
            <IoCall className='call-icon' />  <span style={{ fontWeight: "bold", fontSize: "15px", marginLeft: "10px" }}>Contact</span><br></br>
            <span style={{ marginLeft: "43px", fontSize: "13px", marginTop: "0px", fontWeight: "bold" }} >+12 984356544</span>
          </div>
        </div>
      </div>

      {/* <Typography style={{ "marginLeft": "650px",  "color": "black",marginTop:"40px" }} className='or_login_content'
            variant="h5"
            sx={{
              fontFamily: "Oleo Script, cursive",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
            }}
          >
            Our Services

          </Typography> */}
      <div className="mt-3 d-flex justify-content-center align-items-center">
        <h1 className="login_content">    Our Services  </h1>
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <p style={{fontWeight:"600"}} className='these'>These are the services we providing, these makes us stand apart.</p>
      </div>

      <div className='row sevice-card  '>
        <div className='col-12 col-sm-6 col-md-2 box1'>
          <img src={beautyImage} className='beauty-card1'></img>
        <span className='face-maassage'>Face Massage</span>
          <p> The technique involves stimulating pressure points on the face, neck, and shoulders</p>
          <span className='cost'>$24.99</span>
          <Link to="/facespa" style={{textDecoration:'none',color:'white'}}>  <button className='btn btn-success book-now 'style={{backgroundColor:"green"}} >Book Now</button></Link> 
        </div>
        <div className='col-12 col-sm-6 col-md-2 box2'>
          <img src={hairImage} className='beauty-card2'></img>
          <span className='hair-care'>Hair Care</span>
          <p>Haircare is an overall term for hygiene and cosmetology involving the hair growth</p>
          <span className='cost'>$34.99</span>
      <Link to='/haircare'  style={{textDecoration:'none',color:'white'}}>   <button className='btn btn-success book-now ' style={{backgroundColor:"green"}}>Book Now</button></Link> 
        </div>
        <div className='col-12 col-sm-6 col-md-2 box3'>
          <img src={makeupImage} className='beauty-card3'></img>
          <span className='hair-care'>Make Up</span>
          <p>  Cosmetics are care substances used to enhance the appearance or odor of the human body</p>
          <span className='cost'>$50.99</span>
        <Link to='/makeup'  style={{textDecoration:'none',color:'white'}}>  <button className='btn btn-success book-now ' style={{backgroundColor:"green"}}>Book Now</button></Link>
        </div>
        <div className=' col-12 col-sm-6 col-md-2 box4'>
          <img src={facialImage} className='beauty-card4'></img>
          <span className='hair-care'>Facial Treatments</span>
          <p>A facial is a family of skin care treatments for the face, including steam, exfoliation</p>
          <span className='cost'>$79.09</span>
       <Link to="/faceTreatement"  style={{textDecoration:'none',color:'white'}}>  <button className='btn btn-success book-now ' style={{backgroundColor:"green"}} >Book Now</button></Link> 
        </div>

      </div>
      <div className='down-card'>
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <h1 className="port-folio" style={{ "color": "skyblue" }}>    Portfolio  </h1>

        </div>
        <p className="d-flex justify-content-center align-items-center your" style={{ fontWeight: "bold" }}>
          Your are judge my services by the portfolio we have done</p>
        <div className="d-flex justify-content-center align-items-center">
          <div className='suggesion d-flex justify-content-space-between align-items-center'>
            <span style={{ marginLeft: "15px" }} >
              Hair
            </span>
            <span >
              MakeUp
            </span>
            <span className="" >
              skin
            </span>
            <span className="" >
              Massage
            </span>
            <span style={{ "marginRight": "15px" }}>
              comsmetics
            </span>

          </div>
        </div>


        <div className="mt-3 d-flex justify-content-center align-items-center">
          <h1 className="visit-store">   Visit Our Store </h1>

        </div>
        <div className='row  d-flex justify-content-center align-items-center strore-card'>
          <div className='col-12 col-sm-6 col-md-2'>
            <img src={spaImage} className='spa-image' ></img>
            <span className='spa-name'>Spa</span>
            <span className='price'>$34.99</span>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
           <img src={lipImage} className='lip-image'></img>
           <span className='spa-name'>Lip Sticks</span>
           <span className='price'>$60.99</span>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <img src={eyeImage} className='eye-image'></img>
            <span className='spa-name'>Beauty Items</span>
            <span className='price'>$80.99</span>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
           <img src={cosmeticImage} className='cosmetic-image'></img>
           <span className='spa-name'>Cosmetics</span>
           <span className='price'>$560.99</span>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
          <img src={haircareImage} className='hair-image'></img>
          <span className='spa-name'>Hair Products</span>
          <span className='price'>$20.99</span>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <img src={creamImage} className='creame-image'></img>
            <span className='spa-name'>Creams</span>
            <span className='price'>$70.99</span>
          </div>
        </div>

      </div>










    </div>
  )
}