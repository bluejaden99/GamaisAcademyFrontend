import React, { useEffect, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ link }) => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        // const linkVideo = link;
        const linkVideo = 'https://drive.google.com/file/d/1IvOgWfcu6O0SADs4J9UJaZtmMu0St57-/preview';
        setVideoUrl(linkVideo);
    }, []);

    return (  
        <div>
            <iframe className="video" src={videoUrl}
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