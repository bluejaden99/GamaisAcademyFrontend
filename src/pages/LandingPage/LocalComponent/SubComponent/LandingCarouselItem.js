import React from 'react';
import './LCIStyle.css';

function LCItem(props) {
    console.log(props)
    return (
        <>
            <div id="LCItem">
                <img id="LCIThumbImage"  src={props.imgLink} alt="video-thumbnail"/>
                <br/>
                <div id="LCIDescription">
                    <h4 id="LCITitle">{props.title}</h4>
                    <h5 id="LCISubTitle">{props.subTitle}</h5>
                    <div style={{display: 'flex', justifyContent: 'right'}}>
                        <button className="more-btn">More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LCItem;