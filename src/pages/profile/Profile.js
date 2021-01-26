import React from 'react';
import AuthAxios from '../../contexts/Axios';
import './Profile.css';
import CoursesSection from '../../components/courses_section/CoursesSection';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {},
      userCourses: []
    }
  }

  getDataCourse(id){
    let { userCourses } = this.state;
    AuthAxios.get(`${backendUrl}/courses/${id}`)
    .then(res => {
      this.setState({userCourses: [...userCourses, res.data.data.course[0]]})
    })
  }

  componentDidMount() {
    AuthAxios.get(`${backendUrl}/users/me`)
      .then(res => {
          let tempProfile = {};
          tempProfile.avatarUrl = res.data.data.user.photo;
          tempProfile.name = res.data.data.user.nama;
          tempProfile.email = res.data.data.user.email;
          this.setState({userProfile: tempProfile});
          res.data.data.user.courses.map((course) => {
            this.getDataCourse(course);
          })
      })
      .catch(() => alert("error"));
  }

  render() {
    return (
      <div className= "container-profile">
          <CoursesSection profile={ this.state.userProfile } courses={ this.state.userCourses }/>
      </div>
  );
  }
}

export default Profile;
