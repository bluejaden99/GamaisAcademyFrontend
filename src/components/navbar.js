import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/img/logo192.png';
import { withStyles } from '@material-ui/core/styles';
import './navbar.css'
import './footer.css'

const NavbarButton = withStyles({
  root: {
    textTransform: 'none',
    fontSize: '16px',
    width : '100px',
    borderRadius : '10px',
    margin : '5px 0px',
    color : "white",
    backgroundColor :"#E3B448",
    '&:hover': {
      backgroundColor: "#E3B448",
      opacity : "90%",
    }
  },
})(Button);

class Navbar extends React.Component {
  render(){
    return(
      <div >
        <AppBar position="static" color="inherit">
          <Toolbar id = "navbarContainer">
            <div id = "rowContainer">
              <IconButton >
                <img href="/" src= {logo} className = "navbarLogo"></img>
              </IconButton>
              <Typography variant="h6" > Gamais Academy</Typography>
            </div>
            <div>
              <NavbarButton href="/login">Login</NavbarButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
  
export default Navbar
