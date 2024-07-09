import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaLessThan } from "react-icons/fa6";
import './NewPassword.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import apiList from '../../services/apiList';

const NewPassword = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // console.log(location);
  const formHandler = async (e) => {
    e.preventDefault();
    if (password === "") {
      toast.error("Please enter your password");
    } else if (confirmPassword === "") {
      toast.error("Please fill confirm password");
    } else {
      try {
        if (password === confirmPassword) {
          const response = await axios.post(
            `${apiList.setNewPassword}`,
            {
              email: location.state,
              password
            }
          );
          // console.log(response)
          toast.success(response.data.message);
          navigate("/passwordset", { state: location.state });
        } else {
          toast.error("Password and Confirm Password mismatching")
        }
      } catch (error) {
        console.log(error);
      //   toast.error(error.response.data.message);
      }
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
          <h1 className="signup_heading mt-2">Set a password</h1>
          <p>
            Your previous password has been reset. Please set a new password for
            your account.
          </p>
          <form onSubmit={formHandler}>
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
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
            </div>
            <br />
            <div className=" w-100">
              <button type="submit" className=" btn signup_btn w-100">
                Set Password
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0 h-100">
          <img
            className="w-100 password_image"
            src="./setnewpassword image.jpg"
            alt="signup"
          />
        </div>
      </div>
    </div>
  );
}

export default NewPassword
