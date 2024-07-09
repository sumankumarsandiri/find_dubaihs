import React, { useState } from 'react';
import apiList from '../../services/apiList';
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaLessThan } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';
import './VerifyCode.css';

const VerifyCode = () => {
  let navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const location = useLocation();
  console.log(location);

  const submitOtp = async (e) => {
    e.preventDefault();
    if (otp === "") {
      toast.error("please enter Otp to continue");
    } else {
      try {
        const response = await axios.post(
          `${apiList.verifyOtp}`,
          {
            otp,
            email: location.state,
          }
        );
        // console.log(response)
        toast.success(response.data.message);
        navigate("/createpassword", { state: location.state });
        setOtp("");
      } catch (error) {
        console.log(error);
        //   toast.error(error.response.data.message);
      }
    }
  };

  const resendBtn = async () => {
    try {
      const response = await axios.post(`${apiList.sendOtp}`, {
        email: location.state,
      });
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className=" mt-5">
            <Link to="/login" className="forgot_link">
              <span className="px-2">
                <FaLessThan />
              </span>
              Back to login
            </Link>
          </div>
          <h1 className="signup_heading mt-2">Verify code</h1>
          <p>An authentication code has been sent to your email</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className=" w-100">
              <TextField
                fullWidth
                label="Enter Code"
                variant="outlined"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="">
              <p>
                Didn't receive a code?{" "}
                <button onClick={resendBtn} className="resend_btn">
                  Resend
                </button>
              </p>
            </div>
            <div className=" w-100">
              <button onClick={submitOtp} className=" btn signup_btn w-100">
                Verify
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <img className="w-100" src="./verifycode image.jpg" alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
