import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import RightSide from '../../components/RightSideRegister/RightSideRegister';
import { useAuth } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';


function Register() {
  // Temporary login fo routing purposes,
  // will integrate from Nabilah's login page soon
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

export default Register;