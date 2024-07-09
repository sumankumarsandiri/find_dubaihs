import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './AdminWelcomePage.css'; 

const AdminWelcomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registervendors'); 
  };

  return (
    <Container className="admin-welcome-container">
      <Box className="Admin-content-box">
        <Typography variant="h3" sx={{fontFamily: "Oleo Script, cursive"}} className="Admin-welcome-text">
          Welcome Admin!
        </Typography>
        <Typography variant="h6" className="Admin-sub-text">
          Register vendors to expand your business reach.
        </Typography>
        <Button
          variant="contained"
          onClick={handleRegisterClick}
          className="regi-button"
        >
          Add a Vendor
        </Button>
      </Box>
    </Container>
  );
};

export default AdminWelcomePage;
