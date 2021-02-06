import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import AuthAxios from '../../contexts/Axios';
import './Course.css'

const Course = () => {
    let { id } = useParams();
    const [course, setCourse] = useState('');
    const [linkVideo, setVideo] = useState([]);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    function getVideos(link){
        console.log(link)
        var video = link.replaceAll(/\s/g,'')
        video = video.split(",")
        setVideo(link[0])
    }

    useEffect(() => {
        AuthAxios.get(`${backendUrl}/courses/${id}`)
        .then( res => {
            setCourse(res.data.data.course[0]);
            setVideo(res.data.data.course[0].video)
        })
        .catch(e =>alert("error"))
    }, [])

    return (  
        <div>
            <div style={{
                padding: 40,
                textAlign: 'left'
            }}>
                {linkVideo.map((video, idx)=>(
                    <div>
                        <VideoPlayer link={video}/>
                        <h6>Video bagian {idx+1}</h6>
                        <br/>
                    </div>
                ))}
                <div className = "title-course" style={{
                    fontWeight: 'bold'
                }}>
                    {course.judul}
                </div>
                <div className="desc-course">
                    {course.desc}
                </div>
                <div className="teacher">Pengajar : {course.pengajar}
                </div>
                {/* <PDFViewer link={course.modul}/> */}
            </div>
        </div>
    );
}

export default Course;