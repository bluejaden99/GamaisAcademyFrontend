import React from 'react'
import { IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from '../assets/img/logo192.png';
import './footer.css'
class Footer extends React.Component {
  render(){
    return(
      <div className = "footerContainer">
        <div className = "footerRightPart">
          <div id = "rowContainer" className="footerLogoTitleConteiner">
            <div>
            <img src= {logo} className = "footerLogo"></img>
            </div>
            <div className = "footerTitle">Gamais Academy</div>
          </div>
          <div className = "footerMark">© 2020 Gamais ITB & HMIF ITB</div>
        </div>
        <div>
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
    )
  }
}
  
export default Footer
