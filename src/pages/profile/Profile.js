import React from 'react';
import axios from 'axios';
import CoursesSection from '../../components/courses_section/CoursesSection'

const axiosCall = axios.create();

axiosCall.interceptors.request.use(function (config) {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDAwNDY0OTdhZTI2MTUyNTg1Yzg2YiIsImlhdCI6MTYxMDcyNzEyNiwiZXhwIjoxNjE4NTAzMTI2fQ.7bMj2ov9vfre4rcBpvAtq9BXyTNO4TLP4Y2yDru1Dbo';
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    return config;
})

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {},
      userCourses: []
    }
  }

  componentDidMount() {
    // axiosCall.get("http://localhost:5000/courses", {
    //     "email": "email@gmail.com",
    //     "password": "passwordaja"
    // }).then(res => {
    //     console.log(res.data);
    // })
    // .catch(() => console.log("error"));

    axiosCall.get("http://localhost:5000/users/me")
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
