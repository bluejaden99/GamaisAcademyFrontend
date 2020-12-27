import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AdminListUser.css'

class AdminListUsers extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      
    }
  }

  
  render() {
    return(
      <div>
        <Navbar/>
        <div className = "bodyContainer">
          {/* <VideoPlayer videoName="PAT_18_11_2020.mp4"/> */}
        {/* <PDFViewer documentName="probstat-book.pdf"/> */}
        </div>
        <Footer/>
      </div>
    );
  }
};


export default AdminListUsers;