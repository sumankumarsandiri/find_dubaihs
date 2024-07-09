import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, TextField, Button, Typography, InputAdornment, IconButton, Autocomplete } from '@mui/material';
import { AccountCircle, Email, Phone, Lock, LocationOn, Business, Category, Visibility, VisibilityOff } from '@mui/icons-material';
import signupp from '../../assets/images/signupp.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import './VendorForm.css'; 
import apiList from '../../services/apiList';

const VendorForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [categories, setCategories] = useState([]);
  const [serviceNames, setServiceNames] = useState([]);
  const [formData, setFormData] = useState({
    serviceName: '',
    category: '',
    vendorName: '',
    email: '',
    mobileNumber: '',
    password: '',
    location: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(apiList.categories);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event, value) => {
    setFormData({ ...formData, category: value });
    const fetchServiceNames = async () => {
      try {
        const response = await axios.get(apiList.serviceNames(value));
        setServiceNames(response.data);
      } catch (error) {
        console.error('Error fetching service names:', error);
      }
    };

    fetchServiceNames();
  };

  const validate = () => {
    let tempErrors = { ...errors };
    tempErrors.category = formData.category ? '' : 'Category is required';
    tempErrors.serviceName = formData.serviceName ? '' : 'Service name is required';
    tempErrors.vendorName = formData.vendorName ? '' : 'Vendor name is required';
    tempErrors.email = formData.email ? '' : 'Email is required';
    tempErrors.email = formData.email && validator.isEmail(formData.email) ? '' : 'Email is not valid';
    tempErrors.mobileNumber = formData.mobileNumber ? '' : 'Mobile number is required';
    tempErrors.mobileNumber = formData.mobileNumber && /\d{10}/.test(formData.mobileNumber) ? '' : 'Mobile number is not valid';
    tempErrors.password = formData.password ? '' : 'Password is required';
    tempErrors.location = formData.location ? '' : 'Location is required';

    setErrors(tempErrors);

    return Object.values(tempErrors).every(x => x === '');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    validate();
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post(apiList.AddVendor, formData);
        toast.success('Vendor registered successfully', { position: 'top-center'});
        setFormData({
          serviceName: '',
          category: '',
          vendorName: '',
          email: '',
          mobileNumber: '',
          password: '',
          location: ''
        });
      } catch (error) {
        console.error(error);
        toast.error('Error registering vendor', { position: 'top-right' });
      }
    } else {
      toast.error('Please fill in all required fields correctly.', { position: 'bottom-right' });
    }
  };

  return (
    <Container  sx={{ display: 'flex',  flexDirection: { xs: 'column', md: 'row' } }} className="vendor-container">
      <ToastContainer />
      <Box
         className="vendor-image-box"
         sx={{ backgroundImage: `url(${signupp})` }}
      />
       <Box className="vendor-form-box">
        <Typography variant="h4" gutterBottom sx={{ fontSize:{xs:'1.5rem', md: '2.5rem'}, marginTop:{xs:'2rem'},marginBottom:6,}} className="vendor-title">
          Vendor Registration
        </Typography>
        <form onSubmit={handleSubmit} className="vendor-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                freeSolo
                options={categories.map((option) => option)}
                value={formData.category}
                onInputChange={(event, newInputValue) => {
                  handleCategoryChange(event, newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="category"
                    label="Category"
                    fullWidth
                    margin="dense"
                    size="small"
                    error={!!errors.category && touched.category}
                    helperText={touched.category && errors.category}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Category />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                freeSolo
                options={serviceNames.map((option) => option)}
                value={formData.serviceName}
                onInputChange={(event, newInputValue) => {
                  setFormData({ ...formData, serviceName: newInputValue });
                }}
                onBlur={handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="serviceName"
                    label="Service Name"
                    fullWidth
                    margin="dense"
                    size="small"
                    error={!!errors.serviceName && touched.serviceName}
                    helperText={touched.serviceName && errors.serviceName}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                name="vendorName" 
                label="Vendor Name" 
                value={formData.vendorName} 
                onChange={handleChange} 
                onBlur={handleBlur}
                fullWidth 
                margin="dense" 
                size="small" 
                error={!!errors.vendorName && touched.vendorName}
                helperText={touched.vendorName && errors.vendorName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                name="email" 
                label="Email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                onBlur={handleBlur}
                fullWidth 
                margin="dense" 
                size="small" 
                error={!!errors.email && touched.email}
                helperText={touched.email && errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                name="mobileNumber" 
                label="Mobile Number" 
                value={formData.mobileNumber} 
                onChange={handleChange} 
                onBlur={handleBlur}
                fullWidth 
                margin="dense" 
                size="small" 
                error={!!errors.mobileNumber && touched.mobileNumber}
                helperText={touched.mobileNumber && errors.mobileNumber}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                margin="dense"
                size="small"
                error={!!errors.password && touched.password}
                helperText={touched.password && errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                name="location" 
                label="Location" 
                value={formData.location} 
                onChange={handleChange} 
                onBlur={handleBlur}
                fullWidth 
                margin="dense" 
                size="small" 
                error={!!errors.location && touched.location}
                helperText={touched.location && errors.location}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{  marginTop: 2 }}
            className="vendor-submit-button"
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default VendorForm;
