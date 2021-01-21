import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthContextProvider, useAuth } from './contexts/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import React, { useState } from 'react';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage/LandingPage';
import Register from './pages/Register/Register'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              {/* <PrivateRoute exact path="/enrollment" component={Enrollment}/> */}
              {/* <PrivateRoute exact path="/course" component={Course}/> */}
              {/* <PrivateRoute exact path="/profile" component={Profile}/> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register}/>
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