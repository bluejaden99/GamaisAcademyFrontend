import React from 'react'
import { div, IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import VideocamIcon from '@material-ui/icons/Videocam';
import MediaQuery from 'react-responsive';
import logo from '../assets/img/logo192.png';
import './footer.css'

const useStyles =  theme => ({
  footerTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#FA8223',
    paddingTop:'15px'
  },
  footerInfo:{
    fontSize:"14px"
  },
  copyRight:{
    textAlign:"center", 
    padding:"50px 0px 0px 0px", 
    fontSize:"12px"
  },
  footerAppeal:{
    fontSize: '1.9rem',
    fontWeight: '900',
    padding : '0px 8.2vw',
  },
  footerIconContainer:{
    justifyContent: 'space-between', 
    display:'flex', 
    margin :'30px 0px 0px 0px'
  },
  footerIcon:{
    fontSize:'35px',
    padding :'0px',
    color : 'white'
  },
})

class Footer extends React.Component {
  render(){
    return(
      <div>
          <div className = "footerContainer">
              <div item xs={3} className = "footerRightPart">
               <div id = "rowContainer">
                 <div>
                 <img src= {logo} className = "footerLogo"></img>
                 </div>
                 <div className = "footerTitle">Gamais Academy</div>
                </div>
               <div className = "footerMark">© 2020 Gamais ITB & HMIF ITB</div>
              </div>
              <div item xs={3} >
                <div >
                  FIND US ON SOCIAL MEDIA
                </div>
                <div>
                  <IconButton href="mailto:borobudurdevelopment@gmail.com"><EmailIcon id = "footerIcon" /></IconButton >
                  <IconButton href="https://wa.me/6282246894576"><WhatsAppIcon id = "footerIcon"/></IconButton >
                  <IconButton href="http://instagram.com/_u/konsul_co"><InstagramIcon id = "footerIcon"/></IconButton >                  
                </div>
              </div>
            </div>
      </div>
    )
  }
}
  
export default Footer
