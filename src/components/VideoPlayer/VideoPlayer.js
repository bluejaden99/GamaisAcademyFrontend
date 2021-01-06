import React, { useEffect, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoName }) => {
    const [videoUrl, setVideoUrl] = useState('');
    useEffect(() => {
        setVideoUrl('https://drive.google.com/file/d/1IvOgWfcu6O0SADs4J9UJaZtmMu0St57-/preview');
        // const path = 'video/' + videoName;
        // let imageRef = firebase.storage().ref(path);
        // imageRef
        //     .getDownloadURL()
        //     .then((url) => {
        //         console.log(url);
        //         setVideoUrl(url);
        //     })
        //     .catch((e) => console.log('getting downloadURL of image error => ', e));
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