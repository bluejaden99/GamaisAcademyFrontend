import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const Course = () => {
    let { id } = useParams();
    const [course, setCourse] = useState('');

    useEffect(() => {
        
        const url = '/courses/' + id;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setCourse(res.data.course[0]);
            });
    }, []);

    return (  
        <div>
            <div style={{
                padding: 40,
                textAlign: 'left'
            }}>
                <VideoPlayer link={course.video}/>
                <div style={{
                    fontWeight: 'bold'
                }}>
                    {course.judul}
                </div>
                <div>
                    {course.desc}
                </div>
                <div>
                    {course.pengajar}
                </div>
                <PDFViewer link={course.modul}/>
            </div>
        </div>
    );
}

export default Course;