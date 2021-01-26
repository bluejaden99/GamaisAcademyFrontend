import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import AuthAxios from '../../contexts/Axios';
import './Enrollment.css'

function Enrollment() {
  let { id } = useParams();
  const {currentUser } = useAuth();
  const thumbLink = "https://upload.wikimedia.org/wikipedia/commons/e/e2/OrteliusWorldMap1570.jpg";

  const [title, setTitle] = useState('');
  const [teacher, setTeacher] = useState('');
  const [desc, setDesc] = useState('');

  const history = useHistory();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  function alreadyEnroll(course, arrayOfCourses)
  {
      return (arrayOfCourses.indexOf(course) > -1);
  }

  async function handleEnroll() {
    if(currentUser){
      if(alreadyEnroll(`${id}`,currentUser.courses)){
        alert("You already enrolled")
      }
      else{
        try {
          AuthAxios.post(`${backendUrl}/users/enrollment/${id}`)
          .then(res => {
            if (res.status >= 200 || res.status <= 299){
              history.push(`/course/${id}`);
            }
          })
        }
        catch {
          alert("Failed to enroll");
        }
      }
    }
   else {
     alert("You have to login")
     history.push(`/login`);
   }
  }

  // Run ONCE
  useEffect(() => {
    AuthAxios.get(`${backendUrl}/courses/${id}`)
    .then( res => {
      getTitle(res.data.data.course[0].judul);
      getTeacher(res.data.data.course[0].pengajar);
      getDescription(res.data.data.course[0].desc);
      })
    .catch(e => alert("Error"))
  }, [])

  const getTitle = (rawTitle) => {
    const maxChar = 25;
    if (rawTitle.length > maxChar){
        setTitle(rawTitle.substring(0, maxChar-9) + " ... " + rawTitle.substring(rawTitle.length-4, rawTitle.length))
    }
    else setTitle(rawTitle)
  }

  const getDescription = (rawDesc) => {
    const maxChar = 300;
    if (rawDesc.length > maxChar){
        setDesc(rawDesc.substring(0, maxChar-3) + "...")
    }
    else setDesc(rawDesc)
  }

  const getTeacher = (rawTeacher) => {
    const maxChar = 30;
    if (rawTeacher.length > maxChar){
        setTeacher(rawTeacher.substring(0, maxChar-3) + "...")
    }
    else setTeacher(rawTeacher)
  }


  return (
    <div className = "container-enrollment">
      <img className = "container-thumbnail" src={thumbLink} alt=""></img>
      <div className = "container-detail">
        <h1>{title}</h1>
        <p>{teacher}</p>
        {desc}
        <div id="ButtonHolder" className="container-button" onClick = {handleEnroll}>
          <a className="btn more-btn">Enroll</a>
        </div>
      </div>
    </div>
  )
}

export default Enrollment;