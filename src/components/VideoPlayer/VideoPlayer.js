import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ link }) => {

    return (  
        <div>
            <iframe className="video" src={link}
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"></iframe>
            {/* <QierPlayer srcOrigin={videoUrl} /> */}
        </div>
    );
}
 
export default VideoPlayer;