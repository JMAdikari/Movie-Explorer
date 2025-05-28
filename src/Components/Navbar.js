import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2c2c2c' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie Explorer
        </Typography>
      <SearchBar />
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
        <Button color="inherit" component={Link} to="/Moviedetails">MovieDetails</Button>
      
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
