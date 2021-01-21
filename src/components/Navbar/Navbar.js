import React from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  Button,
  IconButton,
  useMediaQuery
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/img/logo192.png';
import { withStyles } from '@material-ui/core/styles';
import './Navbar.css';
import '../Footer/Footer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const NavbarButton = withStyles({
  root: {
    textTransform: 'none',
    fontSize: '16px',
    width: '100px',
    borderRadius: '10px',
    margin: '5px 0px',
    color: "white",
    backgroundColor: "#E3B448",
    '&:hover': {
      backgroundColor: "#E3B448",
      opacity: "90%",
    }
  },
})(Button);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:767px)');
  const { currentUser, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navbarItems = (
    <div className="navbar-items">
      {currentUser ?
        <>
          <Link className="navbar-link">Courses</Link>
          <Link className="navbar-link">Profile</Link>
          <NavbarButton onClick={logout}>Logout</NavbarButton>
        </>
        :
        <NavbarButton href="/login">Login</NavbarButton>
      }

    </div>
  );

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar id="navbarContainer">
          <div id="rowContainer">
            <IconButton >
              <img href="/" src={logo} className="navbarLogo"></img>
            </IconButton>
            <Typography variant="h6" > Gamais Academy</Typography>
          </div>

          {isMobile ?
            <IconButton
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            :
            <div>
              {navbarItems}
            </div>
          }



        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={mobileOpen} onClose={handleDrawerToggle}>
        {navbarItems}
      </Drawer>
    </div>
  )
}

export default Navbar
