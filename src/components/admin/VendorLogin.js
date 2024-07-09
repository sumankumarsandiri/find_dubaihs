import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';
import apiList from '../../services/apiList';

const VendorLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiList.LoginVendor, formData);
      alert(response.data.message);
      // Optionally redirect to a dashboard or another page upon successful login
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in. Please check your credentials.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: 2, sm: 4 },
        
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'grey' ,paddingTop:20 }}>
        Vendor Login
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: 400, 
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="dense" 
              size="small"
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
           margin="dense" 
              size="small"
            required
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ marginBottom: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default VendorLogin;
