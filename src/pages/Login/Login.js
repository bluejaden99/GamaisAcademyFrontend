import React from 'react';
import './Login.css';
// import "bootstrap/dist/css/bootstrap.css";
import {Row, Col} from 'react-bootstrap';
import LeftSide from '../../components/LeftSide/LeftSide';
import RightSide from '../../components/RightSideLogin/RightSideLogin';
import { useAuth } from '../../contexts/AuthContext';
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
        <div className="landing">
         <div ><LeftSide /></div>
         <div ><RightSide /></div>
       </div>
        </>
      }
    </div>
  )
}

export default Login;