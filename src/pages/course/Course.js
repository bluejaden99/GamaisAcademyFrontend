import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const Course = () => {
    return (  
        <div>
            <Navbar />
            <div style={{
                padding: 20
            }}>
                <VideoPlayer />
                <PDFViewer />
            </div>
            <Footer />
        </div>
    );
}

export default Course;