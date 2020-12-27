import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AdminListUser from '../src/pages/AdminListUser/AdminListUser';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthContextProvider } from './contexts/AuthContext';

// import VideoPlayer from './components/VideoPlayer';
// import PDFViewer from './components/PDFViewer';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={LandingPage}/> */}
            {/* <Route exact path="/login" component={Login}/> */}
            {/* <Route exact path="/register" component={Register}/> */}
            {/* <Route exact path="/enrollment" component={Enrollment}/> */}
            {/* <Route exact path="/course" component={Course}/> */}
            {/* <Route exact path="/profile" component={Profile}/> */}
            <Route exact path="" component={AdminListUser} />
            {/* <Route exact path="/admin/course" component={AdminListCourse}/> */}
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
