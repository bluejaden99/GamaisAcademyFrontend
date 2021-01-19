import React from 'react';
import logo from '../../assets/img/circle-cropped.png';
import "./LeftSide.css";

function LeftSide() {
  return (
        <div className = "leftSideContainer"
        >
        <br/>
        <br/>
        <br/>
        <br/>
        <img src={logo} alt="Logo"/>
        <div class="background-text">GAMAIS ACADEMY</div>
        <br/>
        </div>
  );
}

export default LeftSide;