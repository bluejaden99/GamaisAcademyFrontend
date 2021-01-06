import React from 'react';
import CoursesSection from '../../components/courses_section/CoursesSection'

let dummyProfile = {
    avatarUrl: "https://assets.rbl.ms/4140599/origin.jpg",
    name: "Naufal Arfananda Naufal Arfananda Naufal Arfananda",
    email: "akun@gmail.com"
}

let dummyCourses = [
    {
        image: "/logo512.png",
        title: "test1",
        description: "test1 descdsadasdas",
        courseUrl: "https://www.google.com/"
    },
    {
        image: "/logo512.png",
        title: "test2",
        description: "test2 dsadasdas",
        courseUrl: "#"
    },
    {
        image: "/logo512.png",
        title: "test3",
        description: "test3 descdsadasdas",
        courseUrl: "#"
    },
    {
        image: "/logo512.png",
        title: "test4",
        description: "test4 dsadasdas",
        courseUrl: "#"
    },
    {
        image: "/logo512.png",
        title: "test1",
        description: "test1 descdsadasdas",
        courseUrl: "https://www.google.com/"
    },
    {
        image: "/logo512.png",
        title: "test2",
        description: "test2 dsadasdas",
        courseUrl: "#"
    },
    {
        image: "/logo512.png",
        title: "test3",
        description: "test3 descdsadasdas",
        courseUrl: "#"
    },
    {
        image: "/logo512.png",
        title: "test4",
        description: "test4 dsadasdas",
        courseUrl: "#"
    }
];

const Profile = () => {
    return (
    <div>
        <CoursesSection profile={ dummyProfile } courses={ dummyCourses }/>
    </div>);
}

export default Profile;