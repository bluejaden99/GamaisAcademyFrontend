import React from 'react'
import { IconButton } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
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
            <IconButton href="http://twitter.com/gamaisitb"><TwitterIcon id = "footerIcon"/></IconButton > 
            <IconButton href="https://www.instagram.com/gamaisitb/"><InstagramIcon id = "footerIcon"/></IconButton >
            <IconButton href="https://www.youtube.com/channel/UCBLrtiwP8vmvp36TI5YUCVg"><YouTubeIcon id = "footerIcon"/></IconButton >                  
          </div>
        </div>
      </div>
    )
  }
}
  
export default Footer
