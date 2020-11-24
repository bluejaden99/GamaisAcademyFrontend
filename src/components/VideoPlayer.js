import React, { useEffect, useState } from 'react';
import { firebase } from '../config/env';
import QierPlayer from 'qier-player';

const VideoPlayer = ({ videoName }) => {
    const [videoUrl, setVideoUrl] = useState('');
    useEffect(() => {
        const path = 'video/' + videoName;
        let imageRef = firebase.storage().ref('video/PAT_18_11_2020.mp4');
        imageRef
            .getDownloadURL()
            .then((url) => {
                console.log(url);
                setVideoUrl(url);
            })
            .catch((e) => console.log('getting downloadURL of image error => ', e));
    }, []);
    return (  
        <div>
            <QierPlayer srcOrigin={videoUrl} />
        </div>
    );
}
 
export default VideoPlayer;