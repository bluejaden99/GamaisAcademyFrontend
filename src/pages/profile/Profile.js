import React from 'react';
import CoursesSection from '../../components/courses_section/CoursesSection'

let dummyProfile = {
    avatarUrl: "https://assets.rbl.ms/4140599/origin.jpg",
    name: "Naufal Arfananda",
    email: "akun@gmail.com"
}

let dummyCourses = [
    {
        image: "/logo512.png",
        title: "test1",
        description: "test1 descdsadasdas"
    },
    {
        image: "/logo512.png",
        title: "test2",
        description: "test2 dsadasdas"
    },
    {
        image: "/logo512.png",
        title: "test3",
        description: "test3 descdsadasdas"
    },
    {
        image: "/logo512.png",
        title: "test4",
        description: "test4 dsadasdas"
    }
];

const Profile = () => {
    return (
    <div>
        <CoursesSection profile={ dummyProfile } courses={ dummyCourses }/>
    </div>);
}

export default Profile;