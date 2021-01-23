import React from 'react';
import AuthAxios from '../../contexts/Axios';
import CoursesSection from '../../components/courses_section/CoursesSection'

const backendUrl = process.env.REACT_APP_BACKEND_URL;
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {},
      userCourses: []
    }
  }

  componentDidMount() {
    AuthAxios.get(`${backendUrl}/users/me`)
        .then(res => {
            let tempProfile = {};
            tempProfile.avatarUrl = res.data.data.user.photo;
            tempProfile.name = res.data.data.user.nama;
            tempProfile.email = res.data.data.user.email;
            this.setState({userProfile: tempProfile});
            this.setState({userCourses: res.data.data.user.courses});
        })
        .catch(() => console.log("error"));
  }

  render() {
    return (
    <div>
        <CoursesSection profile={ this.state.userProfile } courses={ this.state.userCourses }/>
    </div>
  );
  }
}

export default Profile;
