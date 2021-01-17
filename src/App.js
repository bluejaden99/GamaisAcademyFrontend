import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthContextProvider, useAuth } from './contexts/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import React, { useState } from 'react';
import Login from './pages/Login'

// import VideoPlayer from './components/VideoPlayer';
// import PDFViewer from './components/PDFViewer';

const TempLanding = () => {
  // Temporary Landing Page for routing purposes
  return (
    <div>
      <h1>Temporary Landing Page</h1>
    </div>
  );
}

// const TempLogin = () => {
//   // Temporary login fo routing purposes,
//   // will integrate from Nabilah's login page soon
//   const { login, currentUser } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   const handleLogin = async () => {
//     console.log('loggin in.......');
//     setLoading(true);



//     try {
//       await login('anandayulizar@gmail.com', 'password');
//       history.push('/');
//     } catch {
//       console.log('fail to login');
//     }

//     setLoading(false);
//   }


//   return (
//     <div>
//       {currentUser ?
//         <Redirect to="/" />
//         : <>
//           <h1>Temporary Login Page</h1>
//           <button onClick={handleLogin}>login</button>
//           {loading ? <p>Loading...</p> : ''}
//         </>
//       }
//     </div>
//   )
// }

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <ScrollToTop>
            <Switch>
              <PrivateRoute exact path="/" component={TempLanding} />
              {/* <PrivateRoute exact path="/enrollment" component={Enrollment}/> */}
              {/* <PrivateRoute exact path="/course" component={Course}/> */}
              {/* <PrivateRoute exact path="/profile" component={Profile}/> */}
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/register" component={Register}/> */}
            </Switch>
          </ScrollToTop>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser || JSON.parse(localStorage.getItem('academyUser')) ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

export default App;
