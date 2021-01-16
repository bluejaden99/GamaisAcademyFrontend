import React from 'react';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import {Row, Col} from 'react-bootstrap';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import { useAuth } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';


function Login() {
  // Temporary login fo routing purposes,
  // will integrate from Nabilah's login page soon
  const { login, currentUser } = useAuth();

  return (
    <div>
      {currentUser ?
        <Redirect to="/" />
        : <>
        <Row className="landing">
         <Col ><LeftSide /></Col>
         <Col ><RightSide /></Col>
       </Row>
        </>
      }
    </div>
  )
}

export default Login;