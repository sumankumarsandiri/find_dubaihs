import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Divider } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, PersonAdd as RegisterIcon, Login as LoginIcon, People as VendorsIcon, Home } from '@mui/icons-material';
import './Collapse.css'; // Import the CSS file

const Collapse = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box className="collapse-drawer-container">
      <Box className="collapse-close-button-container">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List className="collapse-drawer-list">
        <ListItem button component={Link} to="/admin" onClick={handleDrawerToggle}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Admin Home" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/registervendors" onClick={handleDrawerToggle}>
          <ListItemIcon>
            <RegisterIcon />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/loginvendors" onClick={handleDrawerToggle}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/vendorslist" onClick={handleDrawerToggle}>
          <ListItemIcon>
            <VendorsIcon />
          </ListItemIcon>
          <ListItemText primary="Vendors" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        onClick={handleDrawerToggle}
        
        sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300 }}
      
      >
        <MenuIcon className="collapse-menu-icon" />
      </IconButton>
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Collapse;
