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
                padding: 40,
                textAlign: 'left'
            }}>
                <VideoPlayer />
                <div style={{
                    fontWeight: 'bold'
                }}>
                    Judul course
                </div>
                <div>
                    Incididunt esse consectetur pariatur exercitation labore ad sit ad in veniam. Non officia veniam proident minim.
                </div>
                <div>
                    Nama Pengajar
                </div>
                <PDFViewer />
            </div>
            <Footer />
        </div>
    );
}

export default Course;