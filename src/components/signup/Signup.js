import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import './Signup.css';
import apiList from '../../services/apiList';
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

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const signupHandler = async (e) => {
    e.preventDefault();
    if (firstName === "") {
      toast.error("Please enter first name");
    } else if (lastName === "") {
      toast.error("Please enter last name");
    } else if (email === "") {
      toast.error("Please enter your email");
    } else if (phoneNumber === "") {
      toast.error("Please enter your mobile number");
    } else if (password === "") {
      toast.error("Please enter your password");
    } else if (confirmPassword === "") {
      toast.error("Please fill confirm password");
    } else {
      try {
        if (password === confirmPassword) {
          const response = await axios.post(
            `${apiList.signup}`,
            {
              firstName,
              lastName,
              email,
              phoneNumber,
              password,
            }
          );
          console.log(response);
          toast.success(response.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setPassword("");
          setConfirmPassword("");
        } else {
          toast.error("Password and Confirm Password mismatching");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
  };

  const googleSignup = () => {
    window.open(`${apiList.googleCallback}`, "_self");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            className="w-100 signup_image"
            src="./signup image.jpg"
            alt="signup"
          />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="signup_heading mt-5">Sign up</h1>
          <p>
            Let's get you all set up so you can access your personal account.
          </p>
          <form onSubmit={signupHandler}>
            <div className=" d-flex justify-content-between">
              <div className=" inputs_style mx-2">
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className=" inputs_style">
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className=" d-flex justify-content-between">
              <div className=" inputs_style mx-2">
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" inputs_style">
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="mt-2">
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
            {/* confirm password */}
            <div className="mt-2">
              <FormControl className=" w-100" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment className='d-flex justify-content-end mx-3'  position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
            </div>
            <div className=" d-flex align-items-center">
              <Checkbox />
              <p className="pt-3">
                I agree to all the <span className="privacy_color">Terms</span>{" "}
                and <span className="privacy_color">Privacy Polices</span>
              </p>
            </div>
            <div className=" w-100">
              <button type="submit" className=" btn signup_btn w-100">
                Create Account
              </button>
            </div>
          </form>
          <div className=" text-center">
            <p>
              Already have an account?
              <Link to="/login" className="login_link">
                Login
              </Link>
            </p>
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <p className="or_login_content">Or Sign up with</p>
          </div>
          <div className=" d-flex justify-content-between pb-5">
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
      </div>
    </div>
  );
};

export default Signup;
