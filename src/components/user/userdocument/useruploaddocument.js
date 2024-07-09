import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import TextField from '@mui/material/TextField';
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import login from '../../assets/images/slide4.jpg';
import login from "../../../assets/images/slide4.jpg"
import apiList from '../../../services/apiList';

const UserDocument = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post(apiList.userUploadDocument, { name, email, number, address })
      .then(result => {
        toast.success("Details Added Successfully 😃!", {
          position: "top-center"  
        });
        console.log(result);
        navigate('/'); // navigate to home page after adding the user data
      })
      .catch(err => {
        console.log(err);
        toast.error("Error adding details");
      });
  };

  const googleSignup = () => {
    try {
      window.open("http://localhost:8000/auth/google/callback", "_self");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="login_heading mt-5">Documents</h1>
          <p>Upload your details for Documentation</p>
          <form onSubmit={Submit}>
            <div className="w-100">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br/>
            <div className="w-100">
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br/>
            <div className="w-100">
              <TextField
                fullWidth
                label="Number"
                variant="outlined"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <br/>
            <div className="w-100">
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <br/>
            <div className="w-100">
              <button type="submit" className="btn login_btn w-100">
                Submit Details
              </button>
            </div>
          </form>
          {/* <div className="text-center">
            <p>
              Don't have an account?
              <Link to="/signup" className="signup_link">Sign up</Link>
            </p>
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <p className="or_login_content">Or Sign up with</p>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn social_btn">
              <FaFacebook />
            </button>
            <button className="btn social_btn mx-2" onClick={googleSignup}>
              <FcGoogle />
            </button>
            <button className="btn social_btn">
              <FaApple />
            </button>
          </div> */}
        </div>
        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <img className="w-100" src={login} alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default UserDocument;
