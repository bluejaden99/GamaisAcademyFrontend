import React from 'react';
import logo from './../assets/circle-cropped.png';
import "./LeftSide.css";

function LeftSide() {
  return (
        <div style={{
            backgroundColor: '#3A6B35',
            width: '140%',
            height: '120%'
            }}
        >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <img src={logo} alt="Logo"/>
        <div class="background-text">GAMAIS ACADEMY</div>
        </div>
  );
}

export default LeftSide;