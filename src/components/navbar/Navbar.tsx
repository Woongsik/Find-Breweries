import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgb(157 134 186)', padding: '10px' }}>
        <Typography variant="h4" sx={{ my: 1, ml:1, mr: 1 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Breweries</Link>
        </Typography>
        <Divider />
        <List sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ListItem disablePadding>
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Home"  />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}><ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Contact"  />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
    </Box>
    </header>
  )
}
