
// export function VendorLogin(){
//     return(
//         <div>

//         </div>
//     )
// }

import React, { useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { toast } from "react-toastify";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Cookies from "js-cookie";
import login from '../../../assets/images/Login FD.png'
import apiList from '../../../services/apiList';
import './vendorLogin.css'

const VendorLogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please fill Email field");
    } else if (password === "") {
      toast.error("please enter password field");
    } else {
      try {
        const response = await axios.post(apiList.VendorLogin, {
          email,
          password,
        });
        if (response.data.success === true) {
          // Cookies.set("findDubai_jwt", response.data.token, {expires : 30 / (24*60)});
          Cookies.set("findDubai_Vendor_Login", response.data.token, {expires : 30 / (24*60)});
          navigate("/user/GetDocument");
        }
        console.log(response);
        toast.success(response.data.message);
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
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
        <div className=" col-12 col-md-6">
          <h1 className="login_heading mt-5">Login</h1>
          <p>Login to access your account</p>
          <form onSubmit={loginHandler}>
            <div className=" w-100">
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="mt-2 w-100">
              <FormControl className=" w-100" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment className='d-flex justify-content-end mx-3'  position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <div className=" d-flex align-items-center">
                <Checkbox />
                <p className="pt-3">Remember me</p>
              </div>
              <div className="">
                <Link to="/forgotpassword" className="login_link">
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className=" w-100">
              <button type="submit" className=" btn login_btn w-100">
                Login
              </button>
            </div>
          </form>
          <div className=" text-center">
            <p>
              Don't have an account?
              <Link to="/vendor/register" className="signup_link">
                Sign up
              </Link>
            </p>
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <p className="or_login_content">Or Sign up with</p>
          </div>
          <div className=" d-flex justify-content-between">
            <button className=" btn social_btn">
              <FaFacebook />
            </button>
            <button className=" btn social_btn mx-2" onClick={googleSignup}>
              <FcGoogle />
            </button>
            <button className=" btn social_btn">
              <FaApple />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <img className="w-100" src={login}
        //   "./login image.jpg"
           alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
