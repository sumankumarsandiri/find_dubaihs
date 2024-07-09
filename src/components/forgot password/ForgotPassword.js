import React, { useState } from 'react'
import axios from "axios";
import apiList from '../../services/apiList';
import TextField from '@mui/material/TextField';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaLessThan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    let navigate = useNavigate();

    const submitHandler = async (e) => {
      e.preventDefault();
      if (email === "") {
        toast.error("Please fill Email field");
      } else {
        try {
          const response = await axios.post(`${apiList.sendOtp}`, {
            email
          });
          console.log(response);
            toast.success(response.data.message);
            if (response.data.success === true) {
              navigate("/verifyotp", { state: email });
            }
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
        }
      }
      };

  return (
    <div className="container">
      <div className="row">
              <div className="col-12 col-md-5">
              <div className=" mt-5">
                      <Link to="/login" className="login_link">
                          <span className='px-2'><FaLessThan/></span>
                  Back to login
                </Link>
              </div>
          <h1 className="signup_heading mt-3">Forgot your password?</h1>
          <p>
            Don't worry, happens to all of us. Enter your email below to recover your password
          </p>
          <form onSubmit={submitHandler}>
            <div className=" w-100">
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className=" w-100 mt-3">
              <button type='submit' className=" btn signup_btn w-100">
                Submit
              </button>
            </div>
          </form>
          <div className=" text-center">
            <p>Don't have an account? <Link to="/login" className='login_link'>Login</Link></p>
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <p className="or_login_content">Or Sign up with</p>
          </div>
          <div className=" d-flex justify-content-between">
            <button className=" btn social_btn">
              <FaFacebook />
            </button>
            <button className=" btn social_btn mx-2">
              <FcGoogle />
            </button>
            <button className=" btn social_btn">
              <FaApple />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-7 mt-3 mt-md-0">
          <img className="w-100" src="./forgotpassword image (2).jpg" alt="signup" />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
