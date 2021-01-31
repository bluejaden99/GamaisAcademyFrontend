
import React from 'react';
// import './Login.css';
import LeftSide from '../../components/LeftSide/LeftSide';
import RightSide from '../../components/RightSideForget/RightSideForget';
import { useAuth } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

function ForgetPassword() {
  const { currentUser } = useAuth();

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

export default ForgetPassword;