import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from '../../assets/img/logo192.png';
import { withStyles } from '@material-ui/core/styles';
import './Navbar.css'
import '../Footer/Footer.css'
import { useState } from 'react';

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
  console.log(isMobile);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

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
              <NavbarButton href="/login">Login</NavbarButton>
            </div>
          }



        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={mobileOpen} onClose={handleDrawerToggle}>
        <p>Mobile Navbar Content</p>
      </Drawer>
    </div>
  )
}

export default Navbar
