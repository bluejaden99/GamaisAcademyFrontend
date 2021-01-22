import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import './Enrollment.css'

function Enrollment() {
  let { id } = useParams();
  const { login, currentUser } = useAuth();
  const thumbLink = "https://upload.wikimedia.org/wikipedia/commons/e/e2/OrteliusWorldMap1570.jpg";

  const [title, setTitle] = useState('');
  const [teacher, setTeacher] = useState('');
  const [desc, setDesc] = useState('');

  async function handleEnroll(event) {
    // setLoading(true)
    // try {
    //   await login(email, password);
    //   history.push('/');
    // } catch {
    //   console.log('fail to login');
    //   setSuccess(false)
    // }
    // setLoading(false)
  }

  // Run ONCE
  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
    .then( res => {
      getTitle(res.data.data.course[0].judul);
      getTeacher(res.data.data.course[0].pengajar);
      getDescription(res.data.data.course[0].desc);
      })
    .catch(e => console.log(e))
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
          <a href="/" className="btn more-btn">Enroll</a>
        </div>
      </div>
    </div>
  )
}

export default Enrollment;