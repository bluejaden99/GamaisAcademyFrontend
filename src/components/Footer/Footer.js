import React from 'react'
import { IconButton } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from '../../assets/img/logo192.png';
import './Footer.css'

class Footer extends React.Component {
  render() {
    let footerDiffer = false
    if(window.location.href.includes('/register') || window.location.href.includes('/login') || window.location.href.includes('/forget') || window.location.href.includes('/reset')){
      footerDiffer = true
    }
    return (
      <div className={footerDiffer ? "footerContainerDiffer" : "footerContainer"}>
        <div className="footerRightPart">
          <div id="rowContainer" className="footerLogoTitleConteiner">
            <div>
              <img src={logo} className="footerLogo"></img>
            </div>
            <div className="footerTitle">Gamais Academy</div>
          </div>
          <div className="footerMark">© 2020 Gamais ITB & HMIF ITB</div>
          <a className="footerLink" href="http://www.freepik.com">Designed by vectorjuice / Freepik</a>
        </div>
        <div>
          <div >
            FIND US ON SOCIAL MEDIA
          </div>
          <div className="socmed-container">
            <IconButton href="http://twitter.com/gamaisitb"><TwitterIcon id="footerIcon" /></IconButton >
            <IconButton href="https://www.instagram.com/gamaisitb/"><InstagramIcon id="footerIcon" /></IconButton >
            <IconButton href="https://www.youtube.com/channel/UCBLrtiwP8vmvp36TI5YUCVg"><YouTubeIcon id="footerIcon" /></IconButton >
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
